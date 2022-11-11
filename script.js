const insultAdj1 = ['hateful', 'nasty', 'common', 'bloody', 'vacant', 'knavish', 'quarrelsome', 'grotesque', 'revolting', 'unkind',
            'saucy', 'disgusting', 'grizzled', 'spotted', 'cantankerous', 'lewd', 'loathsome', 'brazen', 'detestable',
            'reeky', 'repugnant', 'abominable', 'peevish', 'greasy'];

const insultAdj2 = ['ill-breeding', 'low-spirited', 'cold-blooded', 'luggage-lipped', 'double-dealing', 'pale-hearted', 'sallow-skinned',
            'puke-stained', 'green-eyed', 'lily-livered', 'eye-offending', 'long-winded', 'pasty-faced', 'dark-hearted', 'low-down',
            'wax-eared', 'onion-breathing', 'paste-brained', 'broke-dealing', 'dull-spirited', 'stone-faced', 'black-winged',
            'dull-witted', 'poison-tongued'];

const insultNoun = ['laughingstock', 'twit', 'ruffian', 'pirate', 'buffoon', 'boar', 'maggot-pie', 'hog', 'scoundrel', 'dolt', 'jack-a-nape',
            'serpent', 'dullard', 'devil', 'dung-hill', 'fool', 'coward', 'puke-stocking', 'leper', 'skainsmate', 'infection',
            'simpleton', 'villain', 'miscreant'];

//should this insult be yelled in all caps?
function insultGen() {
    let x = Math.floor(Math.random() * (insultAdj1.length + 1));
    let y = Math.floor(Math.random() * (insultAdj2.length + 1));
    let z = Math.floor(Math.random() * (insultNoun.length + 1));
    return 'I do not have the words to describe you! Mr. Shakespeare will have to help me. THOU ART A ' + insultAdj1[x].toUpperCase() + ', ' + insultAdj2[y].toUpperCase() + ' '+ insultNoun[z].toUpperCase() +'!';
};

const flatteryAdj1 = ['sweet', 'divine', 'lovely', 'inspiring', 'completely', 'refined', 'angelic', 'wise', 'soothing', 'wholesome', 'magical',
            'mellow', 'thoughtful', 'good', 'fresh', 'delightful', 'melodious', 'golden', 'endearing', 'strong', 'delicate', 'powerful',
            'courteous', 'kind'];

const flatteryAdj2 = ['free-spirited', 'heaven-created', 'pure-hearted', 'clear-seeing', 'brave-spirited', 'rose-cheeked', 'silken-haired',
            'sugar-coated', 'lilac-scented', 'brave-willed', 'doe-eyed', 'honey-tongued', 'much-favored', 'heart-enflaming', 'clever-witted',
            'all-knowing', 'ivory-smooth', 'well-wishing', 'thunder-darting', 'mood-lifting', 'will-bucking', 'even-tempered', 'well-fated',
            'spirit-chosen'];

const flatteryNoun = ['god', 'goddess', 'saint', 'star', 'knight', 'sprite', 'lionheart', 'angel', 'hero', 'ornament', 'book', 'champion', 'delight',
            'force', 'nymph', 'warrior', 'muse', 'apple-john', 'melody', 'inspiration', 'wit', 'true-penny', 'valentine', 'love'];

//should this piece of flattery be properly punctuated?
function flatteryGen() {
    let x = Math.floor(Math.random() * (flatteryAdj1.length + 1));
    let y = Math.floor(Math.random() * (flatteryAdj2.length + 1));
    let z = Math.floor(Math.random() * (flatteryNoun.length + 1));
    return 'Sorry, was that too mean? I am only kidding! I trully dost believe thou art a ' + flatteryAdj1[x] + ', ' + flatteryAdj2[y] + ' ' + flatteryNoun[z] +'!';
};

dayType = ['happy', 'peaceful', 'wonderful', 'inspirational', 'bright', 'exciting', 'joyful', 'blissful', 'delightful', 'cheerful', 'thrilled',
        'sunny', 'jolly', 'calm', 'energetic', 'festive', 'electrifying', 'lovely', 'perfect', 'rejuvenating', 'euphoric', 'glorious', 'jubilant',
        'appreciative', 'thankful', 'reliving', 'relaxing', 'fascinating', 'beautiful', 'awesome', 'enchanting', 'bewitching', 'mesmerizing',
        'charming', 'nice', 'fine', 'excellent', 'splendig', 'pleasant', 'terific', 'grand', 'amazing', 'best', 'marvelous', 'fabulous', 'lucky',
        'super', 'momentous', 'magnificent', 'incredible'];

//I need to add functionality to determine if the article should be a or an based on the random selection
function dayToHave() {
    let x = Math.floor(Math.random() * (dayType.length + 1));
    let y = dayType[x].charAt(0);
    if (y === 'a' || y === 'e' || y === 'i' || y === 'o' || y === 'u' || y === 'y') {
        return 'I hope you have an ' + dayType[x] + ' day!';
    } else {
        return 'I hope you have a ' + dayType[x] + ' day!';
    };
};

//here is where I want to add in the button functionality but it should print the result of the generator.
function eventAssignment() {
    document.getElementById('insult').innerHTML = insultGen();
    document.getElementById('flattery').innerHTML = flatteryGen();
    document.getElementById('day').innerHTML = dayToHave();
    reset.onclick;
}