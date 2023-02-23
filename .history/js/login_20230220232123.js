const input = document.querySelector('login_input');
const button = document.querySelector('login_button');

const validacaoInput = ({ target }) => {
    if (target.value.length > 2) {
        button.removeAttribute('disabled')
    }
}

input.addEventListener('input', validacaoInput);