const grid = document.querySelector('.grid');


const criarElemento = (tag, className) => {
    const elemento = document.createElement
}

const criarCarta = () => {

    const card = document.createElement('div');
    const front = document.createElement('div');
    const back = document.createElement('div');

    card.className = 'card';
    front.className = 'face front';
    back.className = 'face back';

    card.appendChild(front);
    card.appendChild(back);

    grid.appendChild(card);
}

criarCarta();