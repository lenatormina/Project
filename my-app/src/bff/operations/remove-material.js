import { deleteComment, deleteMaterial, getComments } from '../api';
import { sessions } from '../sessions';
import { ROLE } from '../constants';

export const removeMaterial = async (hash, id) => {
    const accessRoles = [ROLE.ADMIN];
    const access = await sessions.access(hash, accessRoles);

    if (!access) {
        return {
            error: 'Доступ запрещен',
            res: null,
        };
    }
    await deleteMaterial(id);

    const comments = await getComments(id);

    await Promise.all(comments.map(({id: commentId}) => deleteComment(commentId)))

    return {
        error: null,
        res: true,
    };
};
