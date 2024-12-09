import { getMaterials, getComments } from '../api';
import { getCommentsCount } from '../utils';

export const fetchMaterials = async (page, limit) => {
	const [{ materials, links }, comments] = await Promise.all([
		getMaterials(page, limit),
		getComments(),
	]);

	console.log(links);
	return {
		error: null,
		res: {
			materials: materials.map((material) => ({
				...material,
				commentsCount: getCommentsCount(comments, material.id),
			})),
			links,
		},
	};
};
