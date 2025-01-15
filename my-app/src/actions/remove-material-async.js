import { request } from '../utils/request';

export const removeMaterialAsync = (id) => () =>
	request(`/materials/${id}`, 'DELETE', id);
