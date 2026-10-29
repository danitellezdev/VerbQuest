# VerbQuest

VerbQuest is an interactive English-learning app for practicing irregular verbs,
regular verbs, and verb tenses.

VerbQuest es una aplicación educativa gamificada para practicar verbos en inglés
mediante ejercicios interactivos, con puntuación y rachas.

## Project structure

```text
VerbQuest/
├── public/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── app.js
│   ├── index.html
│   └── privacy.html
├── .env.example
├── .gitignore
├── .github/
│   └── workflows/
│       └── pages.yml
├── LICENSE
├── package.json
├── README.md
└── server.mjs
```

The browser application lives in `public/`, while `server.mjs` handles local
hosting and the private DeepL API proxy. The server only serves the public
files it explicitly knows about. The public routes are `/` and `/privacy`;
`/index.html` redirects to `/`.

## Copyright and privacy

Copyright © 2026 Dani Téllez. All rights reserved. The project is not licensed
for reuse or redistribution; see [LICENSE](./LICENSE).

VerbQuest stores your score, streak, and language preference in your browser's
local storage. Translation exercises are checked locally. The server includes
a DeepL correction proxy, but the writing modes that would use it are currently
disabled in the interface. If those modes are enabled, submitted sentences are
sent to DeepL; do not submit sensitive or private text. The API key stays in the
server's `.env` file and is not sent to the browser.

The privacy page is a publication draft: before launch, add the responsible
person's contact details, hosting-provider information, applicable legal
details, and an update date. Update it before enabling analytics, advertising,
or other tracking technologies.

## Public website, Google, and monetization setup

The development server listens only on `127.0.0.1` over HTTP and is not a
public HTTPS deployment. GitHub Pages publishes the static files in `public/`;
it does not run `server.mjs` or provide its DeepL proxy. The Pages workflow
deploys the site whenever changes are pushed to `main`.

To publish this project as `https://<your-github-username>.github.io/VerbQuest/`:

1. Create a public repository named `VerbQuest` on GitHub and push this project
   to its `main` branch. Do not upload `.env`; it contains private settings and
   is excluded by `.gitignore`.
2. In the repository, open **Settings → Pages** and choose **GitHub Actions**
   as the build and deployment source.
3. Wait for the **Deploy to GitHub Pages** workflow to finish, then open the
   site URL shown in its deployment environment.

The site uses relative asset and privacy-page links so it works from the
repository's `/VerbQuest/` path. Translation exercises run in the browser;
sentence correction through DeepL is unavailable on GitHub Pages because it
requires the Node.js server. Disconnect or disable the Netlify site only after
the Pages deployment is working.

For a custom domain or server deployment, configure the actual public origin
for the Node.js server in `.env`, with no path:

```text
SITE_URL=https://<your-real-domain>
```

Replace the placeholder with the actual HTTPS domain you own. The server uses
it to output canonical URLs and generate `/sitemap.xml`; `/robots.txt` points
to that sitemap. Without `SITE_URL`, no canonical is emitted and the sitemap
returns a configuration error rather than publishing invented URLs. The
sitemap includes the home page and `/privacy`.

### Google Search Console

1. Add your real domain or HTTPS URL-prefix property in Google Search Console.
2. Complete the verification method Google gives you. For its HTML-tag method,
   copy only the token from Google's `content` attribute into `.env`:

   ```text
   GOOGLE_SITE_VERIFICATION=<paste-the-real-token-from-Google>
   ```

   The server inserts that value into the verification meta tag on both pages.
   Do not use the example placeholder as a real token. If you choose DNS
   verification instead, add the exact TXT record Google displays at your
   domain provider; no code change is needed.
3. Once deployed, open `https://<your-real-domain>/sitemap.xml` and submit that
   exact URL in Search Console's Sitemaps report.

### Google Analytics

No Analytics ID or tracking code is included. If you later choose GA4, create
the property in your Google account and use only the official snippet and
measurement ID Google gives you. The script belongs in the `<head>` of
`public/index.html`, before `</head>`. Before enabling it, update the privacy
page and implement an appropriate consent flow for your audience. The server's
Content Security Policy currently blocks third-party scripts; add only the
specific Google origins required by the official setup to the policy in
`server.mjs` rather than allowing arbitrary scripts. The policy uses a
per-response nonce for inline scripts; preserve that protection for Google's
inline bootstrap rather than enabling unrestricted inline JavaScript.

### Google AdSense

No AdSense code, publisher ID, ad units, or `ads.txt` record has been fabricated
or added. Apply with the real, publicly accessible HTTPS site and wait for
Google's approval. When Google provides the site code, place that exact code
inside the `<head>` of `public/index.html`, before `</head>`, and update the
Content Security Policy in `server.mjs` to allow only the official origins
needed by the code. Keep the per-response nonce policy for any inline code.
Create ad units in AdSense and place their official snippets
only in dedicated spaces between learning sections, never over controls,
answers, or navigation. For `ads.txt`, create `public/ads.txt` with the exact
entry and publisher ID shown in your AdSense account, then add an explicit
`/ads.txt` mapping to `PUBLIC_FILES` in `server.mjs` so the allowlisted server
serves it from the site root. Do not copy a sample ID or publish a placeholder.

The app contains interactive verb lists and exercises plus an original
beginner's guide. That is useful starting content, but AdSense approval is not
guaranteed. Expand the instructional material with substantial original
lessons before applying, and update the privacy/consent information for any
advertising or analytics you enable.

## Run locally

The local server includes a proxy for DeepL sentence correction. The interface
currently enables only translation exercises, which are checked in the browser;
the writing modes that would send text to DeepL are disabled.

1. Install Node.js 20.6 or newer.
2. In PowerShell, from this project folder, create the environment file:

   ```powershell
   Copy-Item .env.example .env
   notepad .env
   ```

3. If you plan to use the correction proxy, get a key from
   [your DeepL account](https://www.deepl.com/your-account/keys) and add it as
   `DEEPL_API_KEY` in `.env`. Keep `DEEPL_API_PLAN=free` for a DeepL API Free
   key, or set it to `pro` for a Pro key. A key is not needed for the exercises
   currently enabled in the interface.
4. Start the application:

   ```powershell
   npm start
   ```

5. Open <http://127.0.0.1:4173/>.

The app must be opened through this local server; opening `public/index.html`
directly does not provide the API proxy. The development server listens only on
`127.0.0.1`. Calls to `/api/correct` use DeepL's
[`/v2/write/correct` endpoint](https://developers.deepl.com/api-reference/improve-text/correct-text).
The active translate-a-sentence exercise is checked locally and does not send
text to DeepL.

If you call the correction endpoint, the sentence is sent to DeepL. Do not
submit sensitive or private text. The API key is stored in `.env`, which is
excluded from Git by `.gitignore`; never put the key in `public/` or share the
`.env` file.
