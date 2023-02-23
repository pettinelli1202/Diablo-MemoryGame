const input = document.querySelector('login_input');
const button = document.querySelector('login_button');

function validacaoInput {
    console.log(event.target.value);
}

input.addEventListener('input', validacaoInput);