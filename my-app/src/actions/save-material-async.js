import { setMaterialData } from './set-material-data';

export const saveMaterialAsync = (requestServer, newMaterialData) => (dispatch) =>
	requestServer('saveMaterial', newMaterialData).then((updatedMaterial) => {
		dispatch(setMaterialData(updatedMaterial.res));
		return updatedMaterial.res;
	});
