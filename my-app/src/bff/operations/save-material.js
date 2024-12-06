import { updateMaterial } from '../api';
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

    const updatedMaterial = await updateMaterial(newMaterialData);

    return {
        error: null,
        res: updatedMaterial,
    };
};
