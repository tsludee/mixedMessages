insultAdj1 = ['hateful', 'nasty', 'common', 'bloody', 'vacant', 'knavish', 'quarrelsome', 'grotesque', 'revolting', 'unkind',
            'saucy', 'disgusting', 'grizzled', 'spotted', 'cantankerous', 'lewd', 'loathsome', 'brazen', 'detestable',
            'reeky', 'repugnant', 'abominable', 'peevish', 'greasy']

insultAdj2 = ['ill-breeding', 'low-spirited', 'cold-blooded', 'luggage-lipped', 'double-dealing', 'pale-hearted', 'sallow-skinned',
            'puke-stained', 'green-eyed', 'lily-livered', 'eye-offending', 'long-winded', 'pasty-faced', 'dark-hearted', 'low-down',
            'wax-eared', 'onion-breathing', 'paste-brained', 'broke-dealing', 'dull-spirited', 'stone-faced', 'black-winged',
            'dull-witted', 'poison-tongued']

insultNoun = ['laughingstock', 'twit', 'ruffian', 'pirate', 'buffoon', 'boar', 'maggot-pie', 'hog', 'scoundrel', 'dolt', 'jack-a-nape',
            'serpent', 'dullard', 'devil', 'dung-hill', 'fool', 'coward', 'puke-stocking', 'leper', 'skainsmate', 'infection',
            'simpleton', 'villain', 'miscreant']

//should this insult be yelled in all caps?
insultGen = () => {
    let x = Math.floor(Math.random() * (insultAdj1.length + 1));
    let y = Math.floor(Math.random() * (insultAdj2.length + 1));
    let z = Math.floor(Math.random() * (insultNoun.length + 1));
    console.log(`Thou art a ${insultAdj1[x]}, ${insultAdj2[y]} ${insultNoun[z]}!`)
}

flatteryAdj1 = ['sweet', 'divine', 'lovely', 'inspiring', 'completely', 'refined', 'angelic', 'wise', 'soothing', 'wholesome', 'magical',
            'mellow', 'thoughtful', 'good', 'fresh', 'delightful', 'melodious', 'golden', 'endearing', 'strong', 'delicate', 'powerful',
            'courteous', 'kind']

flatteryAdj1 = ['free-spirited', 'heaven-created', 'pure-hearted', 'clear-seeing', 'brave-spirited', 'rose-cheeked', 'silken-haired',
            'sugar-coated', 'lilac-scented', 'brave-willed', 'doe-eyed', 'honey-tongued', 'much-favored', 'heart-enflaming', 'clever-witted',
            'all-knowing', 'ivory-smooth', 'well-wishing', 'thunder-darting', 'mood-lifting', 'will-bucking', 'even-tempered', 'well-fated',
            'spirit-chosen']

flatteryNoun = ['god', 'goddess', 'saint', 'star', 'knight', 'sprite', 'lionheart', 'angel', 'hero', 'ornament', 'book', 'champion', 'delight',
            'force', 'nymph', 'warrior', 'muse', 'apple-john', 'melody', 'inspiration', 'wit', 'true-penny', 'valentine', 'love']

//should this piece of flattery be properly punctuated?
flatteryGen = () => {
    let x = Math.floor(Math.random() * (flatteryAdj1.length + 1));
    let y = Math.floor(Math.random() * (flatteryAdj2.length + 1));
    let z = Math.floor(Math.random() * (flatteryNoun.length + 1));
    console.log(`Sorry, was that too mean? I trully dost believe thou art a ${flatteryAdj1[x]}, ${flatteryAdj2[y]} ${flatteryNoun[z]}!`)
}