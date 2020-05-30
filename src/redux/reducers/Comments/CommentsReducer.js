import { sendComment, getComments as apiGetComments } from '../../../api/comments.api';
import store from '../../store';
import { like as l } from '../../../api/tweets.api';
import { getPosts } from '../../reducers/NewsFeed/newsfeed.reducer';
import { getUserTweets } from '../User/UserReducer';

const GET_COMMENTS = 'GET_COMMENTS';

const initialState = {
	comments: [],
};

export const commentsReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_COMMENTS:
			let coms = [...state.comments];
			coms[action.id] = action.payload.data.comments;
			return { ...state, comments: coms };
		default:
			return state;
	}
};

export const postComment = (id, text) => (dispatch) => {
	sendComment(id, text).then((res) => {
		if (res.data.success) {
			store.dispatch(getComments(id));
		}
	});
};

export const getComments = (tweetId) => (dispatch) => {
	console.log('I AM CALLED');
	apiGetComments(tweetId).then((res) => {
		if (res.data.success) {
			dispatch({ type: GET_COMMENTS, payload: res.data, id: tweetId });
		}
	});
};

export const like = (id) => (dispatch) => {
	l(id).then((res) => {
		store.dispatch(getUserTweets());
		store.dispatch(getPosts());
	});
};
