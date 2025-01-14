module.exports = function (material) {
	return {
		id: material.id,
		title: material.title,
		imageUrl: material.image_url,
		content: material.content,
		comments: material.comments,
		publishedAt: material.createdAt,
	};
};
