document.addEventListener("DOMContentLoaded", function () {
 
  const storedDishData = JSON.parse(localStorage.getItem('selectedDishes')) || [];
  

  if (storedDishData.length > 0) {
    console.log('Отримані дані з localStorage:', storedDishData);

 
    const dishContainer = document.querySelector('#dishes-container');


    if (dishContainer) {
   
      storedDishData.forEach(dish => {

        const dishItem = document.createElement('div');
        dishItem.classList.add('dishes__item');
        dishItem.innerHTML = `
          <div class="order__item">
            <div class="order__quantity-total">
              <h4 class="quantity-total__title">${dish.quantity}x</h4>
            </div>
            <div class="order__describe">
              <h3 class="order__title">${dish.caption}</h3>
              <p class="order__caption">${dish.description || 'Опис відсутній'}</p>
              <h4 class="order__mass">${dish.price} грн за порцію</h4>
              <div class="order__price">${dish.price * dish.quantity} грн</div>
            </div>
            <div class="order__button-box">
              <div class="order__navigate ">

                <div class="order__quantity navigation">
                  <button class="order__minus" id="minus"> - </button>
                  <input class="order__input" type="text" value="${dish.quantity}" min="1">
                  <button class="order__plus" id="plus"> + </button>
                </div>
                <div class="order__delete-button btn">
                  <button class="btn__delete">
                    <img class="btn__image ibg" src="img/deleteBasket.svg" alt="">
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


        dishContainer.appendChild(dishItem);
      });
    } else {
      console.log('Контейнер з ідентифікатором #dishes-container не знайдено');
    }
  } else {
    console.log('Немає даних у localStorage або дані мають неправильний формат');
  }


  // робота кнопок на сторінці перевірки замовлень
  
  const btnDelegate = document.querySelector('.orders__container');
  btnDelegate.addEventListener('click', function (event) {
  const btnTarget = event.target;
  const itemMenu=btnTarget.closest('.dishes__item')
  const itemQuantity=itemMenu.querySelector('.quantity-total__title')

  if (btnTarget.classList.contains('order__plus')) {
    const orderInput = btnTarget.closest('.order__quantity').querySelector('.order__input');
    const checkedOrderInput = parseInt(orderInput.value);
    orderInput.value = checkedOrderInput + 1;
    itemQuantity.innerText=orderInput.value+`X`
  } else if (btnTarget.classList.contains('order__minus')) { 
    const orderInput = btnTarget.closest('.order__quantity').querySelector('.order__input');
    const checkedOrderInput = parseInt(orderInput.value);
    if (checkedOrderInput > 1) { 
      orderInput.value = checkedOrderInput - 1;
       itemQuantity.innerText=orderInput.value+`X`
    }else{itemQuantity.innerText=1 +` X`}

  }else if(btnTarget.classList.contains('btn__delete')){
    const itemMenu=btnTarget.closest('.dishes__item')
    if (itemMenu) {
      console.log('Видалення:', itemMenu); 
      itemMenu.remove();
    }

  }
  // рахуємо ціну за одну позицію в замовленні кількість Х ціну
  const pricePerDish=parseFloat(itemMenu.querySelector('.order__mass').innerText)
  let dishAmount=parseInt(itemQuantity.innerText)
  let summPriceOnlyDish=pricePerDish*dishAmount
  const priceCell=itemMenu.querySelector('.order__price')
  priceCell.innerText=summPriceOnlyDish.toFixed(2)+` грн`

  // рахуємо загальну ціну замовлення
  summTotalorderAmount()
  
  //  =============    якось треба додумати передачу даних на іншу сторінку ===== 
  
});


  const nextButton=document.querySelector('.dishes__next-page')
  if(nextButton){
  nextButton.onclick=function(){
    window.location.href='lastOrderPageDelivery.html'
  }

  }else{
    console.log('nema takogo')
  }
 function summTotalorderAmount(){
const totalPrices=document.querySelectorAll('.order__price')
const finishOrderPrice=document.querySelector('.dishes__total-price')
let summuryMenuprices=0
totalPrices.forEach(element => {
  const price=parseFloat(element.innerText)
  summuryMenuprices+=price
});
finishOrderPrice.innerText=summuryMenuprices.toFixed(2)+` грн`


 }
 summTotalorderAmount()
});
