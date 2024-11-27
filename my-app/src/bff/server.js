import { authorize, logout, register, fetchUsers, fetchRoles, updateUserRole} from './operations';

export const server = {
	authorize,
	logout,
	register,
	fetchUsers,
	fetchRoles,
	updateUserRole,
};
