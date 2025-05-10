const Bookmark = require("../models/Bookmark");

async function addBookmark(userId, materialId) {
	const newBookmark = await Bookmark.create({
		user: userId,
		material: materialId,
	});
	return newBookmark;
}

async function removeBookmark(userId, materialId) {
	await Bookmark.deleteOne({ user: userId, material: materialId });
}

async function getBookmarks(userId) {
	const bookmarks = await Bookmark.find({ user: userId }).populate(
		"material"
	);
	return bookmarks;
}

module.exports = {
	addBookmark,
	removeBookmark,
	getBookmarks,
};
