document.addEventListener("DOMContentLoaded",function(){
    const storedDishData = JSON.parse(localStorage.getItem('selectedDishes')) || [];
    if (storedDishData.length > 0) {
        console.log('Отримані дані з localStorage:', storedDishData);
        const dishContainer = document.querySelector('#lastAproove');
    
        if (dishContainer) {
          storedDishData.forEach(dish => {
            const dishItem = document.createElement('div');
            dishItem.classList.add('dishes__item');
            dishItem.innerHTML = `
             <div class="aproved-items__item">
                      <div class="aproved-items__quntity">
                        <h4>${dish.quantity}</h4>
                      </div>
                      <div class="aproved-items__caption">
                        <h3>${dish.caption}</h3>
                      </div>
                      <div class="aproved-items__total">
                        <h4>${(dish.price * dish.quantity)}</h4>
                      </div>
                    </div>
                    <div class="aproved-items__summ summ">
                      <div class="summ__title">
                        загальна сума 
                      </div>
                      ${dish.price} грн
                    </div>
            `;
    
            dishContainer.appendChild(dishItem);
          });
        } else {
          console.log('Контейнер з ідентифікатором #dishes-container не знайдено');
        }
      } else {
        console.log('Немає даних у localStorage або дані мають неправильний формат');
      }
})
