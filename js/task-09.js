
// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.


function getRandomHexColor() {   // генеруємо випадковий колір
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonChange = document.querySelector('.change-color'); //отримуємо посилання на button з класом "change-color"
const colorSpan = document.querySelector('.color'); //отримуємо посилання на спан з класом "color"


buttonChange.addEventListener('click', (changeColor)); // додаємо прослуховувач подій по кліку

function changeColor() {    // функція виконується, коли юзер  натискає кнопку 

  document.body.style.backgroundColor = getRandomHexColor(); //  встановлюється  фоновий колір для боді
  colorSpan.textContent = getRandomHexColor(); // встановлюємо назву задіяного кольору з рандому як  текст 
  console.log(colorSpan); //виводимо значення кольору в консоль
}

