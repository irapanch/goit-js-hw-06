
// HTML містить порожній список ul#ingredients.

// <ul id="ingredients"></ul>

// JavaScript містить масив рядків.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.


const ulElement = document.querySelector("#ingredients"); // дісталися до ul з id="ingredients"

ingredients.forEach((ingredient) => { //перебираємо масив
  const liElement = document.createElement("li");  // створюємо новий елемент li
  liElement.textContent = ingredient; // встановлюємо текстовий вміст елементу li, який заміняємо на значення ingredient.
  liElement.classList.add("item"); // додає клас "item" до спискового елементу liElement

  ulElement.appendChild(liElement); //вставляємо усі <li> за одну операцію у список ul#ingredients
  
});

