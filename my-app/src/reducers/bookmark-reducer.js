const initialBookmarkState = {
	bookmarks: [],
};

export const bookmarkReducer = (state = initialBookmarkState, action) => {
	switch (action.type) {
		case 'ADD_BOOKMARK':
			return {
				...state,
				bookmarks: [...state.bookmarks, action.payload],
			};
		case 'REMOVE_BOOKMARK':
			return {
				...state,
				bookmarks: state.bookmarks.filter(
					(bookmark) => bookmark.material._id !== action.payload,
				),
			};
		case 'SET_BOOKMARKS':
			return {
				...state,
				bookmarks: action.payload,
			};
		default:
			return state;
	}
};
