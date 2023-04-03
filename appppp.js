const dailyChallengeWords = [
  ['pea', 'yawn', 'paces', 'venture', 'zealous'],
  ['odd', 'dish', 'upset', 'medical', 'recidivism'],
  ['add', 'beak', 'fruit', 'manager', 'adlibbed'],
  ['nut', 'ship', 'urban', 'qualify', 'charisma'],
  ['two', 'oily', 'south', 'utility', 'journeyman'],
  ['our', 'felt', 'girth', 'however', 'jeopardize'],
  ['for', 'flog', 'until', 'potters', 'bureaucracy'],
  ['not', 'girl', 'thing', 'machine', 'transmogrify'],
  ['dug', 'true', 'drill', 'suspect', 'calzones'],
  ['out', 'hope', 'label', 'savior', 'boisterous'],
  ['gum', 'type', 'shout', 'unknown', 'eloquently'],
  ['cow', 'trip', 'lager', 'vulnerable', 'xenophobia'],
  ['cat', 'gift', 'doubt', 'claimed', 'diabolical'],
  ['and', 'saint', 'regal', 'banking', 'narcissist'],
  ['bun', 'hare', 'exits', 'admirer', 'comprehend'],
  ['win', 'zero', 'harry', 'upgrade', 'endearing'],
  ['jog', 'yank', 'chose', 'protest', 'affluent'],
  ['ape', 'left', 'glass', 'meeting', 'catalogue'],
  ['day', 'tarn', 'coral', 'cabinet', 'impalpable'],
  ['car', 'lure', 'cross', 'winning', 'labyrinth'],
  ['job', 'yogi', 'funny', 'battery', 'glycemic'],
  ['dab', 'chase', 'write', 'studied', 'endangered'],
  ['pop', 'extra', 'lying', 'captain', 'haphazard'],
  ['pot', 'view', 'exact', 'absence', 'telekinetic'],
  ['cub', 'gull', 'scope', 'bearing', 'enchantment'],
  ['fix', 'tians', 'scape', 'delimit', 'subjective'],
  ['pin', 'fish', 'brake', 'nursing', 'embellishing'],
  ['kit', 'slip', 'booth', 'monthly', 'ingenuous'],
  ['mom', 'grit', 'thorn', 'capsule', 'elaborately'],
  ['fin', 'plot', 'guess', 'housing', 'unfathomed'],
  ['key', 'repo', 'horse', 'minimum', 'impoverish'],
  ['own', 'flop', 'carol', 'liberty', 'congregate'],
  ['fry', 'pyre', 'known', 'leading', 'arrhythmic'],
  ['van', 'jump', 'drink', 'teeming', 'topography'],
  ['was', 'glee', 'curve', 'neither', 'eviscerate'],
  ['use', 'live', 'month', 'network', 'quadrants'],
  ['wow', 'jolt', 'happy', 'subject', 'emancipated'],
  ['sat', 'clip', 'ought', 'kitchen', 'venturesome'],
  ['low', 'ache', 'zoned', 'liberal', 'adjunction'],
  ['ash', 'pulp', 'canoe', 'backing', 'tremendous'],
  ['who', 'reel', 'heavy', 'library', 'zeitgeist'],
  ['wet', 'stain', 'guest', 'spotter', 'jubilation'],
  ['man', 'girt', 'carry', 'working', 'engrained'],
  ['nap', 'come', 'hero', 'massive', 'precipitated'],
  ['had', 'ripe', 'baker', 'deficit', 'horrendous'],
  ['ton', 'filth', 'space', 'science', 'esoteric'],
  ['got', 'vent', 'shore', 'natural', 'grenadine'],
  ['ten', 'satin', 'whose', 'capitol', 'ecstatic'],
  ['fit', 'star', 'frank', 'braille', 'bludgeon'],
  ['tap', 'zips', 'might', 'maximum', 'exhilarating'],
  ['yet', 'glue', 'hence', 'logical', 'panoramic'],
  ['act', 'lisp', 'break', 'academy', 'impromptu'],
  ['has', 'aches', 'capes', 'declaim', 'gerrymander'],
  ['oar', 'feet', 'cream', 'various', 'flamboyant'],
  ['tar', 'trig', 'clock', 'organic', 'habitually'],
  ['pat', 'lips', 'threw', 'notable', 'jamboree'],
  ['how', 'know', 'ocean', 'outdoor', 'versatility'],
  ['pan', 'rite', 'exist', 'balance', 'catacomb'],
  ['cry', 'goji', 'draft', 'silence', 'beseeching'],
  ['new', 'bake', 'drawn', 'variety', 'juggernaut'],
  ['are', 'pore', 'logic', 'payable', 'maneuver'],
  ['few', 'very', 'minor', 'warning', 'ubiquitous'],
  ['mix', 'hips', 'glare', 'optical', 'hoodwinked'],
  ['arc', 'tope', 'giant', 'attract', 'apocalypse'],
  ['raw', 'exit', 'fraud', 'unusual', 'conjecturing'],
  ['tip', 'recut', 'vegan', 'society', 'tangible'],
  ['egg', 'gilt', 'occur', 'satisfy', 'kinesthetic'],
  ['fun', 'prey', 'frame', 'vintage', 'wallflower'],
  ['yes', 'zest', 'right', 'topical', 'indigenous'],
  ['zap', 'proof', 'movie', 'warrant', 'pseudonym'],
  ['eye', 'dips', 'local', 'wanting', 'subjectify'],
  ['sit', 'bulk', 'prior', 'upscale', 'cumulative'],
  ['saw', 'tans', 'money', 'hundred', 'gastronomy'],
  ['did', 'pelt', 'slags', 'limited', 'hydrophobia'],
  ['all', 'flip', 'doing', 'capable', 'clientele'],
  ['ate', 'rope', 'brand', 'address', 'habanero'],
  ['ear', 'fogy', 'prize', 'succeed', 'emphasized'],
  ['yam', 'wonk', 'molar', 'gallery', 'archaism'],
  ['mad', 'truce', 'crime', 'married', 'reiterate'],
  ['pit', 'rats', 'brief', 'ability', 'disembark'],
  ['let', 'typo', 'bring', 'largely', 'testimonial'],
  ['mug', 'fire', 'crash', 'because', 'inhabitable'],
  ['yak', 'rule', 'upper', 'outcome', 'endeavor'],
  ['eat', 'jeer', 'wound', 'passage', 'odoriferous'],
  ['but', 'each', 'coach', 'checked', 'pediatrician'],
  ['may', 'cope', 'cliff', 'musical', 'destitute'],
  ['ant', 'luge', 'unlit', 'poverty', 'circumvent'],
  ['bad', 'feel', 'learn', 'opening', 'belligerent'],
  ['won', 'pier', 'noise', 'factory', 'humiliation'],
  ['hit', 'leer', 'pitch', 'ongoing', 'clairvoyant'],
  ['toe', 'golf', 'pilot', 'writing', 'translucent'],
  ['tan', 'ants', 'chars', 'vehicle', 'doppelganger'],
  ['fly', 'hilum', 'large', 'viewing', 'barbaric'],
  ['why', 'toes', 'class', 'whoever', 'germination'],
  ['lot', 'free', 'setup', 'therein', 'prerogative'],
  ['end', 'riot', 'stuff', 'allergy', 'validation'],
  ['top', 'cash', 'watch', 'landing', 'unambitious'],
  ['net', 'roti', 'moral', 'instant', 'amalgamate'],
  ['dad', 'reef', 'craft', 'waiting', 'xylophone'],
  ['tea', 'zoom', 'copes', 'husband', 'benefactor'],
  ['bye', 'poet', 'crown', 'operate', 'discrepancy'],
  ['wig', 'taxer', 'cable', 'measure', 'auspicious'],
  ['nod', 'evil', 'music', 'willing', 'hierarchy'],
  ['her', 'zags', 'drama', 'inquiry', 'asymptotic'],
  ['owl', 'ugly', 'minus', 'knowing', 'jambalaya'],
  ['art', 'stir', 'tough', 'calling', 'gridiron'],
  ['map', 'oily', 'dozen', 'primary', 'jurisdiction'],
  ['you', 'gold', 'mayor', 'thicken', 'literary'],
  ['pet', 'tire', 'civil', 'involve', 'quagmire'],
  ['fan', 'veil', 'relay', 'install', 'foresight'],
  ['now', 'arts', 'front', 'resolve', 'galvanize'],
  ['tow', 'curl', 'unity', 'wedding', 'hieroglyphic'],
  ['ace', 'ploy', 'daily', 'mention', 'tightwad'],
  ['fox', 'trio', 'tight', 'neutral', 'apothecary'],
  ['sir', 'flee', 'bound', 'running', 'cumbersome'],
  ['rag', 'cuter', 'north', 'license', 'quintessence'],
  ['dip', 'tier', 'cycle', 'decimal', 'scrutinize'],
  ['old', 'tars', 'layer', 'nervous', 'impenetrable'],
  ['den', 'hype', 'mouth', 'vaccine', 'coagulate'],
  ['lit', 'yeti', 'night', 'aligned', 'climactic'],
  ['zip', 'rant', 'claim', 'morning', 'hemispheres'],
  ['tub', 'cute', 'dusty', 'leisure', 'endocrine'],
  ['rat', 'hear', 'whole', 'loyalty', 'linguistic'],
  ['met', 'help', 'early', 'removed', 'embroidered'],
  ['cut', 'girl', 'study', 'barrier', 'termination'],
]


const dictionary = {};
for (let i = 0; i < dailyChallengeWords.length; i++) {
    for (let j = 0; j < dailyChallengeWords[i].length; j++) {
        dictionary[dailyChallengeWords[i][j]] = true;
    }
}

function generateChallengeArrays(dailyChallengeWords) {
  const dailyChallengeLetterPermanent = [];
  const dailyChallengeLetterPermanentIndex = [];
  const dailyChallengeWordsShuffledMinusPermanent = [];

  for (let i = 0; i < dailyChallengeWords.length; i++) {
    const wordArray = dailyChallengeWords[i];
    const permIndexArray = [];
    const permArray = [];
    const shuffledMinusPermArray = [];

    for (let j = 0; j < wordArray.length; j++) {
      const word = wordArray[j];
      const randIndex = Math.floor(Math.random() * word.length);

      permIndexArray.push(word.indexOf(word.charAt(randIndex)));
      permArray.push(word.charAt(randIndex));

      const wordArrayWithoutRand = word.split('');
      wordArrayWithoutRand.splice(randIndex, 1);
      shuffleArray(wordArrayWithoutRand);
      shuffledMinusPermArray.push(wordArrayWithoutRand.join(''));
    }

    dailyChallengeLetterPermanent.push(permArray);
    dailyChallengeLetterPermanentIndex.push(permIndexArray);
    dailyChallengeWordsShuffledMinusPermanent.push(shuffledMinusPermArray);
  }

  return [dailyChallengeLetterPermanent, dailyChallengeLetterPermanentIndex, dailyChallengeWordsShuffledMinusPermanent];
}


function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Example usage:

const challengeArrays = generateChallengeArrays(dailyChallengeWords);
const dailyChallengeLetterPermanent = challengeArrays[0];
const dailyChallengeLetterPermanentIndex = challengeArrays[1];
const dailyChallengeWordsShuffledMinusPermanent = challengeArrays[2];

console.log(dailyChallengeLetterPermanent); 
console.log(dailyChallengeLetterPermanentIndex); 
console.log(dailyChallengeWordsShuffledMinusPermanent);


