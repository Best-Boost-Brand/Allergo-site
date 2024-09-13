import { formQuantity } from "./forms/forms.js";

const dishesData = [
  {
    id: 1,
    name: "first_dishes",
    caption: "Перші страви",
    imageUrl:
      "https://andriynykytiuk.github.io/allegroSite/allegro__3.3/secondLayout.html",
    order: 10,
    dishes: [
      {
        id: 1,
        name: "borsch",
        caption: "Борщ червоний",
        description: "На свинячих реберцях\n Калорійність - на всі гроші",
        imageUrl:
          "https://gurman.com.ua/wp-content/uploads/2023/03/IMG_7073.webp",
        price: 70.0,
        order: 10,
      },
      {
        id: 2,
        name: "green_borsch",
        caption: "Борщ зелений",
        description: "Дуже смачний\n Калорійність - так собі",
        imageUrl:
          "https://klopotenko.com/wp-content/uploads/2022/04/zelenyy-borshch-zi-shpynatom-img-1000x600.jpg",
        price: 64.99,
        order: 20,
      },
      {
        id: 3,
        name: "fish_soup",
        caption: "Рибна юшка",
        description: "На форелі\n Калорійність - лайт",
        imageUrl: "https://images.unian.net/photos/2021_04/1617620232-2719.jpg",
        price: 80.5,
        order: 30,
      },
      {
        id: 4,
        name: "mushroom_soup",
        caption: "Грибна юшка",
        description: "З білих карпатських грибів Калорійність - ",
        imageUrl:
          "https://tuca.com.ua/wp-content/uploads/2020/03/recept_7678_p0nh.jpg",
        price: 70.0,
        order: 40,
      },
      {
        id: 5,
        name: "borsch",
        caption: "Борщ",
        description: "100 видів м'яса\n Калорійність - смерть на місці",
        imageUrl:
          "https://bazylik.com.ua/wp-content/uploads/2024/01/image11_retsept-solianka-zbirna-miasna.webp",
        price: 100.0,
        order: 50,
      },
    ],
  },
  {
    id: 2,
    name: null,
    caption: "М'ясні страви",
    imageUrl:
      "https://vikna.tv/wp-content/uploads/2023/01/04/kachka-1800x1200.jpeg",
    order: 20,
    dishes: [
      {
        id: 6,
        name: "kyiv_style_meat_ball",
        caption: "Котлета по-київськи",
        description: "Курятина, масло вершкове, кляр",
        imageUrl:
          "https://bigkyiv.com.ua/wp-content/uploads/2022/01/kotlety-po-kievski-800x600.jpg",
        price: 110.0,
        order: 10,
      },
      {
        id: 7,
        name: "home_style_meat_boal",
        caption: "Котлета по-домашньому",
        description: "Смакує з пюрехою",
        imageUrl:
          "https://img.fozzyshop.com.ua/157472-thickbox_default/kotlety-domashnie.jpg",
        price: 65.99,
        order: 20,
      },
      {
        id: 8,
        name: "pork_ribs",
        caption: "Свинячі реберця",
        description: "З журавлиновим соусом",
        imageUrl: "https://images.unian.net/photos/2020_07/1593714242-3350.jpg",
        price: 200.0,
        order: 30,
      },
      {
        id: 9,
        name: "chicken_chop",
        caption: "Куряча відбивна",
        description: "Куряча відбивна в клярі\n Топ за свої гроші",
        imageUrl:
          "https://kuldim.com/wa-data/public/shop/products/89/21/2189/images/54555/54555.970.jpg",
        price: 70.0,
        order: 40,
      },
      {
        id: 10,
        name: "beef_steak",
        caption: "Борщ",
        description: "З мармурової яловичини, відчуй себе мажором",
        imageUrl:
          "https://shashlyk-master.com.ua/wp-content/uploads/2018/02/stejk-govyazhij.png",
        price: 700.0,
        order: 50,
      },
    ],
  },
];

function createDishItem(firstDish) {
  return `
    <div class="dishes__item item">
      <div class="item__image image">
        <div class="image__pict pict">
          <img class="pict__image ibg" src="${firstDish.imageUrl}" alt="${firstDish.name}">
        </div>
      </div>
      <div class="item__text text">
        <h3 class="text__title">${firstDish.caption}</h3>
        <p>${firstDish.description}</p>
        <h4>${firstDish.order} гр</h4>
      </div>
      <div class="item__navigate nav">
        <div class="nav__price">${firstDish.price} грн</div>
        <button data-target="${firstDish.id}" class="nav__busket-btn"><img src="./img/basketSvg.svg" alt=""></button>
        <div class="quantity" data-quantity data-target="${firstDish.id}">
          <button type="button" class="quantity__button quantity__button_plus" data-quantity-plus></button>
          <div class="quantity__input">
            <input autocomplete="off" readonly data-quantity-min="0" type="text" name="form[]" value="1" data-quantity-value>
          </div>
          <button type="button" class="quantity__button quantity__button_minus" data-quantity-minus></button>
        </div>
      </div>
    </div>
  `;
}

// Функція для виведення карток на сторінку
function displayFirstDishes(dishesData) {
  const container = document.getElementById("dishes-container");
  if (container) {
    container.innerHTML = ""; // Очищуємо контейнер перед додаванням нового вмісту
    dishesData.forEach((item) => {
      item.dishes.forEach((firstDish) => {
        const firstDishCard = createDishItem(firstDish);
        container.innerHTML += firstDishCard;
      });
    });
  } else {
  }
}

// Виклик функції для відображення страв

document.addEventListener("DOMContentLoaded", function () {
  displayFirstDishes(dishesData);
  formQuantity();
});
// натиск на кнопку її ховає 
document.addEventListener("click", function (event) {
  // Перевіряємо, чи натиснуто на кнопку з класом 'nav__busket-btn'
  if (event.target.closest(".nav__busket-btn")) {
    const button = event.target.closest(".nav__busket-btn");
    const targetId = button.getAttribute("data-target");

    // Ховаємо кнопку
    button.style.display = "none";

    // Показуємо відповідний блок quantity
    const quantityBlock = document.querySelector(
      `.quantity[data-target="${targetId}"]`
    );
    if (quantityBlock) {
      quantityBlock.style.display = "block";
    }
  let selectedDish;
    dishesData.forEach((category) => {
      const dish = category.dishes.find((d) => d.id == targetId);
      if (dish) {
        selectedDish = dish;
      }
    });

    // Додаємо перевірку: чи знайдено страву
    if (selectedDish) {
      console.log("Selected dish:", selectedDish); // Перевіряємо, чи правильно вибрана страва

      // Отримуємо  localStorage
      const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];

      // Перевіряємо, чи страва вже існує у кошику
      const existingOrder = storedOrders.find((item) => item.id === selectedDish.id);

      if (existingOrder) {
        // Якщо страва вже існує, оновлюємо її кількість
        existingOrder.quantity += 1;
        console.log(`Updated quantity for ${selectedDish.caption}:`, existingOrder.quantity);
      } else {
        // Якщо страва нова, додаємо її до замовлень
        storedOrders.push({
          id: selectedDish.id,
          name: selectedDish.name,
          caption: selectedDish.caption,
          price: selectedDish.price,
          imageUrl: selectedDish.imageUrl,
          order: selectedDish.order,
          quantity: 1, // Додаємо першу кількість при натисканні
        });
        console.log(`Added new dish: ${selectedDish.caption}`);
      }

      // Оновлюємо localStorage з новим замовленням
      localStorage.setItem("orders", JSON.stringify(storedOrders));
      console.log("Updated localStorage:", storedOrders);
    } else {
      console.error("Dish not found for ID:", targetId);
    }
  }
	
});


const element = document.querySelector(".nav__busket-btn");
// Перевіряємо клас=======================================

document.addEventListener("DOMContentLoaded", function () {
  displayFirstDishes(dishesData);
  formQuantity();

  // Створюємо Map для збереження кількості товарів
  let quantityMap = new Map();

  document.addEventListener("click", function (event) {
    // Відстежуємо, чи натиснуто на кнопку "+" або "-"
    if (event.target.closest("[data-quantity-plus], [data-quantity-minus]")) {
      const quantityBlock = event.target.closest(".quantity");
      const quantityInput = quantityBlock.querySelector(
        "[data-quantity-value]"
      );
      const dishId = quantityBlock.getAttribute("data-target");
      const quantity = parseInt(quantityInput.value);

      // Оновлюємо Map з новим значенням кількості
      quantityMap.set(dishId, quantity);

      // Зберігаємо Map у localStorage у вигляді JSON
      localStorage.setItem(
        "quantityMap",
        JSON.stringify(Array.from(quantityMap.entries()))
      );
    }
  });
});

//======   ====  ==== === ====

document.addEventListener("DOMContentLoaded", function () {
    // Витягуємо дані з localStorage
    const savedMap = localStorage.getItem("quantityMap");

    if (savedMap) {
        // Перетворюємо JSON назад в Map
        const quantityMap = new Map(JSON.parse(savedMap));

        // Відображаємо кількість та інші дані на сторінці
        const aprooveBox = document.getElementById("aproove__box");

        // Змінна для підрахунку загальної суми
        let totalPrice = 0;

        dishesData.forEach((category) => {
            category.dishes.forEach((dish) => {
                const dishId = String(dish.id);
                const quantity = quantityMap.get(dishId);

                // Відображаємо тільки ті страви, у яких кількість більше 0
                if (quantity && quantity > 0) {
                    const dishTotalPrice = dish.price * quantity;
                    totalPrice += dishTotalPrice;

                    const dishHTML = `
            <div class="orders__wrapp order">
              <div class="order__item">
                <div class="order__quantity">
                  <h4>${quantity}x</h4>
                  <button class="btn__delete">
                    <img src="./img/deleteBasket.svg" alt="">
                  </button>
                </div>
                <div class="order__describe">
                  <h3 class="text__title">${dish.caption}</h3>
                  <p>${dish.description}</p>
                  <h4>${dish.order} гр</h4>
                  <p>${dish.price} ціна за штуку</p>
                  <h2>${dishTotalPrice} грн</h2>
                </div>
                <div class="order__img-quantity box">
                  <div class="box__img">
                    <img class="box__image ibg" src="${dish.imageUrl}" alt="${dish.name}">
                  </div>
                  <div class="item__navigate nav"></div>
                  <button data-target="${dish.id}" class="nav__busket-btn" style="display: none;">
                    <img src="./img/basketSvg.svg" alt=""/>
                  </button>
                  <div class="quantity" data-quantity data-target="${dish.id}" style="display: block;">
                    <button type="button" class="quantity__button quantity__button_plus" data-quantity-plus></button>
                    <div class="quantity__input">
                      <input autocomplete="off" readonly data-quantity-min="0" type="text" name="form[]" value="${quantity}" data-quantity-value/>
                    </div>
                    <button type="button" class="quantity__button quantity__button_minus" data-quantity-minus></button>
                  </div>
                </div>
              </div>
            </div>
          `;
                    aprooveBox.innerHTML += dishHTML;
                }
            });
        });

        // Додаємо елемент для відображення загальної суми   
        const totalPriceHTML = `
      <section class="page__amount amount">
          <div class="amount__container">
            <div class="amount__wrap">
              <div class="amount__price-box">
                <h4>Загальна вартість</h4>
		    <div class="amount__total-summ">
			<h4>${totalPrice}</h4>
		    </div>
              </div>
              <div class="amount__next">
                <button id="red" class="amount__btn">Продовжити ></button>
              </div>
            </div>
          </div>
        </section>
    `;
        aprooveBox.innerHTML += totalPriceHTML;
    } else {
        console.error("Немає даних у localStorage");
    }
});

//============================================ натиск на кнопку ->додавання в корзину


document.addEventListener("DOMContentLoaded", function () {
  if (window.location.pathname.includes("orders")) {
    displayFirstDishes(dishesData);
    formQuantity();

  
    const quantities = document.querySelectorAll(".quantity");
    quantities.forEach((quantity) => {
      quantity.style.display = "block";
    });


    const basketLabels = document.querySelectorAll(".nav__busket-btn");
    basketLabels.forEach((button) => {
      button.style.display = "none";
    });

    
    const images = document.querySelectorAll(".box__image img");
    images.forEach((img) => {
      if (img.complete && img.naturalHeight !== 0) {
        console.log("Image loaded successfully:", img.src);
      } else {
        console.error("Image not loaded:", img.src);
      }
    });

    document.addEventListener("click", function (event) {
      // Перевіряємо, чи натиснуто на кнопку з класом 'nav__busket-btn'
      if (event.target.closest(".nav__busket-btn")) {
        const button1 = event.target.closest(".nav__busket-btn");
        const targetId = button1.getAttribute("data-target");

        // Ховаємо кнопку
        button1.style.display = "none";

        // Показуємо відповідний блок quantity
        const quantityBlock = document.querySelector(
          `.quantity[data-target="${targetId}"]`
        );
        if (quantityBlock) {
          quantityBlock.style.display = "block";
        } else {
          console.error(`Quantity block not found for targetId: ${targetId}`);
        }
      }
    });
  } else {
    console.log("This is not the orders page.");
  }
});

/// __________________видалення товару
document.addEventListener("click", function (event) {
  if (event.target.closest(".btn__delete")) {
    const deletedItem = event.target.closest(".orders__wrapp");
    if (deletedItem) {
      deletedItem.remove();
    }
  }
});


//==============

document.addEventListener('DOMContentLoaded', function() {
  const hideMapButton = document.getElementById('curier');
  const showMapButton = document.getElementById('selfPickUp');
  const mapElement = document.querySelector('.page__map');

  // ховається карта після натиску на кнопку
  if (hideMapButton) {
      hideMapButton.addEventListener('click', function() {
          localStorage.setItem('hideMap', 'true');
          localStorage.removeItem('visibleMap');
          if (mapElement) {
              mapElement.style.display = 'none';
          }
      });
  }

  //  показується карта після натиску на самовивіз
  if (showMapButton) {
      showMapButton.addEventListener('click', function() {
          localStorage.setItem('visibleMap', 'true');
          localStorage.removeItem('hideMap');
          if (mapElement) {
              mapElement.style.display = 'block';
          }
      });
  }

  // перевірка сховища 
  const hideMap = localStorage.getItem('hideMap');
  const visibleMap = localStorage.getItem('visibleMap');
  if (hideMap === 'true' && mapElement) {
      mapElement.style.display = 'none';
  } else if (visibleMap === 'true' && mapElement) {
      mapElement.style.display = 'block';
  }
});

//==============================
document.addEventListener('DOMContentLoaded', function() {
  const deliverySelect = document.querySelector('.delivery__form');
  const mapSection = document.querySelector('.page__map');

  if (deliverySelect && mapSection) {
    // Обробка зміни вибору
    deliverySelect.addEventListener('change', function() {
      const selectValue = deliverySelect.value;
      if (selectValue === '1') {
        mapSection.style.display = 'none';
        localStorage.setItem('hideMap', 'true');
        localStorage.removeItem('visibleMap');
      } else if (selectValue === '2') {
        mapSection.style.display = 'block';
        localStorage.setItem('visibleMap', 'true');
        localStorage.removeItem('hideMap');
      }
    });

    // Ініціалізація видимості карти на основі localStorage
    const hideMap = localStorage.getItem('hideMap');
    const visibleMap = localStorage.getItem('visibleMap');
    
    if (hideMap === 'true') {
      mapSection.style.display = 'none';
    } else if (visibleMap === 'true') {
      mapSection.style.display = 'block';
    } else {
      // Встановити значення за замовчуванням, якщо нічого не знайдено в localStorage
      mapSection.style.display = (deliverySelect.value === '1') ? 'none' : 'block';
    }
  }
});

//=====
