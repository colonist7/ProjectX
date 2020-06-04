import instance from './instance.api';

export const getMessages = (fromUser, toUser) => {
	const options = {
		headers: {
			Authorization:
				sessionStorage.getItem('_token') && sessionStorage.getItem('_token').length !== 0
					? `Bearer ${sessionStorage.getItem('_token')}`
					: '',
			'Access-Control-Allow-Origin': '*',
		},
	};

	return instance.get('/api/Messages/Get?ToUserId=' + toUser + '&FromUserId=' + fromUser, options);
};

export const getUnseens = () => {
	const options = {
		headers: {
			Authorization:
				sessionStorage.getItem('_token') && sessionStorage.getItem('_token').length !== 0
					? `Bearer ${sessionStorage.getItem('_token')}`
					: '',
			'Access-Control-Allow-Origin': '*',
		},
	};

	return instance.get('/api/Messages/UnSeens', options);
};
