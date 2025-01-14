const express = require('express');
const {
	getMaterials,
	getMaterial,
	addMaterial,
	editMaterial,
	deleteMaterial,
} = require('../controllers/material');
const { addComment, deleteComment } = require('../controllers/comment');
const authentificated = require('../middlewares/authentificated');
const hasRole = require('../middlewares/hasRole');
const mapMaterial = require('../helpers/mapMaterial');
const mapComment = require('../helpers/mapComment');
const ROLES = require('../constants/roles');

const router = express.Router({ mergeParams: true });

router.get('/', async (req, res) => {
	const { materials, lastPage } = await getMaterials(
		req.query.search,
		req.query.limit,
		req.query.page,
	);

	res.send({ data: { lastPage, materials: materials.map(mapMaterial) } });
});

router.get('/:id', async (req, res) => {
	const material = await getMaterial(req.params.id);

	res.send({ data: mapMaterial(material) });
});

router.post('/:id/comments', authentificated, async (req, res) => {
	const newComment = await addComment(req.params.id, {
		content: req.body.content,
		author: req.user.id,
	});

	res.send({ data: mapComment(newComment) });
});

router.delete(
	'/:materialId/comments/:commentId',
	authentificated,
	hasRole([ROLES.ADMIN, ROLES.MODERATOR]),
	async (req, res) => {
		await deleteComment(req.params.materialId, req.params.commentId);

		res.send({ error: null });
	},
);

router.post('/', authentificated, hasRole([ROLES.ADMIN]), async (req, res) => {
	const newMaterial = await addMaterial({
		title: req.body.title,
		content: req.body.content,
		image: req.body.imageUrl,
	});

	res.send({ data: mapMaterial(newMaterial) });
});

router.patch('/:id', authentificated, hasRole([ROLES.ADMIN]), async (req, res) => {
	const updatedMaterial = await editMaterial(req.params.id, {
		title: req.body.title,
		content: req.body.content,
		image: req.body.imageUrl,
	});

	res.send({ data: mapMaterial(updatedMaterial) });
});

router.delete('/:id', authentificated, hasRole([ROLES.ADMIN]), async (req, res) => {
	await deleteMaterial(req.params.id);

	res.send({ error: null });
});

module.exports = router;
