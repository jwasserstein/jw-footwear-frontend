import {GET_ORDERS} from '../actionTypes';

const DEFAULT_STATE = {
	orders: [],
	lastUpdated: 0
}

export function orderReducer(state=DEFAULT_STATE, action){
	switch (action.type){
		case GET_ORDERS:
            return {...state, orders: action.orders, lastUpdated: Date.now()};
		default: 
			return state;
	}
}