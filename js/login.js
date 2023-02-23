const input = document.querySelector('.login_input');
const button = document.querySelector('.login_button');
const form = document.querySelector('.login-form');
const button_effect = document.querySelectorAll("button");
const audio = new Audio("/media/portal.wav");
button_effect.forEach(b => {
    b.addEventListener("click", () => {
        audio.play();
    });
});


const validateInput = ({ target }) => {
    if (target.value.length > 2) {
        button.removeAttribute('disabled');
    } else {
        button.setAttribute('disabled', '')
    }
}

const sendHandle = (event) => {
    event.preventDefault();

    localStorage.setItem('player', input.value);
    setTimeout(() => {
        window.location = 'pages/game.html';
    }, 1500);

}

input.addEventListener('input', validateInput);
form.addEventListener('submit', sendHandle);