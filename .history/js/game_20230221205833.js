const grid = document.querySelector('.grid');

const characters = [
    'akara',
    'amazon',
    'assasin',
    'barbarian',
    'baal',
    'deckardcain',
    'diablo',
    'druid',
    'duriel',

    'mephisto',
    'merchant',
    'necromancer',
    'paladin',
    'sorcers',
    'tyrael',



];

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

const revealCard = ({ target }) => {

    if (target.parentNode.className.include('reveal-card')) {
        return;
    }




    target.parentNode.classList.add('reveal-card');
}
const createCard = (character) => {

    const card = createElement('div', 'card');
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('../images/${character}.jpg')`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard);

    return card;
}

const loadGame = () => {

    const duplicateCharacters = [...characters, ...characters];
    const shuffledArray = duplicateCharacters.sort(() => Math.random() - 0.5);

    duplicateCharacters.forEach((character) => {

        const card = createCard(character);
        grid.appendChild(card);

    });
}

loadGame();