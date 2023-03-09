const dailyChallengeWords = [
  ['nu', 'typo', 'stuff', 'unusual', 'hydrophobia'],
  ['za', 'cash', 'drama', 'leisure', 'enchantment'],
  ['ne', 'exit', 'brake', 'resolve', 'jeopardize'],
  ['ape', 'view', 'setup', 'checked', 'prerogative'],
  ['bo', 'hope', 'bound', 'liberty', 'adlibbed'],
  ['qi', 'ache', 'hence', 'married', 'clairvoyant'],
  ['oi', 'ship', 'exact', 'musical', 'glycaemic'],
  ['hm', 'felt', 'coral', 'vintage', 'telekinetic'],
  ['ut', 'roti', 'space', 'library', 'galvanize'],
  ['ae', 'type', 'regal', 'largely', 'literary'],
  ['mm', 'each', 'thing', 'vaccine', 'wallflower'],
  ['hen', 'lisp', 'music', 'academy', 'congregate'],
  ['tar', 'ripe', 'study', 'optical', 'xylophone'],
  ['na', 'curl', 'carry', 'install', 'juggernaut'],
  ['for', 'lips', 'whose',  'organic', 'beseeching'],
  ['la', 'truce', 'north', 'delimit', 'zeitgeist'],
  ['me', 'veil', 'capes', 'calling', 'circumvent'],
  ['own', 'prey', 'shore', 'admirer', 'jubilation'],
  ['id', 'cuter', 'civil', 'meeting', 'pseudonym'],
  ['act', 'jump', 'cycle', 'attract', 'narcissist'],
  ['li', 'know', 'crown', 'knowing', 'reiterate'],
  ['no', 'help', 'guess', 'aligned', 'bureaucracy'],
  ['are', 'feel', 'carol', 'hundred', 'engrained'],
  ['do', 'slip', 'booth', 'writing', 'labyrinth'],
  ['op', 'zags', 'happy', 'potters', 'catalogue'],
  ['uh', 'grit', 'vocal', 'qualify', 'apothecary'],
  ['un', 'yank', 'prize', 'mention', 'quadrants'],
  ['pe', 'antis', 'front', 'minimum', 'zealous'],
  ['era', 'fire', 'might', 'venture', 'subjective'],
  ['is', 'live', 'local', 'factory', 'haphazard'],
  ['if', 'taxer', 'drink', 'machine', 'jambalaya'],
  ['cow', 'flog', 'large', 'because', 'charisma'],
  ['an', 'zero', 'unity', 'backing', 'unambitious'],
  ['jo', 'extra', 'early', 'upgrade', 'emancipated'],
  ['al', 'dips', 'baker', 'inquiry', 'testimonial'],
  ['oy', 'come', 'daily', 'payable', 'unfathomed'],
  ['ed', 'trio', 'watch', 'various', 'gridiron'],
  ['rat', 'hips', 'giant', 'whoever', 'hieroglyphic'],
  ['ax', 'reef', 'relay', 'maximum', 'scrutinize'],
  ['et', 'girl', 'frame', 'passage', 'arrhythmic'],
  ['ba', 'tope', 'fraud', 'monthly', 'impoverish'],
  ['odd', 'ugly', 'chose', 'captain', 'conjecturing'],
  ['won', 'trip', 'movie', 'removed', 'cumulative'],
  ['dog', 'recut', 'guest', 'vulnerable', 'grenadine'],
  ['ai', 'poet', 'label', 'thicken', 'transmogrify'],
  ['re', 'evil', 'tight', 'wedding', 'translucent'],
  ['aa', 'tans', 'threw', 'nervous', 'impalpable'],
  ['os', 'feet', 'draft', 'outdoor', 'impenetrable'],
  ['mo', 'flip', 'scape', 'balance', 'doppelganger'],
  ['mu', 'rats', 'minus', 'neutral', 'endocrine'],
  ['ka', 'fish', 'hero', 'however', 'journeyman'],
  ['mi', 'leer', 'lying', 'absence', 'apocalypse'],
  ['yo', 'proof', 'glare', 'satisfy', 'barbaric'],
  ['it', 'tars', 'paces', 'topical', 'hierarchy'],
  ['de', 'fogy', 'moral', 'opening', 'hemispheres'],
  ['on', 'golf', 'shout', 'viewing', 'indigenous'],
  ['em', 'stir', 'doubt', 'variety', 'jurisdiction'],
  ['ha', 'tier', 'urban', 'claimed', 'endangered'],
  ['pet', 'plot', 'layer', 'liberal', 'catacomb'],
  ['cat', 'lure', 'heavy', 'massive', 'bludgeon'],
  ['to', 'pelt', 'unlit', 'natural', 'linguistic'],
  ['ox', 'pyre', 'until', 'wanting', 'coagulate'],
  ['by', 'repo', 'funny', 'involve', 'tightwad'],
  ['ef', 'flop', 'class', 'winning', 'endearing'],
  ['go', 'bake', 'thorn', 'running', 'calzones'],
  ['so', 'pulp', 'logic', 'teeming', 'tangible'],
  ['bee', 'wonk', 'doing', 'upscale', 'topography'],
  ['xi', 'dish', 'ought', 'allergy', 'discrepancy'],
  ['he', 'beak', 'mayor', 'license', 'adjunction'],
  ['fro', 'gift', 'crime', 'leading', 'validation'],
  ['us', 'cope', 'dusty', 'morning', 'embroidered'],
  ['as', 'yeti', 'crash', 'protest', 'gastronomy'],
  ['ace', 'tire', 'zoned', 'limited', 'hoodwinked'],
  ['my', 'rule', 'month', 'banking', 'reliquified'],
  ['pa', 'stain', 'upset', 'suspect', 'panoramic'],
  ['ma', 'glee', 'known', 'measure', 'termination'],
  ['in', 'arts', 'prior', 'society', 'ecstatic'],
  ['or', 'true', 'wound', 'silence', 'foresight'],
  ['ab', 'reel', 'minor', 'loyalty', 'quagmire'],
  ['tan', 'riot', 'lager', 'housing', 'endeavour'],
  ['fa', 'satin', 'copes', 'capsule', 'boisterous'],
  ['ay', 'chase', 'molar', 'address', 'affluent'],
  ['ta', 'fees', 'exist', 'capitol', 'odoriferous'],
  ['el', 'toes', 'slags', 'warning', 'cumbersome'],
  ['ant', 'ploy', 'craft', 'ongoing', 'flamboyant'],
  ['si', 'hare', 'brief', 'therein', 'kinesthetic'],
  ['am', 'free', 'canoe', 'vehicle', 'amalgamate'],
  ['wo', 'goji', 'cross', 'poverty', 'eloquently'],
  ['sh', 'tarn', 'learn', 'unknown', 'archaism'],
  ['fe', 'jeer', 'write', 'waiting', 'venturesome'],
  ['ki', 'vent', 'scope', 'decimal', 'auspicious'],
  ['ear', 'tians', 'ocean', 'battery', 'tremendous'],
  ['ah', 'saint', 'cable', 'outcome', 'versatility'],
  ['bat', 'left', 'brand', 'science', 'destitute'],
  ['we', 'gull', 'south', 'braille', 'elaborately'],
  ['of', 'zest', 'fruit', 'deficit', 'horrendous'],
  ['aw', 'rant', 'clock', 'capable', 'diabolical'],
  ['hi', 'zips', 'mouth', 'barrier', 'jamboree'],
  ['ti', 'hear', 'vegan', 'kitchen', 'exhilarating'],
  ['en', 'rope', 'occur', 'subject', 'subjectify'],
  ['es', 'hype', 'break', 'instant', 'germination'],
  ['be', 'gilt', 'exits', 'warrant', 'eviscerate'],
  ['ho', 'rite', 'upper', 'medical', 'humiliation'],
  ['um', 'aches', 'bring', 'cabinet', 'ingenuous'],
  ['bi', 'cruet', 'drawn', 'neither', 'asymptotic'],
  ['ex', 'ants', 'right', 'operate', 'habitually'],
  ['eh', 'star', 'coach', 'gallery', 'disembark'],
  ['ya', 'trig', 'money', 'network', 'comprehend'],
  ['ye', 'cute', 'pitch', 'spotter', 'manoeuvre'],
  ['pi', 'filth', 'curve', 'bearing', 'xenophobia'],
  ['art', 'bulk', 'chars', 'landing', 'emphasized'],
  ['xu', 'yogi', 'claim', 'husband', 'recidivism'],
  ['up', 'luge', 'dozen', 'savior', 'impromptu'],
  ['now', 'pore', 'glass', 'declaim', 'ubiquitous'],
  ['er', 'very', 'girth', 'working', 'gerrymander'],
  ['at', 'girt', 'frank', 'ability', 'quintessence'],
  ['lo', 'flee', 'cream', 'manager', 'clientele'],
  ['ar', 'yawn', 'horse', 'logical', 'inhabitable'],
  ['ad', 'zoom', 'whole', 'notable', 'benefactor'],
  ['fry', 'pier', 'tough', 'willing', 'embellishing'],
  ['ow', 'oily', 'pilot', 'primary', 'precipitated'],
  ['om', 'glue', 'harry', 'utility', 'climactic'],
  ['our', 'gold', 'drill', 'nursing', 'belligerent'],
  ['oh', 'jolt', 'noise', 'studied', 'pediatrician'],
  ['ag', 'hilum', 'night', 'succeed', 'esoteric'],

  ["regally", "specula", "ballier", "scaleup", "selenic", "studdie", "dealing", "dealign", "camelid", "mavises", "coalpit"],
  ["tsar", "fete", "peri", "ritz", "reif", "wive", "rife", "fere", "yuck", "vlei", "rhea", "phis", "pish", "tains", "curet", "tiro", "eruct", "lept"],
  ["renal", "hoer", "sixte", "copse", "lingy","fiber", "tegus", "domar", "zendo", "shero", "shoer", "hoser", "moray", "dingo", "malic", "kebar", "leary", "claro", "macer", "stupe", "argle", "tuffs", "unbar", "buran", "howes", "oches", "fibre", "eosin"]


  ];


//create a dictionary of all the words in the dailyChallengeWords array
const dictionary = {};
for (let i = 0; i < dailyChallengeWords.length; i++) {
    for (let j = 0; j < dailyChallengeWords[i].length; j++) {
        dictionary[dailyChallengeWords[i][j]] = true;
    }
}

// create a dictionary function that checks if the word is in the dictionary
function isWord(word) {
    return dictionary[word];
}
  
  const dailyChallengeLetterPermanent = [
    ['n', 'y', 'f', 'n', 'd'],
    ['z', 's', 'a', 'r', 't'],
    ['n', 'i', 'r', 'l', 'z'],
    ['a', 'v', 's', 'c', 'v'],
    ['b', 'p', 'd', 'e', 'd'],
    ['q', 'c', 'c', 'a', 'r'],
    ['i', 's', 'c', 'l', 'l'],
    ['m', 'e', 'c', 'g', 'n'],
    ['t', 't', 'c', 'l', 'z'],
    ['e', 'p', 'e', 'g', 'a'],
    ['m', 'a', 'h', 'i', 'e'],
    ['e', 's', 'c', 'y', 't'],
    ['t', 'r', 's', 'a', 'y'],
    ['a', 'u', 'a', 'l', 'g'],
    ['o', 's', 'e', 'a', 'n'],
    ['l', 'r', 'o', 'i', 's'],
    ['m', 'v', 'c', 'g', 'e'],
    ['w', 'e', 'o', 'a', 'i'],
    ['d', 'c', 'v', 't', 'e'],
    ['c', 'm', 'c', 't', 'i'],
    ['l', 'o', 'w', 'o', 'a'],
    ['o', 'l', 's', 'g', 'c'],
    ['e', 'f', 'l', 'u', 'g'],
    ['d', 's', 'o', 'r', 'r'],
    ['o', 'g', 'y', 'o', 't'],
    ['u', 'i', 'v', 'a', 'a'],
    ['u', 'n', 'p', 'i', 'u'],
    ['e', 'i', 'o', 'm', 'l'],
    ['e', 'i', 'g', 'u', 'u'],
    ['s', 'i', 'l', 'y', 'a'],
    ['i', 'r', 'n', 'c', 'b'],
    ['o', 'g', 'r', 'u', 'm'],
    ['n', 'r', 'y', 'k', 'u'],
    ['j', 'a', 'y', 'g', 'n'],
    ['a', 'p', 'r', 'u', 'i'],
    ['y', 'e', 'a', 'a', 'd'],
    ['d', 't', 'w', 's', 'd'],
    ['r', 'p', 'g', 'r', 'g'],
    ['a', 'f', 'a', 'u', 'z'],
    ['t', 'r', 'e', 'a', 'r'],
    ['a', 'p', 'r', 't', 'e'],
    ['d', 'u', 'e', 't', 'j'],
    ['n', 'i', 'i', 'm', 'l'],
    ['g', 'e', 'u', 'e', 'e'],
    ['a', 'e', 'b', 'n', 'o'],
    ['e', 'e', 'h', 'd', 't'],
    ['a', 'a', 'r', 'o', 'l'],
    ['s', 'e', 'f', 'o', 'l'],
    ['o', 'l', 'a', 'a', 'a'],
    ['u', 't', 'm', 'l', 'r'],
    ['a', 'f', 'h', 'e', 'n'],
    ['i', 'l', 'n', 'c', 'o'],
    ['o', 'o', 'l', 'i', 'b'],
    ['t', 'a', 'a', 'p', 'y'],
    ['e', 'o', 'r', 'o', 's'],
    ['o', 'g', 'o', 'v', 'i'],
    ['e', 't', 'd', 'a', 'j'],
    ['h', 'r', 'r', 'i', 'd'],
    ['e', 'l', 'l', 'r', 't'],
    ['t', 'r', 'a', 'm', 'g'],
    ['t', 't', 'i', 't', 'i'],
    ['o', 'p', 'u', 'n', 'a'],
    ['b', 'o', 'n', 'n', 't'],
    ['e', 'f', 'a', 'w', 'd'],
    ['o', 'e', 'o', 'n', 'z'],
    ['o', 'p', 'l', 'e', 'i'],
    ['e', 'w', 'o', 'p', 'p'],
    ['i', 's', 'u', 'l', 'a'],
    ['e', 'e', 'm', 'e', 'j'],
    ['r', 'g', 'e', 'n', 'l'],
    ['s', 'c', 's', 'n', 'r'],
    ['s', 't', 's', 'p', 'r'],
    ['a', 'r', 'o', 't', 'o'],
    ['m', 'u', 'n', 'n', 'u'],
    ['p', 'n', 'e', 'e', 'o'],
    ['a', 'g', 'k', 'e', 'n'],
    ['n', 'r', 'p', 'c', 'c'],
    ['o', 't', 'n', 'e', 'f'],
    ['b', 'r', 'r', 'o', 'a'],
    ['t', 'o', 'g', 'h', 'd'],
    ['a', 'i', 's', 'u', 'u'],
    ['y', 's', 'o', 's', 'l'],
    ['a', 's', 'e', 't', 's'],
    ['l', 'o', 'l', 'n', 'r'],
    ['t', 'y', 't', 'n', 'y'],
    ['i', 'a', 'i', 'e', 't'],
    ['m', 'r', 'e', 'l', 'a'],
    ['w', 'g', 's', 'v', 'e'],
    ['h', 't', 'a', 'w', 'm'],
    ['f', 'e', 'w', 't', 'e'],
    ['k', 'v', 'e', 'l', 'u'],
    ['e', 'n', 'a', 'b', 'o'],
    ['h', 'i', 'c', 'c', 'r'],
    ['b', 'f', 'a', 'c', 'u'],
    ['w', 'l', 'h', 'r', 'a'],
    ['f', 'e', 'r', 'c', 's'],
    ['a', 'n', 'c', 'c', 'l'],
    ['h', 'z', 'h', 'b', 'm'],
    ['t', 'a', 'e', 'c', 'x'],
    ['e', 'p', 'u', 't', 'f'],
    ['e', 'p', 'r', 'n', 'g'],
    ['b', 't', 'x', 'r', 'v'],
    ['o', 't', 'u', 'i', 'h'],
    ['m', 's', 'b', 't', 'o'],
    ['b', 'u', 'a', 'e', 'o'],
    ['x', 'a', 'i', 't', 'y'],
    ['h', 'r', 'c', 'r', 'k'],
    ['y', 't', 'o', 'e', 'e'],
    ['y', 't', 'c', 'e', 'o'],
    ['i', 'h', 'u', 'g', 'x'],
    ['a', 'l', 'h', 'l', 'm'],
    ['u', 'y', 'm', 'u', 'i'],
    ['u', 'e', 'z', 'r', 'p'],
    ['o', 'e', 's', 'i', 'b'],
    ['r', 'r', 't', 'i', 'g'],
    ['a', 'i', 'n', 'i', 'e'],
    ['o', 'f', 'e', 'r', 'l'],
    ['r', 'n', 's', 'c', 'b'],
    ['d', 'm', 'h', 'o', 'f'],
    ['r', 'i', 'u', 'i', 'm'],
    ['w', 'y', 't', 'i', 'r'],
    ['m', 'u', 'r', 'l', 'i'],
    ['o', 'o', 'l', 'u', 'g'],
    ['o', 't', 'i', 'i', 'a'],
    ['g', 'h', 't', 'e', 't']
    
  ];
  
  const dailyChallengeLetterPermanentIndex = [
    [0, 1, 3, 1, 2],
    [0, 2, 2, 5, 6],
    [0, 2, 1, 4, 8],
    [0, 0, 0, 0, 9],
    [0, 2, 4, 3, 1],
    [0, 1, 3, 1, 4],
    [1, 0, 3, 6, 1],
    [1, 1, 0, 5, 6],
    [1, 2, 3, 0, 7],
    [1, 2, 1, 3, 5],
    [0, 1, 1, 4, 8],
    [1, 2, 4, 6, 8],
    [0, 0, 0, 5, 1],
    [1, 1, 1, 5, 2],
    [1, 3, 4, 3, 8],
    [0, 1, 1, 3, 7],
    [0, 0, 0, 6, 7],
    [1, 2, 2, 0, 3],
    [1, 0, 2, 3, 2],
    [1, 2, 0, 1, 4],
    [0, 2, 3, 2, 6],
    [1, 2, 3, 3, 6],
    [2, 0, 4, 1, 2],
    [0, 0, 1, 1, 4],
    [0, 2, 4, 1, 2],
    [0, 2, 0, 2, 0],
    [0, 2, 0, 4, 1],
    [1, 3, 2, 0, 3],
    [0, 1, 2, 4, 1],
    [1, 1, 0, 6, 1],
    [0, 4, 3, 2, 3],
    [1, 3, 2, 4, 6],
    [1, 2, 4, 3, 0],
    [0, 4, 4, 2, 3],
    [0, 2, 4, 3, 4],
    [1, 3, 1, 1, 9],
    [1, 0, 0, 6, 3],
    [0, 2, 0, 6, 5],
    [0, 3, 3, 5, 8],
    [1, 2, 4, 1, 1],
    [1, 2, 1, 3, 5],
    [1, 0, 4, 3, 3],
    [2, 2, 3, 2, 4],
    [2, 1, 1, 4, 2],
    [0, 2, 2, 6, 6],
    [1, 0, 3, 2, 0],
    [0, 1, 2, 4, 4],
    [1, 1, 3, 0, 10],
    [1, 1, 2, 1, 7],
    [1, 2, 0, 6, 5],
    [1, 0, 0, 3, 4],
    [1, 0, 3, 5, 2],
    [1, 2, 1, 3, 0],
    [1, 1, 1, 2, 8],
    [1, 1, 2, 0, 4],
    [0, 0, 2, 0, 0],
    [0, 1, 0, 1, 0],
    [0, 3, 1, 3, 2],
    [1, 1, 0, 4, 2],
    [2, 2, 2, 0, 4],
    [0, 3, 3, 2, 1],
    [0, 0, 0, 2, 2],
    [0, 3, 2, 1, 0],
    [0, 0, 2, 0, 2],
    [1, 3, 2, 2, 3],
    [1, 0, 0, 1, 4],
    [1, 0, 1, 1, 2],
    [1, 2, 1, 1, 7],
    [1, 1, 0, 3, 2],
    [1, 0, 4, 5, 2],
    [1, 0, 2, 3, 3],
    [1, 2, 3, 0, 4],
    [0, 2, 1, 4, 1],
    [0, 1, 2, 2, 5],
    [0, 4, 3, 4, 3],
    [1, 0, 0, 1, 5],
    [1, 1, 0, 2, 1],
    [0, 0, 3, 3, 0],
    [1, 0, 4, 1, 2],
    [0, 2, 2, 0, 2],
    [1, 3, 4, 4, 8],
    [1, 3, 1, 5, 3],
    [1, 3, 0, 4, 10],
    [1, 1, 1, 3, 5],
    [2, 3, 4, 1, 6],
    [1, 1, 2, 2, 5],
    [1, 1, 4, 5, 0],
    [0, 0, 3, 2, 0],
    [1, 0, 2, 5, 7],
    [0, 1, 0, 3, 1],
    [0, 0, 4, 6, 1],
    [0, 3, 3, 0, 7],
    [1, 2, 0, 3, 2],
    [0, 2, 2, 1, 6],
    [0, 2, 4, 1, 2],
    [1, 1, 1, 4, 9],
    [0, 2, 0, 0, 5],
    [0, 0, 4, 0, 2],
    [0, 2, 1, 3, 1],
    [0, 2, 3, 6, 8],
    [0, 2, 1, 1, 0],
    [0, 3, 1, 2, 1],
    [1, 2, 0, 3, 0],
    [1, 4, 0, 6, 6],
    [0, 2, 2, 1, 6],
    [1, 0, 1, 5, 9],
    [1, 3, 0, 5, 8],
    [0, 0, 1, 1, 5],
    [0, 2, 3, 5, 3],
    [1, 4, 1, 6, 0],
    [0, 2, 1, 0, 1],
    [1, 0, 4, 1, 3],
    [0, 3, 2, 5, 2],
    [1, 3, 3, 5, 1],
    [1, 2, 3, 4, 0],
    [0, 1, 3, 2, 5],
    [1, 0, 2, 6, 1],
    [1, 3, 3, 4, 4],
    [1, 3, 1, 1, 4],
    [1, 1, 2, 1, 1],
    [1, 3, 4, 2, 1],
    [1, 2, 2, 3, 2],
    [0, 1, 3, 1, 5],
    [0, 3, 2, 4, 4],
    [1, 0, 4, 4, 3]
 
];
  
  const dailyChallengeWordsShuffledMinusPermanent = [
    ['u', 'otp', 'ufts', 'auulsu', 'oahrbhypio'],
    ['a', 'cha', 'amrd', 'ueisle', 'tehmncaenn'],
    ['e', 'xte', 'ekab', 'vseroe', 'dieaejpro'],
    ['pe', 'iwe', 'tpue', 'cedekh', 'rraeietgop'],
    ['o', 'eho', 'obnu', 'rlyibt', 'leabdib'],
    ['i', 'eah', 'neeh', 'miderr', 'ocaliytanv'],
    ['o', 'ihp', 'teax', 'ucasim', 'yaiemccg'],
    ['h', 'tfl', 'arol', 'itnaev', 'tkeeilitce'],
    ['u', 'ori', 'psae', 'byairr', 'enivgala'],
    ['a', 'tye', 'lrga', 'eyrall', 'irlyret'],
    ['m', 'hce', 'tgin', 'ncecav', 'owralwlfl'],
    ['nh', 'pli', 'musi', 'aedamc', 'oengcager'],
    ['ar', 'epi', 'tduy', 'optilc', 'elonxoph'],
    ['n', 'lcr', 'rycr', 'tnlais', 'rnuguajte'],
    ['rf', 'lpi', 'oswh', 'rcigon', 'ehgeesibc'],
    ['a', 'ecut', 'rhnt', 'dtimle', 'etzigeit'],
    ['e', 'lie', 'epsa', 'cianll', 'vncuictrm'],
    ['no', 'ypr', 'shre', 'irrmde', 'ijbltnuao'],
    ['i', 'ruet', 'liic', 'neiemg', 'ynuospmd'],
    ['ta', 'pju', 'clye', 'attrca', 'snsrtiasc'],
    ['i', 'wnk', 'ocrn', 'gnwkni', 'ierertte'],
    ['n', 'ehp', 'ugse', 'laiden', 'uecbyauarr'],
    ['ra', 'eel', 'raco', 'herddn', 'areneind'],
    ['o', 'ilp', 'btho', 'gniwit', 'halbynti'],
    ['p', 'azs', 'apph', 'pstetr', 'cglaaueo'],
    ['h', 'grt', 'alco', 'ifulqy', 'tphoacery'],
    ['n', 'yak', 'irez', 'onnmet', 'adsatqnr'],
    ['p', 'ntsa', 'ftrn', 'umimni', 'aeuosz'],
    ['ar', 'fre', 'ihmt', 'eenrvt', 'tjeecsbvi'],
    ['i', 'elv', 'caol', 'cfrtoa', 'rhahdpza'],
    ['f', 'exta', 'ridk', 'hemani', 'almjayaa'],
    ['cw', 'olf', 'lega', 'eceabs', 'craihas'],
    ['a', 'ezo', 'utin', 'cgnbia', 'nouitimbas'],
    ['o', 'etrx', 'ealr', 'euardp', 'aetpedaimc'],
    ['l', 'sdi', 'beka', 'yqinri', 'lsnttimaoe'],
    ['o', 'moc', 'ilyd', 'ybplea', 'omnahutef'],
    ['e', 'iro', 'thac', 'roviua', 'gniiror'],
    ['at', 'hsi', 'tnia', 'ehveow', 'rocpeihyihl'],
    ['x', 'ere', 'erly', 'mixmam', 'crientsui'],
    ['e', 'lgi', 'mfra', 'easpgs', 'hycmatrhi'],
    ['b', 'eto', 'adfu', 'nyhlmo', 'phriomsiv'],
    ['do', 'lyg', 'ohsc', 'cnpaia', 'ntneccgioru'],
    ['ow', 'prt', 'voem', 'dvoere', 'meivctauu'],
    ['od', 'rctu', 'egst', 'alnlurevb', 'gndanire'],
    ['i', 'top', 'llae', 'icehkt', 'srnrymitafg'],
    ['r', 'vil', 'gtti', 'inwgde', 'elcunrants'],
    ['a', 'tns', 'whte', 'envrsu', 'pbmaiealp'],
    ['o', 'etf', 'drta', 'rtdouo', 'bpeeintamre'],
    ['m', 'ipf', 'epsc', 'cnlabe', 'ggnedpeoplr'],
    ['m', 'ras', 'usni', 'truaen', 'eneicodn'],
    ['k', 'his', 'ero', 'vwhore', 'anoymjreu'],
    ['m', 'ere', 'gyil', 'bnaees', 'lpacasype'],
    ['y', 'porf', 'raeg', 'ysfats', 'airacbr'],
    ['i', 'srt', 'cesp', 'ltoica', 'acihrhre'],
    ['d', 'yfg', 'lmao', 'pgnnei', 'hseerhmipe'],
    ['n', 'flo', 'thus', 'nigwie', 'gnosneidu'],
    ['m', 'sir', 'outb', 'yervti', 'ctodsruinii'],
    ['a', 'tie', 'abun', 'cemdal', 'naneredeg'],
    ['pt', 'tpo', 'yaer', 'lialeb', 'ambcoac'],
    ['ca', 'ule', 'yehv', 'essaiv', 'denulbo'],
    ['o', 'elp', 'tlnu', 'luaarn', 'itsilugcn'],
    ['x', 'yre', 'nlit', 'awgnti', 'cetulgoa'],
    ['y', 'erp', 'nyfu', 'veoilv', 'awdthgi'],
    ['f', 'opl', 'cssl', 'ninnig', 'engirane'],
    ['g', 'bak', 'rnth', 'nrguni', 'coaelns'],
    ['s', 'ulp', 'iocg', 'nitemg', 'abenltg'],
    ['eb', 'nok', 'idng', 'lucsea', 'ogyahtpor'],
    ['x', 'hid', 'ohgt', 'rlagey', 'cpisrdcney'],
    ['h', 'bka', 'yrao', 'licnes', 'idtonunac'],
    ['of', 'tfi', 'cmir', 'liedag', 'aitdainvo'],
    ['u', 'ope', 'duyt', 'morgni', 'emdboeredi'],
    ['a', 'iye', 'rhca', 'setotr', 'tgymnosao'],
    ['ec', 'iet', 'zend', 'deilmi', 'wkedodnhi'],
    ['y', 'rle', 'hmot', 'nkiabg', 'qreeiidlfi'],
    ['a', 'siat', 'psut', 'tcpuss', 'amnapcir'],
    ['m', 'lee', 'wnon', 'earsum', 'trtneiimoa'],
    ['i', 'tsa', 'iorr', 'yoseti', 'itatsce'],
    ['r', 'eur', 'wduo', 'iecnls', 'rehosigt'],
    ['a', 'lee', 'inmo', 'ltalyy', 'eugmrqi'],
    ['an', 'irt', 'laer', 'uongis', 'anerveuo'],
    ['f', 'stan', 'poce', 'slepca', 'btriooess'],
    ['a', 'haec', 'lmar', 'sdaerd', 'nffeuta'],
    ['t', 'efe', 'tisx', 'pialoc', 'uooorirdef'],
    ['e', 'ste', 'assg', 'agriwn', 'euebscmom'],
    ['an', 'plo', 'crfa', 'goniog', 'taonlmabf'],
    ['s', 'her', 'rbfe', 'eihntr', 'setkienhic'],
    ['a', 'eef', 'naco', 'chieev', 'amgatmale'],
    ['o', 'ijo', 'scro', 'eoyrtp', 'lqyeunlot'],
    ['s', 'ran', 'ernl', 'onnukn', 'crshiaa'],
    ['e', 'ejr', 'trei', 'nwgiia', 'uvrnseotem'],
    ['i', 'etn', 'oscp', 'aecidm', 'uiapossic'],
    ['ar', 'iats', 'ceno', 'etraty', 'edemnturs'],
    ['a', 'nsat', 'albe', 'touemo', 'etisvtlaiy'],
    ['ta', 'etl', 'rbnd', 'ecsnei', 'eestttid'],
    ['e', 'ulg', 'usot', 'iablle', 'abyerlelot'],
    ['o', 'szt', 'tfiu', 'eitifd', 'dorunoerh'],
    ['w', 'rta', 'cokl', 'balaep', 'icbolaaid'],
    ['i', 'psi', 'muot', 'rrarie', 'ajoeber'],
    ['i', 'ehr', 'navg', 'knhiet', 'aeaginthilr'],
    ['n', 'ero', 'rocc', 'usjceb', 'yceuisjbt'],
    ['s', 'hey', 'beak', 'santit', 'itrnaoeinm'],
    ['e', 'gil', 'tise', 'anwtra', 'eeeitscra'],
    ['h', 'ire', 'eprp', 'cledma', 'tlimunaiio'],
    ['u', 'hcea', 'nrig', 'inbaec', 'nuseiung'],
    ['i', 'crte', 'dnrw', 'thrnie', 'mcysiptat'],
    ['e', 'stn', 'hgrt', 'peearo', 'tlliuhaba'],
    ['e', 'ast', 'oach', 'gayell', 'eimdbsar'],
    ['a', 'irg', 'nyem', 'townkr', 'dmrpeonhc'],
    ['e', 'cue', 'ihpt', 'sottpr', 'eranveum'],
    ['p', 'lift', 'revc', 'reanbi', 'phnoeaoib'],
    ['tr', 'buk', 'rsac', 'nnadig', 'hipdzeeas'],
    ['x', 'oig', 'ilca', 'dbshan', 'cimsdveir'],
    ['p', 'lgu', 'doen', 'iavso', 'iotmpumr'],
    ['nw', 'pro', 'lasg', 'clamde', 'oiuuutqis'],
    ['e', 'yve', 'hrig', 'krnowg', 'ymnerrread'],
    ['t', 'trg', 'fkar', 'biylta', 'qstinsencue'],
    ['l', 'lee', 'crma', 'gmeaan', 'eceielnt'],
    ['a', 'awy', 'oerh', 'alogil', 'ieitanbhal'],
    ['a', 'ooz', 'elwo', 'bantel', 'tboaercen'],
    ['yf', 'erp', 'otgh', 'lgilnw', 'ellnebhiisg'],
    ['o', 'oli', 'piol', 'rrampy', 'eptiaecpdti'],
    ['o', 'gle', 'hrya', 'iiyutt', 'cticlmca'],
    ['ru', 'gdl', 'idrl', 'rgnisn', 'rleeitnbel'],
    ['h', 'olj', 'nose', 'setddu', 'icprinteiad'],
    ['a', 'uilm', 'ihng', 'cseduc', 'creesoi']
  ];


 // const offsetFromDate = new Date(2022, 5, 27)
  const offsetFromDate = new Date(2023, 1, 31)
  const msOffset = Date.now() - offsetFromDate
  const dayOffset = msOffset / 1000 / 60 / 60 / 24
  console.log(dayOffset)
  console.log(msOffset)
  
  
  const dayIndex = Math.floor(dayOffset) % dailyChallengeWords.length;
  console.log(dayIndex);
  console.log((dayIndex + 1) % dailyChallengeWords.length);
  console.log(dailyChallengeWords[(dayIndex) % dailyChallengeWords.length][0]);
  dailyChallengeCheck();
  setLastRefresh();
  

// console log the words
  console.log(dailyChallengeWords[dayIndex][0]);
  console.log(dailyChallengeWords[dayIndex][1]);
  console.log(dailyChallengeWords[dayIndex][2]);
  console.log(dailyChallengeWords[dayIndex][3]);
  console.log(dailyChallengeWords[dayIndex][4]);



  const day = Math.floor(dayOffset) % dailyChallengeWords.length;
  console.log(day)
  const now = new Date();
  const year = now.getFullYear();
  const month = ('0' + (now.getMonth() + 1)).slice(-2);
  const dayT = ('0' + now.getDate()).slice(-2);
  const todayDate = `${year}-${month}-${dayT}`;
  console.log(todayDate);



  const guessGrid = document.querySelector(".guess-grid");
  const word = dailyChallengeWords[day][0];
  const index = 0;
  for (let i = 0; i < word.length; i++) {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    tile.textContent = "";
    tile.setAttribute("draggable", true);
    tile.setAttribute("touch-action", true); 
    tile.setAttribute("data-id", i);
    if (i === dailyChallengeLetterPermanentIndex[day][index]) {
      tile.classList.add("permanent");
      tile.textContent = dailyChallengeLetterPermanent[day][index];
    }
    guessGrid.appendChild(tile);
    
  }

//create a tile for each letter in the dailyChallengeWordsShuffledMinusPermanent array in the letter grid
const letterGrid = document.querySelector(".letter-grid");
const wordShuffled = dailyChallengeWordsShuffledMinusPermanent[day][0];
for (let i = 0; i < wordShuffled.length; i++) {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    tile.textContent = wordShuffled[i];
    tile.setAttribute("draggable", true);
    tile.setAttribute("touch-action", true); 
    tile.setAttribute("data-id", i);
    letterGrid.appendChild(tile);
}



document.addEventListener('DOMContentLoaded', function() {
    const dailyChallengeComplete = JSON.parse(localStorage.getItem("dailyChallengeComplete"));
    if (dailyChallengeComplete) {
      const popup = document.querySelector(".popup-container");
      popup.classList.remove("hidden");
    }
  });  



  function getPossibleSolutions(word) {
    const solutions = [];
    for (let i = 0; i < word.length; i++) {
      const rotatedWord = word.slice(i) + word.slice(0, i);
      if (isWord(rotatedWord)) {
        solutions.push(rotatedWord);
      }
    }
    return solutions;
  }
  getPossibleSolutions(dailyChallengeWords[day][0]);
  getPossibleSolutions(dailyChallengeWords[day][1]);
  getPossibleSolutions(dailyChallengeWords[day][2]);
  getPossibleSolutions(dailyChallengeWords[day][3]);
  getPossibleSolutions(dailyChallengeWords[day][4]);

console.log(getPossibleSolutions(dailyChallengeWords[day][4]));

//put the possible solutions in the local storage
localStorage.setItem("possibleSolutions", getPossibleSolutions(dailyChallengeWords[day][4]));



// get references to the HTML elements
const timeDiffElement = document.querySelector("#time-diff");
const lastWordElement = document.querySelector("#last-word");
const dictionaryLinkElement = document.querySelector("#dictionary-link");
//take the value of steak and put it in the html span id="streak"
const streakElement = document.querySelector('#streak');
streakElement.textContent = localStorage.getItem('streak');




//create  timeDiff = getTimeDifference(); and add it to html element 





//update the last word the user entered from possible solutions
const lastWord = localStorage.getItem("lastWord");


lastWordElement.textContent = lastWord;

// update the dictionary link
dictionaryLinkElement.href = `dictionary.com/browse/${lastWord}`;
dictionaryLinkElement.textContent = `dictionary.com/browse/${lastWord}`;




const timeDiffElem = document.getElementById('time-diff');
const timeDiff = localStorage.getItem('timeDiff');
if (timeDiff) {
  timeDiffElem.textContent = timeDiff;
} else {
  timeDiffElem.textContent = 'No time difference found';
}



  // add listeners to popup buttons
  function addPopupListeners() {
    const popup = document.querySelector('.popup-container');
  }

  // popup code
function showPopupIfComplete() {
  const dailyChallengeComplete = localStorage.getItem('dailyChallengeComplete');
  const popup = document.querySelector('.popup-container');
  if (dailyChallengeComplete === 'true') {
    popup.style.display = 'block';
    addPopupListeners();
  } else {
    popup.style.display = 'none';
  }
}

//end of popup code  



let correctCount = 0;
let currentIndex = 0;
let totalWords = dailyChallengeWords[day].length;
let targetWord = dailyChallengeWords[day][currentIndex];



function setupNextWord() {
  const today = new Date().toISOString().slice(0, 10);

  currentIndex++;
  if (currentIndex === totalWords) {
    danceTiles();
    showAlert("Done for the day", "success");
    incrementStreak();
    setLastCompletedDate();
    checkLastRefresh();
    setEndTime();
    
    return;
  }
  targetWord = dailyChallengeWords[day][currentIndex];
  const guessWordTiles = document.querySelectorAll(".guess-grid .tile");
  guessWordTiles.forEach(tile => tile.remove());
  for (let i = 0; i < targetWord.length; i++) {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    tile.textContent = "";
    tile.setAttribute("draggable", true);
    tile.setAttribute("touch-action", true); 
    tile.setAttribute("data-id", i);
    if (i === dailyChallengeLetterPermanentIndex[day][currentIndex]) {
      tile.classList.add("permanent");
      tile.textContent = dailyChallengeLetterPermanent[day][currentIndex];
    }
    guessGrid.appendChild(tile);
  }
  const letterTiles = document.querySelectorAll(".letter-grid .tile");
  letterTiles.forEach(tile => tile.remove());
  const wordShuffled = dailyChallengeWordsShuffledMinusPermanent[day][currentIndex];
  for (let i = 0; i < wordShuffled.length; i++) {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    tile.textContent = wordShuffled[i];
    tile.setAttribute("draggable", true);
    tile.setAttribute("touch-action", true); 
    tile.setAttribute("data-id", i);
    letterGrid.appendChild(tile);
  }
  //add event listeners to the tiles
  const tiles = document.querySelectorAll(".tile");
  tiles.forEach(tile => tile.addEventListener("dragstart", dragStart));
  tiles.forEach(tile => tile.addEventListener("dragend", dragEnd));
  tiles.forEach(tile => tile.addEventListener("dragover", dragOver));
  tiles.forEach(tile => tile.addEventListener("dragenter", dragEnter));
  tiles.forEach(tile => tile.addEventListener("dragleave", dragLeave));
  tiles.forEach(tile => tile.addEventListener("drop", dragDrop));
  //add event listeners to the tiles for mobile
  tiles.forEach(tile => tile.addEventListener("touchstart", touchStart));
  tiles.forEach(tile => tile.addEventListener("touchmove", touchMove));
  tiles.forEach(tile => tile.addEventListener("touchend", touchEnd));
}



  function checkWord() {
    if (localStorage.getItem('dailyChallengeComplete') === 'true') {
        return;
      }
    const guessWordTiles = document.querySelectorAll(".guess-grid .tile");
    const guessWordString = Array.from(guessWordTiles).map(tile => tile.textContent).join("");
    if (isWord(guessWordString) && guessWordString.length === targetWord.length) {
      showAlert("Correct", "success");
      setupNextWord();
      danceTiles();
      correctCount++;
      const possibleSolutions = getPossibleSolutions(targetWord);
      localStorage.setItem('possibleSolutions', JSON.stringify(possibleSolutions));
      localStorage.setItem('lastWord', guessWordString); // update the lastWord in local storage
    } else if (guessWordString.length !== targetWord.length) {
      showAlert("Please use all letters", "error");
      shakeTiles();
    } else {
      showAlert("Incorrect", "error");
      shakeTiles();
    }
  
    if (currentIndex === totalWords) {
      // show alert that the daily challenge is complete and show the timer and last word index
      danceTiles();
      showAlert("Daily Challenge Complete", "success");
      // retrieve the possibleSolutions array from local storage and display the last word used by the user
      const possibleSolutions = JSON.parse(localStorage.getItem('possibleSolutions'));
      const lastWord = localStorage.getItem('lastWord');
      lastWordElement.textContent = lastWord;
      // update the dictionary link with the last word used by the user
      dictionaryLinkElement.href = `dictionary.com/browse/${lastWord}`;
      dictionaryLinkElement.textContent = `dictionary.com/browse/${lastWord}`;
      // local storage for setEndTime

      
      
  
      // show popup after 2.9 seconds then reload the page to show popup
      setTimeout(function () {
        location.reload();
      }, 2900);
    }
  }



//create a function that sets last completed date and will overwrite itself when called
function setLastCompletedDate() {
  const now = new Date();
  const year = now.getFullYear();
  const month = ('0' + (now.getMonth() + 1)).slice(-2);
  const day = ('0' + now.getDate()).slice(-2);
  const formattedDate = `${year}-${month}-${day}`;
  localStorage.setItem('lastCompletedDate', formattedDate);
}

function presentStreak() {
  const lastCompletedDate = localStorage.getItem('lastCompletedDate');
  if (!lastCompletedDate) {
    streakElement.textContent = 0;
    localStorage.setItem('streak', 0);

    return;
  }
  const today = new Date().toISOString().slice(0, 10);
  const yesterday = new Date(new Date().setDate(new Date().getDate() - 1)).toISOString().slice(0, 10);
  if (lastCompletedDate !== today && lastCompletedDate !== yesterday) {
    localStorage.removeItem('streak');
  }
}
presentStreak();

function incrementStreak() {
  const currentStreak = parseInt(localStorage.getItem('streak')) || 0;
  const updatedStreak = currentStreak + 1;
  localStorage.setItem('streak', updatedStreak);
  return updatedStreak;
}




//create a function that sets the last browser refresh time in local storage when page loads and only sets the last browser refresh time once make it in the format of day/month/year hour:minute:second
function setLastRefresh() {
  const lastRefresh = localStorage.getItem('lastRefresh');
  const now = new Date();
  const lastRefreshDate = new Date(lastRefresh).toISOString().slice(0, 10);
  const year = now.getFullYear();
  const month = ('0' + (now.getMonth() + 1)).slice(-2);
  const day = ('0' + now.getDate()).slice(-2);
  const currentDate = `${year}-${month}-${day}`;
  // Update the last refresh time every time the page is refreshed
  localStorage.setItem('lastRefresh', currentDate);
}

function dailyChallengeCheck() {
  const lastRefresh = localStorage.getItem('lastRefresh');
  const lastRefreshDate = new Date(lastRefresh).toISOString().slice(0, 10);
  const lastCompletedDate = localStorage.getItem('lastCompletedDate');
  const now = new Date();
  const year = now.getFullYear();
  const month = ('0' + (now.getMonth() + 1)).slice(-2);
  const dayT = ('0' + now.getDate()).slice(-2);
  const todayDate = `${year}-${month}-${dayT}`;
  const startTime = localStorage.getItem('startTime');
  if (lastRefreshDate === lastCompletedDate) {
    localStorage.setItem('dailyChallengeComplete', true);
  } else {
    localStorage.setItem('dailyChallengeComplete', false);
    if (startTime && startTime.slice(0, 10) !== todayDate) {
      localStorage.removeItem('startTime');
      localStorage.removeItem('endTime');
      localStorage.removeItem('timeDiff');
    }
    setStartTime();
    console.log(lastRefreshDate);
    console.log(todayDate);
  }
}

dailyChallengeCheck();











// create a streak funcion.  if data lastCompletedDate is today, streak is +1. if there is data from lastCompletedDate yesterday and there is a value of streak add one.  if lastCompletedDate is not yesterday or today remove the streak value.  




function setStartTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const startTime = `${year}-${month}-${day}-${hours}:${minutes}:${seconds}`;
  const lastRefresh = localStorage.getItem('lastRefresh');
  const lastRefreshDate = lastRefresh ? new Date(lastRefresh).toISOString().slice(0, 10) : null;
  if (lastRefreshDate !== `${year}-${month}-${day}`) {
    localStorage.removeItem('startTime');
    localStorage.removeItem('endTime');
    localStorage.setItem('lastRefresh', `${year}-${month}-${day}`);
  }
  const storedStartTime = localStorage.getItem('startTime');
  if (!storedStartTime) {
    localStorage.setItem('startTime', startTime);
  }
}

function setEndTime() {
  const now = new Date();
  console.log('now:', now);
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  const endTime = `${year}-${month}-${day}-${hours}:${minutes}:${seconds}`;
  localStorage.setItem('endTime', endTime);

  // calculate the time difference between start time and end time
  const storedStartTime = localStorage.getItem('startTime');
  console.log('storedStartTime:', storedStartTime);
  if (storedStartTime) {
    const startTime = new Date(storedStartTime.replace(/-/g, "/")).getTime();
    console.log('startTime:', startTime);
    const diffTime = now.getTime() - startTime;
    const seconds = Math.floor(diffTime / 1000);
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const timeDiff = `${minutes}:${String(remainingSeconds).padStart(2, '0')}`;
    localStorage.setItem('timeDiff', timeDiff);
  }
}




//create a function that compares the last refresh time to the last completed date and if they are the same, set the dailyChallengeComplete key in local storage to true
function checkLastRefresh() {
  const lastRefresh = localStorage.getItem('lastRefresh');
  const lastRefreshDate = new Date(lastRefresh).toISOString().slice(0, 10);
}
checkLastRefresh();

 


//create a shuffle button that shuffles the letters in the letter grid also make the space bar shuffle the letters
document.addEventListener("keydown", function (e) {
    if (e.keyCode === 32) {
        const letterTiles = document.querySelectorAll(".letter-grid .tile");
        const letterTilesArray = Array.from(letterTiles);
        for (let i = letterTilesArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [letterTilesArray[i], letterTilesArray[j]] = [letterTilesArray[j], letterTilesArray[i]];
        }
        letterTilesArray.forEach((tile, index) => {
            letterGrid.appendChild(tile);
        });
    }
});




//create reset button to reset the game
document.querySelector("#reset-button").addEventListener("click", function () {
    location.reload();
});


//add event listener to all tiles give them the ability to dragged and dropped into each tile. if there is a letter in the tile, swap content except for the permanent tiles
const tiles = document.querySelectorAll(".tile");
tiles.forEach(tile => {
    tile.addEventListener("dragstart", dragStart);
    tile.addEventListener("dragend", dragEnd);
    tile.addEventListener("dragover", dragOver);
    tile.addEventListener("dragenter", dragEnter);
    tile.addEventListener("dragleave", dragLeave);
    tile.addEventListener("drop", dragDrop);
    tile.addEventListener("touchstart", touchStart);
    tile.addEventListener("touchmove", touchMove);
    tile.addEventListener("touchend", touchEnd);

});

let currentTile = null;
let ghostTile = null;

function touchStart(event) {
    event.preventDefault();
    currentTile = this;
    currentTile.classList.add("dragging");

    // create ghost tile
    ghostTile = currentTile.cloneNode(true);
    ghostTile.classList.add("ghost");
    ghostTile.style.opacity = "0.5";
    ghostTile.style.pointerEvents = "none";
    ghostTile.style.position = "fixed";
    ghostTile.style.top = event.touches[0].pageY - (currentTile.offsetHeight / 2) + "px";
    ghostTile.style.left = event.touches[0].pageX - (currentTile.offsetWidth / 2) + "px";
    ghostTile.style.width = currentTile.offsetWidth + "px";
    ghostTile.style.height = currentTile.offsetHeight + "px";
    document.body.appendChild(ghostTile);
}

function touchMove(event) {
    event.preventDefault();
    const touch = event.touches[0];

    // update ghost tile position and size
    ghostTile.style.top = touch.pageY - (currentTile.offsetHeight / 2) + "px";
    ghostTile.style.left = touch.pageX - (currentTile.offsetWidth / 2) + "px";
    ghostTile.style.width = currentTile.offsetWidth + "px";
    ghostTile.style.height = currentTile.offsetHeight + "px";
}

function touchEnd(event) {
    event.preventDefault();
    currentTile.classList.remove("dragging");
    const target = document.elementFromPoint(
        event.changedTouches[0].clientX,
        event.changedTouches[0].clientY
    );
    if (target && target.classList.contains("tile")) {
        swapTiles(currentTile, target);
    }

    // remove ghost tile
    document.body.removeChild(ghostTile);
    ghostTile = null;

    currentTile.style.left = null;
    currentTile.style.top = null;
    currentTile = null;
}


function dragStart() {
  this.classList.add("dragging");
}

function dragEnd() {
  this.classList.remove("dragging");
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
}

function dragLeave() {
  this.classList.remove("hovered");
}

//give drag and drop functionality to the tiles except for the permanent tiles which can not be moved
function dragDrop() {
  this.classList.remove("hovered");
  const draggingTile = document.querySelector(".dragging");
  const draggingTileId = draggingTile.getAttribute("data-id");
  const draggingTileText = draggingTile.textContent;
  const thisTileId = this.getAttribute("data-id");
  const thisTileText = this.textContent;
  if (this.classList.contains("permanent")) {
      return;
  } else {
      this.textContent = draggingTileText;
      this.setAttribute("data-id", draggingTileId);
      draggingTile.textContent = thisTileText;
      draggingTile.setAttribute("data-id", thisTileId);
  }
}

function swapTiles(tile1, tile2) {
  if (tile1.classList.contains("permanent") || tile2.classList.contains("permanent")) {
      return;
  }
  const tile1Id = tile1.getAttribute("data-id");
  const tile1Text = tile1.textContent;
  const tile2Id = tile2.getAttribute("data-id");
  const tile2Text = tile2.textContent;
  tile1.textContent = tile2Text;
  tile1.setAttribute("data-id", tile2Id);
  tile2.textContent = tile1Text;
  tile2.setAttribute("data-id", tile1Id);
}
 

//create a show alert function with the alert container add tile shake if wrong and tile dance if right
function showAlert(message, className) {
    const alertContainer = document.querySelector(".alert-container");
    const alert = document.createElement("div");
    alert.className = `alert ${className}`;
    alert.textContent = message;
    alertContainer.appendChild(alert);
    setTimeout(function () {
      alert.remove();
    }, 2000);
    }


//shake the tiles when the guess word is wrong
function shakeTiles() {
    const guessWord = document.querySelectorAll(".guess-grid .tile");
    guessWord.forEach((tile) => {
        tile.classList.add("tile-shake");
    });
    //remove the tile shake class after 1 second
    setTimeout(function () {
        guessWord.forEach((tile) => {
            tile.classList.remove("tile-shake");
        });
    }
        , 900);

}


//dance the tiles when the guess word is correct. make odd and even tiles dance in different directions
function danceTiles() {
    const guessWord = document.querySelectorAll(".guess-grid .tile");
    guessWord.forEach((tile, index) => {
        if (index % 2 === 0) {
            tile.classList.add("tile-dance-even");
        } else {
            tile.classList.add("tile-dance-odd");
        }
    });
    //remove the tile dance class after 1 second
    setTimeout(function () {
        guessWord.forEach((tile) => {
            tile.classList.remove("tile-dance-even");
            tile.classList.remove("tile-dance-odd");
        });
    }
        , 750);
}



//keyboard
//make keyboard work with game. skip permanent letters. if there are multiple letters in the guess grid just take the first one. remove the letter from the guess grid and add it to the letter grid
document.addEventListener("keydown", function (e) {
    const key = e.key.toLowerCase();
    const letterTiles = document.querySelectorAll(".letter-grid .tile");
    const guessTiles = document.querySelectorAll(".guess-grid .tile");
    const guessTilesArray = Array.from(guessTiles);
    const firstEmptyTile = guessTilesArray.find(tile => tile.textContent === "");
    const letterTile = Array.from(letterTiles).find(tile => tile.textContent === key);
    if (letterTile && firstEmptyTile) {
        firstEmptyTile.textContent = letterTile.textContent;
        letterTile.textContent = "";
    }
    //if the key is enter then check the word
    if (key === "enter") {
        checkWord();
    }

});


//keyboard backspaceback
document.addEventListener("keydown", function (e) {
    const key = e.key.toLowerCase();
    if (key === "backspace") {
        backspace();
    }
});



//create backspace function
function backspace() {
    const guessTiles = document.querySelectorAll(".guess-grid .tile");
    const guessTilesArray = Array.from(guessTiles);
    const letterTiles = document.querySelectorAll(".letter-grid .tile");
    const letterTile = Array.from(letterTiles).find(tile => tile.textContent === "");

    for (let i = guessTilesArray.length - 1; i >= 0; i--) {
        const tile = guessTilesArray[i];
        if (tile.textContent !== "" && !tile.classList.contains("permanent")) {
            letterTile.textContent = tile.textContent;
            tile.textContent = "";
            break;
        }
    }
}

//onscreen keyboard
// button class key from html onscrean keyboard to make it work with the game.  add delete button and enter button
const keyButtons = document.querySelectorAll(".key");
keyButtons.forEach(button => {
    button.addEventListener("click", function () {
        const key = button.textContent.toLowerCase();
        const letterTiles = document.querySelectorAll(".letter-grid .tile");
        const guessTiles = document.querySelectorAll(".guess-grid .tile");
        const guessTilesArray = Array.from(guessTiles);
        const firstEmptyTile = guessTilesArray.find(tile => tile.textContent === "");
        const letterTile = Array.from(letterTiles).find(tile => tile.textContent === key);
        if (letterTile && firstEmptyTile) {
            firstEmptyTile.textContent = letterTile.textContent;
            letterTile.textContent = "";
        }
        if (key === "enter") {
            checkWord();
        }
        if (key === "pass") {
            resetGame();
        }
        if (key === "shuffle") {document.querySelector("[data-shuffle]").addEventListener("click", function () {
            const letterTiles = document.querySelectorAll(".letter-grid .tile");
            const letterTilesArray = Array.from(letterTiles);
            for (let i = letterTilesArray.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [letterTilesArray[i], letterTilesArray[j]] = [letterTilesArray[j], letterTilesArray[i]];
            }
            letterTilesArray.forEach((tile, index) => {
                letterGrid.appendChild(tile);
            });
        });
        }
        if (key === "back") {
            backspace();
        }
    });
});         

//create a shuffle button that shuffles the letters in the letter grid also make the space bar shuffle the letters
document.addEventListener("keydown", function (e) {
    if (e.keyCode === 32) {
        const letterTiles = document.querySelectorAll(".letter-grid .tile");
        const letterTilesArray = Array.from(letterTiles);
        for (let i = letterTilesArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [letterTilesArray[i], letterTilesArray[j]] = [letterTilesArray[j], letterTilesArray[i]];
        }
        letterTilesArray.forEach((tile, index) => {
            letterGrid.appendChild(tile);
        });
    }
});

// onscreen keyboard shuffle button 
document.querySelector("[data-shuffle]").addEventListener("click", function () {
  const letterTiles = document.querySelectorAll(".letter-grid .tile");
  const letterTilesArray = Array.from(letterTiles);
  for (let i = letterTilesArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [letterTilesArray[i], letterTilesArray[j]] = [letterTilesArray[j], letterTilesArray[i]];
  }
  letterTilesArray.forEach((tile, index) => {
      letterGrid.appendChild(tile);
  });
}
);


const fbButton = document.querySelector('.largeFB');

fbButton.addEventListener('click', () => {
  window.open('https://www.facebook.com/profile.php?id=100090853455292');
});

fbButton.addEventListener('touchstart', () => {
  window.open('https://www.facebook.com/profile.php?id=100090853455292');
});

const twitterButton = document.querySelector('.largeT');

twitterButton.addEventListener('click', () => {
  window.open('https://twitter.com/', '_blank');
});

twitterButton.addEventListener('touchstart', () => {
  window.open('https://twitter.com/', '_blank');
});


var howToPlayLink = document.querySelector(".howToPlayPopUp");
var howToPlayPopUp = document.getElementById("howToPlayPopUp");
var howToPlayImages = howToPlayPopUp.querySelectorAll("img");
var currentIndexP = 0;

howToPlayLink.addEventListener("click", function(e) {
  e.preventDefault();
  currentIndexP = 0;
  showCurrentImage();
  howToPlayPopUp.style.display = "block";
});

howToPlayPopUp.addEventListener("click", function(e) {
  if (e.target !== this)
    return;
  currentIndexP++;
  if (currentIndexP >= howToPlayImages.length) {
    currentIndexP = 0;
    howToPlayPopUp.style.display = "none";
  } else {
    showCurrentImage();
  }
});

document.addEventListener("touchstart", function(e) {
  if (e.target === howToPlayPopUp || howToPlayPopUp.contains(e.target))
    return;
  howToPlayPopUp.style.display = "none";
});

function showCurrentImage() {
  for (var i = 0; i < howToPlayImages.length; i++) {
    if (i === currentIndexP) {
      howToPlayImages[i].style.display = "block";
    } else {
      howToPlayImages[i].style.display = "none";
    }
  }
}

var tipsLink = document.querySelector(".tipsPopUp");
var tipsPopUp = document.getElementById("tipsPopUp");
var tipsImage = tipsPopUp.querySelector("img");
var tipsCloseButton = tipsPopUp.querySelector(".closeButton");

tipsLink.addEventListener("click", function(e) {
  e.preventDefault();
  tipsPopUp.style.display = "block";
});



tipsPopUp.addEventListener("click", function(e) {
  if (e.target !== this && e.target !== tipsImage && e.target !== tipsCloseButton)
    return;
  tipsPopUp.style.display = "none";
});