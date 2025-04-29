(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-header-open]'),
    closeModalBtn: document.querySelector('.header-modal__backdrop'),
    modal: document.querySelector('[data-header-body]'),
  };

  refs.openModalBtn.addEventListener('click', e => {
    e.preventDefault();
    toggleModal();
  });
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('header-is-hidden');
    document.body.classList.toggle('no-scroll');
  }
})();
