"use strict"
(() => { 
    const refs = { 
      openModalBtn: document.querySelector(".header__sign-in"), 
      closeModalBtn: document.querySelector("[data-signIn-close]"), 
      modal: document.querySelector("[data-signIn]"), 
    }; 
   
    refs.openModalBtn.addEventListener("click", toggleModal); 
    refs.closeModalBtn.addEventListener("click", toggleModal); 
   
    function toggleModal() { 
      refs.modal.classList.toggle("is-hidden"); 
      document.body.classList.toggle("no-scroll"); 
    } 
  })();