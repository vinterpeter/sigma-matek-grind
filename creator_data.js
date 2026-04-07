// =============================================================================
// CREATE YOUR OWN ITALIAN BRAINROT — Creator Data
// =============================================================================

const creatorAnimals = [
  { id: "shark", name: "Cápa", nameIt: "Squalo Brainrottino", emoji: "🦈", prompt: "great white shark, full body, cartoon style" },
  { id: "crocodile", name: "Krokodil", nameIt: "Coccodrillo Magnifico", emoji: "🐊", prompt: "green crocodile, full body, cartoon style" },
  { id: "goose", name: "Lúd", nameIt: "Oca Pazza", emoji: "🪿", prompt: "white goose standing, full body, cartoon style" },
  { id: "penguin", name: "Pingvin", nameIt: "Pinguino Gelato", emoji: "🐧", prompt: "emperor penguin, full body, cartoon style" },
  { id: "cat", name: "Macska", nameIt: "Gatto Supremo", emoji: "🐱", prompt: "orange tabby cat sitting, full body, cartoon style" },
  { id: "dog", name: "Kutya", nameIt: "Cane Bellissimo", emoji: "🐶", prompt: "golden retriever dog, full body, cartoon style" },
  { id: "elephant", name: "Elefánt", nameIt: "Elefante Grande", emoji: "🐘", prompt: "grey elephant, full body, cartoon style" },
  { id: "bear", name: "Medve", nameIt: "Orso Fortissimo", emoji: "🐻", prompt: "brown bear standing, full body, cartoon style" },
  { id: "monkey", name: "Majom", nameIt: "Scimmia Bananosa", emoji: "🐒", prompt: "playful monkey, full body, cartoon style" },
  { id: "octopus", name: "Polip", nameIt: "Polpo Tentacolo", emoji: "🐙", prompt: "purple octopus with eight arms, cartoon style" },
  { id: "tiger", name: "Tigris", nameIt: "Tigre Feroce", emoji: "🐯", prompt: "orange striped tiger, full body, cartoon style" },
  { id: "horse", name: "Ló", nameIt: "Cavallo Veloce", emoji: "🐴", prompt: "brown horse galloping, full body, cartoon style" },
  { id: "frog", name: "Béka", nameIt: "Rana Saltarina", emoji: "🐸", prompt: "green tree frog, full body, cartoon style" },
  { id: "hamster", name: "Hörcsög", nameIt: "Criceto Paffuto", emoji: "🐹", prompt: "fluffy hamster with big cheeks, cartoon style" },
  { id: "raccoon", name: "Mosómedve", nameIt: "Procione Furbetto", emoji: "🦝", prompt: "raccoon with masked face, full body, cartoon style" },
  { id: "flamingo", name: "Flamingó", nameIt: "Fenicottero Rosa", emoji: "🦩", prompt: "pink flamingo standing on one leg, cartoon style" },
  { id: "turtle", name: "Teknős", nameIt: "Tartaruga Saggia", emoji: "🐢", prompt: "green sea turtle, full body, cartoon style" },
  { id: "eagle", name: "Sas", nameIt: "Aquila Maestosa", emoji: "🦅", prompt: "bald eagle with spread wings, cartoon style" },
  { id: "spider", name: "Pók", nameIt: "Ragno Misterioso", emoji: "🕷️", prompt: "black spider with eight legs, cartoon style" },
  { id: "whale", name: "Bálna", nameIt: "Balena Oceanica", emoji: "🐋", prompt: "blue whale swimming, full body, cartoon style" },
];

const creatorObjects = [
  { id: "pizza", name: "Pizza", nameIt: "Pizza Suprema", emoji: "🍕", prompt: "slice of pepperoni pizza with melted cheese" },
  { id: "banana", name: "Banán", nameIt: "Banana Tropicale", emoji: "🍌", prompt: "yellow ripe banana" },
  { id: "cappuccino", name: "Cappuccino", nameIt: "Cappuccino Espresso", emoji: "☕", prompt: "cup of cappuccino coffee with foam art" },
  { id: "gelato", name: "Fagylalt", nameIt: "Gelato Dolce", emoji: "🍦", prompt: "colorful ice cream gelato cone with three scoops" },
  { id: "spaghetti", name: "Spagetti", nameIt: "Spaghetti Perfetto", emoji: "🍝", prompt: "plate of spaghetti with tomato sauce and meatballs" },
  { id: "cactus", name: "Kaktusz", nameIt: "Cactus Spinoso", emoji: "🌵", prompt: "green desert cactus with spines" },
  { id: "watermelon", name: "Görögdinnye", nameIt: "Anguria Fresca", emoji: "🍉", prompt: "slice of juicy red watermelon" },
  { id: "rocket", name: "Rakéta", nameIt: "Razzo Spaziale", emoji: "🚀", prompt: "red and white space rocket launching" },
  { id: "guitar", name: "Gitár", nameIt: "Chitarra Musicale", emoji: "🎸", prompt: "acoustic guitar with wooden body" },
  { id: "balloon", name: "Lufi", nameIt: "Palloncino Colorato", emoji: "🎈", prompt: "bunch of colorful party balloons" },
  { id: "sunflower", name: "Napraforgó", nameIt: "Girasole Brillante", emoji: "🌻", prompt: "bright yellow sunflower in bloom" },
  { id: "mushroom", name: "Gomba", nameIt: "Fungo Magico", emoji: "🍄", prompt: "red and white spotted mushroom toadstool" },
  { id: "diamond", name: "Gyémánt", nameIt: "Diamante Prezioso", emoji: "💎", prompt: "sparkling blue diamond gemstone" },
  { id: "rainbow", name: "Szivárvány", nameIt: "Arcobaleno Magico", emoji: "🌈", prompt: "colorful rainbow arc in the sky" },
  { id: "candy", name: "Cukorka", nameIt: "Caramella Zuccherata", emoji: "🍬", prompt: "colorful wrapped candy sweets" },
  { id: "pineapple", name: "Ananász", nameIt: "Ananas Esotico", emoji: "🍍", prompt: "tropical pineapple fruit" },
  { id: "volcano", name: "Vulkán", nameIt: "Vulcano Esplosivo", emoji: "🌋", prompt: "erupting volcano with lava and smoke" },
  { id: "clock", name: "Óra", nameIt: "Orologio Antico", emoji: "🕰️", prompt: "antique grandfather clock with pendulum" },
  { id: "umbrella", name: "Esernyő", nameIt: "Ombrello Elegante", emoji: "☂️", prompt: "colorful open umbrella" },
  { id: "donut", name: "Fánk", nameIt: "Ciambella Glassata", emoji: "🍩", prompt: "pink frosted donut with sprinkles" },
];

const creatorLocations = [
  { id: "rome", name: "Róma", nameIt: "Roma Colosseo", emoji: "🏛️", prompt: "Roman Colosseum in Rome Italy, ancient arena" },
  { id: "venice", name: "Velence", nameIt: "Venezia Gondola", emoji: "🛶", prompt: "Venice canal with gondolas and colorful buildings" },
  { id: "space", name: "Űr", nameIt: "Spazio Lunare", emoji: "🌙", prompt: "outer space with moon surface and stars" },
  { id: "underwater", name: "Víz alatt", nameIt: "Oceano Profondo", emoji: "🌊", prompt: "underwater ocean scene with coral reef and fish" },
  { id: "desert", name: "Sivatag", nameIt: "Deserto Sahara", emoji: "🏜️", prompt: "sandy Sahara desert with sand dunes" },
  { id: "jungle", name: "Dzsungel", nameIt: "Giungla Tropicale", emoji: "🌴", prompt: "tropical rainforest jungle with lush green trees" },
  { id: "arctic", name: "Sarkvidék", nameIt: "Artico Ghiacciato", emoji: "🧊", prompt: "arctic ice landscape with icebergs and snow" },
  { id: "volcano_land", name: "Vulkán", nameIt: "Terra Vulcanica", emoji: "🌋", prompt: "volcanic landscape with lava rivers and smoke" },
  { id: "candy_land", name: "Cukorország", nameIt: "Terra delle Caramelle", emoji: "🍭", prompt: "fantasy candy land with lollipop trees and chocolate rivers" },
  { id: "cloud_kingdom", name: "Felhőország", nameIt: "Regno delle Nuvole", emoji: "☁️", prompt: "magical cloud kingdom floating in the sky with castles" },
  { id: "cave", name: "Barlang", nameIt: "Caverna Sotterranea", emoji: "🕳️", prompt: "underground cave with glowing crystals and stalactites" },
  { id: "castle", name: "Kastély", nameIt: "Castello Medievale", emoji: "🏰", prompt: "medieval stone castle with towers and flags" },
  { id: "neon_city", name: "Neonváros", nameIt: "Città Neon Tokyo", emoji: "🌃", prompt: "futuristic neon-lit Tokyo city street at night" },
  { id: "beach", name: "Strand", nameIt: "Spiaggia Tropicale", emoji: "🏖️", prompt: "tropical beach with palm trees and turquoise water" },
  { id: "mountain", name: "Hegycsúcs", nameIt: "Montagna Altissima", emoji: "🏔️", prompt: "snowy mountain peak with clouds" },
  { id: "haunted_forest", name: "Kísérteterdő", nameIt: "Foresta Stregata", emoji: "🌲", prompt: "dark haunted forest with fog and twisted trees" },
  { id: "library", name: "Könyvtár", nameIt: "Biblioteca Magica", emoji: "📚", prompt: "grand old library with tall bookshelves full of books" },
  { id: "kitchen", name: "Konyha", nameIt: "Cucina Italiana", emoji: "👨‍🍳", prompt: "busy Italian restaurant kitchen with pots and pans" },
  { id: "stadium", name: "Stadion", nameIt: "Stadio Arena", emoji: "🏟️", prompt: "large sports stadium arena with crowd and lights" },
  { id: "minecraft", name: "Minecraft", nameIt: "Mondo Minecraft", emoji: "⛏️", prompt: "blocky Minecraft world with pixelated landscape" },
];

const creatorTraits = [
  { id: "dj", name: "DJ", nameIt: "DJ Discoteca", emoji: "🎧", prompt: "DJ with headphones and turntable mixing music" },
  { id: "ninja", name: "Ninja", nameIt: "Ninja Silenzioso", emoji: "🥷", prompt: "stealthy ninja in black outfit with throwing stars" },
  { id: "king", name: "Király", nameIt: "Re Coronato", emoji: "👑", prompt: "royal king wearing golden crown and cape" },
  { id: "scientist", name: "Tudós", nameIt: "Scienziato Pazzo", emoji: "🔬", prompt: "mad scientist with lab coat and bubbling potions" },
  { id: "firefighter", name: "Tűzoltó", nameIt: "Pompiere Coraggioso", emoji: "🧑‍🚒", prompt: "brave firefighter with helmet and fire hose" },
  { id: "ballerina", name: "Balerina", nameIt: "Ballerina Danzante", emoji: "🩰", prompt: "graceful ballerina dancer in pink tutu" },
  { id: "pirate", name: "Kalóz", nameIt: "Pirata Avventuriero", emoji: "🏴‍☠️", prompt: "adventurous pirate with eyepatch and treasure map" },
  { id: "robot", name: "Robot", nameIt: "Robot Meccanico", emoji: "🤖", prompt: "shiny metallic robot with gears and lights" },
  { id: "giant", name: "Óriás", nameIt: "Gigante Enorme", emoji: "🦕", prompt: "enormous giant towering over buildings" },
  { id: "tiny", name: "Apró", nameIt: "Minuscolo Piccino", emoji: "🔍", prompt: "tiny miniature creature on a leaf" },
  { id: "flying", name: "Repülő", nameIt: "Volante Alato", emoji: "🪽", prompt: "flying creature with large feathered wings spread wide" },
  { id: "invisible", name: "Láthatatlan", nameIt: "Invisibile Fantasma", emoji: "👻", prompt: "semi-transparent ghostly invisible figure fading away" },
  { id: "strong", name: "Erős", nameIt: "Fortissimo Muscoloso", emoji: "💪", prompt: "super strong muscular hero lifting heavy boulder" },
  { id: "fast", name: "Gyors", nameIt: "Velocissimo Rapido", emoji: "⚡", prompt: "super fast speedster with lightning trail" },
  { id: "magnetic", name: "Mágneses", nameIt: "Magnetico Attraente", emoji: "🧲", prompt: "magnetic figure attracting metal objects all around" },
  { id: "glowing", name: "Világító", nameIt: "Luminoso Brillante", emoji: "✨", prompt: "glowing in the dark creature with neon light aura" },
  { id: "shapeshifter", name: "Alakváltó", nameIt: "Mutaforma Cambiante", emoji: "🔄", prompt: "shape-shifting creature transforming between multiple forms" },
  { id: "time_traveler", name: "Időutazó", nameIt: "Viaggiatore del Tempo", emoji: "⏰", prompt: "time traveler with portal and clock gears swirling" },
  { id: "multiplying", name: "Sokszorozó", nameIt: "Moltiplicatore Infinito", emoji: "👥", prompt: "multiplying cloning figure splitting into many copies" },
  { id: "fire_breathing", name: "Tűzokádó", nameIt: "Sputafuoco Infernale", emoji: "🔥", prompt: "fire-breathing creature shooting flames from mouth" },
];

// Export for use in other modules
if (typeof module !== "undefined" && module.exports) {
  module.exports = { creatorAnimals, creatorObjects, creatorLocations, creatorTraits };
}
