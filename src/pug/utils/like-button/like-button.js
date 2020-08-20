const uiKitContainer = document.querySelector('.ui-kit__container');

uiKitContainer.addEventListener('click', (e) => {
  if (e.target.closest('button')) {
    const btnTarget = e.target.closest('button');

    const childObj = {
      iconHeart: btnTarget.firstChild.firstChild,
      countLike: btnTarget.firstChild.lastChild
    };

    btnTarget.classList.toggle('like-button__button--active');

    if (btnTarget.classList.contains('like-button__button--active')) {
      addLike(childObj);
    } else {
      subtractLike(childObj);
    }
  } else { return }
});


function addLike(childObj) {
  childObj.iconHeart.textContent = 'favorite';
  childObj.countLike.textContent = `${Number(childObj.countLike.textContent)+1}`;
}

function subtractLike(childObj) {
  childObj.iconHeart.textContent = 'favorite_border';
  childObj.countLike.textContent = `${Number(childObj.countLike.textContent)-1}`;
}