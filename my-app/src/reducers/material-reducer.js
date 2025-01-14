import { ACTION_TYPE } from '../actions';

const initialMaterialState = {
	id: '',
	title: '',
	imageUrl: '',
	content: '',
	publishedAt: '',
	commentsCount: [],
	comments: [],
};

export const materialReducer = (state = initialMaterialState, action) => {
	switch (action.type) {
		case ACTION_TYPE.ADD_COMMENT:
			return {
				...state,
				comments: [...state.comments, action.payload],
			};
		case ACTION_TYPE.REMOVE_COMMENT:
			return {
				...state,
				comments: state.comments.filter(
					(comment) => comment.id !== action.payload,
				),
			};
		case ACTION_TYPE.SET_MATERIAL_DATA:
			return {
				...state,
				...action.payload,
			};
		case ACTION_TYPE.RESET_MATERIAL_DATA:
			return initialMaterialState;
		default:
			return state;
	}
};
