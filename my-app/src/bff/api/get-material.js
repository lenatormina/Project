import { transformMaterial } from '../transformers';

export const getMaterial = async (materialId) =>
	fetch(`http://localhost:3001/materials/${materialId}`)
		.then((loadedMaterial) => loadedMaterial.json())
		.then((loadedMaterial) => loadedMaterial && transformMaterial(loadedMaterial));
