
const newdata=localStorage.getItem('category')
const showdata=JSON.parse(newdata)


console.log(showdata)


  
  
document.addEventListener("DOMContentLoaded", function() {

  // слайдер меню хверзу сторінки
/*
  function createWideSlider(showdata) {
    const wideSlide = document.querySelector('.inner__wrapper');
    
    if (!wideSlide) {
        console.log("Елемент '.inner__wrapper' не знайдено.");
        return;
    }
    

    showdata.forEach(slide => {
        const newWideslide = document.createElement('div');
        newWideslide.classList.add('inner__slide','swiper-slide');
        newWideslide.setAttribute('slide-id',slide.id)
        newWideslide.innerHTML = `
            <a href="secondLayout.html"><p class="inner__first">${slide.caption}</p></a>
        `;// делегувати треба на батька


        wideSlide.appendChild(newWideslide);

        newWideslide.addEventListener('click',()=>{

            localStorage.setItem('chosedSlideId',slide.id)
            window.location.href="secondLayout.html"
            console.log('перехід в меню з id == ' + slide.id)

        })
       
    });
    const needIdSlide=localStorage.getItem('chosedSlideId')
    console.log(needIdSlide+"kjhkjkj")




    }
    createWideSlider(showdata)
    */

    const dishContainer = document.querySelector('.page__dishes');
    // перевірка чи існує контейнер де буде будуватися наступна сторінка і виведення вибраного data-id
    if (dishContainer) {
      // Отримуємо chosedID із localStorage
      const chosedDataID = localStorage.getItem('chosedID'); // id first layer
      if (chosedDataID) {
        // Зберігаємо дані або використовуємо збережені дані з localStorage
        const dishesData = JSON.parse(localStorage.getItem('category'));
        console.log('data-id choosed==='+ chosedDataID)
        renderDishes(dishesData, chosedDataID);
      } else {
        console.log("Категорію не знайдено");
      }
    

    const slidechosID=localStorage.getItem('chosedSlideId')
    console.log('ce nf inshij storinci'+slidechosID)



    function renderDishes(newdata, chosedDataID) {
        
        // Виконуємо рендеринг тільки для категорії з обраним chosedDataID
        newdata.forEach(category => {
          if (category.id == chosedDataID ) {
            category.dishes.forEach(dish => {
              // Створення елементів для страв
              const dishItem = document.createElement('div');
              dishItem.classList.add('dishes__item', 'item');
              dishItem.id = `${dish.id}`;
              dishItem.innerHTML = `
              <div class="item__picture" >
                <img class="item__image ibg" src="${dish.imageUrl}" alt="${dish.caption}">
              </div>
              <div class="item__text text" >
                <div class="text__title">
                  <h2>${dish.caption}</h2>
                </div>
                <div class="text__describe">
                  <p>${dish.description}</p>
                </div>
              </div>
              <div class="item__navigate navigate">
                <div class="navigate__price price">
                  <div class="price__mass">
                    <h3>280 г</h3>
                  </div>
                  <div class="price__amount">
                    <h4>${dish.price} грн</h4>
                  </div>
                </div>
                <div class="navigate__quantity" style="display: none;">
                  <button class="navigate__minus" id="minus"> - </button>
                  <input class="navigate__input" type="text" value="1" min="0">
                  <button class="navigate__plus" id="plus"> + </button>
                </div>
                <div class="navigate__basket basket">
                  <button class="basket__btn"><img src="img/basketSvg.svg" alt="basket"></button>
                </div>
              </div>
            `;
              dishContainer.appendChild(dishItem);
            });
          }
        });
      }

      
    dishContainer.addEventListener('click', function (event) {
    const target = event.target;
    if (target.closest('.basket__btn')) {
      const parentCard = target.closest('.item');
      const quantityBlock = parentCard.querySelector('.navigate__quantity');
      const basketBtn = parentCard.querySelector('.basket__btn');
      quantityBlock.style.display = "flex";
      basketBtn.style.display = "none";
    }

  
    if (target.matches('#minus')) {
      const parentCard = target.closest('.item');
      const dishValue = parentCard.querySelector(".navigate__input");
      const btnMinus=parentCard.querySelector('.navigate__minus')
      let curentDishValue=parseInt(dishValue.value)


      // страшний костиль))))
      if(btnMinus){

        btnMinus.style.background='orange'
        setTimeout(()=>{
            btnMinus.style.background=''
        },100)
      }
      if (curentDishValue < 0) {
        curentDishValue = 0;
      }
      if (curentDishValue === 0) {
        const basketBtn = parentCard.querySelector('.basket__btn');
        const quantityBlock = parentCard.querySelector('.navigate__quantity');

        basketBtn.style.display = "block";
        quantityBlock.style.display = "none";
      }
      dishValue.value = curentDishValue;
    }

    if (target.matches('#plus')) {
      const parentCard = target.closest('.item');
      const valueDish = parentCard.querySelector('.navigate__input');
      const btnPlus=parentCard.querySelector('.navigate__plus')

      if(btnPlus){
 
   
        btnPlus.style.background='orange'
        setTimeout(()=>{
            btnPlus.style.background=''
        },100)
      }
    }
  });
  //localStorage.removeItem("selectedDishes");  //----- ця штука відповідає за очизення локал сторедж


  dishContainer.addEventListener('click', function (event) {
    const target = event.target;
    
    if (target.closest('.basket__btn')) {
      const parentCard = target.closest('.item');
      let dishData = {
        id: parentCard.id,
        caption: parentCard.querySelector('.text__title').innerText,
        price: parseFloat(parentCard.querySelector('.price__amount h4').innerText),
        quantity: parseInt(parentCard.querySelector('.navigate__input').value),
        description: parentCard.querySelector('.text__describe').innerText,
        imageUrl: parentCard.querySelector('.item__image').src,
        //dishPrice: parseFloat(parentCard.querySelector('.price__amount h4').innerText)*parseInt(parentCard.querySelector('.navigate__input').value),
      };
  
      // Отримуємо поточні дані з локального сховища та перетворюємо в масив, якщо необхідно
      let selectedDishes = JSON.parse(localStorage.getItem("selectedDishes"));
  
      // Перевірка, чи є дані масивом. Якщо ні, створюємо новий масив.
      if (!Array.isArray(selectedDishes)) {
        selectedDishes = [];
      }
  
      // Додаємо нову страву до масиву
      selectedDishes.push(dishData);
  
      // Зберігаємо оновлений масив у локальному сховищі
      localStorage.setItem("selectedDishes", JSON.stringify(selectedDishes));
  
      console.log(localStorage.getItem("selectedDishes"));
    }
  
    if (target.closest('.navigate__plus')) {
      const parentCard = target.closest('.item');
      const quantityInput = parentCard.querySelector('.navigate__input');
      let quantity = parseInt(quantityInput.value);
      quantity++;
      quantityInput.value = quantity;
  
      let selectedDishes = JSON.parse(localStorage.getItem("selectedDishes"));
      if (Array.isArray(selectedDishes)) {
        const dishIndex = selectedDishes.findIndex(dish => dish.id === parentCard.id);
        if (dishIndex !== -1) {
          selectedDishes[dishIndex].quantity = quantity;
          localStorage.setItem("selectedDishes", JSON.stringify(selectedDishes));
        }
      }
    }
  
    if (target.closest('.navigate__minus')) {
      const parentCard = target.closest('.item');
      const quantityInput = parentCard.querySelector('.navigate__input');
      let quantity = parseInt(quantityInput.value);
      quantity--;
      if (quantity < 0) quantity = 0;
      quantityInput.value = quantity;
  
      let selectedDishes = JSON.parse(localStorage.getItem("selectedDishes"));
      if (Array.isArray(selectedDishes)) {
        const dishIndex = selectedDishes.findIndex(dish => dish.id === parentCard.id);
        if (dishIndex !== -1) {
          selectedDishes[dishIndex].quantity = quantity;
          localStorage.setItem("selectedDishes", JSON.stringify(selectedDishes));
        }
      }
  
      if (quantity === 0) {
        const basketBtn = parentCard.querySelector('.basket__btn');
        const quantityBlock = parentCard.querySelector('.navigate__quantity');
        basketBtn.style.display = "block";
        quantityBlock.style.display = "none";
      }
    }
  
    console.log(localStorage);
  });}
});
  
 
  