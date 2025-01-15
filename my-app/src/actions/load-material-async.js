import { request } from '../utils/request';
import { setMaterialData } from './set-material-data';

export const loadMaterialAsync = (materialId) => (dispatch) =>
	request(`/materials/${materialId}`).then((materialData) => {
		if (materialData.data) {
			dispatch(setMaterialData(materialData.data));
		}
		return materialData;
	});
