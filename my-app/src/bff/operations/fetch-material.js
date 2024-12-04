import { getMaterial, getComments, getUsers } from '../api';

export const fetchMaterial = async (materialId) => {
	const material = await getMaterial(materialId);

	const comments = await getComments(materialId);

	const users = await getUsers();

	const commentsWithAuthor = comments.map((comment)=>{
		const user = users.find(({id}) => id === comment.authorId);

		return {
			...comment,
			author: user?.login,
		}
	})

	return {
		error: null,
		res: {
			...material,
			comments: commentsWithAuthor,
		},
	};
};
