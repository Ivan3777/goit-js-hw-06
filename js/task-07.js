let inputEl = document.querySelector('#font-size-control');
let textEl = document.querySelector('#text');

textEl.style.fontSize = '50px';

inputEl.oninput = function() {
    textEl.style.fontSize = inputEl.value + 'px';
}