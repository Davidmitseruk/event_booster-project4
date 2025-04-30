const teamNumbers = document.querySelectorAll('.footer__team-nav-btn');
const teamItems = document.querySelectorAll('.footer__team-item');

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-team-open]'),
    closeModalBtn: document.querySelector('.footer__close-team-modal'),
    modal: document.querySelector('[data-team]'),
  };

  refs.openModalBtn.addEventListener('click', e => {
    toggleModal();
    search(1);
  });
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');
  }

  teamNumbers.forEach(teamNumber => {
    teamNumber.addEventListener('click', e => {
      const id = parseInt(e.target.id);
      search(id);
      teamNumbers.forEach(btn => btn.classList.remove('.footer__btn-active'));
      e.target.classList.add('.footer__btn-active');
    });
  });

  function search(id) {
    teamItems.forEach(item => {
      item.classList.add('hide');
    });

    const targetItem = document.querySelector(
      `.footer__team-item:nth-child(${id})`
    );
    if (targetItem) {
      targetItem.classList.remove('hide');
    }
  }
})();
