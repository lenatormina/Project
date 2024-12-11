import { addComment, getMaterial } from '../api';
import { sessions } from '../sessions';
import { ROLE } from '../constants';
import { getMaterialsCommentsWithAuthor } from '../utils';

export const addMaterialComment = async (hash, userId, materialId, content) => {
	const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR, ROLE.READER];
	const access = await sessions.access(hash, accessRoles);

	if (!access) {
		return {
			error: 'Доступ запрещен',
			res: null,
		};
	}
	await addComment(userId, materialId, content);

	const material = await getMaterial(materialId);

	const commentsWithAuthor = await getMaterialsCommentsWithAuthor(materialId);

	return {
		error: null,
		res: {
			...material,
			comments: commentsWithAuthor,
		},
	};
};
