
import {HeaderTotalPrice} from './totalPrice.js';
import {SERVER} from './server.js';
import {renderDrawer} from './basket.js';


const WR = document.querySelector('.wr');
const MODAL_PUSH = document.querySelector('.drawer__push');


//create cart
let swordHTML = '';

SERVER.forEach(sword=>{
	swordHTML += `
		<div class="cart" data-card='${sword.id}'>
			<h2>${sword.name}</h2>
			<img class="cart__img" src="img/${sword.imgPath}" alt="img">
			<p>
				<img class="cart__price-img" src="img/price.png" alt="ico">
				<span>${sword.price} Грн</span>
			</p>
			<button class="cart__btn" id="cart__btn">Додати в кошик</button>
		</div>
	`
});

WR.innerHTML = swordHTML;



//modal drawer


const DRAWER_BTN = document.querySelector('.basket');
const DRAWER_CLOSE = document.querySelector('.drawer__close');
const DRAWER_WR = document.querySelector('.drawer');
const DRAWER_BODY = document.querySelector('.drawer__body');

DRAWER_BTN.addEventListener('click', ()=>{
	DRAWER_WR.classList.add('active');
});

DRAWER_CLOSE.addEventListener('click', ()=>{
	DRAWER_WR.classList.remove('active');
});

DRAWER_BODY.addEventListener('click', function(e){
	e.stopPropagation();
})

DRAWER_WR.addEventListener('click', function(event){
	this.classList.remove('active');
})







export let btn = document.querySelectorAll('#cart__btn');

btn.forEach(item=>{
	item.addEventListener('click', function(){
		item.classList.toggle('active');
	
		if(this.classList.contains('active')){
			this.innerText = 'Видалити з кошика';
		}else{
			this.innerText = 'Додати в кошик';
		}
		
	});
})

//push date 


export const DRAWER_PUSH = document.querySelector('.drawer__btn');


DRAWER_PUSH.addEventListener('click', ()=>{

		localStorage.setItem('products', JSON.stringify([]));
	
		renderDrawer();
		HeaderTotalPrice();
		btn.forEach(el=>{
			el.classList.remove('active');
			el.innerHTML = 'Додати в кошик';
		});

		 
		DRAWER_WR.classList.remove('active');
		MODAL_PUSH.classList.add('active');

});

MODAL_PUSH.addEventListener('click', function(){
		this.classList.remove('active');
		
})