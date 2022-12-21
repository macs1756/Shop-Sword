
const HEADER_PRICE = document.querySelector(".header__total-price");
const DRAWER_PRICE = document.querySelector(".drawer__bottom-price");

export function HeaderTotalPrice(){
	
	let drawerProducts = document.querySelectorAll('.drawer__price');
	
	if(drawerProducts.length > 0){

		let arr = [];
		let sumWithInitial = 0;


		drawerProducts.forEach(product=>{
		arr.push(product.innerHTML);	
		sumWithInitial = arr.reduce((accumulator, currentValue) => +accumulator + +currentValue,0);
		HEADER_PRICE.innerText = sumWithInitial;
		DRAWER_PRICE.innerText = sumWithInitial;

		});
		

		arr = [];

		
	}else{
		HEADER_PRICE.innerText = 0;
		DRAWER_PRICE.innerText = 0;
	}
	
	drawerProducts = "";
	
}




