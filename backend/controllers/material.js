const Material = require('../models/Material');

// add
async function addMaterial(material) {
	const newMaterial = await Material.create(material);
	await newMaterial.populate({ path: 'comments', populate: 'author' });
	return newMaterial;
}
// edit

async function editMaterial(id, material) {
	const newMaterial = await Material.findByIdAndUpdate(id, material, {
		returnDocument: 'after',
	});
	await newMaterial.populate({ path: 'comments', populate: 'author' });
	return newMaterial;
}

// delete

function deleteMaterial(id) {
	return Material.deleteOne({ _id: id });
}
// get list with search and pagination

async function getMaterials(search = '', limit = 10, page = 1) {
	const [materials, count] = await Promise.all([
		Material.find({ title: { $regex: search, $options: 'i' } })
			.limit(limit)
			.skip((page - 1) * limit)
			.sort({ createdAt: -1 }),
		Material.countDocuments({ title: { $regex: search, $options: 'i' } }),
	]);

	return { materials, lastPage: Math.ceil(count / limit) };
}

// get item

function getMaterial(id) {
	return Material.findById(id).populate({ path: 'comments', populate: 'author' });
}

module.exports = {
	addMaterial,
	editMaterial,
	deleteMaterial,
	getMaterials,
	getMaterial,
};
