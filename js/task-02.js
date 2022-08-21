const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


// ===== corrected on the comment of the mentor =====

const ingredientsEl = document.querySelector('ul#ingredients');

const elements = ingredients.map(ingredient => {
  const element = document.createElement('li');
  element.classList.add('item');
  element.textContent = ingredient;
  return element
});

ingredientsEl.append(...elements);

console.log(ingredientsEl);





//===== old method =====

// for (let i = 0; i < ingredients.length; i += 1) {
//   const ingredient = ingredients[i];

//   const liEl = document.createElement('li');
//   liEl.textContent = ingredient;
//   liEl.classList.add('item');

//   elements.push(liEl)
// }