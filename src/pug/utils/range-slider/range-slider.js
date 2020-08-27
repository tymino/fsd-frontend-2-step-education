(() => {
  const lowerSlider = document.querySelector('#lower');
  const upperSlider = document.querySelector('#upper');
  const rangeColor = document.querySelector('.range-slider__span-color');
  const divCostSlider = document.querySelector('.range-slider__cost');

  const STEP = parseInt(lowerSlider.step);
  const MAXVAL = STEP / 1000;

  const setRangeColor = () => {
    rangeColor.style.marginLeft = parseInt(lowerSlider.value * MAXVAL) + '%';
    rangeColor.style.width = parseInt(upperSlider.value * MAXVAL) - parseInt(lowerSlider.value * MAXVAL) + '%';
  };
  setRangeColor();

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
    lowerVal = parseInt(lowerSlider.value);
    upperVal = parseInt(upperSlider.value);

    if (upperVal < lowerVal + STEP) {
      lowerSlider.value = upperVal - STEP;

      if (lowerSlider.value == lowerSlider.min) {
        upperSlider.value = STEP;
      }
    }
    setCost();
    setRangeColor();
  });

  lowerSlider.addEventListener('input', () => {
    lowerVal = parseInt(lowerSlider.value);
    upperVal = parseInt(upperSlider.value);

    if (lowerVal > upperVal - STEP) {
      upperSlider.value = lowerVal + STEP;
      
      if (upperSlider.value == upperSlider.max) {
        lowerSlider.value = parseInt(upperSlider.max) - STEP;
      }
    }
    setCost();
    setRangeColor();
  });
})