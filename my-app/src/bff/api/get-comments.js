import { transformComment } from '../transformers';

const ALL_COMMENTS_URL = 'http://localhost:3001/comments';
const MATERIAL_COMMENTS_URL = 'http://localhost:3001/comments?material_id=';

export const getComments = (materialId) => {
	const url =
		materialId === undefined ? ALL_COMMENTS_URL : MATERIAL_COMMENTS_URL + materialId;
	return fetch(url)
		.then((loadedComments) => loadedComments.json())
		.then((loadedComments) => loadedComments.map(transformComment));
};
