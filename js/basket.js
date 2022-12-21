
import {btn} from './index.js';
import {DRAWER_PUSH} from './index.js';
import {SERVER} from  './server.js';
import {HeaderTotalPrice} from './totalPrice.js';

//localStorage.clear();


let x = JSON.parse(localStorage.getItem('products'));
let arr = [];

if(!x){
	localStorage.setItem('products', JSON.stringify(arr));
}

x.forEach(item=>{
	let x = document.querySelector(`.cart[data-card='${item}']`);
	x.querySelector('button').classList.add('active');
	x.querySelector('button').innerText = 'Видалити з кошика';
});




btn.forEach(item=>{
 item.addEventListener('click', function(e){
	let idCard = e.target.parentElement.dataset.card;


	let storage = JSON.parse(localStorage.getItem('products'));

	if(storage.length == 0){
		storage.push(idCard);
		
	}else{

		let x44 = +storage.findIndex(item=> item == idCard);

		if(x44 != -1){
			storage.splice(x44, 1);
		}else{
			storage.push(idCard);
		}
		
	}
	
	localStorage.setItem('products', JSON.stringify(storage));
	renderDrawer();
	HeaderTotalPrice();
	storage = null;

	
 });
});





const DRAWER_INSERT = document.querySelector('.drawer__items');



export function renderDrawer(){
	DRAWER_INSERT.innerHTML = '';
	let arr = [];
	let drawerBody = JSON.parse(localStorage.getItem('products'));
	
	drawerBody.forEach(drawerId=>{
		for(let i=0; i<SERVER.length; ++i){
			if(SERVER[i].id == drawerId){
				arr.push(i);
			}
		}

		
		if(arr.length > 0){
			DRAWER_PUSH.removeAttribute('disabled');
			let allItemsDrawer = '';
			
			arr.forEach(id=>{
				allItemsDrawer += `
				<div class="drawer__item">
							<img src="img/${SERVER[id].imgPath}" alt="sword">
							<h3>${SERVER[id].name}</h3>
							<div class="drawer__counter">
								<button class="count__less">-</button>
								<button class="count__num">1</button>
								<button class="count__more">+</button>
							</div>
							<p><span data-price='${SERVER[id].price}' class='drawer__price'>${SERVER[id].price}</span> Грн</p>
							<span data-id='${SERVER[id].id}' class='drawer__delete-item'>X</span>
				</div>
				`;
			});	

			DRAWER_INSERT.innerHTML = allItemsDrawer;
			
			
		}
		
		
	});	
	if(arr.length == 0){
		DRAWER_INSERT.innerHTML = `
		<div class='drawer__empty'>Корзина пуста</div>
		`;
		DRAWER_PUSH.setAttribute('disabled', '');
	}
}

renderDrawer();
HeaderTotalPrice();