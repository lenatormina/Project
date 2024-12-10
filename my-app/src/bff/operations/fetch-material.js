import { getMaterial, getComments, getUsers } from '../api';

export const fetchMaterial = async (materialId) => {
	let material;
	let error;
	try {
		material = await getMaterial(materialId);
	} catch (materialError) {
		error = materialError;
	}

	if (error) {
		return {
			error,
			res: null,
		};
	}

	const comments = await getComments(materialId);

	const users = await getUsers();

	const commentsWithAuthor = comments.map((comment) => {
		const user = users.find(({ id }) => id === comment.authorId);

		return {
			...comment,
			author: user?.login,
		};
	});

	return {
		error: null,
		res: {
			...material,
			comments: commentsWithAuthor,
		},
	};
};
