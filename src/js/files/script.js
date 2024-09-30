// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

// зміна кольору кнопок доставки

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed");

  const buttons = document.querySelectorAll(".aproove__button");
  let previousButton = null;

  if (buttons.length > 0) {
    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        console.log("Button clicked");

        // Якщо існує попередня кнопка, повертаємо її фон до початкового стану
        if (previousButton) {
          previousButton.style.backgroundColor = "#c4c4c4"; // Початковий фон
        }

        // Змінюємо фон натиснутої кнопки
        this.style.backgroundColor = "#ff831d";

        // Оновлюємо змінну попередньої кнопки
        previousButton = this;
      });
    });
  } else {
  }
});

document.addEventListener("click", function (event) {
  // Перевіряємо, чи натиснуто на кнопку з класом 'page__bigbasket-btn'
  if (event.target.closest(".amount__btn")) {
    // Виконуємо перехід на іншу сторінку
    window.location.href = "lastOrderPageDelivery.html"; // замініть URL на потрібний
  }
});

//==================================випадаюче меню
/**document.addEventListener("DOMContentLoaded", function () {
  const select = document.querySelector(".select__selected");
  const items = document.querySelector(".select__items");
  const selectContainer = document.querySelector(".curier__select");
  const selectedText = select.querySelector(".select__text");
  const selectedImage = select.querySelector(".select__image");

  select.addEventListener("click", function () {
    selectContainer.classList.toggle("active");
  });

  document.querySelectorAll(".select__item").forEach((item) => {
    item.addEventListener("click", function () {
      selectedImage.src = this.getAttribute("data-image");
      selectedText.textContent = this.textContent;
      selectContainer.classList.remove("active");
    });
  });
}); */


//==========
document.addEventListener("DOMContentLoaded", function () {
  menuInit();
});
import { menuInit } from "./functions.js";

//+++=================


document.addEventListener("click", function (event) {
  // Перевіряємо, чи натиснуто на кнопку з класом 'page__bigbasket-btn'
  if (event.target.closest(".aproove__btn")) {
    // Виконуємо перехід на іншу сторінку
    window.location.href = "thankyouPage.html"; // замініть URL на потрібний
  }
});