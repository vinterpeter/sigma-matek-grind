# CLAUDE.md — Sigma Matek Grind

Magyar nyelvű, single-page matematika gyakorló játék Zéténynek, brainrot mémes kártyagyűjtéses jutalomrendszerrel. Nincs build step, nincs package manager — statikus fájlok, közvetlenül a böngészőben futnak.

## Fájlstruktúra

- `index.html` — **monolit**: ~2100 sor markup + CSS + ~2000 sor inline JS (~4080 sor, ~230 KB). Itt él a teljes játéklogika, UI, stíluslap.
- `cards_classic.js` — klasszikus mémkártyák adatai (`classicBrainrots` tömb).
- `cards_italian.js` — olasz brainrot kártyák (`italianBrainrots` tömb).
- `creator_data.js` — "Rajzolás" feature adatai (állatok, tárgyak, helyszínek, ruhák, prompt építőkövek).
- `images/` — kártyaképek (`.jpg` / `.png` / `.webp`). A kártyák `image` mezője ide mutat.
- `audio/` — TTS mp3-ak (ritkán használt, nagyrészt runtime SpeechSynthesis).
- `backup.sh` — mentés + commit + push script.
- `backups/` — gitignore-olt mentési könyvtár.
- `favicon.svg`, gyökérben lévő `.jpg`-k — UI assetek.

A `cards_*.js` és `creator_data.js` sima `<script src>`-en keresztül töltődnek be az `index.html`-be (lásd 1331–1333. sor), globális konstansokat tesznek elérhetővé (`classicBrainrots`, `italianBrainrots`, `creatorAnimals` stb.). Nincs modulrendszer.

## Futtatás és deploy

- **Lokális futtatás**: bármilyen statikus szerver a repo gyökeréből (pl. `python3 -m http.server`). Firebase és Pollinations hálózatot igényel.
- **Deploy**: `./backup.sh push` — snapshotot készít a `backups/` alá, commitot + push-ot csinál `origin/main`-re. Csak az user kifejezett kérésére futtasd.
- **Mentés push nélkül**: `./backup.sh` — csak lokális backup.

## Külső függőségek (CDN, runtime)

- **Firebase compat** (v10.12.2) — Auth + Firestore. A `FIREBASE_CONFIG` az `index.html`-ben hardcoded (projekt: `sigma-matek-grind`). Felhasználói state (`state`, `collection`, `eventLog`) Firestore-ban is mentve anonymous auth alatt.
- **Pollinations.ai** (`https://image.pollinations.ai/prompt/`) — fúzió és creator képgenerálás.
- **Google Fonts** — Outfit betűtípus.
- Nincs npm, nincs bundler, nincs TypeScript.

## Állapot és perzisztencia

- `state` objektum (index.html ~1480. sor): `total`, `xp`, `level`, `streak`, `tokens` (smaragd), `badges`, `typeStats`, `retryQueue`, `questionCount`, stb.
- `collection` tömb a megszerzett kártyákra (fúziózott és creator által létrehozott kártyák is ide kerülnek, `stats`-szal és `exhausted` számlálóval).
- **LocalStorage kulcs**: `sigmaMatek3` — itt a `state` tárolódik. Cloud sync debounce-olva (`_cloudSaveTimer`) Firestore-ba.
- Cloud struktúra: `users/{uid}` fő dokumentum + `users/{uid}/data/eventLog` + `users/{uid}/data/collection` subdocumentek.

## Játékmechanika gyorskalauz

### Matek feladatok (`problemTypes`)
`addition`, `subtraction`, `sequence`, `ruleGame`, `potlas`, `compare`, `wordProblem`, `ruleRecognize`.

- **Súlyozás**: `pickProblemType()` — minél rosszabb a típus siker-rátája, annál gyakoribb (adaptív). `ruleRecognize`-t nem választja közvetlenül; akkor ugrik be, ha a `ruleGame` retry jön és a gyerek még nem érti a szabályt (gate).
- **Spaced repetition**: `retryQueue` — rossz válasz után a típus 5–15 kérdés múlva újra előkerül, két box-os Leitner-szerű logika.
- **Generátorok**: `genAddition`, `genSubtraction`, `genSequence`, `genRuleGame`, `genRuleRecognize`, `genPotlas`, `genCompare`, `genWordProblem`.

### Kártya/jutalom rendszer
- **Ritkaságok**: `Rare`, `Epic`, `Legendary`, `Mythic`. A kártya `rarity` mezője hajtja a drop súlyokat és a battle statokat (`cardHP`, `cardAtk`, `cardDef`).
- **kidRating**: `"safe"` vagy `"older"` — content gate gyerekbarát módhoz. Új kártyáknál **kötelező** beállítani; alapértelmezés `"safe"`, a sötétebb tematikájú mémek kapnak `"older"`-t.
- **Fúzió / Keverés**: 2–5 meglévő kártyából generál újat Pollinations-on keresztül. 1 smaragd (💎 = "emerald" ikon) a költsége. Az eredeti kártyák `prompt`/`story`/`image` mezői szolgálnak inputként. Lásd `openCrafting`, `generateFusion`, `keepCrafted`.
- **Rajzolás / Creator**: `creator_data.js`-ből összerakott guided prompt → Pollinations → új olasz-brainrot szerű kártya. 20 smaragd.
- **Harc**: `openBattleSelect`, `startBattle`, `renderBattle`, `executePlayerAttack`, `enemyTurn`. 10 smaragd.
- **Encyclopedia** (összes létező kártya olvasható), **Collection** (saját), **Badges**, **Rank overlay**, **Shop**, **Admin** (`openAdmin` — összes user listája Firestore-ból).

## Konvenciók, amikre figyelj

- **Minden UI magyarul**. Új szöveget, hibaüzenetet, tooltipet is magyarul adj, a játék hangvételéhez illően (gyerekbarát, brainrot-humor, emoji OK a UI-ban — a kódban nem).
- **Hangélmény**: `AudioEngine.play('correct'|'wrong'|'streak'|…)` web audio szintézissel; `speak(text)` használja a böngésző SpeechSynthesis API-ját, magyar hangon, `stripEmoji`-val tisztítva. Új interakció előtt érdemes SFX-et is csatolni, a többi hívás mintája szerint.
- **Smaragd ikon**: `<span class="emerald"></span>` — NE emoji-val helyettesítsd, a CSS-ben inline SVG van hozzá (14. sor).
- **Mobile-first**: `max-width: 600px` container, `touch-action: manipulation`, 6–12 px paddingek. Minden új UI-nak mobilon is működnie kell (tesztelhetetlen az én oldalamról — ha érdemi UI változás van, jelezd a usernek, hogy tesztelje a böngészőben).
- **Kártya image path**: mindig `images/<fájlnév>` relatív formában. A létező képek listáját az `images/` mappa adja — új kártya hozzáadása előtt ellenőrizd, hogy a fájl tényleg ott van (az `image` mező elgépelése néma hibát okoz, placeholder jelenik meg).
- **Kártya ID**: `snake_case`, egyedi a két listán belül is (`allBrainrotCards = [...classicBrainrots, ...italianBrainrots]` union-ként használva). Új kártyánál a duplikátumot ellenőrizd.
- **Ne refaktoráld a monolitot**. Az `index.html` szándékosan egy fájl — a user célzottan így akarja, nincs build pipeline. Új feature is inline-ba megy, a meglévő függvények közé, a szekcióhatárokat (`// === ... ===` kommentek) követve.
- **Nincs ESLint / Prettier / TypeScript**. A kódstílus a repo meglévő mintáit követi: `const`/`let`, arrow + hagyományos függvények vegyesen, tömör soronkénti inline függvények kis helper-ekhez.

## Munkafolyamat-tippek

- **Kis változtatások** (új kártya, új feladat, szöveg fix): közvetlen `Edit` a megfelelő fájlon. A `cards_classic.js` / `cards_italian.js` követik ugyanazt az objektum-sémát (`id`, `name`, `category`, `rarity`, `image`, `prompt`, `story`, `kidRating`).
- **Index.html szerkesztés**: nagy a fájl — `Grep` + `Read offset/limit` kombinációval dolgozz, ne olvasd be egy az egyben. A függvénynevek `Grep "function\s+név"` mintával gyorsan megtalálhatók.
- **Új feladat típus**: add a `problemTypes` tömbhöz (1637. sor környéke), írj `genXxx()` generátort, `generateProblem()` switch-ébe kösd be, és adj hozzá `typeStats` alapértéket (loadState migrációval is számolj, különben régi mentéseknél undefined-olás lesz).
- **Kártyagyűjtemény bővítése**: új kártya hozzáadása a `cards_*.js`-hez + kép a `images/`-be. A `brainrotRewards` automatikusan újraépül, nincs külön regisztráció.
- **Firebase-re érzékeny változtatás**: `fbReady` guard-oljon mindent, `saveStateToCloud` / `loadStateFromCloud` hibatűrő legyen — offline-ban is játszhatónak kell maradnia a játéknak (localStorage az igazság forrása, a cloud csak sync).

## Gotchas

- **A `cards_italian.js` és `cards_classic.js` külön fájl, de ugyanabba a globális névtérbe töltődnek**. Ha egy kártya ID-ja ütközik a kettő között, a betöltés sorrendje dönt, és ezt könnyű elnézni.
- **Pollinations válaszidő változó** (~10–30 s). A fúzió/creator loading state-eket ne egyszerűsítsd szinkron várakozássá.
- **Smaragd (token) számolás**: `state.tokens` a forrás. Minden költés után `updateTokenDisplay()` + `saveState()`.
- **Admin panel**: hozzáférésnek nincs külön auth gate-je a kódban — ha változtatsz rajta, a user szándékát kérdezd meg.
- **backup.sh push**: a script `git add -A`-t használ, ami mindent stage-el. Ha a repoban rendezetlen fájl van, azt is felviszi — deploy előtt érdemes `git status`-t nézni.

## Amit a user szokott kérni (minta)

- Új brainrot kártya hozzáadása képpel, sztorival.
- Matek feladat-generátor tweakelése (nehézség, tartomány, szabály).
- UI finomítás, új overlay, új gomb, animáció.
- Bug fix egy adott interakcióra (pl. "a fúzió néha nem ad smaragdot vissza").
- Content audit: `kidRating` ellenőrzés, magyar szövegek csiszolása.

Ezek a tipikus feladatok egyike sem igényel új fájlt — majdnem minden az `index.html` + `cards_*.js` háromszögben történik.
