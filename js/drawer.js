

const COUNTER_LESS = document.querySelectorAll('.count__less');
const DRAWER_BODY = document.querySelector('.drawer__body');
import {HeaderTotalPrice} from './totalPrice.js';



DRAWER_BODY.addEventListener('click', function(event){

	if(event.target.classList.contains('count__less')){
			let parent = event.target.parentElement;
			let counter = parent.querySelector('.count__num');
			if(+counter.innerText > 1){
				counter.innerText = 	--counter.innerText;

				let totalPrice = parent.parentElement.querySelector('.drawer__price');
				totalPrice.innerText = +totalPrice.dataset.price * +counter.innerText;
				HeaderTotalPrice();
			}	
	}


	if(event.target.classList.contains('count__more')){
		let parent = event.target.parentElement;
		let counter = parent.querySelector('.count__num');
		counter.innerText = 	++counter.innerText;

		let totalPrice = parent.parentElement.querySelector('.drawer__price');	
		totalPrice.innerText = +totalPrice.dataset.price * +counter.innerText;
		HeaderTotalPrice();
	}
})







