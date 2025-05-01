"use strict"
import eyeClosed from '../images/tabler-icon-eye-closed.png';
import eyeOpen from '../images/tabler-icon-open-eye.png';
console.log(eyeClosed);  
console.log(eyeOpen);
const btn = document.querySelector('.signIn__btn-eye');
const icon = document.querySelector('.signIn__eye');
const input = document.querySelector('#signIn-password');
let isOpen = false;
icon.setAttribute('src', eyeClosed);

btn.addEventListener('click', () => {
    if (isOpen) {
        icon.setAttribute('src', eyeClosed);
        input.type = 'password';
        isOpen = false;
    } else {
        icon.setAttribute('src', eyeOpen);
        input.type = 'text';
        isOpen = true;
    }
});
