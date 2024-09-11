/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper from 'swiper';
import { Navigation, Autoplay,Mousewheel } from 'swiper/modules';


/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
//import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
//import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
//import 'swiper/css';

// Ініціалізація слайдерів
function initSliders() {
	// Список слайдерів
	// Перевіряємо, чи є слайдер на сторінці
	if (document.querySelector('.swiper')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.swiper', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [Navigation, Autoplay,Mousewheel],
			//observer: true,
			//observeParents: true,
			//slidesPerView: 2.5, // зміниться наповненість слайда на екрані універсально для найменшого і найбільшого мобайл екрану 2.4 super for desktop
			//slidesPerGroup:3,
			spaceBetween: 50,
			autoHeight: true,
			speed: 1400, //чим більше тим повільніше
			direction: 'vertical',
			//touchRatio: 2,
			//simulateTouch: true,
			loop: true,
			//preloadImages: true,
			//lazy: true,
			centeredSlides:true,

			mousewheel: { sensivity: 4 },
			
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			
			
			// Брейкпоінти
			breakpoints: {
				200: {
					slidesPerView: 2.6,
					spaceBetween: 120,
					autoHeight: true,
				},
				
				768: {
					slidesPerView: 3,
					spaceBetween: 100, //добре 2.4  але з налаштуванням верху
				},
				992: {
					slidesPerView: 2.5,
					spaceBetween: 120,
				},
				1268: {
					slidesPerView: 2.5,
					spaceBetween: 120,
				},
			},
			
			
			on: {
			}
		});
	}
	
	
}



function initInner() { 
if (document.querySelector('.inner')) { // Вказуємо склас потрібного слайдера
	// Створюємо слайдер
	new Swiper('.inner', { // Вказуємо склас потрібного слайдера
		// Підключаємо модулі слайдера
		// для конкретного випадку
		modules: [Navigation, Autoplay],
		observer: true,
		observeParents: true,
		slidesPerView: 3, // зміниться наповненість слайда на екрані
		spaceBetween: 10,
		//autoHeight: true,
		speed: 800,
		//direction: 'vertical',
		//touchRatio: 0,
		//simulateTouch: false,
		centeredSlides:true,
		loop: true,
		//preloadImages: false,
		//lazy: true,

		
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		

		

		
	
		// Події
		on: {
		}
	});
	}
}


// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

document.addEventListener('DOMContentLoaded', function (e) {
	// Запуск ініціалізації слайдерів
	initSliders();
	initInner();
	// Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
	//initSlidersScroll();
});
