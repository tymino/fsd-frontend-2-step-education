export default class LikeButton {
  constructor(element) {
    this.container = element;

    this.button = this.container.querySelector('.like-button__button');
    this.wrapper = this.button.querySelector('.like-button_wrapper');

    this.icon = this.wrapper.querySelector('.like-button_icon');
    this.info = this.wrapper.querySelector('.like-button_info');

    // this.isActive = this.button.value;

    this.initBtn();
  }

  initBtn() {
    this.addListener();
  }

  addListener() {
    this.button.addEventListener('click', () => {
      this.button.classList.toggle('like-button__button--active');

      const childObj = {
        iconHeart: this.icon,
        countLike: this.info
      };

      if (this.button.classList.contains('like-button__button--active')) {
        this.addLike(childObj);
      } else {
        this.subtractLike(childObj);
      }
    })
  }

  addLike(childObj) {
    childObj.iconHeart.textContent = 'favorite';
    childObj.countLike.textContent = `${Number(childObj.countLike.textContent)+1}`;
  }

  subtractLike(childObj) {
    childObj.iconHeart.textContent = 'favorite_border';
    childObj.countLike.textContent = `${Number(childObj.countLike.textContent)-1}`;
  }
}

(() => {
  const container = document.getElementsByClassName('like-button__container');
  let containerArr = [];

  if (container) {
    for(let i = 0; i < container.length; i++) {
      containerArr.push(new LikeButton(container[i]));
    }
  } else { return }
})();
