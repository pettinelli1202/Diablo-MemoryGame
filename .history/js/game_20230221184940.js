const grid = document.querySelector('.grid');


const criarElemento = (tag, className) => {
    const elemento = document.createElement(tag);
    elemento.className = className;
    return elemento;
}

const criarCarta = () => {

    const card = document.createElement('div', 'card');
    const front = document.createElement('div', 'card');
    const back = document.createElement('div', 'card');

    card.className = 'card';
    front.className = 'face front';
    back.className = 'face back';

    card.appendChild(front);
    card.appendChild(back);

    grid.appendChild(card);
}

criarCarta();