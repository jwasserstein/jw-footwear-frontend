import {combineReducers} from 'redux';
import {authReducer} from './auth';
import {productReducer} from './products';
import {cartReducer} from './cart';

const rootReducer = combineReducers({
    productReducer,
    authReducer,
    cartReducer
});

export default rootReducer;