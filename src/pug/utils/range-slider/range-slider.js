const lowerSlider = document.querySelector('#lower');
const upperSlider = document.querySelector('#upper');
const divCostSlider = document.querySelector('.range-slider__cost');

let lowerVal = parseInt(lowerSlider.value);
let upperVal = parseInt(upperSlider.value);

const STEP = parseInt(lowerSlider.step);

const convertCost = (value) => {
  return value.toLocaleString('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0
  });
};

const setCost = () => {
  let localLower = convertCost(parseInt(lowerSlider.value));
  let localUpper = convertCost(parseInt(upperSlider.value));

  divCostSlider.textContent = `${localLower} - ${localUpper}`;
}

upperSlider.addEventListener('input', () => {
  let lowerVal = parseInt(lowerSlider.value);
  let upperVal = parseInt(upperSlider.value);

  if (upperVal < lowerVal + STEP) {
    lowerSlider.value = upperVal - STEP;
    
    if (lowerSlider.value == lowerSlider.min) {
      upperSlider.value = parseInt(upperSlider.value) + STEP;
    }
  }
  setCost();
});

lowerSlider.addEventListener('input', () => {
  let lowerVal = parseInt(lowerSlider.value);
  let upperVal = parseInt(upperSlider.value);

  if (lowerVal > upperVal - STEP) {
    upperSlider.value = lowerVal + STEP;
      
    if (upperSlider.value == upperSlider.max) {
      lowerSlider.value = parseInt(upperSlider.max) - STEP;
    }
  }
  setCost();
});
