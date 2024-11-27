export const generateDate = () =>
	new Date(Math.random() * 1000000000000 + 1999999999999)
		.toISOString()
		.replace('T', ' ')
		.substring(0, 16);
