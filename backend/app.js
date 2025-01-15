require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const {
	register,
	login,
	getRoles,
	updateUser,
	deleteUser,
	getUsers,
} = require('./controllers/user');
const {
	addMaterial,
	editMaterial,
	deleteMaterial,
	getMaterials,
	getMaterial,
} = require('./controllers/material');
const mapUser = require('./helpers/mapUser');
const authentificated = require('./middlewares/authentificated');
const hasRole = require('./middlewares/hasRole');
const ROLES = require('./constants/roles');
const mapMaterial = require('./helpers/mapMaterial');
const mapComment = require('./helpers/mapComment');
const { deleteComment, addComment } = require('./controllers/comment');

const port = 3001;
const app = express();

app.use(express.static('../my-app/build'));

app.use(cookieParser());
app.use(express.json());

app.post('/register', async (req, res) => {
	try {
		const { user, token } = await register(req.body.login, req.body.password);
		res.cookie('token', token, { httpOnly: true }).send({
			error: null,
			user: mapUser(user),
		});
	} catch (e) {
		res.send({ error: e.message || 'Unknown error' });
	}
});

app.post('/login', async (req, res) => {
	try {
		const { user, token } = await login(req.body.login, req.body.password);
		res.cookie('token', token, { httpOnly: true }).send({
			error: null,
			user: mapUser(user),
		});
	} catch (e) {
		res.send({ error: e.message || 'Unknown error' });
	}
});

app.post('/logout', (req, res) => {
	res.cookie('token', '', { httpOnly: true }).send({});
});

app.get('/materials', async (req, res) => {
	const { materials, lastPage } = await getMaterials(
		req.query.search,
		req.query.limit,
		req.query.page,
	);
	res.send({ data: { lastPage, materials: materials.map(mapMaterial) } });
});

app.get('/materials/:id', async (req, res) => {
	const material = await getMaterial(req.params.id);
	res.send({ data: mapMaterial(material) });
});

app.use(authentificated);

app.post('/materials/:id/comments', async (req, res) => {
	const newComment = await addComment(req.params.id, {
		content: req.body.content,
		author: req.user.id,
	});
	res.send({ data: mapComment(newComment) });
});

app.delete(
	'/materials/:materialId/comments/:commentId',
	hasRole([ROLES.ADMIN, ROLES.MODERATOR]),
	async (req, res) => {
		await deleteComment(req.params.materialId, req.params.commentId);
		res.send({ error: null });
	},
);

app.post('/materials', hasRole([ROLES.ADMIN]), async (req, res) => {
	const newMaterial = await addMaterial({
		title: req.body.title,
		content: req.body.content,
		image: req.body.imageUrl,
	});
	res.send({ data: mapMaterial(newMaterial) });
});

app.patch('/materials/:id', hasRole([ROLES.ADMIN]), async (req, res) => {
	const updatedMaterial = await editMaterial(req.params.id, {
		title: req.body.title,
		content: req.body.content,
		image: req.body.imageUrl,
	});
	res.send({ data: mapMaterial(editMaterial) });
});

app.delete('/materials/:id', hasRole([ROLES.ADMIN]), async (req, res) => {
	await deleteMaterial(req.params.id);
	res.send({ error: null });
});

app.get('/users', hasRole([ROLES.ADMIN]), async (req, res) => {
	const users = await getUsers();
	res.send({ data: users.map(mapUser) });
});

app.get('/users/roles', hasRole([ROLES.ADMIN]), async (req, res) => {
	const roles = getRoles();
	res.send({ data: roles });
});

app.patch('/users/:id', hasRole([ROLES.ADMIN]), async (req, res) => {
	const newUser = await updateUser(req.params.id, {
		role: req.body.roleId,
	});
	res.send({ data: mapUser(newUser) });
});

app.delete('/users/:id', hasRole([ROLES.ADMIN]), async (req, res) => {
	await deleteUser(req.params.id);
	res.send({ error: null });
});

mongoose.connect(process.env.DB_CONNECTION_STRING).then(() => {
	app.listen(port, () => {
		console.log(`Server started on port ${port}`);
	});
});
