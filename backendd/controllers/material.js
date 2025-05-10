const Material = require("../models/Material");

// add
async function addMaterial(material) {
	const newMaterial = await Material.create(material);

	await newMaterial.populate("author");

	return newMaterial;
}

// edit
async function editMaterial(id, material) {
	const newMaterial = await Material.findByIdAndUpdate(id, material, {
		returnDocument: "after",
	});

	await newMaterial.populate("author");

	return newMaterial;
}

// delete
function deleteMaterial(id) {
	return Material.deleteOne({ _id: id });
}

// get list with search and pagination
async function getMaterials(
	search = "",
	limit = 10,
	page = 1,
	sort = "createdAt",
	topic = ""
) {
	const sortOptions = {
		alphabetical: { title: 1 },
		newest: { createdAt: -1 },
		oldest: { createdAt: 1 },
	};

	const query = {
		title: { $regex: search, $options: "i" },
		...(topic && { topic }),
	};

	const [materials, count] = await Promise.all([
		Material.find(query)
			.limit(limit)
			.skip((page - 1) * limit)
			.sort(sortOptions[sort] || sortOptions["newest"]),
		Material.countDocuments(query),
	]);

	return {
		materials,
		lastPage: Math.ceil(count / limit),
	};
}

// get item
function getMaterial(id) {
	return Material.findById(id).populate("author");
}

module.exports = {
	addMaterial,
	editMaterial,
	deleteMaterial,
	getMaterials,
	getMaterial,
};
