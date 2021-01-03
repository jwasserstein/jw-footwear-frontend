import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

export function configureStore(){
	let middleware;
	if(process.env.NODE_ENV === 'development'){
		middleware = compose(
			applyMiddleware(thunk),
			window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
		);
	} else {
		middleware = applyMiddleware(thunk);
	}

	return createStore(
		rootReducer, 
		middleware
	);
}