import { transformMaterial } from '../transformers';

export const getMaterials = (page, limit) =>
	fetch(`http://localhost:3001/materials?_page=${page}&_limit=${limit}`)
		.then((loadedMaterials) =>
			Promise.all([loadedMaterials.json(), loadedMaterials.headers.get('Link')]),
		)
		.then(([loadedMaterials, links]) => ({
			materials: loadedMaterials && loadedMaterials.map(transformMaterial),
			links,
		}));
