export default class Dropdown {
  constructor(element) {
    this.container = element;

    this.input = this.container.querySelector('.dropdown__input');
    this.arrowDown = this.container.querySelector('.dropdown__arrow-down');

    this.dropMenu = this.container.querySelector('.dropdown__drop-menu');

    this.btnReset = this.dropMenu.querySelector('.selectcount__btn-reset');
    this.btnApply = this.dropMenu.querySelector('.selectcount__btn-apply');

    this.dropMenuItems = this.dropMenu.getElementsByClassName('selectcount');

    this.init();
  }

  init() {
    this.addListeners();
  }

  addListeners() {
    this.lisenerArrowDown();
    this.lisenerMenuItems();
    this.lisenerButtons();
  }

  lisenerArrowDown() {
    this.arrowDown.addEventListener('click', () => {
      this.dropMenu.classList.toggle('dropdown__drop-menu--open');
    })
  }

  lisenerMenuItems() {
    this.dropMenu.addEventListener('click', (e) => {
      if (e.target.classList.contains('selectcount__btn-minus')) {
        e.preventDefault();
        const count = e.target.parentNode.querySelector('.selectcount__count');
        let localNumber = parseInt(count.textContent);
        if( localNumber <= 0) {
          return;
        } else {
          localNumber--;
          count.textContent = localNumber;

          this.setInputText(e.target.parentNode.parentNode.firstChild.textContent, localNumber);
        }
      } else if (e.target.classList.contains('selectcount__btn-plus')) {
        e.preventDefault();
        const count = e.target.parentNode.querySelector('.selectcount__count');
        let localNumber = parseInt(count.textContent);
        if( localNumber >= 30) {
          return;
        } else {
          localNumber++;
          count.textContent = localNumber;

          this.setInputText(e.target.parentNode.parentNode.firstChild.textContent, localNumber);
        }
      }
    });
  }

  lisenerButtons() {
    this.btnReset.addEventListener('click', e => {
      e.preventDefault();
      this.input.value = '';
      this.input.style.color = 'rgba(31, 32, 65, 0.25)';

      this.dropMenuItems[0].querySelector('.selectcount__count').textContent = '0';
      this.dropMenuItems[1].querySelector('.selectcount__count').textContent = '0';
      this.dropMenuItems[2].querySelector('.selectcount__count').textContent = '0';
    });

    this.btnApply.addEventListener('click', e => {
      e.preventDefault();
      this.dropMenu.classList.toggle('dropdown__drop-menu--open');
    });
  }

  setInputText() {
    let inputText = '';

    for (let i = 0; i < this.dropMenuItems.length; i++) {
      let fieldName = this.dropMenuItems[i].firstChild.textContent;
      let fieldValue = this.dropMenuItems[i].lastChild.querySelector('.selectcount__count').textContent;

      inputText += `${fieldName}: ${fieldValue}; `;
    }

    this.input.value = inputText;

    this.input.style.color = 'rgba(31, 32, 65, 0.75)';
  }
}

(() => {
  const container = document.getElementsByClassName('dropdown');
  let containerArr = [];

  if (container) {
    for(let i = 0; i < container.length; i++) {
      containerArr.push(new Dropdown(container[i]));
    }
  } else { return }
})();



// (() => {


// // open/close menu
// document.addEventListener('click', (e) => {
//   if (e.target.className == 'ui-kit__container' && dropMenuGuess.style.display == 'block') {
//     dropMenuGuess.style.display = 'none';
//   }
// });

// btnApply3.addEventListener('click', (e) => {
//   inputGuess.value = `взрослые: ${value1.innerHTML}, дети: ${value2.innerHTML}, младенцы: ${value3.innerHTML}`;
//   inputGuess.style.color = 'rgba(31, 32, 65, 0.75)';
//   dropMenuGuess.style.display = 'none';
// });
// //////////////////////////////////
// ////////-- HARD CODE --///////////
// /////////--  sorry  --////////////
// //////////////////////////////////

// const arrowDownBed = document.querySelector('.dropdown__arrow-down-bed');
// const dropMenuBed = document.querySelector('.dropdown__drop-menu-bed');
// // Input
// const inputBed = document.querySelector('.js-dropdown__input-bed');
// // Buttons
// const btnReset13 = document.querySelector('.selectcount__btn-reset-13');
// const btnApply13 = document.querySelector('.selectcount__btn-apply-13');
// // row 1
// const value11 = document.querySelector('.selectcount__count-11');
// const bthMinus11 = document.querySelector('.selectcount__btn-minus-11');
// const btnPlus11 = document.querySelector('.selectcount__btn-plus-11');
// // row 2
// const value12 = document.querySelector('.selectcount__count-12');
// const bthMinus12 = document.querySelector('.selectcount__btn-minus-12');
// const btnPlus12 = document.querySelector('.selectcount__btn-plus-12');
// // row 3
// const value13 = document.querySelector('.selectcount__count-13');
// const bthMinus13 = document.querySelector('.selectcount__btn-minus-13');
// const btnPlus13 = document.querySelector('.selectcount__btn-plus-13');

// // open/close menu
// arrowDownBed.addEventListener('click', (e) => {
//   if (dropMenuBed.style.display == '' || dropMenuBed.style.display == 'none') {
//     dropMenuBed.style.display = 'block';
//   } else {
//     dropMenuBed.style.display = 'none';
//   }
// });
// // close
// document.addEventListener('click', (e) => {
//   if (e.target.className == 'ui-kit__container' && dropMenuBed.style.display == 'block') {
//     dropMenuBed.style.display = 'none';
//   }
// });

// // row 1
// bthMinus11.addEventListener('click', (e) => {
//   let num = Number(value11.innerHTML);
//   num <= 0 ? num=0 : num--;
//   value11.innerHTML = num;
// });
// btnPlus11.addEventListener('click', (e) => {
//   let num = Number(value11.innerHTML);
//   num >= 0 ? num++ : num=0;
//   value11.innerHTML = num;
// });
// // row 2
// bthMinus12.addEventListener('click', (e) => {
//   let num = Number(value12.innerHTML);
//   num <= 0 ? num=0 : num--;
//   value12.innerHTML = num;
// });
// btnPlus12.addEventListener('click', (e) => {
//   let num = Number(value12.innerHTML);
//   num >= 0 ? num++ : num=0;
//   value12.innerHTML = num;
// });
// // row 3
// bthMinus13.addEventListener('click', (e) => {
//   let num = Number(value13.innerHTML);
//   num <= 0 ? num=0 : num--;
//   value13.innerHTML = num;
// });
// btnPlus13.addEventListener('click', (e) => {
//   let num = Number(value13.innerHTML);
//   num >= 0 ? num++ : num=0;
//   value13.innerHTML = num;
// });
// // row 3 buttons
// btnReset13.addEventListener('click', (e) => {
//   value11.innerHTML = 0;
//   value12.innerHTML = 0;
//   value13.innerHTML = 0;
//   inputBed.value = '';
// });
// btnApply13.addEventListener('click', (e) => {
//   inputBed.value = `спальни: ${value11.innerHTML}, кровати: ${value12.innerHTML}, ванные: ${value13.innerHTML}`;
//   inputBed.style.color = 'rgba(31, 32, 65, 0.75)';
//   dropMenuBed.style.display = 'none';
// });

// });