const input = document.querySelector('.login_input');
const button = document.querySelector('.login_button');
const form = document.querySelector('.login-form');

const validacaoInput = ({ target }) => {
    if (target.value.length > 2) {
        button.removeAttribute('disabled');
    } else {
        button.setAttribute('disabled', '')
    }
}

const manipularEnvio = (event) => {
    event.preventDefault();

    localStorage.setItem()
}

input.addEventListener('input', validacaoInput);
form.addEventListener('submit', manipularEnvio);