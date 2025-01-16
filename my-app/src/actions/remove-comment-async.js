import { request } from '../utils/request';
import { removeComment } from './remove-comment';

export const removeCommentAsync = (materialId, id) => (dispatch) => {
	request(`/materials/${materialId}/comments/${id}`, 'DELETE').then(() => {
		dispatch(removeComment(id));
	});
};
