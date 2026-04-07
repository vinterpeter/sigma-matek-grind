const classicBrainrots = [
  {
    id: "skibidi_toilet",
    name: "Skibidi Toilet",
    category: "classic",
    rarity: "Legendary",
    image: "images/skibidi_toilet.webp",
    prompt: null,
    story: "Egy titokzatos fej aki a WC-ből bukkan elő és folyton énekel! Senki sem tudja leállítani, és egyre erősebb lesz. A Kamerafejűek próbálják megállítani, de ő mindig visszatér! 🚽",
    kidRating: "safe"
  },
  {
    id: "gigachad",
    name: "GigaChad",
    category: "classic",
    rarity: "Epic",
    image: "images/gigachad.jpg",
    prompt: null,
    story: "A legerősebb és legmagabiztosabb hős az egész világon! Sosem fél semmitől és mindenre azt mondja: 'Igen.' A gyengébbek felnéznek rá, mert ő a tökéletes bajnok! 💪",
    kidRating: "safe"
  },
  {
    id: "amogus",
    name: "Amogus",
    category: "classic",
    rarity: "Rare",
    image: "images/among_us.jpg",
    prompt: null,
    story: "Egy kis űrhajós aki mindenhol ott van és mindig gyanúsan viselkedik! Senki sem tudja, hogy ő a kém vagy sem. Ha meglátod a formáját valahol, kiáltsd: 'Gyanús!' 📮",
    kidRating: "safe"
  },
  {
    id: "doge",
    name: "Doge",
    category: "classic",
    rarity: "Legendary",
    image: "images/doge.jpg",
    prompt: null,
    story: "Kabosu egy bölcs kutya aki mindig ferdén néz és mindent tud. Ha valami nagyon tetszik neki, azt mondja 'Hűha!' Ha meglepődik, nagy szemeket mereszt. Mindenki szereti mert mindig vicces fejeket vág! 🐕",
    kidRating: "safe"
  },
  {
    id: "pepe",
    name: "Pepe the Frog",
    category: "classic",
    rarity: "Epic",
    image: "images/pepe.jpg",
    prompt: null,
    story: "Pepe egy zöld béka aki minden nap mást érez — néha boldog, néha szomorú, néha mérges. De akármilyen napja is van, a barátai mindig mellette állnak. Ő a legérzékenyebb kis béka a világon! 🐸",
    kidRating: "safe"
  },
  {
    id: "nyan_cat",
    name: "Nyan Cat",
    category: "classic",
    rarity: "Rare",
    image: "images/nyan_cat.png",
    prompt: null,
    story: "Egy varázslatos macska akinek sütemény teste van és szivárványt húz maga után az űrben! Soha nem áll meg, örökké repül és énekel: nyan nyan nyan! Ahol elszáll, minden színes lesz! 🌈",
    kidRating: "safe"
  },
  {
    id: "capybara",
    name: "Capybara OK I Pull Up",
    category: "classic",
    rarity: "Rare",
    image: "images/capybara.jpg",
    prompt: null,
    story: "A világ legnyugodtabb állata! Soha nem stresszel, mindenkivel jóban van, még a krokodilokkal is. Ha baj van, ő csak lazán odabattyog és leül. Mindenki szeretne olyan nyugodt lenni mint ő! 🫡",
    kidRating: "safe"
  },
  {
    id: "bingus",
    name: "Bingus",
    category: "classic",
    rarity: "Epic",
    image: "images/bingus.jpg",
    prompt: null,
    story: "Bingus egy kopasz macska akinek nincs szőre, de emiatt csak még különlegesebb! Nagy rózsaszín fülei vannak és úgy néz ki mint egy kis földönkívüli herceg. A legjobb barátja Big Floppa! 🐱",
    kidRating: "safe"
  },
  {
    id: "shrek",
    name: "Shrek",
    category: "classic",
    rarity: "Legendary",
    image: "images/shrek.png",
    prompt: null,
    story: "Egy zöld óriás aki a mocsarában él és imádja a nyugalmat. Kicsit mogorva, de valójában a legkedvesebb szívű lény a mesében. A legjobb barátja Szamár, aki sosem hagyja békén! 💚",
    kidRating: "safe"
  },
  {
    id: "rickroll",
    name: "Rick Astley",
    category: "classic",
    rarity: "Mythic",
    image: "images/rickroll.jpg",
    prompt: null,
    story: "Rick egy titokzatos énekes aki mindig akkor jelenik meg amikor nem számítasz rá! Megnyitsz egy ajtót — és ő énekel. Benézel egy dobozba — és ő énekel. Sosem hagy cserben és sosem mond búcsút! 🎤",
    kidRating: "safe"
  },
  {
    id: "trollface",
    name: "Trollface",
    category: "classic",
    rarity: "Epic",
    image: "images/trollface.png",
    prompt: "trollface meme, black and white line drawing of a grinning face with wide mischievous smile, simple hand-drawn internet meme style, white background, classic rage comic character",
    story: "A csínytevés nagymestere! Ez a vigyorgó arc mindig akkor jelenik meg, amikor valaki becsapott téged. Hiába próbálod elkapni, ő mindig gyorsabb és mindig nevet! 😏",
    kidRating: "safe"
  },
  {
    id: "wojak",
    name: "Wojak",
    category: "classic",
    rarity: "Common",
    image: "images/wojak.jpg",
    prompt: "wojak meme face, simple black outline drawing of a bald man with a sad melancholic expression, feels guy, white background, minimalist line art internet meme",
    story: "Szegény Wojak egy szomorú kis fickó aki mindig mindenen elgondolkodik. Néha nagyon bánatosan néz, de a barátai mindig felvidítják. Ha szomorú vagy, tudod hogy Wojak megért téged! 😔",
    kidRating: "safe"
  },
  {
    id: "stonks",
    name: "Stonks",
    category: "classic",
    rarity: "Common",
    image: "images/stonks.jpg",
    prompt: "stonks meme, 3D rendered bald mannequin head man in business suit standing in front of orange upward trending stock market graph with green arrow, the word STONKS at the top, surreal meme style",
    story: "Egy öltönyös bábu akinek mindig jól mennek a dolgai — legalábbis ő azt hiszi! Mindenre rábólint és azt mondja: 'Ez üzlet!' Még ha hülyeséget csinál, akkor is nagyon okosnak érzi magát! 📈",
    kidRating: "safe"
  },
  {
    id: "distracted_boyfriend",
    name: "Distracted Boyfriend",
    category: "classic",
    rarity: "Common",
    image: "images/distracted_boyfriend.jpg",
    prompt: "distracted boyfriend meme, stock photo of a man walking with his girlfriend turning to look at another attractive woman passing by, girlfriend looking shocked and jealous, on a city street, bright daylight",
    story: "Egy fiú aki sétál a barátnőjével, de folyton hátranéz valami újra és izgalmasabbra. A barátnője mindig mérges lesz! Ez mindig úgy van, ha az ember nem figyel arra ami fontos! 👀",
    kidRating: "safe"
  },
  {
    id: "this_is_fine",
    name: "This Is Fine Dog",
    category: "classic",
    rarity: "Common",
    image: "images/this_is_fine.jpg",
    prompt: "this is fine meme, cartoon dog sitting at a table drinking coffee in a room that is on fire, calm expression, flames everywhere, comic panel style, the dog says this is fine",
    story: "Egy kis kutya aki nyugodtan kávézik, miközben minden lángol körülötte. 'Minden rendben!' — mondja, de hát semmi sincs rendben! Ő a leghiggadtabb kutya a világon, még ha baj is van! 🔥",
    kidRating: "safe"
  },
  {
    id: "sigma_bateman",
    name: "Patrick Bateman (Sigma)",
    category: "classic",
    rarity: "Epic",
    image: "images/sigma_bateman.png",
    prompt: "Patrick Bateman sigma male meme, Christian Bale as American Psycho character in business suit, intense stare, slicked back hair, dark moody lighting, sigma male grindset aesthetic, VHS filter",
    story: "Egy titokzatos öltönyös alak aki mindig tökéletesen néz ki és nagyon komolyan veszi magát. Egyedül jár a saját útján és sosem kér segítséget senkitől. Ő a magányos farkas! 🎬",
    kidRating: "older"
  },
  {
    id: "walter_white",
    name: "Walter White / Heisenberg",
    category: "classic",
    rarity: "Epic",
    image: "images/walter_white.png",
    prompt: "Walter White Heisenberg meme, bald man with goatee wearing black hat and sunglasses, intense stare, dark background, Breaking Bad character portrait, dramatic lighting, I am the danger",
    story: "Egy kopasz bácsi kalapban és napszemüvegben aki azt hiszi magáról, hogy ő a világ legveszélyesebb embere. Nagyon keményen néz mindenkire és azt mondja: 'Én vagyok a veszély!' 🎩",
    kidRating: "older"
  },
  {
    id: "mr_incredible_uncanny",
    name: "Mr. Incredible Uncanny",
    category: "classic",
    rarity: "Rare",
    image: "images/mr_incredible_uncanny.jpg",
    prompt: "Mr Incredible becoming uncanny meme, progression from normal smiling Mr Incredible Pixar character to increasingly dark creepy distorted horror version, unsettling, dark background",
    story: "A Hihetetlen család szuperhőse először boldogan mosolyog, de ahogy egyre furcsább dolgok történnek vele, az arca is egyre furcsább lesz. Minél rosszabb a helyzet, annál ijesztőbb a feje! 😨",
    kidRating: "older"
  },
  {
    id: "quandale_dingle",
    name: "Quandale Dingle",
    category: "classic",
    rarity: "Rare",
    image: "images/quandale_dingle.jpg",
    prompt: "Quandale Dingle meme, distorted grotesque face with exaggerated features, surreal portrait, warped facial proportions, dark humor meme style, unsettling and funny",
    story: "Egy titokzatos alak akinek olyan vicces neve van, hogy senki sem tudja kimondani nevetés nélkül! Az arca is mindig furcsán el van torzulva, de ettől csak viccesebb lesz! 🤪",
    kidRating: "older"
  },
  {
    id: "grimace_shake",
    name: "Grimace Shake",
    category: "classic",
    rarity: "Rare",
    image: "images/grimace_shake.jpg",
    prompt: "Grimace Shake meme, large purple milkshake from McDonalds with purple color, Grimace character birthday shake, found footage horror style aftermath, spilled purple liquid everywhere",
    story: "Egy hatalmas lila turmix ami titokzatos erővel bír! Aki megissza, furcsa dolgok történnek vele és mindenhol lila folyadékot hagy maga után. Senki sem tudja mi van benne! 💜",
    kidRating: "older"
  },
  {
    id: "big_floppa",
    name: "Big Floppa",
    category: "classic",
    rarity: "Rare",
    image: "images/big_floppa.jpg",
    prompt: "Big Floppa meme, caracal cat with large distinctive pointed ears, majestic sitting pose, looking directly at camera, indoor setting, cute exotic wild cat, meme aesthetic",
    story: "Floppa egy fenséges nagyfülű vadmacska aki úgy néz mindenkire mint egy igazi király. A legjobb barátja Bingus, és együtt a legmenőbb páros! Hatalmas fülei miatt mindent hall! 🐾",
    kidRating: "safe"
  },
  {
    id: "cheems",
    name: "Cheems",
    category: "classic",
    rarity: "Common",
    image: "images/cheems.jpg",
    prompt: "Cheems meme, small chubby shiba inu dog with teary sad eyes, derpy expression, cute and pathetic looking, the dog that says bonk, simple background",
    story: "Cheems egy kicsi, gömbölyű kutya aki imádja a hamburgereket és mindig kicsit szomorú szemmel néz. Ha valaki rosszat csinál, odamegy és fejbe koppintja. Ő a rend őre! 🍔",
    kidRating: "safe"
  },
  {
    id: "surprised_pikachu",
    name: "Surprised Pikachu",
    category: "classic",
    rarity: "Common",
    image: "images/surprised_pikachu.png",
    prompt: "surprised Pikachu meme face, yellow Pokemon Pikachu with wide open mouth and big shocked eyes, simple Pokemon anime style, reaction meme, white background",
    story: "Pikachu a világ legmeglepődősebb kis lénye! Bármit csinálsz, ő mindig tátott szájjal áll és csodálkozik. Még ha ugyanaz történik százszor is, ő mindig ugyanúgy elámul! ⚡",
    kidRating: "safe"
  },
  {
    id: "drake_hotline",
    name: "Drake Hotline Bling",
    category: "classic",
    rarity: "Common",
    image: "images/drake_hotline.jpg",
    prompt: "Drake hotline bling meme template, two panel meme, top panel man in yellow jacket looking away dismissively with hand up, bottom panel same man pointing and smiling approvingly, clean simple style",
    story: "Egy nagyon válogatós alak sárga kabátban aki mindig pontosan tudja mit szeret és mit nem! Ha nem tetszik valami, elfordul. Ha igen, boldogan bólint. Nála nincs köztes út! 🎵",
    kidRating: "safe"
  },
  {
    id: "harambe",
    name: "Harambe",
    category: "classic",
    rarity: "Epic",
    image: "images/harambe.jpg",
    prompt: "Harambe the gorilla memorial meme, majestic silverback western lowland gorilla portrait, dignified pose, golden light, memorial tribute style, RIP Harambe",
    story: "Harambe egy fenséges ezüsthátú gorilla aki a dzsungel védelmezője volt. Mindenki tisztelte az erejét és a bölcsességét. Az állatok birodalmának igazi hőse, akiről soha nem feledkeznek meg! 🦍",
    kidRating: "older"
  },
  {
    id: "grumpy_cat",
    name: "Grumpy Cat",
    category: "classic",
    rarity: "Rare",
    image: "images/grumpy_cat.jpg",
    prompt: "Grumpy Cat meme, small cat with permanently grumpy angry facial expression, flat face, snowshoe siamese mix cat, annoyed look, famous internet cat, simple background",
    story: "Ez a cica mindig mérgesnek látszik, de valójában egy kedves szívű macska! Egyszerűen ilyen az arca és ezen nem tud változtatni. Ha kérdezel tőle valamit, a válasz mindig: 'Nem!' 😾",
    kidRating: "safe"
  },
  {
    id: "hide_pain_harold",
    name: "Hide the Pain Harold",
    category: "classic",
    rarity: "Common",
    image: "images/hide_pain_harold.jpg",
    prompt: "Hide the Pain Harold meme, elderly man with white hair and short beard forcing an awkward smile while eyes show hidden pain, stock photo style portrait, indoor lighting, uncomfortable smile",
    story: "Harold bácsi mindig mosolyog, de a szeméből látszik hogy belül egy kicsit szomorú. Ő a világ legbátrabb mosolygója, mert bármi is történik, kitartóan mosolyog tovább! 🇭🇺",
    kidRating: "safe"
  },
  {
    id: "woman_yelling_cat",
    name: "Woman Yelling at Cat",
    category: "classic",
    rarity: "Common",
    image: "images/woman_yelling_cat.jpg",
    prompt: "woman yelling at cat meme, two panel meme with angry blonde woman pointing and screaming on left, confused white cat sitting at dinner table with plate of food on right, reaction meme",
    story: "Egy mérges néni kiabál, de a másik oldalon egy teljesen zavarodott fehér macska ül az asztalnál a vacsorája előtt. A macska fogalma sincs miért kiabálnak vele. Szegény cica! 🐱",
    kidRating: "safe"
  },
  {
    id: "disaster_girl",
    name: "Disaster Girl",
    category: "classic",
    rarity: "Rare",
    image: "images/disaster_girl.jpg",
    prompt: "disaster girl meme, young girl with devious smirk looking at camera while a house burns in the background, fire in background, evil smile, iconic meme photo",
    story: "Egy kislány aki huncut mosollyal áll miközben a háta mögött egy ház lángol. Mindenki azt hiszi ő okozta, de valójában csak nagyon büszke a kis titkaira. Ő a csínytevők királynője! 😈",
    kidRating: "safe"
  },
  {
    id: "baby_yoda",
    name: "Baby Yoda (Grogu)",
    category: "classic",
    rarity: "Rare",
    image: "images/baby_yoda.jpg",
    prompt: "Baby Yoda Grogu meme, adorable small green alien creature with big eyes and pointy ears, wearing brown robes, cute expression, Star Wars The Mandalorian character, sipping soup",
    story: "Grogu egy pici zöld lény nagy fülekkel és hatalmas szemekkel aki imádja a levest szürcsölni. Varázsereje van, de legtöbbször csak cukiskodik és mindent a szájába vesz. A világ legédesebb kis zöld babája! 💚",
    kidRating: "safe"
  },
  {
    id: "thanos",
    name: "Thanos (Inevitable)",
    category: "classic",
    rarity: "Epic",
    image: "images/thanos.jpg",
    prompt: "Thanos meme, large purple titan with golden infinity gauntlet, snapping fingers, I am inevitable pose, dramatic Marvel cinematic style, glowing infinity stones",
    story: "Thanos egy hatalmas lila óriás arany kesztyűvel, ami hat varázskővel van díszítve. Ha csettint egyet, bármi megtörténhet! Azt mondja: 'Elkerülhetetlen vagyok!' — és sajnos igaza van! ♾️",
    kidRating: "safe"
  },
  {
    id: "coffin_dance",
    name: "Coffin Dance",
    category: "classic",
    rarity: "Rare",
    image: "images/coffin_dance.jpg",
    prompt: "coffin dance meme, group of Ghanaian pallbearers in black suits carrying a coffin while dancing, celebratory funeral dance, joyful expressions, astronomia song meme",
    story: "Öltönyös bácsik akik vidám zenére táncolnak! Mindig akkor jelennek meg, amikor valakinek nem sikerül valami és nagy baj lesz belőle. A táncuk olyan jó, hogy mindenki velük együtt mozog! 🎶",
    kidRating: "older"
  },
  {
    id: "rickroll_cat",
    name: "Keyboard Cat",
    category: "classic",
    rarity: "Common",
    image: "images/rickroll_cat.jpg",
    prompt: "keyboard cat meme, orange tabby cat wearing a blue shirt sitting upright and playing an electronic keyboard piano, vintage video style, funny cat playing music",
    story: "Egy narancsszínű cica kék ingben aki zongorázik! Ő az állatvilág legjobb zenésze — ha valami vicces történik, ő mindig ott van hogy eljátssza a zárózenét. Tapsoljatok neki! 🎹",
    kidRating: "safe"
  },
  {
    id: "success_kid",
    name: "Success Kid",
    category: "classic",
    rarity: "Common",
    image: "images/success_kid.jpg",
    prompt: "success kid meme, toddler on a beach with a determined fist pump expression, clenched fist, sand in hand, triumphant baby face, red shirt, classic internet meme photo",
    story: "Egy elszánt kisbaba a tengerparton aki diadalmas ökölbe szorítja a kezét! Ha valami sikerül neked, ő pontosan azt az arcot vágja amit te érzel belül. A győzelem bajnoka! ✊",
    kidRating: "safe"
  },
  {
    id: "expanding_brain",
    name: "Expanding Brain",
    category: "classic",
    rarity: "Common",
    image: "images/expanding_brain.jpg",
    prompt: "expanding brain meme, four panel vertical meme showing progressively larger and more glowing illuminated brains, from normal small brain to cosmic galaxy brain, surreal ascending intelligence meme",
    story: "Egy varázsló akinek az agya egyre nagyobb és fényesebb lesz minél hülyébb ötlete támad! Minél butább a gondolat, annál jobban ragyog a feje. A legnagyobb agy a galaxisban! 🧠",
    kidRating: "safe"
  },
  {
    id: "uno_reverse",
    name: "UNO Reverse Card",
    category: "classic",
    rarity: "Common",
    image: "images/uno_reverse.jpg",
    prompt: "UNO reverse card meme, close up of the UNO reverse card game card with circular arrow symbol, red or blue card, bold colors, clean graphic, the ultimate counter move",
    story: "A legerősebb kártya a világon! Ha valaki csúnyát mond neked, előveszed és minden visszaszáll rá. Nincs ellene védekezés! Ez a végső fegyver minden vitában! 🔄",
    kidRating: "safe"
  },
  {
    id: "pog_pogchamp",
    name: "PogChamp",
    category: "classic",
    rarity: "Common",
    image: "images/pog_pogchamp.png",
    prompt: "PogChamp emote meme face, man with extremely excited surprised open mouth expression, wide eyes, amazed reaction face, Twitch emote style, hype moment expression",
    story: "Egy fickó aki annyira izgatott, hogy a szája tátva marad és a szemei kidüllednek! Mindig akkor jelenik meg, ha valami hihetetlen és elképesztő dolog történik. A meglepődés királya! 😲",
    kidRating: "safe"
  },
  {
    id: "trollge",
    name: "Trollge",
    category: "classic",
    rarity: "Rare",
    image: "images/trollge.jpg",
    prompt: "trollge meme, dark horrifying distorted version of trollface, creepy black and white, horror style, unsettling smile becoming sinister, glitch art, creepypasta aesthetic",
    story: "A Trollface sötét árnyéka, aki az éjszaka leple alatt kószál! Régen vicces vigyorgó arc volt, de valami megváltoztatta és most titokzatos és rejtélyes lett. Jobb ha nem találkozol vele sötétben! 👁️",
    kidRating: "older"
  },
  {
    id: "npc_wojak",
    name: "NPC Wojak",
    category: "classic",
    rarity: "Common",
    image: "images/npc_wojak.jpg",
    prompt: "NPC wojak meme face, grey simple expressionless face with straight line mouth and dot eyes, no emotions, robotic blank stare, grey skin, minimalist drawing, non-player character meme",
    story: "Egy szürke arcú lény akinek soha semmilyen érzése nincs. Mindig ugyanazt csinálja, ugyanazt mondja, és soha nem gondolkodik magától. Olyan mint egy háttérszereplő aki nem veszi észre a világot! 🤖",
    kidRating: "safe"
  },
  {
    id: "giga_chad_yes",
    name: "Yes Chad",
    category: "classic",
    rarity: "Common",
    image: "images/giga_chad_yes.png",
    prompt: "Yes Chad meme, muscular blonde bearded Nordic man drawn in simple black and white comic style saying yes, side profile view, confident expression, simple line art meme",
    story: "Egy erős szőke szakállas harcos aki mindenre csak annyit mond: 'Igen.' Nem magyarázkodik, nem vitatkozik, egyszerűen magabiztosan elfogad mindent. A kevés szó bajnoka! 🗿",
    kidRating: "safe"
  },
  {
    id: "spongebob_mock",
    name: "Mocking SpongeBob",
    category: "classic",
    rarity: "Common",
    image: "images/spongebob_mock.png",
    prompt: "mocking SpongeBob meme, SpongeBob SquarePants character in chicken-like pose with alternating upper and lower case text style, bent posture, silly mocking expression, cartoon style",
    story: "SpongyaBob amikor csirke módra áll és utánoz valakit! Görbén hajol, furcsa hangon beszél és mindent visszamond amit hallott. A legjobb utánzó a tenger alatt! 🐔",
    kidRating: "safe"
  },
  {
    id: "crying_cat",
    name: "Crying Cat",
    category: "classic",
    rarity: "Common",
    image: "images/crying_cat.jpg",
    prompt: "crying cat meme, close up photo of a cat with photoshopped glossy teary eyes and sad expression, tearful feline, emotional cat face, thumbs up crying cat variant",
    story: "Egy macska akinek könnyes a szeme, de közben bátran mosolyog és hüvelykujját mutatja. Olyan mint amikor szomorú vagy belül, de azért tartod magad és azt mondod: 'Rendben vagyok!' 😿",
    kidRating: "safe"
  },
  {
    id: "trade_offer",
    name: "Trade Offer",
    category: "classic",
    rarity: "Common",
    image: "images/trade_offer.jpg",
    prompt: "trade offer meme, young man in white t-shirt with hands gesturing presenting a deal, TikTok trade offer format, I receive you receive meme template, casual indoor setting",
    story: "A világ legnagyobb kereskedője aki mindig cserét ajánl! 'Én kapok valamit, te kapsz valamit!' — mondja. De az ő ajánlatai sosem igazságosak, és ez a vicces benne! 🤝",
    kidRating: "safe"
  },
  {
    id: "ight_imma_head_out",
    name: "Ight Imma Head Out",
    category: "classic",
    rarity: "Common",
    image: "images/ight_imma_head_out.jpg",
    prompt: "ight imma head out SpongeBob meme, SpongeBob SquarePants character standing up from chair about to leave, getting up to go, cartoon still frame, determined to leave expression",
    story: "SpongyaBob feláll a székéből és csendben kimegy. Amikor valami kínos vagy unalmas dolog történik, ő egyszerűen felkel és eltűnik. A diszkrét távozás mestere! 🚶",
    kidRating: "safe"
  },
  {
    id: "always_has_been",
    name: "Always Has Been",
    category: "classic",
    rarity: "Rare",
    image: "images/always_has_been.png",
    prompt: "always has been meme, two astronauts in space looking at Earth, one astronaut pointing a gun at the other from behind, wait its all ohio always has been, dramatic space scene",
    story: "Két űrhajós lebeg a Föld felett. Az egyik rádöbben valami nagy titokra, a másik mögötte áll és azt súgja: 'Mindig is így volt.' Kiderül, hogy semmi sem az, aminek gondoltuk! 🌍",
    kidRating: "older"
  },
  {
    id: "metal_pipe",
    name: "Metal Pipe Falling",
    category: "classic",
    rarity: "Common",
    image: "images/metal_pipe.jpg",
    prompt: "metal pipe falling sound effect meme, steel metal pipe hitting concrete floor in dark industrial setting, dramatic impact moment, sound effect meme visual, construction site",
    story: "Egy varázslatos fémcső ami mindig váratlanul leesik és hatalmas csattanást ad! Senki sem tudja honnan jön, de ha hallod a hangját, garantáltan megugrod a helyeden! 🔔",
    kidRating: "safe"
  },
  {
    id: "ohio",
    name: "Only in Ohio",
    category: "classic",
    rarity: "Rare",
    image: "images/ohio.png",
    prompt: "only in ohio meme, surreal bizarre scene with strange creatures and absurd situations on an American suburban street, Ohio flag, weird cursed imagery, dreamlike horror comedy aesthetic",
    story: "Ohio egy titokzatos királyság ahol a legfurcsább és legbolondabb dolgok történnek! Járó házak, repülő állatok és fordított szivárványok — itt bármi megtörténhet. A világ legkülönösebb helye! 🌽",
    kidRating: "safe"
  },
  {
    id: "vine_boom",
    name: "Vine Boom Sound Effect",
    category: "classic",
    rarity: "Common",
    image: "images/vine_boom.png",
    prompt: "vine boom sound effect meme, dramatic zoom in on a person's face with red glowing eyes, bass boosted moment, the rock eyebrow raise style, dramatic reaction close up",
    story: "Egy mély titokzatos BUMM hang ami mindent drámaibbá tesz! Ha valami meglepő történik, ez a hang mindig felhangzik. Olyan mély, hogy megremeg tőle a padló! 💥",
    kidRating: "safe"
  },
  {
    id: "the_rock_eyebrow",
    name: "The Rock Eyebrow Raise",
    category: "classic",
    rarity: "Rare",
    image: "images/the_rock_eyebrow.jpg",
    prompt: "The Rock eyebrow raise meme, Dwayne Johnson raising one eyebrow with suspicious questioning expression, close up face, WWE era, iconic eyebrow raise, sus look",
    story: "A Szikla egy hatalmas izmos hős aki ha valami gyanúsat lát, felemeli az egyik szemöldökét. Ez az egy mozdulat elég ahhoz, hogy mindenki tudja: valami nem stimmel! 🤨",
    kidRating: "safe"
  },
  {
    id: "mewing",
    name: "Mewing",
    category: "classic",
    rarity: "Common",
    image: "images/mewing.png",
    prompt: "mewing meme, person pressing tongue against roof of mouth for jawline, sharp jawline side profile, looksmax aesthetic, before and after comparison style, dramatic lighting, meme humor",
    story: "Egy titkos technika ahol a nyelvedet a szájpadlásodhoz nyomod és attól szebb leszel — legalábbis ezt mondják! Mindenki csinálja, senki sem tudja hogy működik-e, de nagyon mókás közben nézni! 👅",
    kidRating: "safe"
  },
  {
    id: "67",
    name: "67",
    category: "classic",
    rarity: "Rare",
    image: "images/67.jpg",
    prompt: "number 67 meme, the number sixty seven written in bold dramatic style, glowing neon, viral meme aesthetic",
    story: "A titokzatos szám, a 67! Senki sem tudja pontosan miért, de ez a szám mindenhol felbukkan. Ha meglátod, tudod hogy valami különleges dolog fog történni. A Brainrot Birodalom szerencseszáma! 🔢",
    kidRating: "safe"
  }
];
