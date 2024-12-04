import { setMaterialData } from './set-material-data';

export const removeCommentAsync =
    (requestServer, materialId, id) => (dispatch) => {
        requestServer('removeMaterialComment', materialId, id).then(
            (materialData) => {
                dispatch(setMaterialData(materialData.res));
            },
        );
    };
