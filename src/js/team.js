const teamNumbers = document.querySelectorAll('.footer__team-nav-btn');

(() => { 
    const refs = { 
      openModalBtn: document.querySelector("[data-team-open]"), 
      closeModalBtn: document.querySelector(".footer__close-team-modal"), 
      modal: document.querySelector("[data-team]"), 
    }; 
   
    refs.openModalBtn.addEventListener("click", (e) => {
        toggleModal();
        search(1);
    }); 
    refs.closeModalBtn.addEventListener("click", toggleModal); 
   
    function toggleModal() { 
      refs.modal.classList.toggle("is-hidden"); 
      document.body.classList.toggle("no-scroll"); 
    } 
    teamNumbers.forEach((teamNumber) => {
        teamNumber.addEventListener("click", (e) => {
            const id = parseInt(e.target.id);
            search(id);
        });
    });
  })();

