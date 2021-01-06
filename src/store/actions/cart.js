import {ADD_CART_ITEM, RESTORE_CART, REMOVE_CART_ITEM} from '../actionTypes';

export function addCartItem(id, size, quantity) {
	return dispatch => {
		return new Promise(async (resolve, reject) => {
			try {
                let lsCart = JSON.parse(localStorage.getItem('cart'));
                if(!lsCart){
                    lsCart = [{id, size, quantity}]
				} else {
					const idSizeCombo = lsCart.find(item => item.id === id && item.size === size);
					if(idSizeCombo){
						idSizeCombo.quantity += quantity;
					} else {
						lsCart.push({id, size, quantity});
					}
				}
                localStorage.setItem('cart', JSON.stringify(lsCart));

                const lsCartCount = +localStorage.getItem('cartCount') || 0;
                localStorage.setItem('cartCount', lsCartCount + quantity);

				dispatch({type: ADD_CART_ITEM, id, size, quantity});
				return resolve();
			} catch(err) {
				return reject(err.message);
			}
		});
	}
}

export function restoreCart(){
    return dispatch => {
		return new Promise(async (resolve, reject) => {
			try {
                const lsCart = JSON.parse(localStorage.getItem('cart')) || [];
                const lsCartCount = +localStorage.getItem('cartCount') || 0;
				dispatch({type: RESTORE_CART, lsCart, lsCartCount});
				return resolve();
			} catch(err) {
				return reject(err.message);
			}
		});
	}
}

export function removeCartItem(id, size, quantity){
	return dispatch => {
		return new Promise(async (resolve, reject) => {
			try {
				let lsCart = JSON.parse(localStorage.getItem('cart')) || [];
				let lsCartCount = +localStorage.getItem('cartCount') || 0;

				lsCart = lsCart.filter(item => item.id !== id || item.size !== size);
				lsCartCount -= quantity;

				localStorage.setItem('cart', JSON.stringify(lsCart));
				localStorage.setItem('cartCount', lsCartCount);
				dispatch({type: REMOVE_CART_ITEM, id, size, quantity});
				return resolve();
			} catch (err) {
				return reject(err.message);
			}
		});
	}
}