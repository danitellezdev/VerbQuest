"use strict";
    const verbs = [
      ["abide","abode/abided","abode/abided","soportar / cumplir"],
      ["alight","alighted/alit","alighted/alit","posarse / bajarse"],
      ["arise","arose","arisen","surgir"],
      ["awake","awoke","awoken","despertar"],
      ["backslide","backslid","backslidden/backslid","recaer"],
      ["be","was/were","been","ser / estar"],
      ["bear","bore","borne/born","soportar / dar a luz"],
      ["beat","beat","beaten","golpear / vencer"],
      ["befall","befell","befallen","ocurrirle"],
      ["beget","begot","begotten","engendrar"],
      ["behold","beheld","beheld","contemplar"],
      ["become","became","become","convertirse"],
      ["begin","began","begun","empezar"],
      ["bend","bent","bent","doblar"],
      ["beseech","besought/beseeched","besought/beseeched","suplicar"],
      ["beset","beset","beset","acosar"],
      ["bespeak","bespoke","bespoken","indicar / presagiar"],
      ["bet","bet","bet","apostar"],
      ["bid","bid/bade","bid/bidden","pujar / ordenar"],
      ["bind","bound","bound","atar / unir"],
      ["bite","bit","bitten","morder"],
      ["bleed","bled","bled","sangrar"],
      ["blow","blew","blown","soplar"],
      ["break","broke","broken","romper"],
      ["breed","bred","bred","criar"],
      ["bring","brought","brought","traer"],
      ["broadcast","broadcast","broadcast","transmitir"],
      ["browbeat","browbeat","browbeaten","intimidar"],
      ["build","built","built","construir"],
      ["burn","burned/burnt","burned/burnt","quemar"],
      ["burst","burst","burst","estallar"],
      ["buy","bought","bought","comprar"],
      ["cast","cast","cast","lanzar"],
      ["catch","caught","caught","atrapar"],
      ["chide","chid/chided","chidden/chid","reprender"],
      ["choose","chose","chosen","elegir"],
      ["cleave","cleft/clove","cleft/cloven","partir / hender"],
      ["cling","clung","clung","aferrarse"],
      ["clothe","clothed/clad","clothed/clad","vestir"],
      ["come","came","come","venir"],
      ["cost","cost","cost","costar"],
      ["creep","crept","crept","arrastrarse"],
      ["cut","cut","cut","cortar"],
      ["deal","dealt","dealt","tratar / repartir"],
      ["dig","dug","dug","cavar"],
      ["dive","dived/dove","dived","zambullirse"],
      ["do","did","done","hacer"],
      ["draw","drew","drawn","dibujar / tirar"],
      ["dream","dreamed/dreamt","dreamed/dreamt","soñar"],
      ["drink","drank","drunk","beber"],
      ["drive","drove","driven","conducir"],
      ["dwell","dwelt/dwelled","dwelt/dwelled","morar"],
      ["eat","ate","eaten","comer"],
      ["fall","fell","fallen","caer"],
      ["feed","fed","fed","alimentar"],
      ["feel","felt","felt","sentir"],
      ["fight","fought","fought","luchar"],
      ["find","found","found","encontrar"],
      ["flee","fled","fled","huir"],
      ["fly","flew","flown","volar"],
      ["forbid","forbade","forbidden","prohibir"],
      ["forgo","forwent","forgone","renunciar"],
      ["forget","forgot","forgotten","olvidar"],
      ["forgive","forgave","forgiven","perdonar"],
      ["forsake","forsook","forsaken","abandonar"],
      ["freeze","froze","frozen","congelar"],
      ["gird","girt/girded","girt/girded","ceñir"],
      ["get","got","got/gotten","obtener"],
      ["give","gave","given","dar"],
      ["go","went","gone","ir"],
      ["grind","ground","ground","moler"],
      ["grow","grew","grown","crecer"],
      ["hang","hung","hung","colgar"],
      ["have","had","had","tener"],
      ["hear","heard","heard","oír"],
      ["hew","hewed","hewn/hewed","cortar / tallar"],
      ["hide","hid","hidden","esconder"],
      ["hit","hit","hit","golpear"],
      ["hold","held","held","sostener"],
      ["hurt","hurt","hurt","herir / doler"],
      ["keep","kept","kept","guardar / mantener"],
      ["kneel","knelt/kneeled","knelt/kneeled","arrodillarse"],
      ["knit","knitted/knit","knitted/knit","tejer"],
      ["know","knew","known","saber / conocer"],
      ["lay","laid","laid","poner / colocar"],
      ["lead","led","led","guiar / liderar"],
      ["lean","leaned/leant","leaned/leant","inclinarse"],
      ["leap","leaped/leapt","leaped/leapt","saltar"],
      ["learn","learned/learnt","learned/learnt","aprender"],
      ["leave","left","left","salir / dejar"],
      ["lend","lent","lent","prestar"],
      ["let","let","let","dejar / permitir"],
      ["lie","lay","lain","tumbarse"],
      ["light","lit/lighted","lit/lighted","encender"],
      ["lose","lost","lost","perder"],
      ["make","made","made","hacer / fabricar"],
      ["mean","meant","meant","significar"],
      ["meet","met","met","conocer / reunirse"],
      ["misunderstand","misunderstood","misunderstood","entender mal"],
      ["mow","mowed","mown/mowed","segar"],
      ["outdo","outdid","outdone","superar"],
      ["outgrow","outgrew","outgrown","dejar atrás al crecer"],
      ["overcome","overcame","overcome","vencer / superar"],
      ["overdo","overdid","overdone","excederse"],
      ["overeat","overate","overeaten","comer demasiado"],
      ["pay","paid","paid","pagar"],
      ["put","put","put","poner"],
      ["prove","proved","proven/proved","demostrar"],
      ["quit","quit/quitted","quit/quitted","dejar / abandonar"],
      ["read","read","read","leer"],
      ["redo","redid","redone","rehacer"],
      ["ride","rode","ridden","montar"],
      ["rid","rid/ridded","rid/ridded","librar"],
      ["ring","rang","rung","sonar / llamar"],
      ["rise","rose","risen","elevarse"],
      ["run","ran","run","correr"],
      ["saw","sawed","sawn/sawed","serrar"],
      ["say","said","said","decir"],
      ["see","saw","seen","ver"],
      ["seek","sought","sought","buscar"],
      ["sell","sold","sold","vender"],
      ["send","sent","sent","enviar"],
      ["set","set","set","colocar / fijar"],
      ["sew","sewed","sewn/sewed","coser"],
      ["shave","shaved","shaven/shaved","afeitar"],
      ["shear","sheared","shorn/sheared","esquilar"],
      ["shed","shed","shed","derramar / mudar"],
      ["shake","shook","shaken","sacudir"],
      ["shine","shone","shone","brillar"],
      ["shoot","shot","shot","disparar"],
      ["shrink","shrank/shrunk","shrunk/shrunken","encoger(se)"],
      ["slay","slew","slain","matar"],
      ["show","showed","shown","mostrar"],
      ["shut","shut","shut","cerrar"],
      ["slit","slit","slit","rajar"],
      ["sing","sang","sung","cantar"],
      ["sink","sank","sunk","hundirse"],
      ["sit","sat","sat","sentarse"],
      ["sleep","slept","slept","dormir"],
      ["slide","slid","slid","deslizarse"],
      ["smell","smelled/smelt","smelled/smelt","oler"],
      ["sow","sowed","sown/sowed","sembrar"],
      ["speed","sped/speeded","sped/speeded","acelerar"],
      ["spell","spelled/spelt","spelled/spelt","deletrear"],
      ["speak","spoke","spoken","hablar"],
      ["spend","spent","spent","gastar / pasar tiempo"],
      ["spill","spilled/spilt","spilled/spilt","derramar"],
      ["spin","spun","spun","girar"],
      ["split","split","split","dividir"],
      ["spread","spread","spread","extender"],
      ["stand","stood","stood","estar de pie"],
      ["steal","stole","stolen","robar"],
      ["stick","stuck","stuck","pegar / atascar"],
      ["sting","stung","stung","picar"],
      ["strike","struck","struck","golpear"],
      ["strive","strove/strived","striven/strived","esforzarse"],
      ["spoil","spoiled/spoilt","spoiled/spoilt","estropear / mimar"],
      ["swear","swore","sworn","jurar"],
      ["sweep","swept","swept","barrer"],
      ["swim","swam","swum","nadar"],
      ["swing","swung","swung","balancearse"],
      ["take","took","taken","tomar / llevar"],
      ["teach","taught","taught","enseñar"],
      ["tear","tore","torn","rasgar"],
      ["tell","told","told","contar / decir"],
      ["think","thought","thought","pensar"],
      ["throw","threw","thrown","lanzar"],
      ["thrust","thrust","thrust","empujar"],
      ["tread","trod","trodden/trod","pisar"],
      ["undergo","underwent","undergone","someterse a"],
      ["understand","understood","understood","entender"],
      ["undertake","undertook","undertaken","emprender"],
      ["upset","upset","upset","alterar / disgustar"],
      ["wake","woke","woken","despertar(se)"],
      ["wear","wore","worn","llevar puesto"],
      ["weep","wept","wept","llorar"],
      ["weave","wove","woven","tejer"],
      ["wet","wetted/wet","wetted/wet","mojar"],
      ["win","won","won","ganar"],
      ["wind","wound","wound","dar cuerda / enrollar"],
      ["withdraw","withdrew","withdrawn","retirar"],
      ["wring","wrung","wrung","retorcer"],
      ["write","wrote","written","escribir"]
    ];

    const regularVerbs = [
      ["accept","accepted","aceptado / aceptar"], ["add","added","añadir"], ["answer","answered","responder"],
      ["arrive","arrived","llegar"], ["ask","asked","preguntar"], ["believe","believed","creer"],
      ["call","called","llamar"], ["carry","carried","llevar"], ["change","changed","cambiar"],
      ["clean","cleaned","limpiar"], ["close","closed","cerrar"], ["cook","cooked","cocinar"],
      ["copy","copied","copiar"], ["dance","danced","bailar"], ["decide","decided","decidir"],
      ["deliver","delivered","entregar"], ["enjoy","enjoyed","disfrutar"], ["explain","explained","explicar"],
      ["finish","finished","terminar"], ["help","helped","ayudar"], ["hope","hoped","esperar"],
      ["invite","invited","invitar"], ["jump","jumped","saltar"], ["kiss","kissed","besar"],
      ["like","liked","gustar"], ["listen","listened","escuchar"], ["live","lived","vivir"],
      ["look","looked","mirar"], ["love","loved","amar"], ["marry","married","casarse"],
      ["miss","missed","echar de menos"], ["move","moved","mover"], ["need","needed","necesitar"],
      ["open","opened","abrir"], ["paint","painted","pintar"], ["plan","planned","planear"],
      ["play","played","jugar / tocar"], ["prefer","preferred","preferir"], ["rain","rained","llover"],
      ["remember","remembered","recordar"], ["return","returned","volver / devolver"],
      ["study","studied","estudiar"], ["stop","stopped","parar"], ["talk","talked","hablar"],
      ["travel","travelled/traveled","viajar"], ["try","tried","intentar"], ["use","used","usar"],
      ["visit","visited","visitar"], ["wait","waited","esperar"], ["walk","walked","caminar"],
      ["want","wanted","querer"], ["wash","washed","lavar"], ["watch","watched","ver / mirar"],
      ["work","worked","trabajar"],
      ["act","acted","actuar"],
      ["admire","admired","admirar"],
      ["admit","admitted","admitir"],
      ["advise","advised","aconsejar"],
      ["afford","afforded","permitirse"],
      ["agree","agreed","estar de acuerdo"],
      ["allow","allowed","permitir"],
      ["announce","announced","anunciar"],
      ["apologize","apologized","disculparse"],
      ["appear","appeared","aparecer"],

      ["apply","applied","solicitar / aplicar"],
      ["appreciate","appreciated","apreciar"],
      ["approve","approved","aprobar"],
      ["argue","argued","discutir"],
      ["arrange","arranged","organizar"],
      ["arrest","arrested","arrestar"],
      ["attach","attached","adjuntar"],
      ["attack","attacked","atacar"],
      ["attend","attended","asistir"],
      ["avoid","avoided","evitar"],

      ["bake","baked","hornear"],
      ["behave","behaved","comportarse"],
      ["belong","belonged","pertenecer"],
      ["blink","blinked","parpadear"],
      ["boil","boiled","hervir"],
      ["borrow","borrowed","pedir prestado"],
      ["brush","brushed","cepillar"],
      ["bury","buried","enterrar"],
      ["buzz","buzzed","zumbar"],
      ["calculate","calculated","calcular"],

      ["cancel","canceled/cancelled","cancelar"],
      ["care","cared","cuidar / importar"],
      ["cause","caused","causar"],
      ["celebrate","celebrated","celebrar"],
      ["challenge","challenged","desafiar"],
      ["charge","charged","cobrar / cargar"],
      ["chase","chased","perseguir"],
      ["cheat","cheated","hacer trampa"],
      ["check","checked","comprobar"],
      ["cheer","cheered","animar"],

      ["collect","collected","recoger"],
      ["compare","compared","comparar"],
      ["complain","complained","quejarse"],
      ["complete","completed","completar"],
      ["concentrate","concentrated","concentrarse"],
      ["connect","connected","conectar"],
      ["consider","considered","considerar"],
      ["continue","continued","continuar"],
      ["control","controlled","controlar"],
      ["create","created","crear"],

      ["cross","crossed","cruzar"],
      ["cry","cried","llorar"],
      ["damage","damaged","dañar"],
      ["decorate","decorated","decorar"],
      ["decrease","decreased","disminuir"],
      ["delay","delayed","retrasar"],
      ["depend","depended","depender"],
      ["describe","described","describir"],
      ["design","designed","diseñar"],
      ["destroy","destroyed","destruir"],

      ["develop","developed","desarrollar"],
      ["disagree","disagreed","discrepar"],
      ["discover","discovered","descubrir"],
      ["discuss","discussed","debatir"],
      ["divide","divided","dividir"],
      ["drop","dropped","dejar caer"],
      ["earn","earned","ganar"],
      ["educate","educated","educar"],
      ["encourage","encouraged","animar"],
      ["enter","entered","entrar"],

      ["escape","escaped","escapar"],
      ["examine","examined","examinar"],
      ["exercise","exercised","hacer ejercicio"],
      ["exist","existed","existir"],
      ["expect","expected","esperar"],
      ["experience","experienced","experimentar"],
      ["express","expressed","expresar"],
      ["fail","failed","fallar"],
      ["fear","feared","temer"],
      ["file","filed","archivar"],

      ["fill","filled","llenar"],
      ["fix","fixed","arreglar"],
      ["fold","folded","doblar"],
      ["follow","followed","seguir"],
      ["force","forced","obligar"],
      ["form","formed","formar"],
      ["gather","gathered","reunir"],
      ["greet","greeted","saludar"],
      ["guess","guessed","adivinar"],
      ["guide","guided","guiar"],

      ["happen","happened","ocurrir"],
      ["hate","hated","odiar"],
      ["heat","heated","calentar"],
      ["identify","identified","identificar"],
      ["imagine","imagined","imaginar"],
      ["improve","improved","mejorar"],
      ["include","included","incluir"],
      ["increase","increased","aumentar"],
      ["influence","influenced","influir"],
      ["inform","informed","informar"],

      ["introduce","introduced","presentar"],
      ["invent","invented","inventar"],
      ["iron","ironed","planchar"],
      ["jog","jogged","trotar"],
      ["join","joined","unirse"],
      ["joke","joked","bromear"],
      ["kick","kicked","patear"],
      ["knock","knocked","golpear"],
      ["laugh","laughed","reír"],
      ["lift","lifted","levantar"],

      ["lock","locked","cerrar con llave"],
      ["manage","managed","gestionar"],
      ["mark","marked","marcar"],
      ["measure","measured","medir"],
      ["mention","mentioned","mencionar"],
      ["mind","minded","importar"],
      ["mix","mixed","mezclar"],
      ["notice","noticed","notar"],
      ["obey","obeyed","obedecer"],
      ["offer","offered","ofrecer"],

      ["order","ordered","pedir / ordenar"],
      ["organize","organized","organizar"],
      ["pack","packed","empacar"],
      ["park","parked","aparcar"],
      ["pass","passed","pasar"],
      ["phone","phoned","llamar por teléfono"],
      ["pick","picked","recoger / elegir"],
      ["place","placed","colocar"],
      ["point","pointed","señalar"],
      ["practice","practiced/practised","practicar"],

      ["prepare","prepared","preparar"],
      ["press","pressed","presionar"],
      ["print","printed","imprimir"],
      ["produce","produced","producir"],
      ["promise","promised","prometer"],
      ["protect","protected","proteger"],
      ["provide","provided","proporcionar"],
      ["pull","pulled","tirar"],
      ["push","pushed","empujar"],
      ["race","raced","competir / correr"],

      ["raise","raised","elevar"],
      ["reach","reached","alcanzar"],
      ["realize","realized/realised","darse cuenta"],
      ["receive","received","recibir"],
      ["refuse","refused","rechazar"],
      ["relax","relaxed","relajarse"],
      ["release","released","liberar"],
      ["repeat","repeated","repetir"],
      ["replace","replaced","reemplazar"],
      ["reply","replied","responder"],

      ["report","reported","informar"],
      ["request","requested","solicitar"],
      ["rescue","rescued","rescatar"],
      ["respect","respected","respetar"],
      ["rest","rested","descansar"],
      ["rob","robbed","robar"],
      ["roll","rolled","rodar / enrollar"],
      ["save","saved","guardar / salvar"],
      ["seem","seemed","parecer"],
      ["serve","served","servir"],

      ["settle","settled","resolver / establecer"],
      ["share","shared","compartir"],
      ["shout","shouted","gritar"],
      ["sign","signed","firmar"],
      ["smile","smiled","sonreír"],
      ["smoke","smoked","fumar"],
      ["snow","snowed","nevar"],
      ["solve","solved","resolver"],
      ["sound","sounded","sonar"],
      ["start","started","comenzar"],

      ["stay","stayed","quedarse"],
      ["step","stepped","dar un paso"],
      ["succeed","succeeded","tener éxito"],
      ["suggest","suggested","sugerir"],
      ["support","supported","apoyar"],
      ["suppose","supposed","suponer"],
      ["surprise","surprised","sorprender"],
      ["taste","tasted","probar"],
      ["thank","thanked","agradecer"],
      ["touch","touched","tocar"],

      ["train","trained","entrenar"],
      ["trust","trusted","confiar"],
      ["turn","turned","girar"],
      ["unite","united","unir"],
      ["unlock","unlocked","abrir"],
      ["upgrade","upgraded","mejorar / actualizar"],
      ["update","updated","actualizar"],
      ["value","valued","valorar"],
      ["volunteer","volunteered","ofrecerse como voluntario"],
      ["warn","warned","advertir"],

      ["waste","wasted","desperdiciar"],
      ["wave","waved","saludar / agitar"],
      ["whisper","whispered","susurrar"],
      ["wish","wished","desear"],
      ["wonder","wondered","preguntarse"],
      ["wrap","wrapped","envolver"],
      ["yawn","yawned","bostezar"],
      ["yell","yelled","gritar"],
      ["zip","zipped","cerrar con cremallera"]
    ].map(([base, past, meaning]) => [base.trim(), past, past, meaning]);

    const tenses = [
      {
        id: "present-simple", category: "Presente", name: "Present simple",
        use: "Para rutinas, hábitos y hechos generales. Con he, she e it, normalmente añadimos -s o -es al verbo.",
        formula: "I / you / we / they + verbo · he / she / it + verbo-s",
        example: "She works every day. = Ella trabaja todos los días.",
        prompts: [
          ["Yo estudio inglés todos los días.","I study English every day."],
          ["Ella trabaja en una oficina.","She works in an office."],
          ["Ellos viven en Madrid.","They live in Madrid."],
          ["Él juega al fútbol los sábados.","He plays football on Saturdays."]
        ]
      },
      {
        id: "present-continuous", category: "Presente", name: "Present continuous",
        use: "Para acciones que están ocurriendo ahora o situaciones temporales.",
        formula: "Sujeto + am / is / are + verbo-ing",
        example: "I am learning English now. = Estoy aprendiendo inglés ahora.",
        prompts: [
          ["Estoy leyendo un libro ahora.","I am reading a book now."],
          ["Ella está cocinando la cena.","She is cooking dinner."],
          ["Estamos estudiando inglés.","We are studying English."]
        ]
      },
      {
        id: "past-simple", category: "Pasado", name: "Past simple",
        use: "Para acciones terminadas en un momento concreto del pasado. Los verbos regulares terminan en -ed; los irregulares cambian.",
        formula: "Sujeto + verbo en pasado",
        example: "We visited London last year. = Visitamos Londres el año pasado.",
        prompts: [
          ["Ayer visité a mi amiga.","I visited my friend yesterday."],
          ["Él fue al colegio en autobús.","He went to school by bus."],
          ["Comimos pizza anoche.","We ate pizza last night."]
        ]
      },
      {
        id: "past-continuous", category: "Pasado", name: "Past continuous",
        use: "Para una acción que estaba en progreso en un momento del pasado, a menudo interrumpida por otra.",
        formula: "Sujeto + was / were + verbo-ing",
        example: "They were sleeping at ten. = Estaban durmiendo a las diez.",
        prompts: [
          ["Estaba trabajando a las ocho.","I was working at eight."],
          ["Ellos estaban viendo la televisión.","They were watching television."],
          ["Estábamos cenando cuando llamaste.","We were having dinner when you called."]
        ]
      },
      {
        id: "present-perfect", category: "Presente perfecto", name: "Present perfect",
        use: "Para experiencias o acciones pasadas conectadas con el presente. No se suele indicar cuándo ocurrió.",
        formula: "Sujeto + have / has + participio pasado",
        example: "She has visited Rome. = Ella ha visitado Roma.",
        prompts: [
          ["He terminado mi tarea.","I have finished my homework."],
          ["Ella ha visitado Roma.","She has visited Rome."],
          ["Nunca hemos visto la nieve.","We have never seen snow."]
        ]
      },
      {
        id: "past-perfect", category: "Pasado perfecto", name: "Past perfect",
        use: "Para indicar que una acción ocurrió antes de otra acción pasada.",
        formula: "Sujeto + had + participio pasado",
        example: "He had left before I arrived. = Se había ido antes de que yo llegara.",
        prompts: [
          ["Ya había comido antes de salir.","I had eaten before leaving."],
          ["Ella había terminado el trabajo antes de las seis.","She had finished the work before six."],
          ["Ellos habían visto la película antes.","They had seen the film before."]
        ]
      },
      {
        id: "future-will", category: "Futuro", name: "Future with will",
        use: "Para decisiones espontáneas, promesas y predicciones.",
        formula: "Sujeto + will + verbo en infinitivo sin to",
        example: "I will help you. = Te ayudaré.",
        prompts: [
          ["Te llamaré mañana.","I will call you tomorrow."],
          ["Ella te ayudará.","She will help you."],
          ["Creo que lloverá.","I think it will rain."]
        ]
      },
      {
        id: "future-going-to", category: "Futuro", name: "Future with going to",
        use: "Para planes e intenciones, y predicciones basadas en lo que vemos.",
        formula: "Sujeto + am / is / are + going to + verbo",
        example: "We are going to travel soon. = Vamos a viajar pronto.",
        prompts: [
          ["Voy a estudiar esta noche.","I am going to study tonight."],
          ["Van a comprar una casa.","They are going to buy a house."],
          ["Va a llover.","It is going to rain."]
        ]
      },
      {
        id: "zero-conditional", category: "Condicionales", name: "Zero conditional",
        use: "Se usa para hechos generales y resultados que ocurren siempre que se cumple una condición.",
        formula: "If + presente simple, presente simple",
        example: "If you heat water to 100°C, it boils. = Si calientas agua a 100 °C, hierve.",
        prompts: [
          ["Si calientas agua a 100 °C, hierve.","If you heat water to 100°C, it boils."],
          ["Si no riegas las plantas, se mueren.","If you don't water the plants, they die."]
        ]
      },
      {
        id: "first-conditional", category: "Condicionales", name: "First conditional",
        use: "Se usa para situaciones futuras posibles y sus resultados probables.",
        formula: "If + presente simple, will + verbo en infinitivo",
        example: "If I study, I will pass the exam. = Si estudio, aprobaré el examen.",
        prompts: [
          ["Si estudio, aprobaré el examen.","If I study, I will pass the exam."],
          ["Si llueve mañana, nos quedaremos en casa.","If it rains tomorrow, we will stay at home."]
        ]
      },
      {
        id: "second-conditional", category: "Condicionales", name: "Second conditional",
        use: "Se usa para situaciones hipotéticas o poco probables en el presente o el futuro.",
        formula: "If + pasado simple, would + verbo en infinitivo",
        example: "If I had more time, I would travel. = Si tuviera más tiempo, viajaría.",
        prompts: [
          ["Si tuviera más tiempo, viajaría por el mundo.","If I had more time, I would travel around the world."],
          ["Si vivieras cerca, nos visitarías más a menudo.","If you lived nearby, you would visit us more often."]
        ]
      },
      {
        id: "third-conditional", category: "Condicionales", name: "Third conditional",
        use: "Se usa para imaginar un resultado diferente de una situación pasada que ya no se puede cambiar.",
        formula: "If + past perfect, would have + participio pasado",
        example: "If I had left earlier, I would have arrived on time. = Si hubiera salido antes, habría llegado a tiempo.",
        prompts: [
          ["Si hubiera salido antes, habría llegado a tiempo.","If I had left earlier, I would have arrived on time."],
          ["Si hubieran estudiado, habrían aprobado el examen.","If they had studied, they would have passed the exam."]
        ]
      }
    ];

    const tenseEnglish = {
      "present-simple": {
        category: "Present", use: "Use for routines, habits, and general facts. With he, she, and it, we usually add -s or -es to the verb.",
        formula: "I / you / we / they + base verb · he / she / it + verb-s",
        example: "She works every day. = Ella trabaja todos los días.",
        prompts: ["I study English every day.", "She works in an office.", "They live in Madrid.", "He plays football on Saturdays."]
      },
      "present-continuous": {
        category: "Present", use: "Use for actions happening now or temporary situations.",
        formula: "Subject + am / is / are + verb-ing",
        example: "I am learning English now. = Estoy aprendiendo inglés ahora.",
        prompts: ["I am reading a book now.", "She is cooking dinner.", "We are studying English."]
      },
      "past-simple": {
        category: "Past", use: "Use for completed actions at a specific time in the past. Regular verbs end in -ed; irregular verbs change.",
        formula: "Subject + past-tense verb",
        example: "We visited London last year. = Visitamos Londres el año pasado.",
        prompts: ["I visited my friend yesterday.", "He went to school by bus.", "We ate pizza last night."]
      },
      "past-continuous": {
        category: "Past", use: "Use for an action that was in progress at a time in the past, often interrupted by another action.",
        formula: "Subject + was / were + verb-ing",
        example: "They were sleeping at ten. = Estaban durmiendo a las diez.",
        prompts: ["I was working at eight.", "They were watching television.", "We were having dinner when you called."]
      },
      "present-perfect": {
        category: "Present perfect", use: "Use for past experiences or actions connected to the present. The exact time is usually not stated.",
        formula: "Subject + have / has + past participle",
        example: "She has visited Rome. = Ella ha visitado Roma.",
        prompts: ["I have finished my homework.", "She has visited Rome.", "We have never seen snow."]
      },
      "past-perfect": {
        category: "Past perfect", use: "Use to show that one action happened before another past action.",
        formula: "Subject + had + past participle",
        example: "He had left before I arrived. = Se había ido antes de que yo llegara.",
        prompts: ["I had eaten before leaving.", "She had finished the work before six.", "They had seen the film before."]
      },
      "future-will": {
        category: "Future", use: "Use for spontaneous decisions, promises, and predictions.",
        formula: "Subject + will + base verb (without to)",
        example: "I will help you. = Te ayudaré.",
        prompts: ["I will call you tomorrow.", "She will help you.", "I think it will rain."]
      },
      "future-going-to": {
        category: "Future", use: "Use for plans and intentions, and predictions based on what we can see.",
        formula: "Subject + am / is / are + going to + verb",
        example: "We are going to travel soon. = Vamos a viajar pronto.",
        prompts: ["I am going to study tonight.", "They are going to buy a house.", "It is going to rain."]
      },
      "zero-conditional": {
        category: "Conditionals", use: "Use for general facts and results that always happen when a condition is met.",
        formula: "If + present simple, present simple",
        example: "If you heat water to 100°C, it boils. = Si calientas agua a 100 °C, hierve.",
        prompts: ["If you heat water to 100°C, it boils.", "If you don't water the plants, they die."]
      },
      "first-conditional": {
        category: "Conditionals", use: "Use for possible future situations and their likely results.",
        formula: "If + present simple, will + base verb",
        example: "If I study, I will pass the exam. = Si estudio, aprobaré el examen.",
        prompts: ["If I study, I will pass the exam.", "If it rains tomorrow, we will stay at home."]
      },
      "second-conditional": {
        category: "Conditionals", use: "Use for hypothetical or unlikely situations in the present or future.",
        formula: "If + past simple, would + base verb",
        example: "If I had more time, I would travel. = Si tuviera más tiempo, viajaría.",
        prompts: ["If I had more time, I would travel around the world.", "If you lived nearby, you would visit us more often."]
      },
      "third-conditional": {
        category: "Conditionals", use: "Use to imagine a different result for a past situation that can no longer be changed.",
        formula: "If + past perfect, would have + past participle",
        example: "If I had left earlier, I would have arrived on time. = Si hubiera salido antes, habría llegado a tiempo.",
        prompts: ["If I had left earlier, I would have arrived on time.", "If they had studied, they would have passed the exam."]
      }
    };
    const tenseSpanishNames = {
      "present-simple":"Presente simple",
      "present-continuous":"Presente continuo",
      "past-simple":"Pasado simple",
      "past-continuous":"Pasado continuo",
      "present-perfect":"Presente perfecto",
      "past-perfect":"Pasado perfecto",
      "future-will":"Futuro con will",
      "future-going-to":"Futuro con going to",
      "zero-conditional":"Condicional cero",
      "first-conditional":"Primer condicional",
      "second-conditional":"Segundo condicional",
      "third-conditional":"Tercer condicional"
    };

    const interfaceText = {
      es: {
        tagline:"Pequeños pasos, grandes avances.", score:"Puntos", streak:"Racha",
        eyebrow:"Tu aventura empieza aquí", title:"Domina los verbos<br>jugando.",
        description:"Aprende verbos irregulares y regulares, y practica los tiempos verbales con explicaciones claras y ejercicios interactivos.",
        section:"Sección", irregularTab:"🎮 Irregulares", listTab:"📖 Las 3 columnas", regularTab:"✅ Regulares", tensesTab:"📝 Tiempos verbales",
        part:"Elige tu parte", progress:"Aciertos en esta ronda", question:"Completa la forma que falta", meaning:"Significado",
        answerPlaceholder:"Escribe tu respuesta...", answerLabel:"Escribe la forma que falta", check:"Comprobar ↵",
        practiceHint:"Consejo: escribe solo la forma que falta. Pulsa Enter para comprobar.", next:"Siguiente →", skip:"Pasar",
        search:"Buscar en toda la lista", searchPlaceholder:"Verbo o significado...", regularDescription:"En los verbos regulares, el pasado simple y el participio pasado se forman normalmente añadiendo -ed. Practica las formas y la traducción al español, o consulta la lista.",
        regularChallenge:"Reto de verbos regulares", regularCheck:"Comprobar", regularNext:"Siguiente verbo →", regularList:"Lista de verbos regulares",
        tensesHeading:"Aprende y practica los tiempos verbales", tensesDescription:"Elige un tiempo para ver cuándo se usa y cómo se forma. Practica con ejemplos generados al azar traduciendo las frases.",
        tenseSelect:"Tiempo verbal", modeLabel:"Tipo de práctica", translate:"Traducir una frase", write:"Escribir mi propia frase", writeDisabled:"Escribir mi propia frase (temporalmente desactivado)", free:"Escribir una frase libre", freeDisabled:"Escribir una frase libre (temporalmente desactivado)", freePrompt:"Escribe una frase en inglés con el tiempo verbal que quieras.", another:"Otra frase",
        tenseSubmit:"Revisar mi frase", tenseHint:"Por ahora, las opciones para escribir frases propias están desactivadas. Puedes seguir practicando con el modo de traducción.",
        writingDisabled:"La escritura de frases propias está temporalmente desactivada. Elige «Traducir una frase» para seguir practicando.",
        correctingSentence:"Enviando la frase a DeepL para corregirla…", correctedSentence:"Frase corregida:",
        sentenceAlreadyCorrect:"Frase revisada por DeepL:",
        detectedTense:"Tiempo verbal detectado:", tenseMismatch:"La frase parece usar {detected}, pero estás practicando {selected}.",
        footer:"© 2026 Dani Téllez. Todos los derechos reservados. Tu puntuación y racha se guardan en este dispositivo. Las traducciones se comprueban localmente. La corrección con DeepL no está habilitada.",
        privacyLink:"Privacidad y uso de datos",
        guideEyebrow:"Guía de inglés", guideHeading:"Cómo aprender los verbos en inglés",
        guideIntro:"Aprender los verbos te ayuda a construir frases y hablar de acciones en distintos momentos. En inglés conviene practicar las formas del verbo junto con ejemplos y repetirlas en pequeñas sesiones.",
        guideFormsHeading:"Verbos regulares e irregulares",
        guideFormsText:"Los verbos regulares suelen formar el pasado simple y el participio pasado añadiendo -ed: work, worked, worked. Los irregulares cambian de forma y es útil aprender sus tres columnas: infinitivo, pasado simple y participio.",
        guideBase:"Infinitivo", guidePast:"Pasado simple", guideParticiple:"Participio pasado", guideMeaning:"Significado", guideGoMeaning:"ir",
        guideExampleAria:"Ejemplo de verbo irregular: go, went, gone",
        guideTensesHeading:"Cuándo usar los tiempos verbales",
        guideTensesText:"El present simple sirve para rutinas y hechos generales: I study every day. El past simple expresa acciones terminadas: I studied yesterday. El present perfect conecta una experiencia pasada con el presente: I have studied English.",
        guideSummary:"Practica identificando el momento de la acción, consulta la estructura del tiempo verbal y escribe tus propios ejemplos. VerbQuest incluye ejercicios para repasar verbos regulares, irregulares y tiempos verbales.",
        infinitive:"Infinitivo", pastSimple:"Pasado simple", pastParticiple:"Participio pasado", meaning:"Significado",
        listTitle:"Verbos irregulares: las tres columnas", noResults:"No hay verbos que coincidan con esa búsqueda.",
        regularHeading:"Verbos regulares", tensesPrompt:"Traduce al inglés:", ownPrompt:"Escribe una frase propia en",
        suggested:"Tema sugerido:", translationAnswer:"Tu traducción en inglés", ownAnswer:"Tu frase en inglés",
        enterEnglish:"Escribe aquí tu frase en inglés...",
        correctTranslation:"¡Muy bien! La frase está correcta:", incorrectTranslation:"Revisa la frase. Una respuesta correcta sería:",
        correctRegular:"¡Correcto!", regularTip:"Fíjate en los cambios de ortografía al añadir -ed.",
        formMeaning:"Español:", previousPage:"Anterior", nextPage:"Siguiente",
        irregularPagination:"Paginación de verbos irregulares", regularPagination:"Paginación de verbos regulares"
      },
      en: {
        tagline:"Small steps, big progress.", score:"Points", streak:"Streak",
        eyebrow:"Your adventure starts here", title:"Master verbs<br>by playing.",
        description:"Learn irregular and regular verbs, and practise tenses with clear explanations and interactive exercises.",
        section:"Sections", irregularTab:"🎮 Irregular verbs", listTab:"📖 The 3 forms", regularTab:"✅ Regular verbs", tensesTab:"📝 Verb tenses",
        part:"Choose a section", progress:"Correct answers this round", question:"Complete the missing form", meaning:"Spanish meaning",
        answerPlaceholder:"Type your answer...", answerLabel:"Type the missing form", check:"Check ↵",
        practiceHint:"Tip: type only the missing form. Press Enter to check.", next:"Next →", skip:"Skip",
        search:"Search the full list", searchPlaceholder:"Verb or Spanish meaning...", regularDescription:"Regular verbs usually form the past simple and past participle by adding -ed. Practise the forms and Spanish translations, or browse the list.",
        regularChallenge:"Regular verb challenge", regularCheck:"Check", regularNext:"Next verb →", regularList:"Regular verb list",
        tensesHeading:"Learn and practise verb tenses", tensesDescription:"Choose a tense to learn when and how to use it. Practise with randomly generated examples by translating the sentences.",
        tenseSelect:"Tense", modeLabel:"Practice mode", translate:"Translate a sentence", write:"Write my own sentence", writeDisabled:"Write my own sentence (temporarily disabled)", free:"Write a free sentence", freeDisabled:"Write a free sentence (temporarily disabled)", freePrompt:"Write an English sentence using any tense you want.", another:"Another sentence",
        tenseSubmit:"Check my sentence", tenseHint:"Writing your own sentences is temporarily disabled. You can keep practising in translate-a-sentence mode.",
        writingDisabled:"Writing your own sentences is temporarily disabled. Choose “Translate a sentence” to keep practising.",
        correctingSentence:"Sending the sentence to DeepL for correction…", correctedSentence:"Corrected sentence:",
        sentenceAlreadyCorrect:"Sentence checked by DeepL:",
        detectedTense:"Detected tense:", tenseMismatch:"The sentence seems to use {detected}, but you are practising {selected}.",
        footer:"© 2026 Dani Téllez. All rights reserved. Your score and streak are saved on this device. Translations are checked locally. DeepL correction is not enabled.",
        privacyLink:"Privacy and data use",
        guideEyebrow:"English learning guide", guideHeading:"How to learn English verbs",
        guideIntro:"Learning verbs helps you build sentences and talk about actions at different times. Practise verb forms with examples and review them in short, regular study sessions.",
        guideFormsHeading:"Regular and irregular verbs",
        guideFormsText:"Regular verbs usually form the past simple and past participle by adding -ed: work, worked, worked. Irregular verbs change form, so it helps to learn their three forms: base form, past simple, and past participle.",
        guideBase:"Base form", guidePast:"Past simple", guideParticiple:"Past participle", guideMeaning:"Meaning", guideGoMeaning:"to go",
        guideExampleAria:"Irregular verb example: go, went, gone",
        guideTensesHeading:"When to use verb tenses",
        guideTensesText:"Use the present simple for routines and general facts: I study every day. The past simple describes completed actions: I studied yesterday. The present perfect connects a past experience to the present: I have studied English.",
        guideSummary:"Identify when an action happens, review the tense structure, and write your own examples. VerbQuest includes exercises for regular verbs, irregular verbs, and verb tenses.",
        infinitive:"Base form", pastSimple:"Past simple", pastParticiple:"Past participle", meaning:"Spanish meaning",
        listTitle:"Irregular verbs: all three forms", noResults:"No verbs match your search.",
        regularHeading:"Regular verbs", tensesPrompt:"Translate into Spanish:", ownPrompt:"Write your own sentence in",
        suggested:"Suggested topic:", translationAnswer:"Your Spanish translation", ownAnswer:"Your sentence in English",
        enterEnglish:"Write your sentence in English here...",
        correctTranslation:"Well done! The sentence is correct:", incorrectTranslation:"Check your sentence. One correct answer is:",
        correctRegular:"Correct!", regularTip:"Watch for spelling changes when adding -ed.",
        formMeaning:"Spanish:", previousPage:"Previous", nextPage:"Next",
        irregularPagination:"Irregular verb pagination", regularPagination:"Regular verb pagination"
      }
    };

    const columnLabels = {
      es: ["Infinitivo", "Pasado simple", "Participio pasado", "Español"],
      en: ["Base form", "Past simple", "Past participle", "Spanish"]
    };
    const columnName = (index) => columnLabels[language][index];
    const STORAGE_KEY = "verbquest-progress-v1";
    let saved = {};
    try {
      saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}") || {};
    } catch (error) {
      console.warn("No se pudo leer el progreso guardado.", error);
    }
    let score = Number.isFinite(saved.score) ? saved.score : 0;
    let streak = Number.isFinite(saved.streak) ? saved.streak : 0;
    let currentVerb = null;
    let currentColumn = 1;
    let answered = false;
    let roundCorrect = 0;
    let roundIds = new Set();
    let questionDeck = [];
    let lastQuestionVerb = null;
    let activeTab = "practice";
    const PAGE_SIZE = 20;
    let irregularPage = 0;
    let regularPage = 0;

    const $ = (id) => document.getElementById(id);
    let language = "es";
    try {
      language = localStorage.getItem("verbquest-language") === "en" ? "en" : "es";
    } catch (error) {
      console.warn("No se pudo leer el idioma guardado.", error);
    }
    const text = (key) => interfaceText[language][key];
    function applyLanguage() {
      const labels = [
        ["tagline","tagline"], ["score-label","score"], ["streak-label","streak"],
        ["intro-eyebrow","eyebrow"], ["intro-description","description"], ["part-label","part"],
        ["practice-hint","practiceHint"], ["search-label","search"],
        ["regular-heading","regularHeading"],
        ["regular-description","regularDescription"], ["regular-challenge","regularChallenge"],
        ["regular-check","regularCheck"], ["regular-list-heading","regularList"],
        ["tenses-heading","tensesHeading"], ["tenses-description","tensesDescription"],
        ["tense-select-label","tenseSelect"], ["tense-mode-label","modeLabel"],
        ["mode-translate","translate"], ["mode-write","writeDisabled"], ["mode-free","freeDisabled"], ["new-tense-prompt","another"],
        ["tense-submit","tenseSubmit"], ["tense-hint","tenseHint"], ["footer","footer"],
        ["privacy-link","privacyLink"]
      ];
      labels.forEach(([id,key]) => { $(id).textContent = text(key); });
      $("intro-title").innerHTML = text("title");
      $("guide-example").setAttribute("aria-label", text("guideExampleAria"));
      document.querySelector('meta[name="description"]').content = language === "es"
        ? "Aprende verbos irregulares y regulares en inglés y practica los tiempos verbales con explicaciones y ejercicios interactivos gratuitos."
        : "Learn English regular and irregular verbs and practise verb tenses with explanations and free interactive exercises.";
      $("practice-tab").textContent = text("irregularTab");
      $("list-tab").textContent = text("listTab");
      $("regular-tab").textContent = text("regularTab");
      $("tenses-tab").textContent = text("tensesTab");
      $("part-select").setAttribute("aria-label", text("part"));
      $("main-tabs").setAttribute("aria-label", text("section"));
      $("progress-track").setAttribute("aria-label", text("progress"));
      $("answer-input").placeholder = text("answerPlaceholder");
      $("answer-input").setAttribute("aria-label", text("answerLabel"));
      $("check-button").textContent = text("check");
      $("next-button").textContent = text("next");
      $("skip-button").textContent = text("skip");
      $("irregular-search").placeholder = text("searchPlaceholder");
      $("irregular-previous").textContent = text("previousPage");
      $("irregular-next").textContent = text("nextPage");
      $("regular-list-previous").textContent = text("previousPage");
      $("regular-list-next").textContent = text("nextPage");
      $("irregular-pagination").setAttribute("aria-label", text("irregularPagination"));
      $("regular-list-pagination").setAttribute("aria-label", text("regularPagination"));
      $("regular-next").textContent = text("regularNext");
      $("tense-answer").placeholder = text("enterEnglish");
      $("language-toggle").textContent = language === "es" ? "English" : "Español";
      $("language-toggle").setAttribute("aria-label", language === "es" ? "Switch page language to English" : "Cambiar el idioma de la página a español");
      $("streak-label").parentElement.parentElement.setAttribute("aria-label", language === "es" ? "Tu progreso" : "Your progress");
      document.documentElement.lang = language;
      document.title = language === "es"
        ? "VerbQuest: verbos y tiempos verbales en inglés"
        : "VerbQuest: English verbs and tenses";
      document.querySelectorAll("[data-i18n]").forEach((element) => {
        element.textContent = text(element.dataset.i18n);
      });
      [...tenseSelect.options].forEach((option) => {
        option.textContent = language === "es" ? tenseSpanishNames[option.value] : tenses.find((tense) => tense.id === option.value).name;
      });
      renderPartOptions();
      $("lesson-name").textContent = language === "es"
        ? `Parte ${Number(partSelect.value) + 1}`
        : `Part ${Number(partSelect.value) + 1}`;
      updateStats();
      newQuestion();
      renderList();
      renderRegularList();
      renderTense();
      if (activeTab === "regular") newRegularQuestion();
    }

    const partSelect = $("part-select");
    const totalParts = Math.ceil(verbs.length / 10);
    function renderPartOptions() {
      const previous = partSelect.value;
      partSelect.replaceChildren();
      for (let part = 0; part < totalParts; part++) {
        const start = part * 10 + 1;
        const end = Math.min((part + 1) * 10, verbs.length);
        const option = document.createElement("option");
        option.value = String(part);
        option.textContent = language === "es"
          ? `Parte ${part + 1} · verbos ${start}–${end}`
          : `Part ${part + 1} · verbs ${start}–${end}`;
        partSelect.append(option);
      }
      if (previous && Number(previous) < totalParts) partSelect.value = previous;
    }
    if (Number.isInteger(saved.part) && saved.part >= 0 && saved.part < totalParts) {
      partSelect.value = String(saved.part);
    }

    function getPartVerbs() {
      const start = Number(partSelect.value) * 10;
      return verbs.slice(start, start + 10);
    }

    function nextPracticeVerb() {
      if (questionDeck.length === 0) {
        questionDeck = getPartVerbs();
        for (let index = questionDeck.length - 1; index > 0; index--) {
          const randomIndex = Math.floor(Math.random() * (index + 1));
          [questionDeck[index], questionDeck[randomIndex]] = [questionDeck[randomIndex], questionDeck[index]];
        }
        if (questionDeck.length > 1 && questionDeck[questionDeck.length - 1] === lastQuestionVerb) {
          [questionDeck[0], questionDeck[questionDeck.length - 1]] = [questionDeck[questionDeck.length - 1], questionDeck[0]];
        }
      }
      lastQuestionVerb = questionDeck.pop();
      return lastQuestionVerb;
    }

    function save() {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({
          score, streak, part: Number(partSelect.value), progress: saved.progress || {}
        }));
      } catch (error) {
        console.warn("No se pudo guardar el progreso.", error);
      }
    }

    function updateStats() {
      $("score").textContent = score.toLocaleString(language === "es" ? "es" : "en");
      $("streak").textContent = `${streak} 🔥`;
      const progress = Math.min(roundCorrect, 10);
      $("progress-fill").style.width = `${progress * 10}%`;
      document.querySelector('[role="progressbar"]').setAttribute("aria-valuenow", String(progress));
      $("lesson-count").textContent = language === "es"
        ? `${roundCorrect} acierto${roundCorrect === 1 ? "" : "s"} en esta ronda`
        : `${roundCorrect} correct answer${roundCorrect === 1 ? "" : "s"} this round`;
    }

    function newQuestion() {
      currentVerb = nextPracticeVerb();
      currentColumn = Math.floor(Math.random() * currentVerb.length);
      answered = false;
      $("meaning").classList.toggle("hidden", currentColumn === 3);
      $("meaning").textContent = `${text("formMeaning")} ${currentVerb[3]}`;
      $("column-pill").textContent = columnName(currentColumn);
      $("question-label").textContent = text("question");
      if (currentColumn === 3) {
        $("prompt").innerHTML = language === "es"
          ? `¿Cuál es el significado en español de <em>${currentVerb[0]}</em>?`
          : `What is the Spanish meaning of <em>${currentVerb[0]}</em>?`;
      } else {
        const questionNames = language === "es"
          ? ["el infinitivo", "el pasado simple", "el participio pasado"]
          : ["the base form", "the past simple", "the past participle"];
        $("prompt").innerHTML = language === "es"
          ? `¿Cuál es ${questionNames[currentColumn]} de <em>${currentColumn === 0 ? currentVerb[1].split("/")[0] : currentVerb[0]}</em>?`
          : `What is ${questionNames[currentColumn]} of <em>${currentColumn === 0 ? currentVerb[1].split("/")[0] : currentVerb[0]}</em>?`;
      }
      $("word-row").replaceChildren(...currentVerb.map((form, index) => {
        const cell = document.createElement("div");
        cell.className = "word-cell";
        const label = document.createElement("span");
        label.textContent = columnName(index);
        const value = document.createElement("strong");
        value.textContent = index === currentColumn ? "＿＿＿" : form;
        cell.append(label, value);
        return cell;
      }));
      $("answer-input").value = "";
      $("answer-input").disabled = false;
      $("check-button").disabled = false;
      $("check-button").classList.remove("hidden");
      $("next-button").classList.add("hidden");
      $("skip-button").classList.remove("hidden");
      $("feedback").textContent = "";
      $("feedback").className = "feedback";
      $("answer-input").focus();
    }

    function normalize(value) {
      return value.trim().toLowerCase().replace(/\s+/g, " ");
    }

    function submitAnswer(event) {
      event.preventDefault();
      if (answered) return;
      const given = normalize($("answer-input").value);
      if (!given) {
        $("answer-input").focus();
        return;
      }
      answered = true;
      const acceptable = currentVerb[currentColumn].split("/").map(normalize);
      const correct = acceptable.includes(given);
      const cells = $("word-row").children;
      cells[currentColumn].querySelector("strong").textContent = currentVerb[currentColumn];
      $("answer-input").disabled = true;
      $("check-button").classList.add("hidden");
      $("next-button").classList.remove("hidden");
      $("skip-button").classList.add("hidden");
      if (correct) {
        score += 10;
        streak += 1;
        roundCorrect += 1;
        roundIds.add(currentVerb[0]);
        saved.progress = saved.progress || {};
        saved.progress[currentVerb[0]] = (saved.progress[currentVerb[0]] || 0) + 1;
        const mastered = saved.progress[currentVerb[0]] >= 3;
        $("feedback").textContent = language === "es"
          ? (mastered ? "¡Perfecto! +10 puntos · ¡Ya dominas este verbo! ✨" : "¡Muy bien! +10 puntos · ¡Sigue así! ✨")
          : (mastered ? "Perfect! +10 points · You have mastered this verb! ✨" : "Great job! +10 points · Keep it up! ✨");
        $("feedback").classList.add("good");
      } else {
        streak = 0;
        $("feedback").textContent = language === "es"
          ? `Casi. La respuesta era “${currentVerb[currentColumn]}”. ¡Una más!`
          : `Almost. The answer was “${currentVerb[currentColumn]}”. Try another!`;
        $("feedback").classList.add("bad");
      }
      updateStats();
      save();
      if (roundIds.size >= getPartVerbs().length) {
        $("lesson-name").textContent = language === "es"
          ? `¡Parte ${Number(partSelect.value) + 1} completada!`
          : `Part ${Number(partSelect.value) + 1} complete!`;
      }
    }

    function renderList() {
      const query = normalize($("irregular-search").value);
      const items = verbs.filter((verb) => normalize(verb.join(" ")).includes(query));
      const pageCount = Math.ceil(items.length / PAGE_SIZE);
      irregularPage = Math.min(irregularPage, Math.max(0, pageCount - 1));
      $("list-title").textContent = text("listTitle");
      $("verb-count").textContent = language === "es"
        ? `${items.length} de ${verbs.length} verbos`
        : `${items.length} of ${verbs.length} verbs`;
      const pageItems = items.slice(irregularPage * PAGE_SIZE, (irregularPage + 1) * PAGE_SIZE);
      const rows = pageItems.map((verb) => {
        const row = document.createElement("tr");
        verb.slice(0, 3).forEach((form) => {
          const cell = document.createElement("td");
          cell.textContent = form;
          row.append(cell);
        });
        const meaning = document.createElement("td");
        meaning.className = "spanish";
        meaning.textContent = verb[3];
        row.append(meaning);
        return row;
      });
      if (rows.length === 0) {
        const row = document.createElement("tr");
        const cell = document.createElement("td");
        cell.colSpan = 4;
        cell.className = "empty-row";
        cell.textContent = text("noResults");
        row.append(cell);
        rows.push(row);
      }
      $("verb-list").replaceChildren(...rows);
      updatePagination("irregular", irregularPage, pageCount);
    }

    function updatePagination(list, page, pageCount) {
      const pagination = $(`${list}-pagination`);
      pagination.classList.toggle("hidden", pageCount <= 1);
      $(`${list}-previous`).disabled = page === 0;
      $(`${list}-next`).disabled = page >= pageCount - 1;
      $(`${list}-page`).textContent = language === "es"
        ? `Página ${page + 1} de ${pageCount}`
        : `Page ${page + 1} of ${pageCount}`;
    }

    function setTab(tab) {
      activeTab = tab;
      const tabs = ["practice", "list", "regular", "tenses"];
      tabs.forEach((name) => {
        const selected = name === tab;
        $(`${name}-panel`).classList.toggle("hidden", !selected);
        $(`${name}-tab`).classList.toggle("active", selected);
        $(`${name}-tab`).setAttribute("aria-selected", String(selected));
      });
      $("part-control").classList.toggle("hidden", tab !== "practice");
      if (tab === "list") renderList();
      if (tab === "regular") newRegularQuestion();
      if (tab === "tenses") renderTense();
    }

    function renderRegularList() {
      const pageCount = Math.ceil(regularVerbs.length / PAGE_SIZE);
      regularPage = Math.min(regularPage, Math.max(0, pageCount - 1));
      const pageVerbs = regularVerbs.slice(regularPage * PAGE_SIZE, (regularPage + 1) * PAGE_SIZE);
      const rows = pageVerbs.map(([base, past, , meaning]) => {
        const row = document.createElement("tr");
        [base, past, past, meaning].forEach((text, index) => {
          const cell = document.createElement("td");
          cell.textContent = text;
          if (index === 3) cell.className = "spanish";
          row.append(cell);
        });
        return row;
      });
      $("regular-list").replaceChildren(...rows);
      $("regular-count").textContent = language === "es" ? `${regularVerbs.length} verbos` : `${regularVerbs.length} verbs`;
      updatePagination("regular-list", regularPage, pageCount);
    }

    let currentRegular = null;
    let regularAnswered = false;
    function newRegularQuestion() {
      currentRegular = regularVerbs[Math.floor(Math.random() * regularVerbs.length)];
      regularAnswered = false;
      $("regular-column").textContent = language === "es" ? "Inglés + español" : "English + Spanish";
      $("regular-prompt").textContent = language === "es"
        ? `Escribe el pasado simple/participio y la traducción al español de “${currentRegular[0]}”.`
        : `Write the past simple/participle and Spanish translation of “${currentRegular[0]}”.`;
      $("regular-english-label").firstChild.textContent = language === "es"
        ? "Pasado simple / participio"
        : "Past simple / participle";
      $("regular-spanish-label").firstChild.textContent = language === "es"
        ? "Traducción al español"
        : "Spanish translation";
      $("regular-answer").placeholder = language === "es" ? "Forma en inglés..." : "English form...";
      $("regular-translation").placeholder = language === "es" ? "Significado en español..." : "Spanish meaning...";
      $("regular-answer").value = "";
      $("regular-translation").value = "";
      $("regular-answer").disabled = false;
      $("regular-translation").disabled = false;
      $("regular-form").querySelector("button").disabled = false;
      $("regular-feedback").textContent = "";
      $("regular-feedback").className = "feedback";
      $("regular-answer").focus();
    }

    function submitRegular(event) {
      event.preventDefault();
      if (regularAnswered) return;
      regularAnswered = true;
      const expectedEnglish = currentRegular[1];
      const expectedSpanish = currentRegular[3];
      const correctEnglish = expectedEnglish.split("/").map(normalize).includes(normalize($("regular-answer").value));
      const correctSpanish = expectedSpanish.split("/").map(normalize).includes(normalize($("regular-translation").value));
      $("regular-answer").disabled = true;
      $("regular-translation").disabled = true;
      $("regular-form").querySelector("button").disabled = true;
      const englishLabel = language === "es" ? "Inglés" : "English";
      const spanishLabel = language === "es" ? "Español" : "Spanish";
      const englishResult = correctEnglish
        ? `${englishLabel}: ${text("correctRegular")} “${expectedEnglish}”.`
        : language === "es"
          ? `${englishLabel}: la forma correcta es “${expectedEnglish}”. ${text("regularTip")}`
          : `${englishLabel}: the correct form is “${expectedEnglish}”. ${text("regularTip")}`;
      const spanishResult = correctSpanish
        ? `${spanishLabel}: ${text("correctRegular")} “${expectedSpanish}”.`
        : language === "es"
          ? `${spanishLabel}: la traducción correcta es “${expectedSpanish}”.`
          : `${spanishLabel}: the correct translation is “${expectedSpanish}”.`;
      $("regular-feedback").textContent = `${englishResult} ${spanishResult}`;
      $("regular-feedback").classList.add(correctEnglish && correctSpanish ? "good" : "bad");
      const points = (correctEnglish ? 5 : 0) + (correctSpanish ? 5 : 0);
      if (points > 0) {
        score += points;
        updateStats();
        save();
      }
    }

    const tenseSelect = $("tense-select");
    tenses.forEach((tense) => {
      const option = document.createElement("option");
      option.value = tense.id;
      option.textContent = language === "es" ? tenseSpanishNames[tense.id] : tense.name;
      tenseSelect.append(option);
    });
    let currentPrompt = null;
    function selectedTense() {
      return tenses.find((tense) => tense.id === tenseSelect.value) || tenses[0];
    }

    const generatedTenseSubjects = [
      { en: "I", es: "Yo", person: "i" },
      { en: "You", es: "Tú", person: "you" },
      { en: "He", es: "Él", person: "third" },
      { en: "She", es: "Ella", person: "third" },
      { en: "We", es: "Nosotros", person: "we" },
      { en: "They", es: "Ellos", person: "they" },
      { en: "My sister", es: "Mi hermana", person: "third" },
      { en: "My friends", es: "Mis amigos", person: "they" },
      { en: "The students", es: "Los estudiantes", person: "they" },
      { en: "Our teacher", es: "Nuestro profesor", person: "third" },
      { en: "My parents", es: "Mis padres", person: "they" },
      { en: "The new neighbour", es: "El nuevo vecino", person: "third" }
    ];
    const generatedTenseActions = [
      { verb: "work", third: "works", past: "worked", ing: "working", es: "trabajar", complements: [["at home","en casa"],["in an office","en una oficina"]] },
      { verb: "study", third: "studies", past: "studied", ing: "studying", es: "estudiar", complements: [["English","inglés"],["for my exams","para mis exámenes"]] },
      { verb: "visit", third: "visits", past: "visited", ing: "visiting", es: "visitar", complements: [["my family","a mi familia"],["the museum","el museo"]] },
      { verb: "cook", third: "cooks", past: "cooked", ing: "cooking", es: "cocinar", complements: [["dinner","la cena"],["lunch","el almuerzo"]] },
      { verb: "clean", third: "cleans", past: "cleaned", ing: "cleaning", es: "limpiar", complements: [["the house","la casa"],["my room","mi habitación"]] },
      { verb: "help", third: "helps", past: "helped", ing: "helping", es: "ayudar", complements: [["my friends","a mis amigos"],["my family","a mi familia"]] },
      { verb: "dance", third: "dances", past: "danced", ing: "dancing", es: "bailar", complements: [["salsa","salsa"],["at parties","en fiestas"]] },
      { verb: "watch", third: "watches", past: "watched", ing: "watching", es: "mirar", complements: [["a film","una película"],["the news","las noticias"]] },
      { verb: "call", third: "calls", past: "called", ing: "calling", es: "llamar", complements: [["my mother","a mi madre"],["my friend","a mi amigo"]] },
      { verb: "live", third: "lives", past: "lived", ing: "living", es: "vivir", complements: [["in Madrid","en Madrid"],["near the city centre","cerca del centro"]] },
      { verb: "walk", third: "walks", past: "walked", ing: "walking", es: "caminar", complements: [["in the park","por el parque"],["to work","al trabajo"]] },
      { verb: "paint", third: "paints", past: "painted", ing: "painting", es: "pintar", complements: [["pictures","cuadros"],["the kitchen","la cocina"]] },
      { verb: "use", third: "uses", past: "used", ing: "using", es: "usar", complements: [["a computer","un ordenador"],["this app","esta aplicación"]] },
      { verb: "answer", third: "answers", past: "answered", ing: "answering", es: "responder", complements: [["questions","preguntas"],["emails","correos"]] },
      { verb: "play", third: "plays", past: "played", ing: "playing", es: "tocar", complements: [["the guitar","la guitarra"],["the piano","el piano"]] },
      { verb: "listen", third: "listens", past: "listened", ing: "listening", es: "escuchar", complements: [["to music","música"],["to podcasts","pódcast"]] },
      { verb: "wash", third: "washes", past: "washed", ing: "washing", es: "lavar", complements: [["the dishes","los platos"],["the clothes","la ropa"]] },
      { verb: "travel", third: "travels", past: "traveled", ing: "traveling", es: "viajar", complements: [["to London","a Londres"],["to Spain","a España"]] },
      { verb: "wait", third: "waits", past: "waited", ing: "waiting", es: "esperar", complements: [["for the bus","el autobús"],["for my friend","a mi amigo"]] },
      { verb: "talk", third: "talks", past: "talked", ing: "talking", es: "hablar", complements: [["to my friends","con mis amigos"],["to my teacher","con mi profesor"]] }
    ];
    const additionalTenseComplements = {
      work: [["on a community project","en un proyecto comunitario"],["with a design team","con un equipo de diseño"],["from a quiet café","desde una cafetería tranquila"],["at the local hospital","en el hospital local"],["on a farm outside town","en una granja a las afueras"],["for an international company","para una empresa internacional"]],
      study: [["marine biology","biología marina"],["for a driving test","para el examen de conducir"],["at the public library","en la biblioteca pública"],["with an online course","con un curso en línea"],["new vocabulary","vocabulario nuevo"],["for a science project","para un proyecto de ciencias"]],
      visit: [["the old town","el casco antiguo"],["a wildlife sanctuary","un refugio de animales"],["our relatives in Seville","a nuestros familiares en Sevilla"],["a small art gallery","una pequeña galería de arte"],["the weekend market","el mercado del fin de semana"],["a national park","un parque nacional"]],
      cook: [["a traditional family recipe","una receta tradicional de la familia"],["vegetable soup","sopa de verduras"],["a meal for our guests","una comida para nuestros invitados"],["fresh bread","pan recién hecho"],["a quick breakfast","un desayuno rápido"],["a new dish","un plato nuevo"]],
      clean: [["the community garden","el jardín comunitario"],["the kitchen after dinner","la cocina después de cenar"],["the windows before spring","las ventanas antes de la primavera"],["the beach with volunteers","la playa con voluntarios"],["the old bicycle","la bicicleta vieja"],["the studio before class","el estudio antes de clase"]],
      help: [["a neighbour with the shopping","a un vecino con la compra"],["the animal shelter","al refugio de animales"],["my classmates with a project","a mis compañeros con un proyecto"],["elderly people in the community","a personas mayores de la comunidad"],["the new team member","al nuevo miembro del equipo"],["a friend prepare for an interview","a un amigo a prepararse para una entrevista"]],
      dance: [["at a summer festival","en un festival de verano"],["to live jazz","al ritmo de jazz en directo"],["with a local dance group","con un grupo de baile local"],["at a friend's wedding","en la boda de un amigo"],["the salsa routine","la coreografía de salsa"],["under the stage lights","bajo las luces del escenario"]],
      watch: [["a documentary about the ocean","un documental sobre el océano"],["the sunrise from the balcony","el amanecer desde el balcón"],["a football match with friends","un partido de fútbol con amigos"],["a cooking show","un programa de cocina"],["the birds in the garden","los pájaros del jardín"],["a film in the open-air cinema","una película en el cine al aire libre"]],
      call: [["the travel agency","a la agencia de viajes"],["my cousin about the reunion","a mi primo sobre la reunión"],["the dentist to book an appointment","al dentista para pedir cita"],["our project manager","a nuestro jefe de proyecto"],["the hotel to confirm the booking","al hotel para confirmar la reserva"],["a friend who lives abroad","a un amigo que vive en el extranjero"]],
      live: [["in a small coastal town","en un pequeño pueblo costero"],["above a busy bookshop","encima de una librería concurrida"],["with two university friends","con dos amigos de la universidad"],["near a nature reserve","cerca de una reserva natural"],["in a flat with a sunny balcony","en un piso con un balcón soleado"],["in the countryside","en el campo"]],
      walk: [["along the river before breakfast","junto al río antes del desayuno"],["through the historic centre","por el centro histórico"],["around the neighbourhood after dinner","por el barrio después de cenar"],["up the hill to the viewpoint","cuesta arriba hasta el mirador"],["along the beach at sunset","por la playa al atardecer"],["to the station through the park","a la estación atravesando el parque"]],
      paint: [["a mural for the youth centre","un mural para el centro juvenil"],["watercolours of mountain landscapes","acuarelas de paisajes de montaña"],["the bedroom a soft blue","el dormitorio de un azul suave"],["signs for the school fair","carteles para la feria escolar"],["portraits of local artists","retratos de artistas locales"],["a design for a reusable bag","un diseño para una bolsa reutilizable"]],
      use: [["a map to find the hiking trail","un mapa para encontrar la ruta de senderismo"],["recycled materials for the model","materiales reciclados para la maqueta"],["a language app on the train","una aplicación de idiomas en el tren"],["solar energy to heat the water","energía solar para calentar el agua"],["a camera to photograph wildlife","una cámara para fotografiar animales"],["a shared calendar to plan the week","un calendario compartido para organizar la semana"]],
      answer: [["questions at the job interview","preguntas en la entrevista de trabajo"],["messages from the volunteer group","mensajes del grupo de voluntarios"],["a tricky question about history","una pregunta difícil sobre historia"],["emails from international clients","correos de clientes internacionales"],["questions from the audience after the presentation","preguntas del público después de la presentación"],["a request from the school council","a una petición del consejo escolar"]],
      play: [["chess at the community centre","al ajedrez en el centro comunitario"],["the violin in a youth orchestra","el violín en una orquesta juvenil"],["basketball after school","al baloncesto después de clase"],["board games on rainy evenings","a juegos de mesa en las tardes lluviosas"],["a new song on the keyboard","una canción nueva en el teclado"],["tennis at the sports club","al tenis en el club deportivo"]],
      listen: [["an audiobook on the way to work","un audiolibro de camino al trabajo"],["a podcast about space exploration","un pódcast sobre exploración espacial"],["to the rain against the window","la lluvia contra la ventana"],["to traditional music from the region","música tradicional de la región"],["to a language lesson while cooking","una lección de idiomas mientras cocina"],["to the guide during the museum tour","al guía durante la visita al museo"]],
      wash: [["the car after the road trip","el coche después del viaje por carretera"],["the paintbrushes after art class","los pinceles después de la clase de arte"],["the dog after its walk in the park","al perro después de su paseo por el parque"],["the sports uniforms after the match","los uniformes deportivos después del partido"],["the fruit before making a salad","la fruta antes de preparar una ensalada"],["the camping dishes by the lake","los platos de camping junto al lago"]],
      travel: [["across the country by train","por todo el país en tren"],["to a mountain village for the weekend","a un pueblo de montaña el fin de semana"],["around South America with friends","por Sudamérica con amigos"],["to the coast in an electric car","a la costa en un coche eléctrico"],["through Europe with a small backpack","por Europa con una mochila pequeña"],["to a conference about clean energy","a una conferencia sobre energía limpia"]],
      wait: [["for the early train at platform three","el tren temprano en el andén tres"],["for the rain to stop","a que deje de llover"],["for a table at the new restaurant","una mesa en el restaurante nuevo"],["for the results of the art competition","los resultados del concurso de arte"],["for the guide outside the museum","al guía fuera del museo"],["for the school bus near the library","el autobús escolar cerca de la biblioteca"]],
      talk: [["about the plans for the school garden","sobre los planes para el huerto escolar"],["to the guide about local history","con el guía sobre la historia local"],["about ways to reduce plastic waste","sobre formas de reducir los residuos de plástico"],["to a customer about a delivery","con un cliente sobre un envío"],["about the best route to the waterfall","sobre la mejor ruta a la cascada"],["with the neighbours about the street party","con los vecinos sobre la fiesta del barrio"]]
    };
    generatedTenseActions.forEach((action) => action.complements.push(...additionalTenseComplements[action.verb]));
    const generatedTenseTimes = {
      "present-simple": [["every day","todos los días"],["on Mondays","los lunes"],["usually","normalmente"],["in the morning","por la mañana"],["after work","después del trabajo"],["during the school year","durante el curso escolar"],["at weekends","los fines de semana"],["before breakfast","antes del desayuno"]],
      "present-continuous": [["right now","ahora mismo"],["at the moment","en este momento"],["today","hoy"],["this week","esta semana"],["these days","estos días"],["this afternoon","esta tarde"],["while the weather is nice","mientras hace buen tiempo"],["during the holidays","durante las vacaciones"]],
      "past-simple": [["yesterday","ayer"],["last weekend","el fin de semana pasado"],["two days ago","hace dos días"],["last month","el mes pasado"],["during the winter holidays","durante las vacaciones de invierno"],["on the school trip","durante la excursión escolar"],["the previous summer","el verano anterior"],["after the concert","después del concierto"]],
      "past-continuous": [["at six yesterday","ayer a las seis"],["when you called","cuando llamaste"],["all afternoon","toda la tarde"],["at that moment","en ese momento"],["while the others were preparing dinner","mientras los demás preparaban la cena"],["during the long journey","durante el largo viaje"],["when the lights went out","cuando se apagaron las luces"],["throughout the festival","durante todo el festival"]],
      "present-perfect": [["recently","recientemente"],["many times","muchas veces"],["this year","este año"],["so far","hasta ahora"],["over the past few months","durante los últimos meses"],["since the new year","desde el año nuevo"],["already","ya"],["in the last few weeks","en las últimas semanas"]],
      "past-perfect": [["before dinner","antes de cenar"],["before I arrived","antes de que yo llegara"],["by eight o'clock","para las ocho"],["before the weekend","antes del fin de semana"],["by the time the doors opened","para cuando abrieron las puertas"],["before the storm began","antes de que empezara la tormenta"],["by the end of the school year","para el final del curso escolar"],["before the guests arrived","antes de que llegaran los invitados"]],
      "future-will": [["tomorrow","mañana"],["next week","la semana que viene"],["soon","pronto"],["later","más tarde"],["after the meeting","después de la reunión"],["in a few days","dentro de unos días"],["when the course ends","cuando termine el curso"],["next spring","la próxima primavera"]],
      "future-going-to": [["tomorrow","mañana"],["next weekend","el próximo fin de semana"],["soon","pronto"],["this summer","este verano"],["during the next school break","durante las próximas vacaciones escolares"],["after lunch","después de comer"],["when the weather gets warmer","cuando haga más calor"],["in the coming months","en los próximos meses"]]
    };
    const conditionalFollowups = {
      work: ["talk", "answer", "call"],
      study: ["answer", "use", "work"],
      visit: ["travel", "walk", "watch"],
      cook: ["wash", "help", "listen"],
      clean: ["help", "listen", "watch"],
      help: ["talk", "visit", "call"],
      dance: ["listen", "play", "watch"],
      watch: ["talk", "call", "visit"],
      call: ["talk", "answer", "travel"],
      live: ["walk", "travel", "visit"],
      walk: ["watch", "visit", "listen"],
      paint: ["visit", "use", "work"],
      use: ["study", "work", "travel"],
      answer: ["talk", "call", "help"],
      play: ["listen", "watch", "travel"],
      listen: ["study", "talk", "watch"],
      wash: ["clean", "help", "cook"],
      travel: ["visit", "walk", "watch"],
      wait: ["listen", "talk", "call"],
      talk: ["call", "visit", "work"]
    };
    const GENERATED_PROMPTS_PER_TENSE = 10000;
    const generatedPromptBanks = new Map();
    function spanishRegularVerbForm(infinitive, person, form) {
      const ending = infinitive.slice(-2);
      const stem = infinitive.slice(0, -2);
      const isAr = ending === "ar";
      if (form === "gerund") return `${stem}${isAr ? "ando" : "iendo"}`;
      if (form === "participle") return `${stem}${isAr ? "ado" : "ido"}`;
      if (form === "present") {
        const endings = isAr
          ? { i: "o", you: "as", third: "a", we: "amos", they: "an" }
          : { i: "o", you: "es", third: "e", we: ending === "ir" ? "imos" : "emos", they: "en" };
        return `${stem}${endings[person]}`;
      }
      if (form === "past") {
        const endings = isAr
          ? { i: "é", you: "aste", third: "ó", we: "amos", they: "aron" }
          : { i: "í", you: "iste", third: "ió", we: "imos", they: "ieron" };
        return `${stem}${endings[person]}`;
      }
      if (form === "subjunctivePast") {
        const endings = isAr
          ? { i: "ara", you: "aras", third: "ara", we: "áramos", they: "aran" }
          : { i: "iera", you: "ieras", third: "iera", we: "iéramos", they: "ieran" };
        return `${stem}${endings[person]}`;
      }
      if (form === "conditional") {
        const endings = { i: "ía", you: "ías", third: "ía", we: "íamos", they: "ían" };
        return `${infinitive}${endings[person]}`;
      }
      const futureEndings = { i: "é", you: "ás", third: "á", we: "emos", they: "án" };
      return `${infinitive}${futureEndings[person]}`;
    }
    function generateTensePrompt(tenseId) {
      let bank = generatedPromptBanks.get(tenseId);
      if (!bank) {
        bank = new Set();
        generatedPromptBanks.set(tenseId, bank);
      }
      if (bank.size >= GENERATED_PROMPTS_PER_TENSE) bank.clear();
      for (let attempt = 0; attempt < 1000; attempt++) {
        const prompt = generateTensePromptCandidate(tenseId);
        const key = `${normalize(prompt[0])}\u0000${normalize(prompt[1])}`;
        if (!bank.has(key)) {
          bank.add(key);
          return prompt;
        }
      }
      throw new Error(`No se pudo encontrar una frase nueva para ${tenseId}.`);
    }

    function generateTensePromptCandidate(tenseId) {
      if (tenseId.endsWith("-conditional")) {
        const subject = generatedTenseSubjects[Math.floor(Math.random() * generatedTenseSubjects.length)];
        const action = generatedTenseActions[Math.floor(Math.random() * generatedTenseActions.length)];
        const followups = conditionalFollowups[action.verb];
        const followupVerb = followups[Math.floor(Math.random() * followups.length)];
        const resultAction = generatedTenseActions.find((item) => item.verb === followupVerb);
        if (!resultAction) throw new Error(`No se encontró el verbo condicional ${followupVerb}.`);
        const firstComplement = action.complements[Math.floor(Math.random() * action.complements.length)];
        const secondComplement = resultAction.complements[Math.floor(Math.random() * resultAction.complements.length)];
        const resultSubject = subject.person === "third" ? resultAction.third : resultAction.verb;
        const conditionPresent = subject.person === "third" ? action.third : action.verb;
        const englishSubject = subject.en === "I" ? "I" : subject.en.toLowerCase();
        const spanishSubject = subject.es.toLowerCase();
        const spanishHaber = {
          i: ["hubiera", "habría"], you: ["hubieras", "habrías"],
          third: ["hubiera", "habría"], we: ["hubiéramos", "habríamos"],
          they: ["hubieran", "habrían"]
        }[subject.person];
        let conditionEnglish;
        let resultEnglish;
        let conditionSpanish;
        let resultSpanish;
        if (tenseId === "zero-conditional") {
          conditionEnglish = `${conditionPresent} ${firstComplement[0]}`;
          resultEnglish = `${resultSubject} ${secondComplement[0]}`;
          conditionSpanish = `${spanishRegularVerbForm(action.es, subject.person, "present")} ${firstComplement[1]}`;
          resultSpanish = `${spanishRegularVerbForm(resultAction.es, subject.person, "present")} ${secondComplement[1]}`;
        } else if (tenseId === "first-conditional") {
          conditionEnglish = `${conditionPresent} ${firstComplement[0]}`;
          resultEnglish = `will ${resultAction.verb} ${secondComplement[0]}`;
          conditionSpanish = `${spanishRegularVerbForm(action.es, subject.person, "present")} ${firstComplement[1]}`;
          resultSpanish = `${spanishRegularVerbForm(resultAction.es, subject.person, "future")} ${secondComplement[1]}`;
        } else if (tenseId === "second-conditional") {
          conditionEnglish = `${action.past.split("/")[0]} ${firstComplement[0]}`;
          resultEnglish = `would ${resultAction.verb} ${secondComplement[0]}`;
          conditionSpanish = `${spanishRegularVerbForm(action.es, subject.person, "subjunctivePast")} ${firstComplement[1]}`;
          resultSpanish = `${spanishRegularVerbForm(resultAction.es, subject.person, "conditional")} ${secondComplement[1]}`;
        } else {
          conditionEnglish = `had ${action.past.split("/")[0]} ${firstComplement[0]}`;
          resultEnglish = `would have ${resultAction.past.split("/")[0]} ${secondComplement[0]}`;
          conditionSpanish = `${spanishHaber[0]} ${spanishRegularVerbForm(action.es, subject.person, "participle")} ${firstComplement[1]}`;
          resultSpanish = `${spanishHaber[1]} ${spanishRegularVerbForm(resultAction.es, subject.person, "participle")} ${secondComplement[1]}`;
        }
        return [
          `Si ${spanishSubject} ${conditionSpanish}, ${spanishSubject} ${resultSpanish}.`,
          `If ${englishSubject} ${conditionEnglish}, ${englishSubject} ${resultEnglish}.`
        ];
      }
      const subject = generatedTenseSubjects[Math.floor(Math.random() * generatedTenseSubjects.length)];
      const action = generatedTenseActions[Math.floor(Math.random() * generatedTenseActions.length)];
      const complement = action.complements[Math.floor(Math.random() * action.complements.length)];
      const time = generatedTenseTimes[tenseId][Math.floor(Math.random() * generatedTenseTimes[tenseId].length)];
      const englishBase = subject.person === "third" ? action.third : action.verb;
      let englishVerb;
      let spanishVerb;
      switch (tenseId) {
        case "present-continuous":
          englishVerb = `${subject.person === "i" ? "am" : subject.person === "third" ? "is" : "are"} ${action.ing}`;
          spanishVerb = `${({ i: "estoy", you: "estás", third: "está", we: "estamos", they: "están" })[subject.person]} ${spanishRegularVerbForm(action.es, subject.person, "gerund")}`;
          break;
        case "past-simple":
          englishVerb = action.past;
          spanishVerb = spanishRegularVerbForm(action.es, subject.person, "past");
          break;
        case "past-continuous":
          englishVerb = `${subject.person === "i" || subject.person === "third" ? "was" : "were"} ${action.ing}`;
          spanishVerb = `${({ i: "estaba", you: "estabas", third: "estaba", we: "estábamos", they: "estaban" })[subject.person]} ${spanishRegularVerbForm(action.es, subject.person, "gerund")}`;
          break;
        case "present-perfect":
          englishVerb = `${subject.person === "third" ? "has" : "have"} ${action.past}`;
          spanishVerb = `${({ i: "he", you: "has", third: "ha", we: "hemos", they: "han" })[subject.person]} ${spanishRegularVerbForm(action.es, subject.person, "participle")}`;
          break;
        case "past-perfect":
          englishVerb = `had ${action.past}`;
          spanishVerb = `${({ i: "había", you: "habías", third: "había", we: "habíamos", they: "habían" })[subject.person]} ${spanishRegularVerbForm(action.es, subject.person, "participle")}`;
          break;
        case "future-will":
          englishVerb = `will ${action.verb}`;
          spanishVerb = spanishRegularVerbForm(action.es, subject.person, "future");
          break;
        case "future-going-to":
          englishVerb = `${subject.person === "i" ? "am" : subject.person === "third" ? "is" : "are"} going to ${action.verb}`;
          spanishVerb = `${({ i: "voy", you: "vas", third: "va", we: "vamos", they: "van" })[subject.person]} a ${action.es}`;
          break;
        default:
          englishVerb = englishBase;
          spanishVerb = spanishRegularVerbForm(action.es, subject.person, "present");
      }
      const prompt = [
        `${subject.es} ${spanishVerb} ${complement[1]} ${time[1]}.`,
        `${subject.en} ${englishVerb} ${complement[0]} ${time[0]}.`
      ];
      return prompt;
    }

    function renderTense() {
      const tense = selectedTense();
      const englishVersion = tenseEnglish[tense.id];
      const example = language === "es" ? tense.example : tenseEnglish[tense.id].example.split(" = ")[0];
      $("tense-category").textContent = language === "es" ? tense.category : englishVersion.category;
      $("tense-name").textContent = language === "es" ? tenseSpanishNames[tense.id] : tense.name;
      $("tense-use").textContent = language === "es" ? tense.use : englishVersion.use;
      $("tense-formula").textContent = language === "es" ? tense.formula : englishVersion.formula;
      $("tense-example").textContent = `${language === "es" ? "Ejemplo:" : "Example:"} ${example}`;
      newTensePrompt();
    }

    function newTensePrompt() {
      const tense = selectedTense();
      const mode = $("tense-mode").value;
      const freeWriting = mode === "free";
      const writing = mode === "write" || freeWriting;
      const prompt = freeWriting ? null : generateTensePrompt(tense.id);
      if (prompt) currentPrompt = prompt;
      const shownPrompt = prompt && (language === "es" ? prompt[0] : prompt[1]);
      $("tense-prompt").replaceChildren();
      const label = document.createElement("strong");
      const tenseName = language === "es" ? tenseSpanishNames[tense.id] : tense.name;
      label.textContent = freeWriting
        ? text("free")
        : writing ? `${text("ownPrompt")} ${tenseName}:` : text("tensesPrompt");
      const promptText = document.createElement("p");
      promptText.textContent = freeWriting
        ? text("freePrompt")
        : writing ? `${interfaceText[language].suggested} ${shownPrompt}` : shownPrompt;
      promptText.style.margin = "8px 0 0";
      $("tense-prompt").append(label, promptText);
      $("tense-answer-label").textContent = writing ? interfaceText[language].ownAnswer : interfaceText[language].translationAnswer;
      $("new-tense-prompt").classList.toggle("hidden", freeWriting);
      $("tense-answer").value = "";
      $("tense-feedback").className = "feedback-box hidden";
      $("tense-feedback").textContent = "";
      $("tense-answer").focus();
    }

    const commonEnglishCorrections = new Map([
      ["teh","the"], ["recieve","receive"], ["beleive","believe"], ["freind","friend"],
      ["becuase","because"], ["definately","definitely"], ["seperate","separate"],
      ["thier","their"], ["wich","which"], ["alot","a lot"], ["doesnt","doesn't"],
      ["dont","don't"], ["didnt","didn't"], ["isnt","isn't"], ["wont","won't"],
      ["cant","can't"], ["im","I'm"], ["ive","I've"], ["youre","you're"],
      ["theyre","they're"], ["weve","we've"], ["couldnt","couldn't"],
      ["shouldnt","shouldn't"], ["wouldnt","wouldn't"]
    ]);
    const commonIrregularPastErrors = new Map([
      ["goed","went"], ["becomed","became"], ["comed","came"], ["eated","ate"],
      ["falled","fell"], ["finded","found"], ["gived","gave"], ["knowed","knew"],
      ["maked","made"], ["runned","ran"], ["sayed","said"], ["seed","saw"],
      ["thinked","thought"], ["taked","took"], ["writed","wrote"]
    ]);
    const generatedActionByBase = new Map(generatedTenseActions.map((action) => [action.verb, action]));
    const irregularVerbByBase = new Map(verbs.map((verb) => [verb[0], verb]));
    const regularVerbByBase = new Map(regularVerbs.map((verb) => [verb[0], verb]));
    const pastFormToParticiple = new Map(
      [...verbs, ...regularVerbs].flatMap((verb) =>
        verb[1].split("/").map((past) => [past.toLowerCase(), verb[2].split("/")[0].toLowerCase()])
      )
    );

    function thirdPersonPresentForm(baseVerb) {
      const base = baseVerb.toLowerCase();
      const generated = generatedActionByBase.get(base);
      if (generated) return generated.third;
      if (base === "be") return "is";
      if (base === "have") return "has";
      if (base === "do") return "does";
      if (base.endsWith("y") && !/[aeiou]y$/.test(base)) return `${base.slice(0, -1)}ies`;
      if (/(?:s|sh|ch|x|z|o)$/.test(base)) return `${base}es`;
      return `${base}s`;
    }

    const presentThirdToBase = new Map([
      ...[...generatedActionByBase.keys(), ...irregularVerbByBase.keys(), ...regularVerbByBase.keys()]
        .map((base) => [thirdPersonPresentForm(base), base]),
      ["is", "be"],
      ["has", "have"],
      ["does", "do"]
    ]);

    function pastSimpleForm(baseVerb) {
      const base = baseVerb.toLowerCase();
      const generated = generatedActionByBase.get(base);
      if (generated) return generated.past.split("/")[0];
      const irregular = irregularVerbByBase.get(base);
      if (irregular) return irregular[1].split("/")[0];
      const regular = regularVerbByBase.get(base);
      if (regular) return regular[1].split("/")[0];
      return null;
    }

    function pastParticipleForm(baseVerb) {
      const base = baseVerb.toLowerCase();
      const irregular = irregularVerbByBase.get(base);
      if (irregular) return irregular[2].split("/")[0];
      const regular = regularVerbByBase.get(base);
      if (regular) return regular[2].split("/")[0];
      const commonError = commonIrregularPastErrors.get(base);
      return pastFormToParticiple.get(commonError || base) || null;
    }

    function correctSentenceLocally(sentence, tenseId) {
      let corrected = sentence.trim().replace(/\s+/g, " ");
      const notes = [];
      const original = corrected;
      corrected = corrected.replace(/\bi\b/g, "I");
      corrected = corrected.replace(/\b[a-z]+/gi, (word) => {
        const replacement = commonEnglishCorrections.get(word.toLowerCase());
        if (!replacement) return word;
        return word[0] === word[0].toUpperCase()
          ? replacement[0].toUpperCase() + replacement.slice(1)
          : replacement;
      });
      corrected = corrected.replace(/\b(a|an)\s+([a-z]+)\b/gi, (match, article, word) => {
        const lowerWord = word.toLowerCase();
        const vowelSound = /^[aeiou]/.test(lowerWord) &&
          !/^(?:one|once|uni(?:t|v|f|c)|use|usual|euro)/.test(lowerWord) ||
          /^(?:hour|honest|heir)/.test(lowerWord);
        const correctArticle = vowelSound ? "an" : "a";
        return `${article.toLowerCase() === correctArticle ? article : correctArticle} ${word}`;
      });
      corrected = corrected.replace(/\b(\w+)\s+\1\b/gi, "$1");

      if (tenseId === "present-simple") {
        corrected = corrected.replace(
          /\b(he|she|it|my sister|our teacher|the new neighbour)\s+([a-z]+)\b/gi,
          (match, subject, verb) => {
            const lowerVerb = verb.toLowerCase();
            const knownVerb = generatedActionByBase.has(lowerVerb) ||
              irregularVerbByBase.has(lowerVerb) || regularVerbByBase.has(lowerVerb);
            if (!knownVerb || ["is", "has", "does", "can", "will", "should", "must"].includes(lowerVerb)) return match;
            return `${subject} ${thirdPersonPresentForm(lowerVerb)}`;
          }
        );
        corrected = corrected.replace(
          /\b(i|you|we|they|my friends|the students|my parents)\s+([a-z]+s)\b/gi,
          (match, subject, verb) => {
            const base = presentThirdToBase.get(verb.toLowerCase());
            return base ? `${subject} ${base}` : match;
          }
        );
        corrected = corrected.replace(/\b(he|she|it|my sister|our teacher|the new neighbour)\s+do not\b/gi, "$1 does not");
        corrected = corrected.replace(/\b(i|you|we|they|my friends|the students|my parents)\s+does not\b/gi, "$1 do not");
      } else if (tenseId === "first-conditional") {
        corrected = corrected.replace(/\bif\s+(i|he|she|it|we|they|you)\s+would\b/gi, "if $1");
      } else if (tenseId === "second-conditional") {
        corrected = corrected.replace(
          /\bif\s+(i|he|she|it|we|they|you)\s+would\s+([a-z]+)\b/gi,
          (match, subject, verb) => {
            const past = pastSimpleForm(verb);
            return past ? `if ${subject} ${past}` : match;
          }
        );
      } else if (tenseId === "past-simple") {
        corrected = corrected.replace(/\b(i|you|we|they|he|she|it)\s+([a-z]+)\b/gi, (match, subject, verb) => {
          const commonError = commonIrregularPastErrors.get(verb.toLowerCase());
          if (commonError) return `${subject} ${commonError}`;
          const past = pastSimpleForm(verb);
          return past ? `${subject} ${past}` : match;
        });
      } else if (tenseId === "past-continuous") {
        corrected = corrected.replace(/\b(i|he|she|it)\s+were\b/gi, "$1 was");
        corrected = corrected.replace(/\b(we|they|you)\s+was\b/gi, "$1 were");
      } else if (tenseId === "present-continuous") {
        corrected = corrected.replace(/\bi\s+(is|are)\b/gi, "I am");
        corrected = corrected.replace(/\b(he|she|it)\s+(am|are)\b/gi, "$1 is");
        corrected = corrected.replace(/\b(we|they|you)\s+(am|is)\b/gi, "$1 are");
      }
      if (tenseId === "third-conditional") {
        corrected = corrected.replace(
          /\bif\s+(i|he|she|it|we|they|you)\s+would\s+have\s+([a-z]+)\b/gi,
          (match, subject, verb) => {
            const participle = pastParticipleForm(verb);
            return participle ? `if ${subject} had ${participle}` : match;
          }
        );
        corrected = corrected.replace(/\b(i|he|she|it|we|they|you)\s+would of\b/gi, "$1 would have");
      }

      corrected = corrected.replace(/^[a-z]/, (letter) => letter.toUpperCase());
      corrected = corrected.replace(/([.!?])(?:\s*[.!?])+/g, "$1");
      if (!/[.!?]$/.test(corrected)) corrected += ".";
      if (corrected !== original) notes.push(text("localCorrectionNote"));

      const detected = findDetectedTense(corrected);
      if (detected && detected !== tenseId) {
        const detectedName = language === "es"
          ? tenseSpanishNames[detected]
          : tenses.find((tense) => tense.id === detected)?.name || detected;
        const selectedName = language === "es"
          ? tenseSpanishNames[tenseId]
          : tenses.find((tense) => tense.id === tenseId)?.name || tenseId;
        notes.push(text("tenseMismatch").replace("{detected}", detectedName).replace("{selected}", selectedName));
      } else if (detected) {
        const detectedName = language === "es"
          ? tenseSpanishNames[detected]
          : tenses.find((tense) => tense.id === detected)?.name || detected;
        notes.push(`${text("detectedTense")} ${detectedName}.`);
      }
      return { corrected, changed: corrected !== original, notes };
    }

    const irregularPastForms = new Set(
      verbs.flatMap((verb) => verb[1].split("/"))
    );

    function findDetectedTense(sentence) {
      const normalized = normalize(sentence);
      if (/\bif\b/.test(normalized)) {
        if (/\bwould\s+have\b/.test(normalized)) return "third-conditional";
        if (/\bwould\b/.test(normalized)) return "second-conditional";
        if (/\bwill\b/.test(normalized)) return "first-conditional";
        if (/\bif\b[^,]*\b(?:was|were|had|went|saw|did|ate|came|made|took|got|found|knew|thought|left|felt|kept|said|told|became|began)\b/.test(normalized) ||
            /\bif\b[^,]*\b\w+ed\b/.test(normalized)) return "second-conditional";
        return "zero-conditional";
      }
      if (/\b(?:am|is|are)\s+going\s+to\s+\w+/.test(normalized)) return "future-going-to";
      if (/\bwill\s+\w+/.test(normalized)) return "future-will";
      if (/\b(?:am|is|are)\s+\w+ing\b/.test(normalized)) return "present-continuous";
      if (/\b(?:was|were)\s+\w+ing\b/.test(normalized)) return "past-continuous";
      if (/\b(?:have|has)\s+\w+(?:ed|en)\b/.test(normalized)) return "present-perfect";
      if (/\bhad\s+\w+(?:ed|en)\b/.test(normalized)) return "past-perfect";
      const words = normalized.match(/\b[a-z]+(?:'[a-z]+)?\b/g) || [];
      if (words.some((word) => /ed$/.test(word) || irregularPastForms.has(word))) return "past-simple";
      return "present-simple";
    }

    async function correctTenseAnswer(event) {
      event.preventDefault();
      if (["write", "free"].includes($("tense-mode").value)) {
        const feedback = $("tense-feedback");
        feedback.className = "feedback-box bad";
        feedback.textContent = text("writingDisabled");
        feedback.classList.remove("hidden");
        return;
      }
      const answer = $("tense-answer").value.trim();
      if (!normalize(answer)) return;
      const feedback = $("tense-feedback");
      feedback.className = "feedback-box";
      if ($("tense-mode").value === "translate") {
        const clean = (text) => normalize(text).replace(/[.!?,;:]/g, "");
        const expectedAnswer = language === "es" ? currentPrompt[1] : currentPrompt[0];
        const correct = clean(answer) === clean(expectedAnswer);
        feedback.textContent = correct
          ? `${text("correctTranslation")} “${expectedAnswer}”`
          : `${text("incorrectTranslation")} “${expectedAnswer}”`;
        feedback.classList.add(correct ? "good" : "bad");
      } else {
        const submitButton = $("tense-submit");
        const anotherButton = $("new-tense-prompt");
        submitButton.disabled = true;
        anotherButton.disabled = true;
        $("tense-answer").disabled = true;
        feedback.textContent = text("correctingSentence");
        feedback.classList.remove("hidden");
        try {
          const response = await fetch("/api/correct", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text: answer })
          });
          const result = await response.json();
          if (!response.ok) {
            const error = new Error(result.message || `Request failed (${response.status}).`);
            error.code = result.code;
            throw error;
          }
          if (typeof result.correctedText !== "string") throw new Error("DeepL returned an invalid correction.");
          feedback.replaceChildren();
          const sentence = document.createElement("span");
          const changed = result.correctedText.trim() !== answer.trim();
          sentence.textContent = `${text(changed ? "correctedSentence" : "sentenceAlreadyCorrect")} “${result.correctedText}”`;
          feedback.append(sentence);
          const detected = findDetectedTense(result.correctedText);
          const detectedName = language === "es"
            ? tenseSpanishNames[detected]
            : tenses.find((tense) => tense.id === detected)?.name || detected;
          const selectedId = $("tense-mode").value === "free" ? detected : selectedTense().id;
          const notes = selectedId !== detected
            ? [text("tenseMismatch").replace("{detected}", detectedName).replace(
              "{selected}",
              language === "es"
                ? tenseSpanishNames[selectedId]
                : tenses.find((tense) => tense.id === selectedId)?.name || selectedId
            )]
            : [];
          notes.forEach((note) => {
            const detail = document.createElement("p");
            detail.textContent = note;
            detail.style.margin = "8px 0 0";
            feedback.append(detail);
          });
          feedback.classList.add(changed || notes.length ? "bad" : "good");
        } catch (error) {
          console.error("No se pudo corregir la frase con DeepL.", error);
          const messages = {
            es: {
              missing_api_key: "Configura DEEPL_API_KEY en el archivo .env para activar la corrección.",
              invalid_api_key: "DeepL ha rechazado la clave API. Comprueba DEEPL_API_KEY.",
              permission_denied: "La clave de DeepL no tiene permiso para corregir textos.",
              rate_limited: "DeepL está recibiendo demasiadas solicitudes. Espera un momento y vuelve a intentarlo.",
              quota_exceeded: "Se ha agotado la cuota de la API de DeepL.",
              deepl_unavailable: "No se pudo conectar con DeepL. Comprueba tu conexión a Internet e inténtalo de nuevo.",
              deepl_error: "DeepL no pudo corregir la frase. Inténtalo más tarde."
            },
            en: {
              missing_api_key: "Set DEEPL_API_KEY in the .env file to enable correction.",
              invalid_api_key: "DeepL rejected the API key. Check DEEPL_API_KEY.",
              permission_denied: "This DeepL key does not have permission to correct text.",
              rate_limited: "DeepL is receiving too many requests. Wait a moment and try again.",
              quota_exceeded: "The DeepL API quota has been exhausted.",
              deepl_unavailable: "Could not connect to DeepL. Check your internet connection and try again.",
              deepl_error: "DeepL could not correct the sentence. Try again later."
            }
          };
          feedback.textContent = error?.code && messages[language][error.code]
            ? messages[language][error.code]
            : error instanceof TypeError
              ? messages[language].deepl_unavailable
              : error instanceof Error
                ? error.message
                : messages[language].deepl_error;
          feedback.classList.add("bad");
        } finally {
          submitButton.disabled = false;
          anotherButton.disabled = false;
          $("tense-answer").disabled = false;
        }
      }
      feedback.classList.remove("hidden");
    }

    $("answer-form").addEventListener("submit", submitAnswer);
    $("next-button").addEventListener("click", newQuestion);
    $("skip-button").addEventListener("click", () => {
      streak = 0;
      updateStats();
      save();
      newQuestion();
    });
    $("practice-tab").addEventListener("click", () => setTab("practice"));
    $("list-tab").addEventListener("click", () => setTab("list"));
    $("regular-tab").addEventListener("click", () => setTab("regular"));
    $("tenses-tab").addEventListener("click", () => setTab("tenses"));
    $("irregular-search").addEventListener("input", () => {
      irregularPage = 0;
      renderList();
    });
    $("irregular-previous").addEventListener("click", () => {
      irregularPage = Math.max(0, irregularPage - 1);
      renderList();
    });
    $("irregular-next").addEventListener("click", () => {
      irregularPage += 1;
      renderList();
    });
    $("regular-list-previous").addEventListener("click", () => {
      regularPage = Math.max(0, regularPage - 1);
      renderRegularList();
    });
    $("regular-list-next").addEventListener("click", () => {
      regularPage += 1;
      renderRegularList();
    });
    $("regular-form").addEventListener("submit", submitRegular);
    $("regular-next").addEventListener("click", newRegularQuestion);
    $("tense-select").addEventListener("change", renderTense);
    $("tense-mode").addEventListener("change", newTensePrompt);
    $("new-tense-prompt").addEventListener("click", newTensePrompt);
    $("tense-form").addEventListener("submit", correctTenseAnswer);
    $("language-toggle").addEventListener("click", () => {
      language = language === "es" ? "en" : "es";
      try {
        localStorage.setItem("verbquest-language", language);
      } catch (error) {
        console.warn("No se pudo guardar el idioma elegido.", error);
      }
      applyLanguage();
    });
    partSelect.addEventListener("change", () => {
      roundCorrect = 0;
      roundIds = new Set();
      questionDeck = [];
      lastQuestionVerb = null;
      $("lesson-name").textContent = `Parte ${Number(partSelect.value) + 1}`;
      updateStats();
      save();
      renderList();
      newQuestion();
    });

    applyLanguage();