import { addMaterial, updateMaterial } from '../api';
import { ROLE } from '../constants';
import { sessions } from '../sessions';

export const saveMaterial = async (hash, newMaterialData) => {
    const accessRoles = [ROLE.ADMIN];

    const access = await sessions.access(hash, accessRoles);

    if (!access) {
        return {
            error: 'Доступ запрещен',
            res: null,
        };
    }

    const saveMaterial = newMaterialData.id === '' 
        ? await addMaterial(newMaterialData)
        : await updateMaterial(newMaterialData);

    return {
        error: null,
        res: saveMaterial,
    };
};
