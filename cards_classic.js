const classicBrainrots = [
  {
    id: "skibidi_toilet", name: "Skibidi Toilet", category: "classic", rarity: "Legendary",
    image: "images/skibidi_toilet.webp", prompt: null,
    story: "A Skibidi Toilet Alekszej Gerasimov grúz animátor YouTube-sorozata, amely 2023 februárjában indult a DaFuq!?Boom! csatornán. A Source Filmmaker (Half-Life) eszközzel készült epizódokban WC-ből kiemelkedő énekes fejek harcolnak a Kamerafejűekkel és TV-fejűekkel. A 2023-as év legnagyobb brainrot jelensége, ami elindította a teljes 'Gen Alpha brainrot' hullámot. 🚽",
    kidRating: "safe"
  },
  {
    id: "gigachad", name: "GigaChad", category: "classic", rarity: "Epic",
    image: "images/gigachad.jpg", prompt: null,
    story: "A GigaChad alapja Ernest Khalimov orosz fitnesz-modell portréja, amit Krista Sudmalis lett fotós készített 2015–2017 között a 'Sleek'n'Tears' projekthez. A digitálisan hangsúlyos állkapocs 2017-től terjed mémként, a 'tökéletes sigma férfi' szimbólumaként. 💪",
    kidRating: "safe"
  },
  {
    id: "amogus", name: "Amogus", category: "classic", rarity: "Rare",
    image: "images/among_us.jpg", prompt: null,
    story: "Az Among Us egy 2018-as multiplayer deduction játék az InnerSloth amerikai stúdiótól (Marcus Bromander, Forest Willard, Amy Liu). A 2020-as pandémia alatt robbant be, amikor Twitch-streamerek népszerűsítették. Az 'Amogus' mém a kis űrhajós sziluettjére utal, amit a rajongók mindenhol felismerni vélnek. 📮",
    kidRating: "safe"
  },
  {
    id: "doge", name: "Doge", category: "classic", rarity: "Legendary",
    image: "images/doge.jpg", prompt: null,
    story: "A Doge mém főszereplője Kabosu, egy japán shiba inu kutya, akit gazdája Atsuko Sato tanárnő fotózott 2010 februárjában a tokiói otthonában. A ferde pillantású kép 2013-ban vált virálissá a Redditen, Comic Sans feliratokkal ('much wow', 'such doge'). Kabosu 2024 májusában, 18 évesen hunyt el. 🐕",
    kidRating: "safe"
  },
  {
    id: "pepe", name: "Pepe the Frog", category: "classic", rarity: "Epic",
    image: "images/pepe.jpg", prompt: null,
    story: "Pepe a zöld béka Matt Furie amerikai képregényrajzoló 2005-ös 'Boy's Club' képregényének szereplője. A 'Feels Good Man' kockából 2008-tól vált internetes mémmé a MySpace-en, majd a 4chanen. Furie 2017-től aktívan próbálta visszavenni a karaktert a politikai kisajátítóktól. 🐸",
    kidRating: "safe"
  },
  {
    id: "nyan_cat", name: "Nyan Cat", category: "classic", rarity: "Rare",
    image: "images/nyan_cat.png", prompt: null,
    story: "A Nyan Cat-et Chris Torres amerikai animátor készítette 2011 április 2-án, eredetileg 'Pop Tart Cat' néven. A pixeles szivárványt húzó macska YouTube videóját a japán 'Nyanyanyanya!' énekkel szerkesztették össze, és az egyik első gif-korszak ikonja lett. Torres 2021-ben NFT-ként 300 Ethereumért eladta az eredetit. 🌈",
    kidRating: "safe"
  },
  {
    id: "capybara", name: "Capybara OK I Pull Up", category: "classic", rarity: "Rare",
    image: "images/capybara.jpg", prompt: null,
    story: "A kapibara (Hydrochoerus hydrochaeris) a világ legnagyobb rágcsálója, Dél-Amerikából. Barátságos, nyugodt természete miatt híres arról, hogy bármilyen állattal elfogadóan viselkedik. A 'OK I Pull Up' TikTok rap 2021-ben tette meme-mé a lazaság jelképeként. 🦫",
    kidRating: "safe"
  },
  {
    id: "bingus", name: "Bingus", category: "classic", rarity: "Epic",
    image: "images/bingus.jpg", prompt: null,
    story: "A Bingus egy valóságos sphynx (szőrtelen) macska, aki 2020 januárjában a Reddit r/Bingus subredditen vált virálissá. Nagy rózsaszín fülei és űrlény-szerű megjelenése miatt Big Floppa mellett a második legismertebb online mémmacska. 🐱",
    kidRating: "safe"
  },
  {
    id: "shrek", name: "Shrek", category: "classic", rarity: "Legendary",
    image: "images/shrek.png", prompt: null,
    story: "A Shrek a DreamWorks 2001-es animációs filmje, Andrew Adamson és Vicky Jenson rendezésében, Mike Myers skót akcentusú hangjával. William Steig 1990-es gyerekkönyvén alapul. A 'Shrek is love, Shrek is life' internet-kultusz 2013 körül indult a 4chanen. 💚",
    kidRating: "safe"
  },
  {
    id: "rickroll", name: "Rick Astley", category: "classic", rarity: "Mythic",
    image: "images/rickroll.jpg", prompt: null,
    story: "A Rickrolling 2007 májusában indult a 4chan /v/ szekcióján — először a GTA IV előzetesének linkjét cserélték le. A mém alapja Rick Astley brit énekes 1987-es 'Never Gonna Give You Up' klipje. Astley maga 2008-ban a Macy's hálaadás parádéján beszállt a poénba, és 2022-ben másfél milliárd megtekintéssel ért el. 🎤",
    kidRating: "safe"
  },
  {
    id: "trollface", name: "Trollface", category: "classic", rarity: "Epic",
    image: "images/trollface.png", prompt: "trollface meme, black and white line drawing of a grinning face with wide mischievous smile, simple hand-drawn internet meme style, white background, classic rage comic character",
    story: "A Trollface rajzot Carlos 'Whynne' Ramirez készítette 2008 szeptember 19-én a DeviantArt-on, a 'Trolls' című MS Paint képregényhez. A vigyorgó fej a 'Problem?' szöveggel a rage comic korszak (2008–2013) egyik legismertebb alakja. 😏",
    kidRating: "safe"
  },
  {
    id: "wojak", name: "Wojak", category: "classic", rarity: "Common",
    image: "images/wojak.jpg", prompt: "wojak meme face, simple black outline drawing of a bald man with a sad melancholic expression, feels guy, white background, minimalist line art internet meme",
    story: "A Wojak ('Feels Guy') 2009 körül tűnt fel a lengyel Vichan imageboardon. A szomorú kopasz férfi szomorú mosolya a 'that feel when' (tfw) szövegekkel az online szomorúság szimbólumává vált. A 'wojak' lengyelül 'harcost' jelent. 😔",
    kidRating: "safe"
  },
  {
    id: "stonks", name: "Stonks", category: "classic", rarity: "Common",
    image: "images/stonks.jpg", prompt: "stonks meme, 3D rendered bald mannequin head man in business suit standing in front of orange upward trending stock market graph with green arrow, the word STONKS at the top, surreal meme style",
    story: "A Stonks mém 2017 júniusában jelent meg a Special Meme Fresh Facebook csoportban. A 3D kopasz 'Meme Man' (orrtalan, kopasz férfi) egy emelkedő grafikon előtt áll. A 'stonks' szándékos elírás a 'stocks'-ra, amit rossz üzleti döntésekre is ironikusan használnak. 📈",
    kidRating: "safe"
  },
  {
    id: "distracted_boyfriend", name: "Distracted Boyfriend", category: "classic", rarity: "Common",
    image: "images/distracted_boyfriend.jpg", prompt: "distracted boyfriend meme, stock photo of a man walking with his girlfriend turning to look at another attractive woman passing by, girlfriend looking shocked and jealous, on a city street, bright daylight",
    story: "Antonio Guillem spanyol fotós 2015-ös stock fotója, eredetileg 'Disloyal man walking with his girlfriend and looking amazed at another seductive girl' címmel a Shutterstockon. A kép 2017 januárjában lett vírusos Twitter-mém. 👀",
    kidRating: "safe"
  },
  {
    id: "this_is_fine", name: "This Is Fine Dog", category: "classic", rarity: "Common",
    image: "images/this_is_fine.jpg", prompt: "this is fine meme, cartoon dog sitting at a table drinking coffee in a room that is on fire, calm expression, flames everywhere, comic panel style, the dog says this is fine",
    story: "A 'This Is Fine' KC Green amerikai képregényrajzoló 2013. január 9-i 'On Fire' Gunshow képregényéből származik. A kávét kortyoló kutya egy égő szobában a tagadás univerzális jelképe lett. Green maga később ironikusan megbánta, hogy örökre ezzel azonosítják. 🔥",
    kidRating: "safe"
  },
  {
    id: "sigma_bateman", name: "Patrick Bateman (Sigma)", category: "classic", rarity: "Epic",
    image: "images/sigma_bateman.png", prompt: "Patrick Bateman sigma male meme, Christian Bale as American Psycho character in business suit, intense stare, slicked back hair, dark moody lighting, sigma male grindset aesthetic, VHS filter",
    story: "A Patrick Bateman sigma mém Christian Bale 2000-es 'Amerikai pszicho' (Mary Harron rendezésében) filmjéből származik. A 2020–2021-es TikTok 'sigma male' trend a karaktert a 'magányos farkas' életmód szimbólumaként használta phonk zenés edit-ekkel. 🎬",
    kidRating: "older"
  },
  {
    id: "walter_white", name: "Walter White / Heisenberg", category: "classic", rarity: "Epic",
    image: "images/walter_white.png", prompt: "Walter White Heisenberg meme, bald man with goatee wearing black hat and sunglasses, intense stare, dark background, Breaking Bad character portrait, dramatic lighting, I am the danger",
    story: "Walter White, aka Heisenberg, a 'Breaking Bad' (AMC, 2008–2013) sorozat főszereplője Vince Gilligan alkotásából, Bryan Cranston alakításában. A kémiatanárból drogbirodalom-vezetővé váló karakter 'Say my name' és 'I am the one who knocks' idézetei a sorozat ikonikus mémkockái. 🎩",
    kidRating: "older"
  },
  {
    id: "mr_incredible_uncanny", name: "Mr. Incredible Uncanny", category: "classic", rarity: "Rare",
    image: "images/mr_incredible_uncanny.jpg", prompt: "Mr Incredible becoming uncanny meme, progression from normal smiling Mr Incredible Pixar character to increasingly dark creepy distorted horror version, unsettling, dark background",
    story: "A Pixar 2004-es 'Hihetetlen család' (Brad Bird rendezésében) Mr. Incredible karakterét használja ez a 2021-től terjedő 'Trauma Phase' mém-sorozat, ahol az arc fokozatosan egyre ijesztőbbé torzul a fázisokon keresztül (1–15). Minden újabb rossz fordulat egy újabb arc. 😨",
    kidRating: "older"
  },
  {
    id: "quandale_dingle", name: "Quandale Dingle", category: "classic", rarity: "Rare",
    image: "images/quandale_dingle.jpg", prompt: "Quandale Dingle meme, distorted grotesque face with exaggerated features, surreal portrait, warped facial proportions, dark humor meme style, unsettling and funny",
    story: "A Quandale Dingle egy valódi név, amit egy 2021-es amerikai gimnáziumi évkönyvben találtak a 4chanon. A név vicces hangzása és AI-val torzított arcok együtt váltak vírussá 2021–2022-ben, a 'goofy ahh' brainrot mémek egyik őseként. 🤪",
    kidRating: "older"
  },
  {
    id: "grimace_shake", name: "Grimace Shake", category: "classic", rarity: "Rare",
    image: "images/grimace_shake.jpg", prompt: "Grimace Shake meme, large purple milkshake from McDonalds with purple color, Grimace character birthday shake, found footage horror style aftermath, spilled purple liquid everywhere",
    story: "A McDonald's 2023 júniusában vezette be a Grimace Birthday Shake lila turmixot Grimace kabala 52. születésnapjára. TikTokon horror-parodia trend lett: fiatalok megkóstolják, majd 'eszméletvesztetten' fekszenek mint egy found footage filmben. 💜",
    kidRating: "older"
  },
  {
    id: "big_floppa", name: "Big Floppa", category: "classic", rarity: "Rare",
    image: "images/big_floppa.jpg", prompt: "Big Floppa meme, caracal cat with large distinctive pointed ears, majestic sitting pose, looking directly at camera, indoor setting, cute exotic wild cat, meme aesthetic",
    story: "A Big Floppa egy valódi karakál macska — eredeti nevén Gag —, akinek gazdája 2020 áprilisától posztolta a fotóit az Instagramon és a Redditen. A hatalmas hegyes 'floppy' fülei tették 'menő hangulatú uralkodó' mémmé. Gag 2024 januárjában elpusztult. 🐾",
    kidRating: "safe"
  },
  {
    id: "cheems", name: "Cheems", category: "classic", rarity: "Common",
    image: "images/cheems.jpg", prompt: "Cheems meme, small chubby shiba inu dog with teary sad eyes, derpy expression, cute and pathetic looking, the dog that says bonk, simple background",
    story: "A Cheems egy valóságos shiba inu kutya, Balltze, Hong Kong-i háziállat. Gazdája 2017-től posztolta Instagramra. A 'Cheems' név a '#Cheemsburger' hashtagból jön, ami a sajtburger iránti imádatát fejezte ki. Balltze 2023 augusztusában, 12 évesen halt meg. 🍔",
    kidRating: "safe"
  },
  {
    id: "surprised_pikachu", name: "Surprised Pikachu", category: "classic", rarity: "Common",
    image: "images/surprised_pikachu.png", prompt: "surprised Pikachu meme face, yellow Pokemon Pikachu with wide open mouth and big shocked eyes, simple Pokemon anime style, reaction meme, white background",
    story: "A Surprised Pikachu képkocka a Pokémon anime 'The Electric Tale of Pikachu' 1997-es epizódjából származik. A tátott szájjal meglepődő Pikachu 2018 októberétől vált mémmé az 'amikor a kiszámítható valóban megtörténik' univerzális reakciójaként. ⚡",
    kidRating: "safe"
  },
  {
    id: "drake_hotline", name: "Drake Hotline Bling", category: "classic", rarity: "Common",
    image: "images/drake_hotline.jpg", prompt: "Drake hotline bling meme template, two panel meme, top panel man in yellow jacket looking away dismissively with hand up, bottom panel same man pointing and smiling approvingly, clean simple style",
    story: "A mém Drake kanadai rapper 2015. október 19-i 'Hotline Bling' videoklipjéből származik (Director X rendezésében). A két panel — felül elutasítás, alul helyeslés — a 2010-es évek legnépszerűbb összehasonlító mém-template-je. 🎵",
    kidRating: "safe"
  },
  {
    id: "harambe", name: "Harambe", category: "classic", rarity: "Epic",
    image: "images/harambe.jpg", prompt: "Harambe the gorilla memorial meme, majestic silverback western lowland gorilla portrait, dignified pose, golden light, memorial tribute style, RIP Harambe",
    story: "Harambe egy 17 éves nyugati síkvidéki gorilla volt a Cincinnati Zoo-ban, akit 2016. május 28-án lőttek le, miután egy 3 éves kisfiú beesett a kifutójába. Halála a 2016-os év legnagyobb internetes jelensége lett, 'RIP Harambe' szlogennel és az állatjóléti viták szimbólumaként. 🦍",
    kidRating: "older"
  },
  {
    id: "grumpy_cat", name: "Grumpy Cat", category: "classic", rarity: "Rare",
    image: "images/grumpy_cat.jpg", prompt: "Grumpy Cat meme, small cat with permanently grumpy angry facial expression, flat face, snowshoe siamese mix cat, annoyed look, famous internet cat, simple background",
    story: "A Grumpy Cat valódi neve Tardar Sauce volt, egy snowshoe-keverék macska Arizonából. 2012 szeptemberében a 19 éves tulajdonos öccse tette fel a Redditre. Az örökös mérges arckifejezést törpenövéses betegség okozta. Tardar Sauce 2019 májusában, 7 évesen halt meg. 😾",
    kidRating: "safe"
  },
  {
    id: "hide_pain_harold", name: "Hide the Pain Harold", category: "classic", rarity: "Common",
    image: "images/hide_pain_harold.jpg", prompt: "Hide the Pain Harold meme, elderly man with white hair and short beard forcing an awkward smile while eyes show hidden pain, stock photo style portrait, indoor lighting, uncomfortable smile",
    story: "Harold valódi neve András Arató, egy magyar nyugdíjas villamosmérnök Budapestről. 2011-től pózolt stock fotókhoz a Dreamstime-on, és 2011–2013 között vált világszerte ismert 'kényszermosoly' mémmé. Ma maga is aktívan részt vesz mém-konferenciákon és előadásokat tart. 🇭🇺",
    kidRating: "safe"
  },
  {
    id: "woman_yelling_cat", name: "Woman Yelling at Cat", category: "classic", rarity: "Common",
    image: "images/woman_yelling_cat.jpg", prompt: "woman yelling at cat meme, two panel meme with angry blonde woman pointing and screaming on left, confused white cat sitting at dinner table with plate of food on right, reaction meme",
    story: "A mém két különálló képből áll össze: Taylor Armstrong 'The Real Housewives of Beverly Hills' 2011-es jelenete, és Smudge nevű macska 2018-as instagram fotója (gazdája Miranda Stillabower). A két képet 2019 májusában rakta össze @MISSINGEGIRL twitter felhasználó. 🐱",
    kidRating: "safe"
  },
  {
    id: "disaster_girl", name: "Disaster Girl", category: "classic", rarity: "Rare",
    image: "images/disaster_girl.jpg", prompt: "disaster girl meme, young girl with devious smirk looking at camera while a house burns in the background, fire in background, evil smile, iconic meme photo",
    story: "A 'Disaster Girl' valódi neve Zoë Roth, akit édesapja David Roth fotózott 2005 januárjában 4 évesen egy North Carolina-i ellenőrzött háztüzi gyakorlatnál. A kép 2008-tól terjedt mémként. 2021-ben a felnőtt Zoë NFT-ként 500.000 dollárért eladta az eredetit. 😈",
    kidRating: "safe"
  },
  {
    id: "baby_yoda", name: "Baby Yoda (Grogu)", category: "classic", rarity: "Rare",
    image: "images/baby_yoda.jpg", prompt: "Baby Yoda Grogu meme, adorable small green alien creature with big eyes and pointy ears, wearing brown robes, cute expression, Star Wars The Mandalorian character, sipping soup",
    story: "Baby Yoda — valódi nevén Grogu — a Star Wars: The Mandalorian Disney+ sorozat 2019-es első évadjából származik. Jon Favreau és Dave Filoni alkotása, Yoda fajtájának 50 éves, de még 'kisbaba' tagja. Azonnal világszenzáció és plüssjáték-eladási rekorder lett. 💚",
    kidRating: "safe"
  },
  {
    id: "thanos", name: "Thanos (Inevitable)", category: "classic", rarity: "Epic",
    image: "images/thanos.jpg", prompt: "Thanos meme, large purple titan with golden infinity gauntlet, snapping fingers, I am inevitable pose, dramatic Marvel cinematic style, glowing infinity stones",
    story: "Thanos a Marvel Comics 1973-as Iron Man #55-ben debütált Jim Starlin alkotásában. Filmes változatát Josh Brolin alakította a 2018-as 'Bosszúállók: Végtelen háború' (Russo testvérek) filmben, ahol a Végtelen Kesztyűvel csettintéssel a világ felét kitörli. 'I am inevitable.' ♾️",
    kidRating: "safe"
  },
  {
    id: "coffin_dance", name: "Coffin Dance", category: "classic", rarity: "Rare",
    image: "images/coffin_dance.jpg", prompt: "coffin dance meme, group of Ghanaian pallbearers in black suits carrying a coffin while dancing, celebratory funeral dance, joyful expressions, astronomia song meme",
    story: "A Coffin Dance a ghánai Benjamin Aidoo 2017 óta működő temetkezési táncosainak — Nana Otafrija Pall Bearing Services — videóiból származik. 2020 februárjától Tony Igy 'Astronomia' elektronikus dalával pandémia-kori mémmé vált. Céljuk az élet ünneplése a gyász helyett. ⚰️",
    kidRating: "older"
  },
  {
    id: "rickroll_cat", name: "Keyboard Cat (Fatso)", category: "classic", rarity: "Common",
    image: "images/rickroll_cat.jpg", prompt: "keyboard cat meme, orange tabby cat wearing a blue shirt sitting upright and playing an electronic keyboard piano, vintage video style, funny cat playing music",
    story: "A Keyboard Cat valódi neve Fatso volt — egy narancsszínű cica, akit gazdája Charlie Schmidt 1984-ben filmezett le, ahogy a mancsait mozgatja egy keyboard felett (gazdája saját keze). A felvétel 2007 júniusában került fel YouTube-ra, és a 'play him off' záró-zene mémje lett. Fatso 1987-ben hunyt el. 🎹",
    kidRating: "safe"
  },
  {
    id: "success_kid", name: "Success Kid", category: "classic", rarity: "Common",
    image: "images/success_kid.jpg", prompt: "success kid meme, toddler on a beach with a determined fist pump expression, clenched fist, sand in hand, triumphant baby face, red shirt, classic internet meme photo",
    story: "A Success Kid valódi neve Sammy Griner, akit édesanyja Laney Griner fotózott 2007 augusztusában 11 hónaposan egy Florida-i strandon. 2015-ben a család GoFundMe kampányt indított Sammy édesapjának vesetranszplantációjához, amiben a mém 100.000+ dollárt hozott. ✊",
    kidRating: "safe"
  },
  {
    id: "expanding_brain", name: "Expanding Brain", category: "classic", rarity: "Common",
    image: "images/expanding_brain.jpg", prompt: "expanding brain meme, four panel vertical meme showing progressively larger and more glowing illuminated brains, from normal small brain to cosmic galaxy brain, surreal ascending intelligence meme",
    story: "Az Expanding Brain mém 2017 januárjában jelent meg a 4chan /tg/ szekcióján, eredetileg Warhammer-hez. A négy egyre 'fejlettebb' agy ironikusan jelöli az egyre butább vagy abszurdabb gondolatokat — a klasszikus 2017-es Twitter-formátum. 🧠",
    kidRating: "safe"
  },
  {
    id: "uno_reverse", name: "UNO Reverse Card", category: "classic", rarity: "Common",
    image: "images/uno_reverse.jpg", prompt: "UNO reverse card meme, close up of the UNO reverse card game card with circular arrow symbol, red or blue card, bold colors, clean graphic, the ultimate counter move",
    story: "Az UNO kártyajátékot 1971-ben találta ki Merle Robbins Readingben, Ohioban. A Reverse kártya az irányt fordítja meg a körben. 2018-tól a Twitteren ironikusan használják a 'no u' visszavágás univerzális szimbólumaként. 🔄",
    kidRating: "safe"
  },
  {
    id: "pog_pogchamp", name: "PogChamp", category: "classic", rarity: "Common",
    image: "images/pog_pogchamp.png", prompt: "PogChamp emote meme face, man with extremely excited surprised open mouth expression, wide eyes, amazed reaction face, Twitch emote style, hype moment expression",
    story: "A PogChamp Twitch emote Ryan Gutierrez ('Gootecks') 2010-es Street Fighter tornamelléki videójából származik, ahol meglepett arcot vág. A 'Pog' a Play Of the Game rövidítése. 2021-ben a Twitch lecserélte, ma változó arcokkal jelenik meg. 😲",
    kidRating: "safe"
  },
  {
    id: "trollge", name: "Trollge", category: "classic", rarity: "Rare",
    image: "images/trollge.jpg", prompt: "trollge meme, dark horrifying distorted version of trollface, creepy black and white, horror style, unsettling smile becoming sinister, glitch art, creepypasta aesthetic",
    story: "A Trollge a klasszikus Trollface sötét, 'creepypasta' változata, ami 2019–2020-ban tűnt fel a Reddit r/TrollgeCommunity szekcióján. A horror-képregények stílusában a jovial vigyor fokozatosan démoni ábrázattá torzul. 👁️",
    kidRating: "older"
  },
  {
    id: "npc_wojak", name: "NPC Wojak", category: "classic", rarity: "Common",
    image: "images/npc_wojak.jpg", prompt: "NPC wojak meme face, grey simple expressionless face with straight line mouth and dot eyes, no emotions, robotic blank stare, grey skin, minimalist drawing, non-player character meme",
    story: "Az NPC Wojak (Non-Player Character) 2018 júliusában jelent meg a 4chan /pol/ szekcióján. A szürke arcú, érzelem nélküli Wojak a 'gondolkodás nélkül ismételgetők' — mint egy videojáték háttérszereplője — szimbóluma lett. 🤖",
    kidRating: "safe"
  },
  {
    id: "giga_chad_yes", name: "Yes Chad (Nordic Gamer)", category: "classic", rarity: "Common",
    image: "images/giga_chad_yes.png", prompt: "Yes Chad meme, muscular blonde bearded Nordic man drawn in simple black and white comic style saying yes, side profile view, confident expression, simple line art meme",
    story: "A Yes Chad / Nordic Gamer mém 2016 körül született a 4chanen. A szakállas szőke északi férfi egyszerű 'Yes.' válaszával ironikusan fogadja el azt, amit az ellentábor piszkos vádként használ. A GigaChad egyszerűsített rajzolt változata. 🗿",
    kidRating: "safe"
  },
  {
    id: "spongebob_mock", name: "Mocking SpongeBob", category: "classic", rarity: "Common",
    image: "images/spongebob_mock.png", prompt: "mocking SpongeBob meme, SpongeBob SquarePants character in chicken-like pose with alternating upper and lower case text style, bent posture, silly mocking expression, cartoon style",
    story: "A Mocking SpongeBob mém a SpongeBob SquarePants 2012-es 'Little Yellow Book' epizódjából származik, ahol SpongyaBob csirkeként gúnyolja Tintacskát. A váltakozó kis-/nagybetűs szöveg 2017 májusától általános 'gúnyolódás' Twitter-formátum. 🐔",
    kidRating: "safe"
  },
  {
    id: "crying_cat", name: "Crying Cat", category: "classic", rarity: "Common",
    image: "images/crying_cat.jpg", prompt: "crying cat meme, close up photo of a cat with photoshopped glossy teary eyes and sad expression, tearful feline, emotional cat face, thumbs up crying cat variant",
    story: "A Crying Cat mém orosz eredetű: a 'Huhw' fehér-szürke macska photoshoppolt könnyes szemeivel 2014 körül terjedt el a VKontakte oldalon. Azóta világszerte az 'erős érzelmek, de jó képet vágni' mém egyik központi eleme, sokszor hüvelykujjal. 😿",
    kidRating: "safe"
  },
  {
    id: "trade_offer", name: "Trade Offer", category: "classic", rarity: "Common",
    image: "images/trade_offer.jpg", prompt: "trade offer meme, young man in white t-shirt with hands gesturing presenting a deal, TikTok trade offer format, I receive you receive meme template, casual indoor setting",
    story: "A Trade Offer TikTok trend 2021 márciusában indult @jackieandco videóival, 'I receive: X, You receive: Y' formulával. A viccesen egyenetlen cserékkel 2021 egyik legnépszerűbb TikTok-template-je lett. 🤝",
    kidRating: "safe"
  },
  {
    id: "ight_imma_head_out", name: "Ight Imma Head Out", category: "classic", rarity: "Common",
    image: "images/ight_imma_head_out.jpg", prompt: "ight imma head out SpongeBob meme, SpongeBob SquarePants character standing up from chair about to leave, getting up to go, cartoon still frame, determined to leave expression",
    story: "A mém a SpongeBob SquarePants 2001-es 'Club SpongeBob' epizódjából származik (2. évad). 2020 januárjában tűnt fel először a Reddit r/dankmemes-en, mint az 'ebből én kiszálltam' diszkrét távozás jele. 🚶",
    kidRating: "safe"
  },
  {
    id: "always_has_been", name: "Always Has Been", category: "classic", rarity: "Rare",
    image: "images/always_has_been.png", prompt: "always has been meme, two astronauts in space looking at Earth, one astronaut pointing a gun at the other from behind, wait its all ohio always has been, dramatic space scene",
    story: "Az 'Always has been' asztronauta mém 2016 júniusában tűnt fel a 4chan /int/ szekcióján. Két űrhajós a Föld fölött: az egyik rájön egy igazságra, a másik mögötte fegyverrel. 2020-tól robbant be a 'Wait, it's all X? Always has been.' Twitter-formátum. 🌍",
    kidRating: "older"
  },
  {
    id: "metal_pipe", name: "Metal Pipe Falling", category: "classic", rarity: "Common",
    image: "images/metal_pipe.jpg", prompt: "metal pipe falling sound effect meme, steel metal pipe hitting concrete floor in dark industrial setting, dramatic impact moment, sound effect meme visual, construction site",
    story: "A 'metal pipe falling' hang a Sound Ideas Series 6000 hangkönyvtárából származik, amit az 1990-es években rögzítettek stock hangeffektként. YouTube-on 2009 körül kezdett terjedni shock-video-kra, és ma minden hirtelen leeső tárgy jelzőhangja lett. 🔔",
    kidRating: "safe"
  },
  {
    id: "ohio", name: "Only in Ohio", category: "classic", rarity: "Rare",
    image: "images/ohio.png", prompt: "only in ohio meme, surreal bizarre scene with strange creatures and absurd situations on an American suburban street, Ohio flag, weird cursed imagery, dreamlike horror comedy aesthetic",
    story: "Az 'Only in Ohio' TikTok trend 2022 nyarán robbant be amerikai furcsa hírek alapján. Innen nőtte ki magát a 'Gen Alpha brainrot' szleng egyik pillérévé, ahol Ohio = szürreális, abszurd hely. Gyakran az 'Always has been' mémmel kombinálva. 🌽",
    kidRating: "safe"
  },
  {
    id: "vine_boom", name: "Vine Boom Sound Effect", category: "classic", rarity: "Common",
    image: "images/vine_boom.png", prompt: "vine boom sound effect meme, dramatic zoom in on a person's face with red glowing eyes, bass boosted moment, the rock eyebrow raise style, dramatic reaction close up",
    story: "A Vine Boom hang eredetileg a Vine platformon (2013–2017) jelent meg drámai pillanatokhoz. A mély, basszus-feldúsított 'BOOM' a Vine 2017-es bezárása után is fennmaradt TikTokon mint a meglepetés univerzális hang-mémje. 💥",
    kidRating: "safe"
  },
  {
    id: "the_rock_eyebrow", name: "The Rock Eyebrow Raise", category: "classic", rarity: "Rare",
    image: "images/the_rock_eyebrow.jpg", prompt: "The Rock eyebrow raise meme, Dwayne Johnson raising one eyebrow with suspicious questioning expression, close up face, WWE era, iconic eyebrow raise, sus look",
    story: "Dwayne 'The Rock' Johnson szemöldök-felvonás gesztusa a pankrátor pályafutásából származik az 1990-es évek végéről (WWF, később WWE). Az 'one raised eyebrow' a kihívás és kétkedés kombinált jele — 'The People's Eyebrow'. 2014-től általános mém-reakció. 🤨",
    kidRating: "safe"
  },
  {
    id: "mewing", name: "Mewing", category: "classic", rarity: "Common",
    image: "images/mewing.png", prompt: "mewing meme, person pressing tongue against roof of mouth for jawline, sharp jawline side profile, looksmax aesthetic, before and after comparison style, dramatic lighting, meme humor",
    story: "A mewing technikát Dr. John Mew és fia Dr. Mike Mew brit ortodontusok terjesztették az 1970-es évektől — szerintük a nyelv szájpadlásba nyomása formálja az állcsontot. 2022–2023-ban TikTokon 'looksmaxing' trendként robbant be. 👅",
    kidRating: "safe"
  },
  {
    id: "67", name: "6-7", category: "classic", rarity: "Rare",
    image: "images/67.jpg", prompt: "number 67 meme, the number sixty seven written in bold dramatic style, glowing neon, viral meme aesthetic",
    story: "A '67' mém a philadelphiai rapper Skrilla 2024-es 'Doot Doot (6 7)' dalának refrénjéből származik — a '6-7' szám Philadelphia egy utcájára utal. 2024 végén Gen Alpha TikTok-trenddé vált, a gyerekek bármikor felkiáltják. 🔢",
    kidRating: "safe"
  },
  {
    id: "six_seven", name: "Six Seven (Why afraid of 7)", category: "classic", rarity: "Epic",
    image: "images/six_seven.jpg", prompt: "number 6 and 7 as italian brainrot cartoon characters, six is scared of seven because seven ate nine, funny meme style, colorful brainrot aesthetic",
    story: "Klasszikus angol matekvicc, amit évtizedek óta ismernek: 'Miért fél a 6-os a 7-estől? Mert a 7 megette (seven ate = seven eight) a 9-est!' Az angol 'ate' (evett) és 'eight' (nyolc) egyformán hangzanak. A legrégebbi számvicc, ami ma is él. 🔢",
    kidRating: "safe"
  },
  {
    id: "bad_luck_brian", name: "Bad Luck Brian", category: "classic", rarity: "Common",
    image: "images/bad_luck_brian.jpg", prompt: "a nerdy boy with braces, glasses and a yellow plaid sweater, awkward school photo, meme style, cartoon illustration, colorful brainrot aesthetic",
    story: "A Bad Luck Brian valódi neve Kyle Craven, Ohio-ban készítette az iskolai évkönyvfotóját 2006-ban, szándékosan vicces arccal. Testvére Ian 2012 januárjában posztolta a Reddit r/funny-ra, és azonnal a 'pechesség' ikonja lett. Craven azóta aktívan kereskedik a mém-merchandise-szal. 😬",
    kidRating: "safe",
    stats: { hp: 42, attack: 9, defense: 4, rizz: 35, sigma: 30, brainrot: 45 }
  },
  {
    id: "philosoraptor", name: "Philosoraptor", category: "classic", rarity: "Epic",
    image: "images/philosoraptor.jpg", prompt: "a velociraptor dinosaur thinking deep philosophical thoughts with chin resting on hand, dramatic green background, meme style, cartoon",
    story: "A Philosoraptort Sam Smith amerikai grafikus tervezte 2008-ban a LonelyDinosaur.com oldalon póló-design-ként. A mélyen gondolkodó velociraptor 2009-től vált internetes mémmé filozófiai kérdésekkel a Memegeneratoron és a Know Your Meme-en. 🦖",
    kidRating: "safe",
    stats: { hp: 84, attack: 19, defense: 13, rizz: 70, sigma: 72, brainrot: 80 }
  },
  {
    id: "grus_plan", name: "Gru Terve", category: "classic", rarity: "Epic",
    image: "images/grus_plan.jpg", prompt: "cartoon bald villain in black coat pointing at whiteboard with plan diagram, confused expression at step 4, despicable me style, meme",
    story: "A Gru terve mém az Universal 'Gru' (Despicable Me) franchise-ból származik — az első film 2010-es, Chris Renaud és Pierre Coffin rendezésében. A négy-paneles terv-mutató jelenet 2020 májusában vált vírusos Twitter-mémmé. 📋",
    kidRating: "safe",
    stats: { hp: 82, attack: 20, defense: 12, rizz: 68, sigma: 65, brainrot: 72 }
  },
  {
    id: "arthur_fist", name: "Arthur Ököl", category: "classic", rarity: "Rare",
    image: "images/arthur_fist.jpg", prompt: "cartoon aardvark wearing yellow sweater with clenched fist on a wooden table, angry expression, pbs kids style, meme",
    story: "A PBS Kids 'Arthur' animációs sorozat (1996–2022) 1999-es 'Arthur's Big Hit' epizódjából származik, ahol Arthur haragjában öklét rázza. A kép 2016 augusztusától terjedt mémként Twitteren, az elfojtott harag szimbólumaként. 👊",
    kidRating: "safe",
    stats: { hp: 64, attack: 15, defense: 8, rizz: 50, sigma: 55, brainrot: 52 }
  },
  {
    id: "roll_safe", name: "Roll Safe", category: "classic", rarity: "Rare",
    image: "images/roll_safe.jpg", prompt: "smart guy tapping his temple with index finger, clever smirk, colorful background, meme style, cartoon",
    story: "A Roll Safe mém Kayode Ewumi angol színész 'Reece Simpson' karakteréből származik a BBC Three 'Hood Documentary' 2016-os sorozatából. A halánték-kopogtató gesztus az álbölcs 'logikai' csavar jelévé vált. 🧠",
    kidRating: "safe",
    stats: { hp: 60, attack: 13, defense: 9, rizz: 60, sigma: 55, brainrot: 50 }
  },
  {
    id: "two_buttons", name: "Két Gomb", category: "classic", rarity: "Rare",
    image: "images/two_buttons.jpg", prompt: "sweating cartoon man in white suit hesitating between two red buttons, difficult choice, meme style, colorful",
    story: "A Two Buttons mém Jake Clark amerikai webképregény-rajzoló 2014. január 2-i 'Hard choice to make?' rajzából származik. A Twitter-mémmé válása 2018 februárjában történt. 🔴",
    kidRating: "safe",
    stats: { hp: 58, attack: 12, defense: 8, rizz: 45, sigma: 48, brainrot: 60 }
  },
  {
    id: "kermit_tea", name: "Kermit Teázik", category: "classic", rarity: "Rare",
    image: "images/kermit_tea.jpg", prompt: "green frog puppet sipping tea from a lipton cup, that's none of my business vibe, meme style, cartoon",
    story: "A 'But that's none of my business' Kermit mém 2014 decemberében indult a Tumblr-en. Kermit a béka Jim Henson 1955-ös Muppet-bábuja. A lassú teakortyolás és csendes ítélkezés a passzív-agresszív megfigyelés jelképe. 🍵",
    kidRating: "safe",
    stats: { hp: 64, attack: 12, defense: 11, rizz: 58, sigma: 62, brainrot: 50 }
  },
  {
    id: "change_my_mind", name: "Change My Mind", category: "classic", rarity: "Rare",
    image: "images/change_my_mind.jpg", prompt: "bearded man sitting at folding table on campus with sign 'change my mind', calm confident expression, meme style",
    story: "A Change My Mind mém Steven Crowder amerikai konzervatív komikus 2018 februári 'Louder With Crowder' YouTube videójából származik. Crowder egy egyetemi kampuszon asztal mögött ül, rajta ellentmondásos állítás és 'Change my mind' felirat. 📝",
    kidRating: "safe",
    stats: { hp: 60, attack: 14, defense: 8, rizz: 62, sigma: 55, brainrot: 50 }
  },
  {
    id: "spiderman_pointing", name: "Spiderman Mutogat", category: "classic", rarity: "Epic",
    image: "images/spiderman_pointing.jpg", prompt: "two identical spider-man characters pointing at each other in confusion, classic 1967 cartoon style, meme",
    story: "A 'Spider-Man pointing at Spider-Man' mém az 1967-es animációs Spider-Man sorozat 19. epizódjából ('Double Identity') származik, ahol két pókember összezavarja egymást. A kép 2011-től terjedt mémként, a 'mi ketten ugyanazt csináljuk' jeleként. 🕷️",
    kidRating: "safe",
    stats: { hp: 85, attack: 21, defense: 12, rizz: 72, sigma: 68, brainrot: 75 }
  },
  {
    id: "me_gusta", name: "Me Gusta", category: "classic", rarity: "Common",
    image: "images/me_gusta.jpg", prompt: "creepy cartoon rage comic face with big nose and wide grin saying 'me gusta', meme style, simple drawing",
    story: "A Me Gusta rage comic karaktert Matt Oswald ('Insrt_coin') készítette 2010-ben a DeviantArt-on. A vigyorgó, nagy szájú arc a 'tetszik nekem, bár kellemetlen' érzés szimbóluma — a rage comic-korszak (2008–2013) egyik ikonja. 😋",
    kidRating: "safe",
    stats: { hp: 42, attack: 10, defense: 4, rizz: 40, sigma: 30, brainrot: 48 }
  },
  {
    id: "y_u_no", name: "Y U NO", category: "classic", rarity: "Common",
    image: "images/y_u_no.jpg", prompt: "rage comic cartoon character with angry arms outstretched shouting Y U NO, simple line drawing, meme style",
    story: "A Y U No Guy rage comic-figurát 2010-ben készítette Kbrown11 deviantArton, a japán 'Gantz' manga egyik pániklyen alapuló arccal. A 'Miért nem...' univerzális panasz-embere lett 2011-től a Tumblren. 😤",
    kidRating: "safe",
    stats: { hp: 44, attack: 11, defense: 5, rizz: 35, sigma: 32, brainrot: 50 }
  },
  {
    id: "lolcat", name: "LOLcat", category: "classic", rarity: "Common",
    image: "images/lolcat.jpg", prompt: "white fluffy cat demanding cheeseburger with text 'I CAN HAZ CHEEZBURGER?', classic 2007 internet meme style",
    story: "A LOLcat mozgalom 2007 januárjában indult az 'I Can Has Cheezburger?' weboldalon, amit Eric Nakagawa hawaii-i blogger alapított. A szándékosan rossz angol ('lolspeak') macska-feliratok az első nagy modern mém-jelenség voltak a Facebook előtti korszakban. 🐱",
    kidRating: "safe",
    stats: { hp: 45, attack: 10, defense: 5, rizz: 50, sigma: 35, brainrot: 55 }
  },
  {
    id: "socially_awkward_penguin", name: "Kínos Pingvin", category: "classic", rarity: "Rare",
    image: "images/socially_awkward_penguin.jpg", prompt: "blue cartoon penguin looking awkwardly to the side, nervous expression, blue background, meme style",
    story: "A Socially Awkward Penguin egy 2009-es rage comic karakter, egy National Geographic fotó alapján. A kis pingvin a zavart, szociálisan szorongó pillanatok jelképe — a Reddit r/AdviceAnimals aranykorának (2010–2012) egyik főszereplője. 🐧",
    kidRating: "safe",
    stats: { hp: 58, attack: 11, defense: 10, rizz: 30, sigma: 35, brainrot: 55 }
  },
  {
    id: "ancient_aliens", name: "Ancient Aliens Guy", category: "classic", rarity: "Rare",
    image: "images/ancient_aliens.jpg", prompt: "crazy haired scientist with wide eyes pointing upwards, history channel style, meme",
    story: "A mém alapja Giorgio A. Tsoukalos görög-svájci ufológus, a History Channel 'Ancient Aliens' (2009-) műsorvezetője, aki szerint minden ősi emberi vívmány mögött földönkívüliek állnak. A bolondos hajú férfi 2011-től az 'irracionális magyarázatok' univerzális arca. 👽",
    kidRating: "safe",
    stats: { hp: 60, attack: 14, defense: 8, rizz: 55, sigma: 60, brainrot: 70 }
  },
  {
    id: "epic_handshake", name: "Epic Handshake", category: "classic", rarity: "Epic",
    image: "images/epic_handshake.jpg", prompt: "two muscular arms doing an epic handshake silhouette against explosion background, predator meme style",
    story: "Az Epic Handshake mém a John McTiernan rendezte 'Predator' (1987) filmből származik: Dutch (Arnold Schwarzenegger) és Dillon (Carl Weathers) izmos kézfogási jelenete. 2016-tól Redditen a 'két dolog, amik valójában ugyanazok' összehasonlító mém-template. 🤝",
    kidRating: "safe",
    stats: { hp: 90, attack: 22, defense: 14, rizz: 75, sigma: 78, brainrot: 65 }
  },
  {
    id: "polandball", name: "Polandball", category: "classic", rarity: "Common",
    image: "images/polandball.jpg", prompt: "simple red and white cartoon ball character with small eyes, polandball comic style, crayon drawing",
    story: "A Polandball 2009 szeptemberében született a német Krautchan /int/ boardon, amikor 'Falco' nevű felhasználó egy brit–lengyel online vita során rajzolta az első gömböt. A rossz angollal beszélő 'countryballs' ma világszerte rajzolt sorozat. ⚪🔴",
    kidRating: "safe",
    stats: { hp: 40, attack: 9, defense: 6, rizz: 38, sigma: 35, brainrot: 45 }
  },
  {
    id: "good_guy_greg", name: "Good Guy Greg", category: "classic", rarity: "Rare",
    image: "images/good_guy_greg.jpg", prompt: "smiling young man with curly hair, friendly warm expression, green background, meme style",
    story: "A Good Guy Greg mém 2011 februárjában jelent meg a Redditen, egy ismeretlen férfi webkamerás profilképéről, aki nyugodtan, kedvesen mosolyog. A 'jó barát, aki mindig a másikat helyezi előtérbe' szimbóluma lett. 😇",
    kidRating: "safe",
    stats: { hp: 68, attack: 13, defense: 11, rizz: 75, sigma: 60, brainrot: 50 }
  },
  {
    id: "moai_statue", name: "Moai 🗿", category: "classic", rarity: "Legendary",
    image: "images/moai_statue.jpg", prompt: "easter island moai stone head statue with deadpan expression, blue sky background, 3d render, meme style",
    story: "A Moai-szobrok az Easter-sziget (Rapa Nui) ősi kőszobrai, amiket a rapanui nép faragott kb. 1250 és 1500 között — csaknem 900 szobor maradt fenn. A Unicode 🗿 emoji 2010 óta létezik, és 2019-től TikTokon a 'sztoikus, érzelemmentes reakció' univerzális jelzője. 🗿",
    kidRating: "safe",
    stats: { hp: 115, attack: 24, defense: 18, rizz: 88, sigma: 90, brainrot: 85 }
  },
  {
    id: "dat_boi", name: "Here Come Dat Boi", category: "classic", rarity: "Rare",
    image: "images/dat_boi.jpg", prompt: "green cartoon frog riding a unicycle, 3d render, simple background, meme style",
    story: "A 'Here come dat boi' mém 2015 közepén indult a Tumblr-en. Az eredeti 3D animált béka-egykerekű kép egy 2012-es argentin Taringa! oldalról származik. A random abszurd Gen Z mémek korai példája, 2016 áprilisában robbant be. 🐸🚲",
    kidRating: "safe",
    stats: { hp: 56, attack: 14, defense: 7, rizz: 60, sigma: 45, brainrot: 62 }
  },
  {
    id: "deal_with_it", name: "Deal With It", category: "classic", rarity: "Rare",
    image: "images/deal_with_it.jpg", prompt: "cool character slowly putting on pixelated sunglasses, confident smirk, deal with it text, meme style",
    story: "A Deal With It mém 2010-ben indult a SomethingAwful fórumon. A pixeles napszemüveg lassú alulról felfelé ereszkedése a 'nem érdekel' univerzális jele lett, animált GIF formában a 2010-es évek elején. 😎",
    kidRating: "safe",
    stats: { hp: 62, attack: 16, defense: 7, rizz: 78, sigma: 60, brainrot: 55 }
  },
  {
    id: "chocolate_rain", name: "Chocolate Rain", category: "classic", rarity: "Rare",
    image: "images/chocolate_rain.jpg", prompt: "cartoon singer with dreadlocks in front of microphone, chocolate raindrops falling, stage lights, meme style",
    story: "A Chocolate Rain Tay Zonday (Adam Nyerere Bahner) amerikai énekes 2007 áprilisi YouTube dala. A 25 éves minnesota-i zeneszerző váratlanul mély hangja fiatal fiú testében vált virálissá, és a YouTube egyik áttörési pillanata lett. 🎤🍫",
    kidRating: "safe",
    stats: { hp: 60, attack: 13, defense: 9, rizz: 55, sigma: 50, brainrot: 65 }
  },
  {
    id: "sigma_grindset", name: "Sigma Grindset", category: "classic", rarity: "Epic",
    image: "images/sigma_grindset.jpg", prompt: "muscular sigma male waking up at 4am doing pushups, cold shower, reading books montage, meme style",
    story: "A 'Sigma grindset' 2020–2021-ben indult TikTokon a 'sigma male' (magányos farkas) archetípus körül, Vincent Chase és más influencerek videóival. A reggeli 4 órás kelés, hidegzuhany és önjavítás rutinjait ironikusan és komolyan is használják. 💪",
    kidRating: "safe",
    stats: { hp: 86, attack: 22, defense: 12, rizz: 85, sigma: 95, brainrot: 60 }
  },
  {
    id: "jojo_pose", name: "JoJo Póz", category: "classic", rarity: "Legendary",
    image: "images/jojo_pose.jpg", prompt: "anime hero in dramatic jojos bizarre adventure pose with sparkles and menacing text, colorful background, meme style",
    story: "A JoJo's Bizarre Adventure Hirohiko Araki japán mangaka 1987 óta futó sorozata. A karakterek 'JoJo pózai' — a ゴゴゴ 'menacing' betűkkel — olasz divatfotókon alapulnak (pl. Gianni Versace kampányok). A 2010-es évek közepétől az interneten a 'drámai póz' univerzális jele. ⭐",
    kidRating: "safe",
    stats: { hp: 108, attack: 25, defense: 16, rizz: 90, sigma: 88, brainrot: 82 }
  },
  {
    id: "loss_meme", name: "Loss (| || || |_)", category: "classic", rarity: "Epic",
    image: "images/loss_meme.jpg", prompt: "four panel webcomic loss meme stylized minimal lines vertical bars representation, simple black and white",
    story: "A Loss.jpg Tim Buckley amerikai webképregény-rajzoló 2008. június 2-i 'Ctrl+Alt+Del' 'Loss' című epizódjából származik, ahol a főszereplő felesége elveszíti a babát. A négy kocka váratlanul komoly tartalma miatt az internet ironikusan elkezdte a '| || || |_' stilizált formáját mindenhol felfedezni. 📐",
    kidRating: "older",
    stats: { hp: 80, attack: 18, defense: 14, rizz: 70, sigma: 68, brainrot: 85 }
  },
  {
    id: "boromir_one_does_not", name: "One Does Not Simply", category: "classic", rarity: "Epic",
    image: "images/boromir_one_does_not.jpg", prompt: "Sean Bean as Boromir from Lord of the Rings, pointing hand dramatic pose, serious expression, fellowship of the ring council scene",
    story: "Az 'One does not simply walk into Mordor' Sean Bean (Boromir) mondata a Peter Jackson rendezte 'Gyűrűk Ura: A gyűrű szövetsége' (2001) film Rivendell-i tanácskozásából. A kép 2011-től a lehetetlen feladatok univerzális figyelmeztetője. 🗡️",
    kidRating: "safe",
    stats: { hp: 86, attack: 21, defense: 13, rizz: 72, sigma: 78, brainrot: 68 }
  },
  {
    id: "dicaprio_toast", name: "DiCaprio Pohárköszöntő", category: "classic", rarity: "Rare",
    image: "images/dicaprio_toast.jpg", prompt: "Leonardo DiCaprio as Jay Gatsby raising a champagne glass, 1920s party background, confident smile, great gatsby scene",
    story: "Leonardo DiCaprio pezsgő-köszöntése a Baz Luhrmann rendezte 'A nagy Gatsby' (2013) filmből származik, ahol Jay Gatsby-ként emeli poharát. 2014-től a 'respect / elismerés' univerzális mém-gesztusa. 🥂",
    kidRating: "safe",
    stats: { hp: 62, attack: 14, defense: 9, rizz: 75, sigma: 60, brainrot: 55 }
  },
  {
    id: "morpheus_what_if", name: "What If I Told You", category: "classic", rarity: "Rare",
    image: "images/morpheus_what_if.jpg", prompt: "Morpheus Laurence Fishburne from The Matrix wearing small round sunglasses, dramatic lighting, serious expression, green matrix code background",
    story: "A 'What if I told you' mém Laurence Fishburne (Morpheus) jelenetéből származik a Wachowski testvérek 'Mátrix' (1999) filmjéből. A napszemüveges Morpheus a piros és kék tablettát kínálja Neónak. 2012-től a 'váratlan igazság' bevezetője. 💊",
    kidRating: "safe",
    stats: { hp: 64, attack: 14, defense: 10, rizz: 70, sigma: 68, brainrot: 60 }
  },
  {
    id: "chill_guy", name: "My Chill Guy", category: "classic", rarity: "Epic",
    image: "images/chill_guy.jpg", prompt: "brown cartoon dog wearing grey sweater and blue jeans with hands in pockets, relaxed smile, chill guy meme character",
    story: "A 'Chill Guy' karakter Phillip Banks floridai illusztrátor 2023 októberi rajza, amit 2024 novemberében tett virálissá a TikTok. A zsebre dugott kezű, mosolygó kutya Gen Alpha 'nem hagyom magam feszíteni' ikonja lett. Banks a mém virálissá válása után védjegy-ügyeket indított. 🐕",
    kidRating: "safe",
    stats: { hp: 84, attack: 18, defense: 14, rizz: 82, sigma: 85, brainrot: 78 }
  },
  {
    id: "leeroy_jenkins", name: "Leeroy Jenkins", category: "classic", rarity: "Rare",
    image: "images/leeroy_jenkins.jpg", prompt: "world of warcraft paladin character in armor charging into dragon lair shouting, game screenshot style",
    story: "A Leeroy Jenkins videó 2005 májusában jelent meg a Ben Schulz World of Warcraft játékos felvételével, ahol szándékosan csapatot pusztít el bolondul berohanva egy dragon's lair-be. A 'Leeeeeeeeeroy Jenkins!' kiáltás a megfontolatlan vakmerőség univerzális jele. 🎮",
    kidRating: "safe",
    stats: { hp: 62, attack: 16, defense: 7, rizz: 55, sigma: 45, brainrot: 60 }
  },
  {
    id: "press_f", name: "Press F to Pay Respects", category: "classic", rarity: "Common",
    image: "images/press_f.jpg", prompt: "video game screen showing press F to pay respects button prompt at funeral scene, call of duty style",
    story: "A 'Press F to Pay Respects' a Sledgehammer Games 'Call of Duty: Advanced Warfare' (2014) temetkezési jelenetéből származik, ahol a játékos F billentyűt nyomva 'tiszteleg'. A nem-szándékosan ironikus természete miatt azonnal mémmé vált. 🎮",
    kidRating: "safe",
    stats: { hp: 44, attack: 10, defense: 5, rizz: 40, sigma: 35, brainrot: 48 }
  },
  {
    id: "monkey_puppet", name: "Monkey Puppet Look Away", category: "classic", rarity: "Common",
    image: "images/monkey_puppet.jpg", prompt: "animatronic monkey puppet looking nervously to the side awkwardly, bbc earth style, meme",
    story: "A mém a BBC Earth / BBC One 'Spy in the Wild' 2016-os dokumentumfilmjéből származik, ahol egy animatronic majom-kém idegesen körülnéz, majd elfordítja a tekintetét. 2018-tól az 'awkward look away' diszkrét elfordulás mémje. 🐒",
    kidRating: "safe",
    stats: { hp: 42, attack: 9, defense: 5, rizz: 38, sigma: 32, brainrot: 52 }
  },
  {
    id: "is_this_a_pigeon", name: "Is This a Pigeon?", category: "classic", rarity: "Common",
    image: "images/is_this_a_pigeon.jpg", prompt: "anime robot android character pointing at butterfly asking is this a pigeon, 90s anime style",
    story: "A mém a 'The Brave Fighter of Sun Fighbird' (太陽の勇者ファイバード) 1991-es japán anime sorozat egy jelenetéből származik, ahol egy robot-ember egy pillangóra mutat és kérdezi: 'Is this a pigeon?'. A Twitter 2018-tól az egyszerű félreértések mémjeként használja. 🦋",
    kidRating: "safe",
    stats: { hp: 44, attack: 10, defense: 5, rizz: 42, sigma: 38, brainrot: 50 }
  },
  {
    id: "gandalf_you_shall_not", name: "You Shall Not Pass", category: "classic", rarity: "Epic",
    image: "images/gandalf_you_shall_not.jpg", prompt: "Gandalf the grey wizard Ian McKellen with staff on stone bridge against balrog, lord of the rings moria scene",
    story: "A 'You shall not pass!' Gandalf (Ian McKellen) kiáltása a Peter Jackson 'Gyűrűk Ura: A gyűrű szövetsége' (2001) film Moria-hídi jelenetéből, ahol a Balrog elől védi a csapatot. A kiáltás a megállíthatatlan védelem univerzális jele. 🧙",
    kidRating: "safe",
    stats: { hp: 88, attack: 20, defense: 16, rizz: 78, sigma: 80, brainrot: 70 }
  },
  {
    id: "sparta_this_is", name: "This Is Sparta!", category: "classic", rarity: "Epic",
    image: "images/sparta_this_is.jpg", prompt: "King Leonidas Gerard Butler shouting in bronze armor with red cape kicking persian messenger into pit, 300 movie scene",
    story: "A 'This is Sparta!' Gerard Butler (Leonidas király) jelenete a Zack Snyder '300' (2006) filmből, ahol a perzsa követet egy kútba rúgja. A film Frank Miller 1998-as képregényén alapul, a jelenet azonnal remix-hullámot indított el a YouTube-on. ⚔️",
    kidRating: "safe",
    stats: { hp: 90, attack: 24, defense: 12, rizz: 75, sigma: 85, brainrot: 72 }
  },
  {
    id: "sad_keanu", name: "Sad Keanu", category: "classic", rarity: "Rare",
    image: "images/sad_keanu.jpg", prompt: "Keanu Reeves sitting alone on a park bench eating a sandwich, melancholic expression, paparazzi photo style",
    story: "A Sad Keanu 2010 májusában jelent meg, amikor egy paparazzi Keanu Reeves-t fotózta New Yorkban, ahogy egyedül eszik szendvicset egy padon. A fotó a 'Be Excellent To Each Other' Keanu-mozgalom és a 'mindenki szereti Keanut' trend indítója lett. 😔",
    kidRating: "safe",
    stats: { hp: 60, attack: 12, defense: 11, rizz: 58, sigma: 62, brainrot: 50 }
  },
  {
    id: "gru_gun_point", name: "Gru Pointing at Gru", category: "classic", rarity: "Rare",
    image: "images/gru_gun_point.jpg", prompt: "Gru and his brother Dru from despicable me 3 pointing weapons at each other, animation style",
    story: "A 'Gru pointing gun at Gru' mém a Pierre Coffin és Kyle Balda rendezte 'Gru 3' (Despicable Me 3, 2017) filmből származik, ahol Gru és testvére Dru egymásra céloznak. 2020-tól Twitteren az 'önmagadnak ellentmondó' szituációk mémje. 🔫",
    kidRating: "safe",
    stats: { hp: 62, attack: 14, defense: 9, rizz: 60, sigma: 58, brainrot: 62 }
  },
  {
    id: "squidward_window", name: "Squidward Window", category: "classic", rarity: "Common",
    image: "images/squidward_window.jpg", prompt: "squidward tentacles looking out of window sadly at spongebob and patrick having fun, cartoon nickelodeon style",
    story: "A mém a SpongeBob SquarePants 2001-es 'Can You Spare a Dime?' epizódjából származik, ahol Tintacska szomorúan néz ki az ablakon SpongyaBob boldog kalandjait figyelve. A FOMO (kimaradás érzete) klasszikus vizuális jelképe. 🐙",
    kidRating: "safe",
    stats: { hp: 46, attack: 10, defense: 6, rizz: 35, sigma: 40, brainrot: 52 }
  },
  {
    id: "moth_lamp", name: "Moth Lamp", category: "classic", rarity: "Rare",
    image: "images/moth_lamp.jpg", prompt: "close up of a moth with big eyes staring at a glowing lamp, lamp lämp LAMP text, meme",
    story: "A Moth Lamp (lámpafüggő lepkék) mém 2018 augusztusában indult a Reddit r/MothMemes subredditen. A fénybe szerelmes éjjeli lepkék viselkedését mémesítették 'Lamp. lämp. LAMP.' feliratokkal. A legfurcsább rovar-mém. 🪔",
    kidRating: "safe",
    stats: { hp: 58, attack: 12, defense: 9, rizz: 45, sigma: 50, brainrot: 65 }
  },
  {
    id: "evil_kermit", name: "Evil Kermit", category: "classic", rarity: "Common",
    image: "images/evil_kermit.jpg", prompt: "two kermit frogs, one normal one in dark hood evil version, whispering me me suggestion, meme style",
    story: "Az Evil Kermit mém a Disney 'Muppets Most Wanted' (2014) filmből származik, ahol Kermit gonosz hasonmása, Constantine, sötét köpenyben rábeszéli Kermitet rossz dolgokra. Az 'én vs. a belső sötét hangom' mémje 2016 novemberétől. 🐸",
    kidRating: "safe",
    stats: { hp: 46, attack: 11, defense: 5, rizz: 48, sigma: 42, brainrot: 54 }
  },
  {
    id: "ugandan_knuckles", name: "Ugandan Knuckles", category: "classic", rarity: "Rare",
    image: "images/ugandan_knuckles.jpg", prompt: "small red chibi knuckles echidna from sonic, VRChat game style meme",
    story: "Az Ugandan Knuckles mém 2017 decemberében jelent meg a VRChat online játékban. Játékosok Sonic the Hedgehog Knuckles karakterének eltorzított változatát ugandai akcentussal és 'Do you know de way?' kérdéssel játszották. 2018 elején a trend közösségi viták miatt visszaszorult. 🔴",
    kidRating: "safe",
    stats: { hp: 60, attack: 15, defense: 7, rizz: 50, sigma: 48, brainrot: 62 }
  },
  {
    id: "bongo_cat", name: "Bongo Cat", category: "classic", rarity: "Common",
    image: "images/bongo_cat.jpg", prompt: "cute white cartoon cat playing bongo drums with paws, simple minimal illustration, meme",
    story: "A Bongo Cat 2018 május 9-én jelent meg a Twitteren @StrayRogue japán animátor kézzel rajzolt kis fehér cicájaként, aki bongo-dobokon dobol. Sokféle hangszer-változat, interaktív weboldalak és online zongora-játékok készültek belőle. 🥁",
    kidRating: "safe",
    stats: { hp: 44, attack: 10, defense: 5, rizz: 52, sigma: 38, brainrot: 50 }
  },
  {
    id: "shaggy_god", name: "Ultra Instinct Shaggy", category: "classic", rarity: "Epic",
    image: "images/shaggy_god.jpg", prompt: "Shaggy from scooby doo with glowing white aura ultra instinct power, dragon ball super style, dramatic lighting",
    story: "Az Ultra Instinct Shaggy mém 2019 februárjában indult a 'Scooby Doo' Shaggy Rogers karakteréből (Hanna-Barbera, 1969), ötvözve a Dragon Ball Super 'Ultra Instinct' Goku formájával. A mém szerint Shaggy az univerzum legerősebb lénye, csak szándékosan korlátozza magát. 🌀",
    kidRating: "safe",
    stats: { hp: 92, attack: 24, defense: 13, rizz: 70, sigma: 82, brainrot: 85 }
  },
  {
    id: "bee_movie", name: "Bee Movie Script", category: "classic", rarity: "Epic",
    image: "images/bee_movie.jpg", prompt: "cartoon bee character jerry seinfeld bee movie animation style, flying bee with voice bubble",
    story: "A Bee Movie a DreamWorks 2007-es animációs filmje, Jerry Seinfeld forgatókönyvével és főszereplésével. A film teljes szövegének YouTube-os felolvasása (néha gyorsítva vagy lassítva) 2016-ban vált abszurd mémmé. 'Ya like jazz?' és 'According to all known laws of aviation...' 🐝",
    kidRating: "safe",
    stats: { hp: 82, attack: 19, defense: 13, rizz: 70, sigma: 68, brainrot: 82 }
  },
  {
    id: "spongebob_imagination", name: "Imagination", category: "classic", rarity: "Common",
    image: "images/spongebob_imagination.jpg", prompt: "spongebob squarepants inside a cardboard box with rainbow hands spread out, imagination text, cartoon scene",
    story: "A 'Imagination!' SpongeBob mém a 2005-ös 'Idiot Box' (2002) epizódjából származik, ahol SpongyaBob és Patrick egy üres kartondobozba bújva azt állítják, minden szórakozás benne van. 2013-tól a 'nincs pénz, de képzelet van' univerzális jele. 🌈",
    kidRating: "safe",
    stats: { hp: 45, attack: 10, defense: 6, rizz: 42, sigma: 35, brainrot: 55 }
  },
  {
    id: "confused_math_lady", name: "Confused Math Lady", category: "classic", rarity: "Common",
    image: "images/confused_math_lady.jpg", prompt: "woman with concerned confused expression surrounded by floating math equations and formulas, brazilian telenovela screenshot",
    story: "A Confused Math Lady mém a brazil 'Senhora do Destino' 2004-es telenovella egy jelenetéből származik, Renata Sorrah színésznő játékával. A 2016-os Twitter mém-hullám főszereplője lett, ahogy Sorrah arca fejben matek-képleteket próbál megoldani. 🧮",
    kidRating: "safe",
    stats: { hp: 44, attack: 10, defense: 5, rizz: 45, sigma: 50, brainrot: 48 }
  },
  {
    id: "rage_face_fuu", name: "Rage Face FFFUUU", category: "classic", rarity: "Common",
    image: "images/rage_face_fuu.jpg", prompt: "classic rage comic face with wide eyes and mouth screaming FFFFFUUUUUU, simple ms paint line drawing, meme",
    story: "A rage face 'FFFFFUUUUUU' az első rage comic karakter, ami 2008 augusztusában jelent meg a 4chan /b/ szekcióján egy MS Paint képregényben. A dühös arc indította el a rage comic aranykort (2008–2013), ami a 2010-es évek elejének legnagyobb mém-korszaka volt. 😤",
    kidRating: "safe",
    stats: { hp: 42, attack: 11, defense: 4, rizz: 35, sigma: 38, brainrot: 52 }
  },
  {
    id: "scumbag_steve", name: "Scumbag Steve", category: "classic", rarity: "Rare",
    image: "images/scumbag_steve.jpg", prompt: "young man with backwards sideways hat, smug expression, 2000s style photo, meme",
    story: "A Scumbag Steve mém valódi szereplője Blake Boston, akit édesanyja Susan Boston fotózott 2006-ban 21 éves korában. A ferde sapkájú, önelégült tekintetű fiatal 2011 januárjában vált mémmé a Reddit r/AdviceAnimals-en, mint a 'rosszindulatú barát' arca. 🧢",
    kidRating: "safe",
    stats: { hp: 60, attack: 14, defense: 8, rizz: 68, sigma: 55, brainrot: 60 }
  },
  {
    id: "all_your_base", name: "All Your Base", category: "classic", rarity: "Rare",
    image: "images/all_your_base.jpg", prompt: "retro arcade game screen showing all your base are belong to us text in 80s pixel style, zero wing aesthetic",
    story: "Az 'All your base are belong to us' a Toaplan 1989-es 'Zero Wing' arcade shoot'em up rossz angol lokalizációjából származik (a Sega Mega Drive port 1992-es). A mém 2000–2001-ben robbant be, mint az egyik első virális 'Engrish' jelenség. 🎮",
    kidRating: "safe",
    stats: { hp: 60, attack: 13, defense: 9, rizz: 52, sigma: 55, brainrot: 60 }
  },
  {
    id: "ok_boomer", name: "OK Boomer", category: "classic", rarity: "Rare",
    image: "images/ok_boomer.jpg", prompt: "Gen Z teenager dismissively waving off an elderly baby boomer, casual conversation, tiktok style meme",
    story: "Az 'OK Boomer' 2019 novemberében vált vírussá TikTokon, amikor Gen Z fiatalok így reagáltak a baby boomer generáció (1946–1964-ben születettek) kritikus megjegyzéseire. Chlöe Swarbrick új-zélandi parlamenter ki is mondta egy 2019-es beszédben. 👴",
    kidRating: "safe",
    stats: { hp: 58, attack: 13, defense: 8, rizz: 62, sigma: 55, brainrot: 70 }
  },
  {
    id: "pepe_silvia", name: "Pepe Silvia", category: "classic", rarity: "Epic",
    image: "images/pepe_silvia.jpg", prompt: "charlie day with wild hair pointing at conspiracy board covered in string and photos, always sunny in philadelphia scene",
    story: "A Pepe Silvia mém az FX 'It's Always Sunny in Philadelphia' 2008-as 'Sweet Dee Has a Heart Attack' epizódjából származik, ahol Charlie (Charlie Day) egy össze­esküvés-elméletet magyaráz a falra ragasztott postacetlikkel. A 'conspiracy corkboard' mém alapja. 📮",
    kidRating: "safe",
    stats: { hp: 82, attack: 20, defense: 12, rizz: 68, sigma: 72, brainrot: 88 }
  },
  {
    id: "hackerman", name: "Hackerman", category: "classic", rarity: "Rare",
    image: "images/hackerman.jpg", prompt: "80s style hacker with sunglasses typing on computer with glowing matrix screens behind, kung fury synthwave aesthetic",
    story: "A Hackerman a 2015-ös svéd 'Kung Fury' David Sandberg 30 perces rövidfilmjéből származik, ahol a főszereplő 'feltöri' a számítógépet telefonhívással. A szintetizátoros '80-as évek stílusú jelenet az ál-hackelés mém-őseként terjedt 2015-től. 💻",
    kidRating: "safe",
    stats: { hp: 62, attack: 15, defense: 9, rizz: 70, sigma: 65, brainrot: 68 }
  },
  {
    id: "numa_numa", name: "Numa Numa Dance", category: "classic", rarity: "Rare",
    image: "images/numa_numa.jpg", prompt: "chubby young man lip syncing to romanian dance song in front of webcam, early 2000s internet video style",
    story: "A Numa Numa Dance 2004 decemberében jelent meg, amikor Gary Brolsma 19 éves New Jersey-i fiatal elénekelte a román O-Zone együttes 'Dragostea Din Tei' (2003) dalát webkamera előtt. A 11+ millió nézett videó az egyik első, YouTube előtti virális videó a Newgrounds-on. 🎶",
    kidRating: "safe",
    stats: { hp: 60, attack: 12, defense: 10, rizz: 65, sigma: 48, brainrot: 60 }
  },
  {
    id: "keyboard_cat", name: "Keyboard Cat (Bento)", category: "classic", rarity: "Rare",
    image: "images/keyboard_cat.jpg", prompt: null,
    story: "Bento, a Keyboard Cat 'második hivatalos' utódja, miután Fatso 1987-ben elhunyt. Charlie Schmidt 2010-től Bento új narancsszínű cicájával folytatta a keyboard-zenélős hagyományt, hogy a 'play him off' klasszikus mém ne tűnjön el. Bento sajnos 2018-ban hunyt el, de Schmidt 2020-tól egy újabb cicával, Skinny-vel viszi tovább az örökséget. 🎹🐱",
    kidRating: "safe",
    stats: { hp: 62, attack: 14, defense: 9, rizz: 55, sigma: 48, brainrot: 58 }
  },
  {
    id: "yes_chad", name: "Yes Chad", category: "classic", rarity: "Epic",
    image: "images/yes_chad.jpg", prompt: "blonde bearded chad face nodding confidently saying yes, nordic style, meme illustration",
    story: "A Yes Chad mém a GigaChad és Nordic Gamer kombinációjából született 2019 körül a 4chanen. A szakállas szőke északi férfi egyszerű 'Yes.' válaszával ironikusan magáévá teszi azt, amit az ellenfél piszkos vádként vetett be — ez a 'büszkén elfogadás' arca. A Yes Chad különbözik a Nordic Gamer változattól abban, hogy frontális nézetben látható. 💪",
    kidRating: "safe",
    stats: { hp: 88, attack: 23, defense: 13, rizz: 80, sigma: 85, brainrot: 55 }
  },
  {
    id: "doge_cheems_bell", name: "Doge vs Cheems Bell Curve", category: "classic", rarity: "Rare",
    image: "images/doge_cheems_bell.jpg", prompt: "bell curve iq chart with doge on one end and cheems on other end both saying same simple answer, midwit meme",
    story: "A Doge-Cheems harang-görbe mém 2020 közepén jelent meg a Reddit r/dankmemes-en. A statisztikai normál eloszlás szélén álló Doge (IQ 145+) és Cheems (IQ 55) ugyanazt a egyszerű választ adja, míg a középső 'midwit' (IQ 100) bonyolultabb, ostoba elméletet tart. A 'ne túlgondold!' univerzális képi jele. 🐕📊",
    kidRating: "safe",
    stats: { hp: 60, attack: 13, defense: 9, rizz: 60, sigma: 62, brainrot: 68 }
  }
];
