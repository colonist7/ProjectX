import instance from './instance.api';

export const tweet = (tweetText) => {
	const options = {
		headers: {
			Authorization:
				sessionStorage.getItem('_token') && sessionStorage.getItem('_token').length !== 0
					? `Bearer ${sessionStorage.getItem('_token')}`
					: '',
			'Access-Control-Allow-Origin': '*',
		},
	};

	return instance.post(
		'/api/Tweets/Post',
		{
			tweetText,
		},
		options
	);
};

export const getTweets = (UserId = '', OnlyFollowings = '') => {
	const options = {
		headers: {
			Authorization:
				sessionStorage.getItem('_token') && sessionStorage.getItem('_token').length !== 0
					? `Bearer ${sessionStorage.getItem('_token')}`
					: '',
			'Access-Control-Allow-Origin': '*',
		},
	};

	const id = UserId.length > 0 ? 'UserId=' + UserId : '';
	const of = 'OnlyFollowings=' + OnlyFollowings;
	let query = '';

	if (UserId.length > 0 && typeof (OnlyFollowings !== 'string')) {
		query = '?' + id + '&' + of;
	} else if (typeof OnlyFollowings !== 'string' && UserId.length === 0) {
		query = '?' + of;
	} else if (typeof OnlyFollowings === 'string' && UserId.length > 0) {
		query = '?' + id;
	}

	return instance.get('/api/Tweets/Get' + query, options);
};

export const like = (tweetId) => {
	const options = {
		headers: {
			Authorization:
				sessionStorage.getItem('_token') && sessionStorage.getItem('_token').length !== 0
					? `Bearer ${sessionStorage.getItem('_token')}`
					: '',
			'Access-Control-Allow-Origin': '*',
		},
	};
	return instance.post('/api/Tweets/Like', { tweetId }, options);
};
