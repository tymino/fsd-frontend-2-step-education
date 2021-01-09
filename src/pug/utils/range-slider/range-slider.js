export default class RangeSlider {
  constructor(id) {
    this.container = document.getElementById(id);

    this.headWrapper = this.container.querySelector('.range-slider__head-wrapper');
    this.title = this.headWrapper.querySelector('.range-slider__title');
    this.cost = this.headWrapper.querySelector('.range-slider__cost');

    this.sliderWrapper = this.container.querySelector('.range-slider__slider-wrapper');
    this.lowerHandle = this.sliderWrapper.getElementsByClassName('range-slider__input')[0];
    this.upperHandle = this.sliderWrapper.getElementsByClassName('range-slider__input')[1];
    this.color = this.sliderWrapper.querySelector('.range-slider__span-color');

    this.step = parseInt(this.lowerHandle.step);
    this.maxValue = this.step / 1000;

    this.initSlider();
  }

  initSlider() {
    this.setRangeColor();
    this.addListeners();
  }

  setRangeColor() {
    this.color.style.marginLeft = parseInt(this.lowerHandle.value * this.maxValue) + '%';
    this.color.style.width = parseInt(this.upperHandle.value * this.maxValue) - parseInt(this.lowerHandle.value * this.maxValue) + '%';
  };

  convertCost(value) {
    return value.toLocaleString('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      minimumFractionDigits: 0
    });
  };
  
  setCost() {
    const localLower = this.convertCost(parseInt(this.lowerHandle.value));
    const localUpper = this.convertCost(parseInt(this.upperHandle.value));
  
    this.cost.textContent = `${localLower} - ${localUpper}`;
  }

  addListeners() {
    let lowerVal = null;
    let upperVal = null;

    this.upperHandle.addEventListener('input', () => {
      lowerVal = parseInt(this.lowerHandle.value);
      upperVal = parseInt(this.upperHandle.value);
    
      if (upperVal < lowerVal + this.step) {
        this.lowerHandle.value = upperVal - this.step;
    
        if (this.lowerHandle.value == this.lowerHandle.min) {
          this.upperHandle.value = this.step;
        }
      }
      this.setCost();
      this.setRangeColor();
    });
    
    this.lowerHandle.addEventListener('input', () => {
      lowerVal = parseInt(this.lowerHandle.value);
      upperVal = parseInt(this.upperHandle.value);
    
      if (lowerVal > upperVal - this.step) {
        this.upperHandle.value = lowerVal + this.step;
        
        if (this.upperHandle.value == this.upperHandle.max) {
          this.lowerHandle.value = parseInt(this.upperHandle.max) - this.step;
        }
      }
      this.setCost();
      this.setRangeColor();
    });
  }
}

(() => {
  const sliderContainer = document.getElementsByClassName('range-slider__container');
  let sliderArr = [];

  if (sliderContainer) {
    for(let i = 0; i < sliderContainer.length; i++) {
      sliderArr.push(new RangeSlider(sliderContainer[i].id));
    }
  } else {
    return;
  }
})();
