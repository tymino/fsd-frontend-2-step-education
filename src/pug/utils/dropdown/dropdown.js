const arrowDown = document.querySelector('.dropdown__arrow-down');
const dropMenu = document.querySelector('.dropdown__drop-menu');

// Input
const inputGuess = document.querySelector('.js-dropdown__input-guess');

// Buttons
const btnReset3 = document.querySelector('.selectcount__btn-reset-3');
const btnApply3 = document.querySelector('.selectcount__btn-apply-3');

// row 1
const value1 = document.querySelector('.selectcount__count-1');
const bthMinus1 = document.querySelector('.selectcount__btn-minus-1');
const btnPlus1 = document.querySelector('.selectcount__btn-plus-1');
// row 2
const value2 = document.querySelector('.selectcount__count-2');
const bthMinus2 = document.querySelector('.selectcount__btn-minus-2');
const btnPlus2 = document.querySelector('.selectcount__btn-plus-2');
// row 3
const value3 = document.querySelector('.selectcount__count-3');
const bthMinus3 = document.querySelector('.selectcount__btn-minus-3');
const btnPlus3 = document.querySelector('.selectcount__btn-plus-3');


// open/close menu
arrowDown.addEventListener('click', (e) => {
  if (dropMenu.style.display == '' || dropMenu.style.display == 'none') {
    dropMenu.style.display = 'block';
  } else {
    dropMenu.style.display = 'none';
  }
});
// close
document.addEventListener('click', (e) => {
  if (e.target.className == 'ui-kit__container' && dropMenu.style.display == 'block') {
    dropMenu.style.display = 'none';
  }
});

// row 1
bthMinus1.addEventListener('click', (e) => {
  let num = Number(value1.innerHTML);
  num <= 0 ? num=0 : num--;
  value1.innerHTML = num;
});
btnPlus1.addEventListener('click', (e) => {
  let num = Number(value1.innerHTML);
  num >= 0 ? num++ : num=0;
  value1.innerHTML = num;
});
// row 2
bthMinus2.addEventListener('click', (e) => {
  let num = Number(value2.innerHTML);
  num <= 0 ? num=0 : num--;
  value2.innerHTML = num;
});
btnPlus2.addEventListener('click', (e) => {
  let num = Number(value2.innerHTML);
  num >= 0 ? num++ : num=0;
  value2.innerHTML = num;
});
// row 3
bthMinus3.addEventListener('click', (e) => {
  let num = Number(value3.innerHTML);
  num <= 0 ? num=0 : num--;
  value3.innerHTML = num;
});
btnPlus3.addEventListener('click', (e) => {
  let num = Number(value3.innerHTML);
  num >= 0 ? num++ : num=0;
  value3.innerHTML = num;
});
// row 3 buttons
btnReset3.addEventListener('click', (e) => {
  value1.innerHTML = 0;
  value2.innerHTML = 0;
  value3.innerHTML = 0;
  inputGuess.value = '';
});
btnApply3.addEventListener('click', (e) => {
  inputGuess.value = `взрослые: ${value1.innerHTML}, дети: ${value2.innerHTML}, младенцы: ${value3.innerHTML}`;
  inputGuess.style.color = 'rgba(31, 32, 65, 0.75)';
  dropMenu.style.display = 'none';
});

