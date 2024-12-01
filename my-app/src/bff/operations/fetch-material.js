import { getMaterial, getComments } from '../api';

export const fetchMaterial = async (materialId) => {
	const material = await getMaterial(materialId);

	const comments = await getComments(materialId);

	return {
		error: null,
		res: {
			...material,
			comments,
		},
	};
};
