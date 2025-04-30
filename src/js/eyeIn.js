"use strict"
import symbolDefs from '../images/symbol-defs.svg';
const btn = document.querySelector('.signIn__btn-eye');
const icon = document.querySelector('.signIn__eye use');
const input = document.querySelector('#signIn-password');
let isOpen = false;

btn.addEventListener('click', () => {
    if (isOpen) {
        icon.setAttribute('href', `${symbolDefs}#icon-closed-eye-icon`);
        input.type = 'password';
        isOpen = false;
    } else {
        icon.setAttribute('href', `${symbolDefs}#icon-open-eye-icon`);
        input.type = 'text';
        isOpen = true;
    }
});
