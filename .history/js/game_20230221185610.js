const grid = document.querySelector('.grid');

const cards = [
    'amazon',
    'barbarian',
    '',
    '',
    ''
]
const criarElemento = (tag, className) => {
    const elemento = document.createElement(tag);
    elemento.className = className;
    return elemento;
}

const criarCarta = () => {

    const card = document.createElement('div', 'card');
    const front = document.createElement('div', 'face front');
    const back = document.createElement('div', 'face back');

    card.appendChild(front);
    card.appendChild(back);

    return card;
}

criarCarta();