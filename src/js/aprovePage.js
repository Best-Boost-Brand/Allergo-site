document.addEventListener("DOMContentLoaded", function () {
    // Отримуємо дані з localStorage
    const storedDishData = JSON.parse(localStorage.getItem('selectedDish')) || [];
  
    // Перевіряємо, чи є дані у localStorage
    if (storedDishData.length > 0) {
      console.log('Отримані дані з localStorage:', storedDishData);
  
      // Знаходимо контейнер, де будемо відображати інформацію про страви
      const dishContainer = document.querySelector('#dishes-container');
  
      // Перевіряємо, чи існує контейнер на сторінці
      if (dishContainer) {
        // Проходимо через кожну страву і додаємо її до контейнера
        storedDishData.forEach(dish => {
          // Створюємо HTML-елемент для відображення даних про страву
          const dishItem = document.createElement('div');
          dishItem.classList.add('dishes__item', 'item');
          dishItem.innerHTML = `
            <div class="order__item">
              <div class="order__quantity-total">
                <h4>${dish.quantity}x</h4>
              </div>
              <div class="order__describe">
                <h3 class="order__title">${dish.caption}</h3>
                <p class="order__caption">${dish.description || 'Опис відсутній'}</p>
                <h4 class="order__mass">${dish.price} грн за порцію</h4>
                <div class="order__price">${dish.price * dish.quantity} грн</div>
              </div>
              <div class="order__button-box">
                <div class="order__navigate ">
                  <button data-target="1" class="nav__busket-btn">
                    <img src="@img/basketSvg.svg" alt=""/>
                  </button>
                  <div class="order__quantity navigation">
                    <button class="order__minus" id="minus"> - </button>
                    <input class="order__input" type="text" value="${dish.quantity}" min="0">
                    <button class="order__plus" id="plus"> + </button>
                  </div>
                  <div class="order__delete-button btn">
                    <button class="btn__delete">
                      <img class="btn__image ibg" src="@img/deleteBasket.svg" alt="">
                    </button>
                  </div>
                </div>
              </div>
              <div class="order__img-quantity box">
                <div class="box__img">
                  <div class="box__image ibg">
                    <img class="pict__image ibg" src="${dish.imageUrl}" alt="${dish.caption}">
                  </div>
                </div>
              </div>
            </div>
          `;
  
          // Додаємо створений елемент до контейнера
          dishContainer.appendChild(dishItem);
        });
      } else {
        console.log('Контейнер з ідентифікатором #dishes-container не знайдено');
      }
    } else {
      console.log('Немає даних у localStorage або дані мають неправильний формат');
    }
  });
  