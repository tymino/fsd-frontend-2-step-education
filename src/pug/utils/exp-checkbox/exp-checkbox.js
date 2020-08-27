(() => {
  const arrowExpCheckbox = document.querySelector('.exp-checkbox__arrow-down');

  arrowExpCheckbox.addEventListener('click', (e) => {
    document.querySelector('.exp-checkbox__checkbox-list-container').classList.toggle("exp-checkbox__checkbox-list-container--active");
  });
})