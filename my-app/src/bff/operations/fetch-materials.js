import { getMaterials, getComments } from '../api';
import { getCommentsCount } from '../utils';

export const fetchMaterials = async (page, limit) => {
	const [materials, comments] = await Promise.all([
		getMaterials(page, limit),
		getComments(),
	]);

	return {
		error: null,
		res: materials.map((material) => ({
			...material,
			commentsCount: getCommentsCount(comments, material.id),
		})),
	};
};
