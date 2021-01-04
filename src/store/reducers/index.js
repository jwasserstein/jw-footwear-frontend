import {combineReducers} from 'redux';
import {authReducer} from './auth';
import {productReducer} from './products';

const rootReducer = combineReducers({
    productReducer,
    authReducer
});

export default rootReducer;