import {GET_ORDERS} from '../actionTypes';
import {apiCall} from '../../services/api';

export function placeOrder(order){
    return dispatch => {
        return new Promise(async function(resolve, reject){
            try {
                const resp = await apiCall('post', '/orders', order);
                if(resp.error){
					return reject(resp.error);
                }
                const orders = resp.sort((a, b) => (new Date(b.date)) - (new Date(a.date)));
                dispatch({type: GET_ORDERS, orders});
                return resolve();
            } catch(err) {
                return reject(err.message);
            }
        });
    };
}

export function getOrders(){
    return dispatch => {
        return new Promise(async function(resolve, reject){
            try {
                const resp = await apiCall('get', '/orders', {});
                if(resp.error){
					return reject(resp.error);
                }
                const orders = resp.sort((a, b) => (new Date(b.date)) - (new Date(a.date)));
                dispatch({type: GET_ORDERS, orders});
                return resolve();
            } catch(err) {
                return reject(err.message);
            }
        });
    };
}