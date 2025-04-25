"use strict"
import symbolDefs from '../images/symbol-defs.svg';
const btnPass = document.querySelector('#eye-password');
const iconPass = document.querySelector('#eye-pass use');
const inputPass = document.querySelector('#signUp-password');
let isOpenPass = false;

btnPass.addEventListener('click', (e) => {
    e.preventDefault();
    if (isOpenPass) {
        iconPass.setAttribute('href', `${symbolDefs}#icon-closed-eye-icon`);
        inputPass.type = 'password';
        isOpenPass = false;
    } else {
        iconPass.setAttribute('href', `${symbolDefs}#icon-open-eye-icon`);
        inputPass.type = 'text';
        isOpenPass = true;
    } 
    inputPass.focus();
});

const btnConf = document.querySelector('#eye-confirm');
const iconConf = document.querySelector('#eye-conf use');
const inputConf = document.querySelector('#signUp-confirm');
let isOpenConf = false;

btnConf.addEventListener('click', (e) => {
    e.preventDefault();
    if (isOpenConf) {
        iconConf.setAttribute('href', './images/symbol-defs.svg#icon-closed-eye-icon');
        inputConf.type = 'password';
        isOpenConf = false;
    } else {
        iconConf.setAttribute('href', './images/symbol-defs.svg#icon-open-eye-icon');
        inputConf.type = 'text';
        isOpenConf = true;
    } 
    inputConf.focus();
});