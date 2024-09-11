document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed"); // Перевірка завантаження DOM

  const button = document.querySelector("#red");

  if (button) {
    console.log("Button found"); // Перевірка наявності кнопки
    button.addEventListener("click", function () {
      console.log("Button clicked"); // Перевірка натискання кнопки
      this.style.backgroundColor = "red";
    });
  } else {
    console.error("Button with ID 'red' not found!");
  }
});
