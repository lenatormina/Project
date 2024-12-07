export const updateMaterial = ({ id, imageUrl, title, content }) =>
	fetch(`http://localhost:3001/materials/${id}`, {
		method: 'PATCH',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify({
			image_url: imageUrl,
			title,
			content,
		}),
	}).then((loadedMaterial) => loadedMaterial.json());
