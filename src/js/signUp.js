"use strict"
(() => { 
    const refs = { 
      openModalBtn: document.querySelector("[data-singUp-open]"), 
      closeModalBtn: document.querySelector("[data-signUp-close]"), 
      modal: document.querySelector("[data-signUp]"), 
    }; 
   
    refs.openModalBtn.addEventListener("click", toggleModal); 
    refs.closeModalBtn.addEventListener("click", toggleModal); 
   
    function toggleModal() { 
      refs.modal.classList.toggle("is-hidden"); 
      document.body.classList.toggle("no-scroll"); 
    } 
  })();