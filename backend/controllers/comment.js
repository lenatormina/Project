const Comment = require('../models/Comment');
const Material = require('../models/Material');

// add

async function addComment(materialId, comment) {
	const newComment = await Comment.create(comment);

	await Material.findByIdAndUpdate(materialId, {
		$push: { comments: newComment },
	});

	await newComment.populate('author');

	return newComment;
}

// delete

async function deleteComment(materialId, commentId) {
	await Comment.deleteOne({ _id: commentId });
	await Material.findByIdAndUpdate(materialId, {
		$pull: { comments: commentId },
	});
}

module.exports = {
	addComment,
	deleteComment,
};
