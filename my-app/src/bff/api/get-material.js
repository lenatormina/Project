import { transformMaterial } from '../transformers';

export const getMaterial = async (materialId) =>
	fetch(`http://localhost:3005/materials/${materialId}`)
		.then((res) => {
			if (res.ok) {
				return res;
			}

			const error =
				res.status === 404 ? 'Такая страница не существует' : 'Произошла ошибка';

			return Promise.reject(error);
		})
		.then((loadedMaterial) => loadedMaterial.json())
		.then((loadedMaterial) => loadedMaterial && transformMaterial(loadedMaterial));
