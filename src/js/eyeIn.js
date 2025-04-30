"use strict"
import symbolDefs from '../images/symbol-defs.svg';
const btn = document.querySelector('.signIn__btn-eye');
const icon = document.querySelector('.signIn__eye use');
const input = document.querySelector('#signIn-password');
let isOpen = false;

btn.addEventListener('click', () => {
    if (isOpen) {
        icon.setAttribute('href', './images/tabler-icon-eye-closed.png');
        input.type = 'password';
        isOpen = false;
    } else {
        icon.setAttribute('href', './images/tabler-icon-open-eye.png');
        input.type = 'text';
        isOpen = true;
    }
});
