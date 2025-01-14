import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import {
	appReducer,
	userReducer,
	usersReducer,
	materialReducer,
	materialsReducer,
	loaderReducer,
} from './reducers';

const reducer = combineReducers({
	app: appReducer,
	user: userReducer,
	users: usersReducer,
	material: materialReducer,
	materials: materialsReducer,
	loader: loaderReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
