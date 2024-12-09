import { transformMaterial } from '../transformers';

export const getMaterials = () =>
	fetch('http://localhost:3001/materials')
		.then((loadedMaterials) => loadedMaterials.json())
		.then(
			(loadedMaterials) =>
				loadedMaterials && loadedMaterials.map(transformMaterial),
		);
