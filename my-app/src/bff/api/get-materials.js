import { transformMaterial } from '../transformers';

export const getMaterials = (page, limit) =>
	fetch(`http://localhost:3001/materials?_page=${page}&_limit=${limit}`)
		.then((loadedMaterials) => loadedMaterials.json())
		.then(
			(loadedMaterials) =>
				loadedMaterials && loadedMaterials.map(transformMaterial),
		);
