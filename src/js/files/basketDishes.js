/*document.addEventListener("DOMContentLoaded", function () {
  let orders = JSON.parse(localStorage.getItem("orders")) || {};

  const contentOrders = document.querySelector(".content__orders");

  const updateOrders = () => {
    if (contentOrders) {
      contentOrders.innerHTML = "";
      Object.values(orders).forEach((order) => {
        if (order && order.html) {
          const orderItem = document.createElement("div");
          orderItem.classList.add("order__item", "cloned");
          orderItem.innerHTML = `
	    			 <div class="order__quantity">
                             ${order.quantity + 1} X
                        </div>
                        <div class="order__details">
                            ${order.html}
                        </div>
                       
                    `;
		  
		  const dishesItem = orderItem.querySelector(".dishes__item")
		  if (dishesItem) {
			  dishesItem.classList.add("newitem")
		  }
          const itemImage = orderItem.querySelector(".item__image");
          if (itemImage) {
            itemImage.classList.add("new-style");
          }
		  const imagePict = orderItem.querySelector(".image__pict")
		  if (imagePict) {
			  imagePict.classList.add("newpicture")
		  }
          contentOrders.appendChild(orderItem);
        }
      });
    }
  };

  updateOrders();

  // Додаємо слухачів подій на всі кнопки "+" для збільшення кількості товарів
  document.querySelectorAll(".quantity__button_plus").forEach((button) => {
    button.addEventListener("click", function () {
      const item = this.closest(".dishes__item");
      const itemId = item
        .querySelector(".basket-checkbox")
        .getAttribute("data-target");

      if (orders[itemId] && typeof orders[itemId] === "object") {
        orders[itemId].quantity += 1;
      } else {
        orders[itemId] = {
          html: item.outerHTML, // Зберігаємо весь HTML елемента dishes__item
          quantity: 1,
        };
      }

      localStorage.setItem("orders", JSON.stringify(orders));
      updateOrders();
    });
  });

  // Додаємо слухачів подій на всі кнопки "-" для зменшення кількості товарів
  document.querySelectorAll(".quantity__button_minus").forEach((button) => {
    button.addEventListener("click", function () {
      const item = this.closest(".dishes__item");
      const itemId = item
        .querySelector(".basket-checkbox")
        .getAttribute("data-target");

      if (orders[itemId] && typeof orders[itemId] === "object") {
        if (orders[itemId].quantity > 1) {
          orders[itemId].quantity -= 1;
        } else {
          delete orders[itemId]; // Видаляємо товар, якщо кількість стає 0
        }
        localStorage.setItem("orders", JSON.stringify(orders));
        updateOrders();
      }
    });
  });

  // Додаємо слухач подій для кнопки очищення корзини
  document.getElementById("clearBasket").addEventListener("click", () => {
    localStorage.removeItem("orders"); // Очищаємо дані корзини з localStorage
    orders = {}; // Очищаємо об'єкт замовлень
    updateOrders(); // Оновлюємо відображення
  });
});

//=============================
document.addEventListener("DOMContentLoaded", function () {
  // Перевірка URL сторінки
  const currentPage = window.location.pathname;
  console.log(currentPage); // Дивіться в консоль, що повертає цей рядок

  if (currentPage === "/aprooveOrderPage.html") {
    const labels = document.querySelectorAll(".nav__img");
    if (labels.length > 0) {
      labels.forEach((label) => {
        label.style.display = "none";
      });
    } else {
      console.log("Labels not found.");
    }
  }
});
*/
document.addEventListener("DOMContentLoaded", function () {
  let orders = JSON.parse(localStorage.getItem("orders")) || {};

  const contentOrders = document.querySelector(".content__orders");

  const updateOrders = () => {
    if (contentOrders) {
      contentOrders.innerHTML = "";
      Object.values(orders).forEach((order) => {
        if (order && order.html) {
          const orderItem = document.createElement("div");
          orderItem.classList.add("order__item", "cloned");
          orderItem.innerHTML = `
            <div class="order__quantity">
              ${order.quantity + 1} X
            </div>
            <div class="order__details">
              ${order.html}
            </div>
          `;

          const dishesItem = orderItem.querySelector(".dishes__item");
          if (dishesItem) {
            dishesItem.classList.add("newitem");
          }
          const itemImage = orderItem.querySelector(".item__image");
          if (itemImage) {
            itemImage.classList.add("new-style");
          }
          const imagePict = orderItem.querySelector(".image__pict");
          if (imagePict) {
            imagePict.classList.add("newpicture");
          }
          contentOrders.appendChild(orderItem);
        }
      });
    }
  };

  updateOrders();

  document.querySelectorAll(".quantity__button_plus").forEach((button) => {
    button.addEventListener("click", function () {
      const item = this.closest(".dishes__item");
      if (item) {
        const itemId = item
          .querySelector(".basket-checkbox")
          ?.getAttribute("data-target");

        if (orders[itemId] && typeof orders[itemId] === "object") {
          orders[itemId].quantity += 1;
        } else {
          orders[itemId] = {
            html: item.outerHTML,
            quantity: 1,
          };
        }

        localStorage.setItem("orders", JSON.stringify(orders));
        updateOrders();
      }
    });
  });

  document.querySelectorAll(".quantity__button_minus").forEach((button) => {
    button.addEventListener("click", function () {
      const item = this.closest(".dishes__item");
      if (item) {
        const itemId = item
          .querySelector(".basket-checkbox")
          ?.getAttribute("data-target");

        if (orders[itemId] && typeof orders[itemId] === "object") {
          if (orders[itemId].quantity > 1) {
            orders[itemId].quantity -= 1;
          } else {
            delete orders[itemId];
          }
          localStorage.setItem("orders", JSON.stringify(orders));
          updateOrders();
        }
      }
    });
  });

  const clearBasketButton = document.getElementById("clearBasket");
  if (clearBasketButton) {
    clearBasketButton.addEventListener("click", () => {
      localStorage.removeItem("orders");
      orders = {};
      updateOrders();
    });
  }
});
