import { addComment, getComments, getMaterial } from '../api';
import { sessions } from '../sessions';
import { ROLE } from '../constants';

export const addMaterialComment = async (userSession, userId, materialId, content) => {
	const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR, ROLE.READER];

	if (!sessions.access(userSession, accessRoles)) {
		return {
			error: 'Доступ запрещен',
			res: null,
		};
	}

	console.log(userId, materialId, content);

	await addComment(userId, materialId, content);

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
