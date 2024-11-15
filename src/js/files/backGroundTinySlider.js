
const newdata = localStorage.getItem('chosedSlideId');
const savedSlideIds = JSON.parse(localStorage.getItem('category')) || [];
const shoTdata = JSON.parse(newdata);
console.log(shoTdata+'=========='+savedSlideIds)





savedSlideIds.forEach((slide,shoTdata) => {
 
        if (shoTdata == slide.id) {
            //slide.style.background = 'red';
        }
    

});
