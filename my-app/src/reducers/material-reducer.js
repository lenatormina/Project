import { ACTION_TYPE } from '../actions';
const initialMaterialState = {
	id: '',
	title: '',
	imageUrl: '',
	content: '',
	publishedAt: '',
	commentsCount: [],
};

export const materialReducer = (state = initialMaterialState, action) => {
	switch (action.type) {
		case ACTION_TYPE.SET_MATERIAL_DATA:
			return {
				...state,
				...action.payload,
			};
		default:
			return state;
	}
};
