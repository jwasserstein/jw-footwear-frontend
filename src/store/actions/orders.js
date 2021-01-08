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
                dispatch({type: GET_ORDERS, orders: resp});
                return resolve();
            } catch(err) {
                return reject(err.message);
            }
        });
    };
}