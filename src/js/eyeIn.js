"use strict"
const btn = document.querySelector('.signIn__btn-eye');
const icon = document.querySelector('.signIn__eye use');
const input = document.querySelector('#signIn-password');
let isOpen = false;

btn.addEventListener('click', () => {
    if (isOpen) {
        icon.setAttribute('href', './images/symbol-defs.svg#icon-closed-eye-icon');
        input.type = 'password';
        isOpen = false;
    } else {
        icon.setAttribute('href', './images/symbol-defs.svg#icon-open-eye-icon');
        input.type = 'text';
        isOpen = true;
    }
});
