import { randomBytes } from "node:crypto";
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const PORT = Number(process.env.PORT || 4173);
const HOST = "127.0.0.1";
const API_KEY = process.env.DEEPL_API_KEY;
const API_PLAN = process.env.DEEPL_API_PLAN || "free";
const TARGET_LANG = process.env.DEEPL_TARGET_LANG || "en-US";
const MAX_BODY_BYTES = 20_000;
const configuredSiteUrl = process.env.SITE_URL?.trim();
let SITE_URL = "";
const GOOGLE_SITE_VERIFICATION = process.env.GOOGLE_SITE_VERIFICATION?.trim();
const PUBLIC_DIR = fileURLToPath(new URL("./public/", import.meta.url));
const PUBLIC_FILES = new Map([
  ["/", { file: "index.html", contentType: "text/html; charset=utf-8" }],
  ["/privacy", { file: "privacy.html", contentType: "text/html; charset=utf-8" }],
  ["/css/styles.css", { file: "css/styles.css", contentType: "text/css; charset=utf-8" }],
  ["/js/app.js", { file: "js/app.js", contentType: "text/javascript; charset=utf-8" }]
]);
const API_ORIGIN = API_PLAN === "pro"
  ? "https://api.deepl.com"
  : "https://api-free.deepl.com";

if (!Number.isInteger(PORT) || PORT < 1 || PORT > 65535) {
  throw new Error("PORT must be an integer between 1 and 65535.");
}
if (!["free", "pro"].includes(API_PLAN)) {
  throw new Error('DEEPL_API_PLAN must be "free" or "pro".');
}
if (!["en-US", "en-GB"].includes(TARGET_LANG)) {
  throw new Error('DEEPL_TARGET_LANG must be "en-US" or "en-GB".');
}
if (configuredSiteUrl) {
  let parsedSiteUrl;
  try {
    parsedSiteUrl = new URL(configuredSiteUrl);
  } catch {
    throw new Error("SITE_URL must be a valid HTTPS origin, for example https://example.com.");
  }
  if (parsedSiteUrl.protocol !== "https:" || parsedSiteUrl.username || parsedSiteUrl.password ||
      parsedSiteUrl.pathname !== "/" || parsedSiteUrl.search || parsedSiteUrl.hash) {
    throw new Error("SITE_URL must be the public HTTPS origin only, without a path, credentials, query, or fragment.");
  }
  SITE_URL = parsedSiteUrl.origin;
}
if (GOOGLE_SITE_VERIFICATION && !/^[A-Za-z0-9_-]+$/.test(GOOGLE_SITE_VERIFICATION)) {
  throw new Error("GOOGLE_SITE_VERIFICATION must contain only the token provided by Google.");
}

function sendJson(response, statusCode, body) {
  response.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": "no-store",
    "X-Content-Type-Options": "nosniff"
  });
  response.end(JSON.stringify(body));
}

function requestOriginIsLocal(request) {
  const expectedHost = `${HOST}:${PORT}`;
  if (request.headers.host !== expectedHost) return false;
  const origin = request.headers.origin;
  return !origin || origin === `http://${expectedHost}`;
}

async function readJsonBody(request) {
  const chunks = [];
  let bytes = 0;
  for await (const chunk of request) {
    bytes += chunk.length;
    if (bytes > MAX_BODY_BYTES) {
      const error = new Error("Request body is too large.");
      error.statusCode = 413;
      throw error;
    }
    chunks.push(chunk);
  }
  try {
    return JSON.parse(Buffer.concat(chunks).toString("utf8"));
  } catch {
    const error = new Error("Request body must be valid JSON.");
    error.statusCode = 400;
    throw error;
  }
}

async function correctText(request, response) {
  if (!requestOriginIsLocal(request)) {
    sendJson(response, 403, { message: "Request origin is not allowed." });
    return;
  }
  if (request.headers["content-type"]?.split(";")[0].trim() !== "application/json") {
    sendJson(response, 415, { message: "Content-Type must be application/json." });
    return;
  }
  if (!API_KEY) {
    sendJson(response, 503, {
      code: "missing_api_key",
      message: "Configure DEEPL_API_KEY to enable sentence correction."
    });
    return;
  }

  let body;
  try {
    body = await readJsonBody(request);
  } catch (error) {
    sendJson(response, error.statusCode || 400, { message: error.message });
    return;
  }
  if (!body || typeof body !== "object" || typeof body.text !== "string" || !body.text.trim()) {
    sendJson(response, 400, { message: "Enter a sentence to correct." });
    return;
  }
  if (body.text.length > 5000) {
    sendJson(response, 413, { message: "The sentence must be 5,000 characters or fewer." });
    return;
  }

  let upstream;
  try {
    upstream = await fetch(`${API_ORIGIN}/v2/write/correct`, {
      method: "POST",
      headers: {
        "Authorization": `DeepL-Auth-Key ${API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ text: [body.text], target_lang: TARGET_LANG }),
      signal: AbortSignal.timeout(30_000)
    });
  } catch (error) {
    console.error("DeepL request failed before receiving a response.", error.message);
    sendJson(response, 502, {
      code: "deepl_unavailable",
      message: "Could not connect to DeepL. Check your internet connection and try again."
    });
    return;
  }

  const traceId = upstream.headers.get("x-trace-id");
  if (traceId) console.info("DeepL request completed.", { traceId });
  if (!upstream.ok) {
    console.error("DeepL returned an error.", {
      status: upstream.status,
      traceId
    });
    const messages = {
      401: "DeepL rejected the API key. Check DEEPL_API_KEY.",
      403: "This DeepL API key does not have permission to correct text.",
      429: "DeepL is receiving too many requests. Wait a moment and try again.",
      456: "The DeepL API quota has been exhausted."
    };
    const codes = {
      401: "invalid_api_key",
      403: "permission_denied",
      429: "rate_limited",
      456: "quota_exceeded"
    };
    sendJson(response, 502, {
      code: codes[upstream.status] || "deepl_error",
      message: messages[upstream.status] || "DeepL could not correct the sentence. Try again later.",
      traceId
    });
    return;
  }

  let result;
  try {
    result = await upstream.json();
  } catch {
    console.error("DeepL returned a response that was not valid JSON.", { traceId });
    sendJson(response, 502, { message: "DeepL returned an unreadable response.", traceId });
    return;
  }
  const correctedText = result.improvements?.[0]?.text;
  if (typeof correctedText !== "string") {
    console.error("DeepL response did not contain corrected text.", { traceId });
    sendJson(response, 502, { message: "DeepL did not return a corrected sentence.", traceId });
    return;
  }
  sendJson(response, 200, { correctedText, traceId });
}

const server = createServer(async (request, response) => {
  const url = new URL(request.url || "/", `http://${HOST}:${PORT}`);
  if (url.pathname === "/index.html" && request.method === "GET") {
    response.writeHead(301, { Location: "/", "Cache-Control": "no-store" });
    response.end();
    return;
  }
  if (url.pathname === "/robots.txt" && request.method === "GET") {
    const lines = ["User-agent: *", "Allow: /", "Disallow: /api/"];
    if (SITE_URL) lines.push(`Sitemap: ${SITE_URL}/sitemap.xml`);
    response.writeHead(200, {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
      "X-Content-Type-Options": "nosniff"
    });
    response.end(`${lines.join("\n")}\n`);
    return;
  }
  if (url.pathname === "/sitemap.xml" && request.method === "GET") {
    if (!SITE_URL) {
      response.writeHead(503, {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-store",
        "X-Content-Type-Options": "nosniff"
      });
      response.end("Set SITE_URL to your real public HTTPS origin to generate the sitemap.\n");
      return;
    }
    response.writeHead(200, {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
      "X-Content-Type-Options": "nosniff"
    });
    response.end(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${SITE_URL}/</loc></url>\n  <url><loc>${SITE_URL}/privacy</loc></url>\n</urlset>\n`);
    return;
  }
  if (url.pathname === "/api/correct" && request.method === "POST") {
    await correctText(request, response);
    return;
  }
  if (url.pathname === "/api/correct") {
    response.setHeader("Allow", "POST");
    sendJson(response, 405, { message: "Method not allowed." });
    return;
  }
  const publicFile = PUBLIC_FILES.get(url.pathname);
  if (publicFile && request.method === "GET") {
    try {
      const content = await readFile(join(PUBLIC_DIR, publicFile.file));
      const isHtml = publicFile.contentType.startsWith("text/html");
      const nonce = isHtml ? randomBytes(18).toString("base64") : "";
      const headers = {
        "Content-Type": publicFile.contentType,
        "Cache-Control": isHtml ? "no-store" : "public, max-age=3600",
        "X-Content-Type-Options": "nosniff"
      };
      if (isHtml) {
        headers["Referrer-Policy"] = "no-referrer";
        headers["Content-Security-Policy"] = `default-src 'self'; script-src 'self' 'nonce-${nonce}'; style-src 'self' 'unsafe-inline'; connect-src 'self'; img-src 'self' data:; object-src 'none'; base-uri 'none'; frame-ancestors 'none'`;
      }
      response.writeHead(200, headers);
      const html = isHtml
        ? content.toString("utf8")
          .replace("<!--SEO_METADATA-->", [
          SITE_URL ? `<link rel="canonical" href="${SITE_URL}${url.pathname === "/" ? "/" : url.pathname}">\n  <meta property="og:url" content="${SITE_URL}${url.pathname === "/" ? "/" : url.pathname}">` : "",
          GOOGLE_SITE_VERIFICATION
            ? `<meta name="google-site-verification" content="${GOOGLE_SITE_VERIFICATION}">`
            : ""
          ].filter(Boolean).join("\n  "))
          .replace('<script type="application/ld+json">', `<script type="application/ld+json" nonce="${nonce}">`)
        : content;
      response.end(html);
    } catch (error) {
      console.error(`Could not read public file: ${publicFile.file}.`, error);
      sendJson(response, 500, { message: "Could not load the application." });
    }
    return;
  }
  sendJson(response, 404, { message: "Not found." });
});

server.listen(PORT, HOST, () => {
  console.log(`VerbQuest is running at http://${HOST}:${PORT}`);
  if (!API_KEY) console.warn("DEEPL_API_KEY is not set; DeepL correction is disabled.");
});
