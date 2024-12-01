import { setMaterialData } from './set-material-data';

export const addCommentAsync =
	(requestServer, userId, materialId, content) => (dispatch) => {
		console.log('addCommentAsync', requestServer, userId, materialId, content);
		requestServer('addMaterialComment', userId, materialId, content).then(
			(materialData) => {
				dispatch(setMaterialData(materialData.res));
			},
		);
	};
