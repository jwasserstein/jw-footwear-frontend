import {ADD_CART_ITEM, RESTORE_CART} from '../actionTypes';

export function addCartItem(id, size, quantity) {
	return dispatch => {
		return new Promise(async (resolve, reject) => {
			try {
                let lsCart = JSON.parse(localStorage.getItem('cart'));
                if(!lsCart){
                    lsCart = {[id]: {[size]: quantity}};
                } else if (!lsCart[id]){
                    lsCart[id] = {[size]: quantity};
                } else if (!lsCart[id][size]){
                    lsCart[id][size] = quantity;
                } else {
                    lsCart[id][size] += quantity;
                }
                localStorage.setItem('cart', JSON.stringify(lsCart));

                const cartCount = +localStorage.getItem('cartCount') || 0;
                localStorage.setItem('cartCount', cartCount + 1);

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
                const lsCart = JSON.parse(localStorage.getItem('cart'));
                const cartCount = +localStorage.getItem('cartCount') || 0;
				dispatch({type: RESTORE_CART, lsCart, cartCount});
				return resolve();
			} catch(err) {
				return reject(err.message);
			}
		});
	}
}