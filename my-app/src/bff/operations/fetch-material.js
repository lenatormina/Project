import { getMaterial } from '../api';

export const fetchMaterial = async (materialId) => {
	const material = await getMaterial(materialId);

	return {
		error: null,
		res: material,
	};
};
