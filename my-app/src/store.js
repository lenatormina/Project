import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import { userReducer, usersReducer, materialReducer, materialsReducer } from './reducers';

const reducer = combineReducers({
	user: userReducer,
	users: usersReducer,
	material: materialReducer,
	materials: materialsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
