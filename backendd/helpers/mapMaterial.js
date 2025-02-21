module.exports = function (material) {
	return {
		id: material.id,
		title: material.title,
		imageUrl: material.image,
		taskUrl: material.task,
		answer: material.answer,
		content: material.content,
		publishedAt: material.createdAt.toLocaleDateString(),
	};
};
