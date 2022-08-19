const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onBlur);

function onBlur(event) {
  const input = event.currentTarget;
  const inputLength = Number(input.dataset.length);

  if (input.value.length === inputLength) {
    input.classList.remove('invalid');
    input.classList.add('valid');
    return;
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
}
console.log(inputEl.dataset.length);
console.log(inputEl.value.length);
