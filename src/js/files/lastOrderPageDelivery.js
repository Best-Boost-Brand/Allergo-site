import './change.js';
document.addEventListener("DOMContentLoaded",function(){
  
  const storedDishData = JSON.parse(localStorage.getItem('selectedDishes')) || [];
    if (storedDishData.length > 0) {
        console.log('Отримані дані з localStorage:', storedDishData);
        const dishContainer = document.querySelector('.orders__box');
    
        if (dishContainer) {
          let totalSum=0;
          storedDishData.forEach(dish => {
            const dishItem = document.createElement('div');
            dishItem.classList.add('chosed__item');
            dishItem.innerHTML = `
             <div class="aproved-items__item">
                      <div class="aproved-items__quntity">
                        <h4 >${dish.quantity} X</h4>
                      </div>
                      <div class="aproved-items__caption">
                        <h3>${dish.caption}</h3>
                      </div>
                      <div class="aproved-items__total">
                        <h4>${(dish.price * dish.quantity).toFixed(2)} грн</h4>
                      </div>
              </div> `;
            dishContainer.appendChild(dishItem);
            totalSum+=(dish.price*dish.quantity)
          });
          const sumbOx=document.querySelector('.summ__total')
          sumbOx.append(totalSum.toFixed(2) +` грн`)
          console.log(totalSum)
        } else {
          console.log('Контейнер з ідентифікатором #dishes-container не знайдено');
        }
      } else {
        console.log('Немає даних у localStorage або дані мають неправильний формат');
      }
     
      document.addEventListener("selectCallback", function (e) {
        // Селект 
        const mapa = document.querySelector('.page__map');
        const currentSelect = e.detail.select.value;
        if (currentSelect==='1'){
          mapa.style.display = 'none';
        }else if (currentSelect==='2'){
          mapa.style.display = 'block';}
      });
      const lastbtn=document.querySelector('.aproove__btn')
      if(lastbtn){
      lastbtn.addEventListener('click',function(event){
        const targetPoint=event.target
        if(targetPoint===lastbtn)[
          window.location.href='thankyouPage.html'
        ]
      })}

      const homePageBtn=document.querySelector('.aprove__link')
      if(homePageBtn){
      homePageBtn.addEventListener('click',function(event){
        const trgClick=event.target
        if(trgClick){
          window.location.href='home.html'
        }
      })}
})
