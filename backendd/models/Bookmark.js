const mongoose = require("mongoose");

const BookmarkSchema = mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		material: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Material",
			required: true,
		},
	},
	{ timestamps: true }
);

const Bookmark = mongoose.model("Bookmark", BookmarkSchema);

module.exports = Bookmark;
