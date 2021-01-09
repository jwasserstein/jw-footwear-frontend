import {combineReducers} from 'redux';
import {authReducer} from './auth';
import {productReducer} from './products';
import {cartReducer} from './cart';
import {orderReducer} from './orders';

const rootReducer = combineReducers({
    productReducer,
    authReducer,
    cartReducer,
    orderReducer
});

export default rootReducer;