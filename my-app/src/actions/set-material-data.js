import { ACTION_TYPE } from "./action-type";

export const setMaterialData = (materialData) => ({
    type: ACTION_TYPE,
    payload: materialData,
});