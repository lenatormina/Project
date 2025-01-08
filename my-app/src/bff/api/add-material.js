import { generateDate } from '../utils';

export const addMaterial = ({ imageUrl, title, content }) =>
	fetch('http://localhost:3005/materials', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			image_url: imageUrl,
			published_at: generateDate(),
			title,
			content,
		}),
	}).then((createdMaterial) => createdMaterial.json());
