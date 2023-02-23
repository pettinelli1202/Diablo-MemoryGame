const grid = document.querySelector('.grid');

const personagens = [
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

const criarCarta = (per) => {

    const card = document.createElement('div', 'card');
    const front = document.createElement('div', 'face front');
    const back = document.createElement('div', 'face back');

    card.appendChild(front);
    card.appendChild(back);

    return card;
}

const carregarJogo = () => {

    personagens.forEach((personagem) => {

        const card = criarCarta();
        grid.appendChild(card);

    });
}

carregarJogo();