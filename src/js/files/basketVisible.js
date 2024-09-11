/*document
  .querySelector(".nav__busket-btn")
  .addEventListener("click", function () {
    // Зникнення кнопки
    this.style.display = "none";

    // Поява блоку quantity
    document.querySelector(".quantity").style.display = "block";
  });
*/

document
  .querySelector(".nav__busket-btn")
  .addEventListener("click", function () {
    this.style.display = "none";
    document.querySelector(".quantity").style.display = "block";
  });

document.addEventListener("click", function (event) {
  // Перевіряємо, чи натиснуто на кнопку з класом 'page__bigbasket-btn'
  if (event.target.closest(".page__bigbasket-btn")) {
    // Виконуємо перехід на іншу сторінку
    window.location.href = "aprooveOrderPage.html"; // замініть URL на потрібний
  }
});


document.addEventListener("click", function (event) {
  // Перевіряємо, чи натиснуто на кнопку з класом 'page__bigbasket-btn'
  if (event.target.closest(".amount__btn")) {
    // Виконуємо перехід на іншу сторінку
    window.location.href = "lastOrderPage.html"; // замініть URL на потрібний
  }
});


