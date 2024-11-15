// Ваш JavaScript код
import { data } from "isotope-layout";


// Отримуємо дані з localStorage
const newdata = localStorage.getItem('category');
const showdata = JSON.parse(newdata);



    const wideSlide = document.querySelector('.inner__wrapper');
    

    if (wideSlide){

    showdata.forEach(slide => {
        const newWideslide = document.createElement('div');
        newWideslide.classList.add('inner__slide','swiper-slide');
        newWideslide.setAttribute('slide-id',slide.id)
        newWideslide.innerHTML = `
            <a href="secondLayout.html"><p class="inner__first">${slide.caption}</p></a>
        `;
        wideSlide.appendChild(newWideslide);

         // делегувати треба на батька
        // подія яка відстежує клікання слайду і визначає його айді

        newWideslide.addEventListener('click',()=>{
            localStorage.setItem('chosedSlideId',slide.id)
            console.log('перехід в меню з id == ' + slide.id) // аби розуміти що заходить у локал сторедж
            
        })
       
    });
    // Перевіряємо збережений ID слайда і встановлюємо колір бекграунду

    }
const savedSlideId = localStorage.getItem('chosedSlideId');

if (savedSlideId) {
    const slideToHighlight = document.querySelector(`[slide-id="${savedSlideId}"]`);
    if (slideToHighlight) {
        slideToHighlight.style.background = '#FF831D';
    }
}



  


   
    const needIdSlide=localStorage.getItem('chosedSlideId')
    console.log(needIdSlide+"=id pidmenu slida") // це айді клікнутого слайда/ меню
    
   


    document.addEventListener('DOMContentLoaded',function(){
    
    function renderMenuFromTinySlider(showdata,needIdSlide){
        const dishContainer = document.querySelector('.page__dishes');
        if(dishContainer){
        dishContainer.innerHTML=''
        showdata.forEach(category=>{
          
            if(category.id==needIdSlide){

                category.dishes.forEach(dish=>{
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
            dishContainer.appendChild(dishItem)
                })
            }
        })}
    }
    renderMenuFromTinySlider(showdata,needIdSlide)
    })

