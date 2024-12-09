export const getCommentsCount = (comments = [], materialId) => {
	const materialComments = comments.filter(
		({ materialId: commentMaterialId }) => commentMaterialId === materialId,
	);
	return materialComments.length;
};
