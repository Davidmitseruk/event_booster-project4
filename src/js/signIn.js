"use strict"
(() => { 
    const refs = { 
      openModalBtn: document.querySelector("[data-singIn-open]"), 
      closeModalBtn: document.querySelector("[data-signIn-close]"), 
      modal: document.querySelector("[data-signIn]"), 
    }; 
   
    refs.openModalBtn.addEventListener("click", (e) => {
      e.preventDefault();
      toggleModal();
    }); 
    refs.closeModalBtn.addEventListener("click", toggleModal); 
   
    function toggleModal() { 
      refs.modal.classList.toggle("is-hidden"); 
      document.body.classList.toggle("no-scroll"); 
    } 
  })();