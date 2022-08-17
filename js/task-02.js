const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsEl = document.querySelector('ul#ingredients');

const elements = [];

for (let i = 0; i < ingredients.length; i += 1) {
  const ingredient = ingredients[i];

  const liEl = document.createElement('li');
  liEl.textContent = ingredient;
  liEl.classList.add('item');

  elements.push(liEl)
}

ingredientsEl.append(...elements);

console.log(ingredientsEl);

