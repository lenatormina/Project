export const getCommentsCount = (comments = [], materialId) => {
	const materialComments = comments.filter(
		({ materialId: commentPostId }) => commentPostId === materialId,
	);
	return materialComments.length;
};
