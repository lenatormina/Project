import { generateDate } from '../utils';

export const addComment = (userId, materialId, content) =>
	fetch('http://localhost:3005/comments', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			author_id: userId,
			material_id: materialId,
			published_at: generateDate(),
			content,
		}),
	});
