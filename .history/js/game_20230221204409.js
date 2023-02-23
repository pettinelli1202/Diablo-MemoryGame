const grid = document.querySelector('.grid');

const characters = [
    'akara',
    'amazon',
    'assasin',
    'barbarian',
    'deckardcain',
    'druid',
    'merchant',
    'necromancer',
    'sorcers',
    'tyrael',
    'paladin',
    'mephisto',
    'baal',
    'diablo',
    'duriel'
];

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

const createCard = (character) => {

    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('../images/${character}.jpg')`;

    card.appendChild(front);
    card.appendChild(back);


    return card;
}

const loadGame = () => {

    const duplicateCharacters = [...characters, ...characters];
    const shuffledArray
    duplicateCharacters.forEach((character) => {

        const card = createCard(character);
        grid.appendChild(card);

    });
}

loadGame();