import { ACTION_TYPE } from './action-type';

export const showLoader = () => ({
	type: ACTION_TYPE.SHOW_LOADER,
});

export const hideLoader = () => ({
	type: ACTION_TYPE.HIDE_LOADER,
});
