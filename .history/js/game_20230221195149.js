const grid = document.querySelector('.grid');

const characters = [
    'amazon',
    'assasin',
    'barbarian',
    'druid',
    'sorcers'
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

    front.style.backgroundImage = '';

    card.appendChild(front);
    card.appendChild(back);


    return card;
}

const loadGame = () => {

    characters.forEach((character) => {

        const card = createCard(character);
        grid.appendChild(card);

    });
}

loadGame();