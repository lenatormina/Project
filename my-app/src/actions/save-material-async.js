import { request } from '../utils/request';
import { setMaterialData } from './set-material-data';

export const saveMaterialAsync = (id, newMaterialData) => (dispatch) => {
	const saveRequest = id
		? request(`/materials/${id}`, 'PATCH', newMaterialData)
		: request('/materials', 'POST', newMaterialData);

	return saveRequest.then((updatedMaterial) => {
		dispatch(setMaterialData(updatedMaterial.data));
		return updatedMaterial.data;
	});
};
