import { deleteComment, getMaterial } from '../api';
import { sessions } from '../sessions';
import { ROLE } from '../constants';
import { getMaterialsCommentsWithAuthor } from '../utils';

export const removeMaterialComment = async (hash, materialId, id) => {
	const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR];
	const access = await sessions.access(hash, accessRoles);

	if (!access) {
		return {
			error: 'Доступ запрещен',
			res: null,
		};
	}
	await deleteComment(id);

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
