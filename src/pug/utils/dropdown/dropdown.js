const arrowDown = document.querySelector('.dropdown__arrow-down-guess');
const dropMenuGuess = document.querySelector('.dropdown__drop-menu-guess');
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
  if (dropMenuGuess.style.display == '' || dropMenuGuess.style.display == 'none') {
    dropMenuGuess.style.display = 'block';
  } else {
    dropMenuGuess.style.display = 'none';
  }
  console.log('test');
});
// close
document.addEventListener('click', (e) => {
  if (e.target.className == 'ui-kit__container' && dropMenuGuess.style.display == 'block') {
    dropMenuGuess.style.display = 'none';
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
  dropMenuGuess.style.display = 'none';
});
//////////////////////////////////
////////-- HARD CODE --///////////
/////////--  sorry  --////////////
//////////////////////////////////

const arrowDownBed = document.querySelector('.dropdown__arrow-down-bed');
const dropMenuBed = document.querySelector('.dropdown__drop-menu-bed');
// Input
const inputBed = document.querySelector('.js-dropdown__input-bed');
// Buttons
const btnReset13 = document.querySelector('.selectcount__btn-reset-13');
const btnApply13 = document.querySelector('.selectcount__btn-apply-13');
// row 1
const value11 = document.querySelector('.selectcount__count-11');
const bthMinus11 = document.querySelector('.selectcount__btn-minus-11');
const btnPlus11 = document.querySelector('.selectcount__btn-plus-11');
// row 2
const value12 = document.querySelector('.selectcount__count-12');
const bthMinus12 = document.querySelector('.selectcount__btn-minus-12');
const btnPlus12 = document.querySelector('.selectcount__btn-plus-12');
// row 3
const value13 = document.querySelector('.selectcount__count-13');
const bthMinus13 = document.querySelector('.selectcount__btn-minus-13');
const btnPlus13 = document.querySelector('.selectcount__btn-plus-13');

// open/close menu
arrowDownBed.addEventListener('click', (e) => {
  if (dropMenuBed.style.display == '' || dropMenuBed.style.display == 'none') {
    dropMenuBed.style.display = 'block';
  } else {
    dropMenuBed.style.display = 'none';
  }
});
// close
document.addEventListener('click', (e) => {
  if (e.target.className == 'ui-kit__container' && dropMenuBed.style.display == 'block') {
    dropMenuBed.style.display = 'none';
  }
});

// row 1
bthMinus11.addEventListener('click', (e) => {
  let num = Number(value11.innerHTML);
  num <= 0 ? num=0 : num--;
  value11.innerHTML = num;
});
btnPlus11.addEventListener('click', (e) => {
  let num = Number(value11.innerHTML);
  num >= 0 ? num++ : num=0;
  value11.innerHTML = num;
});
// row 2
bthMinus12.addEventListener('click', (e) => {
  let num = Number(value12.innerHTML);
  num <= 0 ? num=0 : num--;
  value12.innerHTML = num;
});
btnPlus12.addEventListener('click', (e) => {
  let num = Number(value12.innerHTML);
  num >= 0 ? num++ : num=0;
  value12.innerHTML = num;
});
// row 3
bthMinus13.addEventListener('click', (e) => {
  let num = Number(value13.innerHTML);
  num <= 0 ? num=0 : num--;
  value13.innerHTML = num;
});
btnPlus13.addEventListener('click', (e) => {
  let num = Number(value13.innerHTML);
  num >= 0 ? num++ : num=0;
  value13.innerHTML = num;
});
// row 3 buttons
btnReset13.addEventListener('click', (e) => {
  value11.innerHTML = 0;
  value12.innerHTML = 0;
  value13.innerHTML = 0;
  inputBed.value = '';
});
btnApply13.addEventListener('click', (e) => {
  inputBed.value = `спальни: ${value11.innerHTML}, кровати: ${value12.innerHTML}, ванные: ${value13.innerHTML}`;
  inputBed.style.color = 'rgba(31, 32, 65, 0.75)';
  dropMenuBed.style.display = 'none';
});
