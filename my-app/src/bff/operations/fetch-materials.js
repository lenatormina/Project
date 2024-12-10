import { getMaterials, getComments } from '../api';
import { getCommentsCount } from '../utils';

export const fetchMaterials = async (searchPhrase, page, limit) => {
	const [{ materials, links }, comments] = await Promise.all([
		getMaterials(searchPhrase, page, limit),
		getComments(),
	]);
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
