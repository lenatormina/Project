import { transformMaterial } from '../transformers';

export const getMaterials = (searchPhrase, page, limit) =>
	fetch(
		`http://localhost:3005/materials?title_like=${searchPhrase}&_page=${page}&_limit=${limit}`,
	)
		.then((loadedMaterials) =>
			Promise.all([loadedMaterials.json(), loadedMaterials.headers.get('Link')]),
		)
		.then(([loadedMaterials, links]) => ({
			materials: loadedMaterials && loadedMaterials.map(transformMaterial),
			links,
		}));
