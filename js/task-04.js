const refs = {
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
  valueEl: document.querySelector('#value'),
};

refs.decrementBtn.addEventListener('click', onDecrementBtnClick);
refs.incrementBtn.addEventListener('click', onIncrementBtnClick);

let counterValue = 0;

function onDecrementBtnClick() {
  counterValue -= 1;
  refs.valueEl.textContent = counterValue;
}

function onIncrementBtnClick() {
  counterValue += 1;
  refs.valueEl.textContent = counterValue;
}


