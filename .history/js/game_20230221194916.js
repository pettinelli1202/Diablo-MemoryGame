const grid = document.querySelector('.grid');

const characters = [
    'amazon',
    'assasin',
    'barbarian',
    'druid',
    'sorcers'
];

const criarElemento = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

const createCard = (character) => {

    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    card.appendChild(front);
    card.appendChild(back);


    return card;
}

const loadGame = () => {

    personagens.forEach((personagem) => {

        const card = createCard(personagem);
        grid.appendChild(card);

    });
}

loadGame();