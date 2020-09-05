document.addEventListener('click', e => {
  if (e.target.closest('div').classList.contains('exp-checkbox__arrow-down')) {
    document.querySelector('.exp-checkbox__checkbox-list-container').classList.toggle("exp-checkbox__checkbox-list-container--active");
  }
})