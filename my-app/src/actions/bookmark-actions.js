import { request } from '../utils/request';

export const addBookmarkAsync = (materialId) => (dispatch, getState) => {
	const { bookmarks } = getState().bookmark;
	const isBookmarked = bookmarks.some(
		(bookmark) => bookmark.material._id === materialId,
	);

	if (!isBookmarked) {
		return request(`/bookmarks/${materialId}`, 'POST').then((bookmark) => {
			dispatch({ type: 'ADD_BOOKMARK', payload: bookmark.data });
		});
	}
};

export const removeBookmarkAsync = (materialId) => (dispatch) => {
	return request(`/bookmarks/${materialId}`, 'DELETE').then(() => {
		dispatch({ type: 'REMOVE_BOOKMARK', payload: materialId });
	});
};

export const loadBookmarksAsync = () => (dispatch) => {
	return request('/bookmarks').then((bookmarks) => {
		dispatch({ type: 'SET_BOOKMARKS', payload: bookmarks.data });
	});
};
