"use strict"
const btnPass = document.querySelector('#eye-password');
const iconPass = document.querySelector('#eye-pass');
const inputPass = document.querySelector('#signUp-password');
let isOpenPass = false;

btnPass.addEventListener('click', (e) => {
    e.preventDefault();
    if (isOpenPass) {
        iconPass.src= './images/tabler-icon-eye-closed.png';
        inputPass.type = 'password';
        isOpenPass = false;
    } else {
        iconPass.src = './images/tabler-icon-open-eye.png';
        inputPass.type = 'text';
        isOpenPass = true;
    } 
    inputPass.focus();
});

const btnConf = document.querySelector('#eye-confirm');
const iconConf = document.querySelector('#eye-conf');
const inputConf = document.querySelector('#signUp-confirm');
let isOpenConf = false;

btnConf.addEventListener('click', (e) => {
    e.preventDefault();
    if (isOpenConf) {
        iconConf.src = './images/tabler-icon-eye-closed.png';
        inputConf.type = 'password';
        isOpenConf = false;
    } else {
        iconConf.src = './images/tabler-icon-open-eye.png';
        inputConf.type = 'text';
        isOpenConf = true;
    } 
    inputConf.focus();
});