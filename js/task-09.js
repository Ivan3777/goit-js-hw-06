function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeButtonEl = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');
const colorEl = document.querySelector('.color');

changeButtonEl.addEventListener('click', event => {
  let color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  colorEl.textContent = color;
})