"use strict"
const eyeUp = document.querySelector('.signUp__btn-eye');
eyeUp.addEventListener('click', (e) => {
    const input = document.querySelector('.signUp__field')
    input.type = 'text';
    document.querySelector('.signUp__eye').firstChild.href = './images/symbol-defs.svg#icon-open-eye-icon';
    if (document.querySelector('.signUp__eye').firstChild.href === './images/symbol-defs.svg#icon-open-eye-icon'){
        document.querySelector('.signUp__eye').firstChild.href = './images/symbol-defs.svg#icon-closed-eye-icon';
        return;
    };
});

const eyeIn = document.querySelector('.signIn__btn-eye');
eyeIn.addEventListener('click', (e) => {
    const input = document.querySelector('.signIn__field')
    input.type = 'text';
    document.querySelector('.signIn__eye').firstChild.href = './images/symbol-defs.svg#icon-open-eye-icon';
    if (document.querySelector('.signIn__eye').firstChild.href === './images/symbol-defs.svg#icon-open-eye-icon'){
        document.querySelector('.signIn__eye').firstChild.href = './images/symbol-defs.svg#icon-closed-eye-icon';
        return;
    };
});