import { getComments, getUsers } from '../api';

export const getMaterialsCommentsWithAuthor = async (materialId) => {
	const comments = await getComments(materialId);
	const users = await getUsers();

	return comments.map((comment) => {
		const user = users.find(({ id }) => id === comment.authorId);

		return {
			...comment,
			author: user?.login,
		};
	});
};
