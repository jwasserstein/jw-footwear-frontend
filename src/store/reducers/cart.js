import {ADD_CART_ITEM, RESTORE_CART} from '../actionTypes';

const DEFAULT_STATE = {
    cart: {},
    cartCount: 0
}

export function cartReducer(state=DEFAULT_STATE, action){
    const {id, size, quantity} = action;
	switch (action.type){
		case ADD_CART_ITEM:
            const newCart = {...state.cart};
            
            if(!newCart[id]){
                newCart[id] = {[size]: quantity};
            } else if (!newCart[id][size]){
                newCart[id][size] = quantity;
            } else {
                newCart[id][size] += quantity;
            };

            const newCartCount = state.cartCount + quantity;

            return {...state, cart: newCart, cartCount: newCartCount, lastUpdated: Date.now()};
        case RESTORE_CART:
            return {...state, cart: action.lsCart, cartCount: action.cartCount, lastUpdated: Date.now()};
		default: 
			return state;
	}
}