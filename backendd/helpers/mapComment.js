module.exports = function (comment) {
	return {
		content: comment.content,
		author: comment.author.login,
		id: comment._id,
		publishedAt: comment.createdAt.toISOString().split("T")[0],
	};
};
