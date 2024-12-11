import { getMaterial } from '../api';
import { getMaterialsCommentsWithAuthor } from '../utils';

export const fetchMaterial = async (materialId) => {
	let material;
	let error;
	try {
		material = await getMaterial(materialId);
	} catch (materialError) {
		error = materialError;
	}

	if (error) {
		return {
			error,
			res: null,
		};
	}

	const commentsWithAuthor = await getMaterialsCommentsWithAuthor(materialId);

	return {
		error: null,
		res: {
			...material,
			comments: commentsWithAuthor,
		},
	};
};
