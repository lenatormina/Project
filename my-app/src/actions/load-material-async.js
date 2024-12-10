import { setMaterialData } from './set-material-data';

export const loadMaterialAsync = (requestServer, materialId) => (dispatch) =>
	requestServer('fetchMaterial', materialId).then((materialData) => {
		if (materialData.res) {
			dispatch(setMaterialData(materialData.res));
		}
		return materialData;
	});
