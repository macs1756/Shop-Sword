
import {renderDrawer} from './basket.js';
import {HeaderTotalPrice} from './totalPrice.js';


const d = document.querySelector('.drawer__body');

d.addEventListener('click', function(e){
		if(e.target.classList.contains('drawer__delete-item')){
			let currentId = e.target.dataset.id;
			dd(currentId);
		}
})


function dd(id) {
	
	let productFromServer = JSON.parse(localStorage.getItem('products'));
	let arr = [];
	arr = productFromServer.filter(el=> el != id);
	localStorage.setItem('products', JSON.stringify(arr));
	renderDrawer();
	HeaderTotalPrice();

	let toggleButton = document.querySelector(`.cart[data-card='${id}']`).querySelector('button');

	toggleButton.classList.remove('active');
	toggleButton.innerHTML = 'Додати в кошик';
	

}

