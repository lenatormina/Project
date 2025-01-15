import { request } from '../utils/request';
import { addComment } from './add-comment';

export const addCommentAsync = (materialId, content) => (dispatch) => {
	request(`/materials/${materialId}/comments`, 'POST', { content }).then((comment) => {
		dispatch(addComment(comment.data));
	});
};
