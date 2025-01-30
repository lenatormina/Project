const mongoose = require("mongoose");
const validator = require("validator");

const MaterialSchema = mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		image: {
			type: String,
			required: true,
			validate: {
				validator: validator.isURL,
				message: "Image should be a valid url",
			},
		},
		task: {
			type: String,
			required: true,
			validate: {
				validator: validator.isURL,
				message: "Image should be a valid url",
			},
		},
		answer: {
			type: String,
			required: true,
		},
		content: {
			type: String,
			required: true,
		},
		comments: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Comment",
			},
		],
	},
	{ timestamps: true }
);

const Material = mongoose.model("Material", MaterialSchema);

module.exports = Material;
