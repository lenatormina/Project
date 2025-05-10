import { ACTION_TYPE } from '../actions';

const initialLoaderState = {
	isLoading: false,
};

export const loaderReducer = (state = initialLoaderState, action) => {
	switch (action.type) {
		case ACTION_TYPE.SHOW_LOADER:
			return {
				...state,
				isLoading: true,
			};
		case ACTION_TYPE.HIDE_LOADER:
			return {
				...state,
				isLoading: false,
			};
		default:
			return state;
	}
};
