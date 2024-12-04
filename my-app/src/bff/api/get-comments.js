import { transformComment } from '../transformers';

export const getComments = (materialId) =>
	fetch(`http://localhost:3001/comments?material_id=${materialId}`).then(
		(loadedComments) => loadedComments.json(),
	).then((loadedComments) => loadedComments.map(transformComment));
