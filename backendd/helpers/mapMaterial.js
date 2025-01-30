const mongoose = require("mongoose");
const mapComment = require("./mapComment");

module.exports = function (material) {
	return {
		id: material.id,
		title: material.title,
		imageUrl: material.image,
		taskUrl: material.task,
		answer: material.answer,
		content: material.content,
		comments: material.comments.map((comment) =>
			mongoose.isObjectIdOrHexString(comment)
				? comment
				: mapComment(comment)
		),
		publishedAt: material.createdAt.toISOString().split("T")[0],
	};
};
