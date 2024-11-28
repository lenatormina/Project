import { setMaterialData } from "./set-material-data";

export const loadMaterialAsync = (requestServer, materialId) => (dispatch) =>{
    requestServer('fetchMaterial', materialId).then((materialData) => {
        dispatch(setMaterialData(materialData));
    })
}