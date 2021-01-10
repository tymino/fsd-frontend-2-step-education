export default class SliderImg {
  constructor(element) {
    this.container = element;
    
    this.slides = this.container.getElementsByClassName("slider__item");
    this.dots = this.container.getElementsByClassName("slider__dots-item");
    
    this.slideIndex = 1;

    this.init();
  }

  init() {
    this.showSlides();
    this.addListener();
  }

  addListener() {
    this.container.addEventListener('click', e => {
      if (e.target.classList.contains('slider__prev')) {
        this.showSlides(--this.slideIndex);
      } else if (e.target.classList.contains('slider__next')) {
        this.showSlides(++this.slideIndex);
      } else if (e.target.classList.contains('slider__dots-item')) {
        this.showSlides(this.slideIndex = parseInt(e.target.dataset.index));
      } else {
        return;
      }
    })
  }

  showSlides() {
    if (this.slideIndex > this.slides.length) {
      this.slideIndex = 1;
    }

    if (this.slideIndex < 1) {
      this.slideIndex = this.slides.length;
    }

    for (let i = 0; i < this.slides.length; i++) {
      this.slides[i].style.display = 'none';
    }

    for (let i = 0; i < this.dots.length; i++) {
      this.dots[i].className = this.dots[i].className.replace(' slider__dots-item--active', '');
    }

    this.slides[this.slideIndex - 1].style.display = 'block';
    this.dots[this.slideIndex - 1].className += ' slider__dots-item--active';
  }
}

(() => {
  const container = document.getElementsByClassName('slider');
  let containerArr = [];

  if (container) {
    for(let i = 0; i < container.length; i++) {
      containerArr.push(new SliderImg(container[i]));
    }
  } else { return }
})();