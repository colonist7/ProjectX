import { getUser, getAllUsers, imageSave } from '../../../api/user.api';
import { follow, getFollowing, getFollowers } from '../../../api/follow.api';
import { tweet, getTweets } from '../../../api/tweets.api';

const LOAD_USER_INFO = 'LOAD_USER_INFO';
const GET_ALL_USERS = 'GET_ALL_USERS';
const SET_USER_FOLLOWERS = 'USER_FOLLOWERS';
const SET_USER_FOLLOWING = 'USER_FOLLOWING';
const CLEAR_USER = 'CLEAR_USER';
const GET_TWEET = 'GET_TWEET';
const SAVE_IMAGE = 'SAVE_IMAGE';

const initialState = {
	token: '',
	id: '',
	userName: '',
	email: '',
	userFollowers: [],
	userFollowing: [],
	users: [],
	tweets: [],
	profileImage: '',
};

export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOAD_USER_INFO:
			return { ...state, userName: action.payload.data.userName, email: action.payload.data.email };
		case GET_ALL_USERS:
			let u = action.payload.data.users.filter((x) => x.id !== sessionStorage.getItem('_id'));
			return { ...state, users: u };
		case SET_USER_FOLLOWERS:
			return { ...state, userFollowers: action.payload.data.followers };
		case SET_USER_FOLLOWING:
			return { ...state, userFollowing: action.payload.data.followings };
		case CLEAR_USER:
			return { ...initialState };
		case GET_TWEET:
			action.payload.tweets.sort((a, b) => (a.postDate < b.postDate ? 1 : -1));
			return { ...state, tweets: action.payload.tweets };
		case SAVE_IMAGE:
			return { ...state, profileImage: action.payload };
		default:
			return state;
	}
};

export const getUserInfo = (id = sessionStorage.getItem('_id')) => (dispatch) => {
	getUser(id).then((res) => {
		if (res.data.success) {
			dispatch({ type: LOAD_USER_INFO, payload: res.data });

			getFollowers().then((res) => {
				if (res.data.success) {
					dispatch({ type: SET_USER_FOLLOWERS, payload: res.data });
				}
			});

			getFollowing().then((res) => {
				if (res.data.success) {
					dispatch({ type: SET_USER_FOLLOWING, payload: res.data });
				}
			});
		}
	});
};

export const getUsers = () => (dispatch) => {
	getAllUsers().then((res) => {
		if (res.data.success) {
			dispatch({ type: GET_ALL_USERS, payload: res.data });
		}
	});
};

export const followUser = (userId, userName) => (dispatch) => {
	follow(userId, userName).then((res) => {
		if (res.data.success) {
			getFollowing().then((res) => {
				if (res.data.success) {
					dispatch({ type: SET_USER_FOLLOWING, payload: res.data });
				}
			});
		}
	});
};

export const clearUser = () => (dispatch) => {
	dispatch({ type: CLEAR_USER });
};

export const sendTweet = (tweetText) => (dispatch) => {
	tweet(tweetText).then((res) => {
		if (res.data.success) {
			getTweets().then((res) => {
				if (res.data.success) {
					dispatch({ type: GET_TWEET, payload: res.data.data });
				}
			});
		}
	});
};

export const getUserTweets = () => (dispatch) => {
	getTweets().then((res) => {
		if (res.data.success) {
			dispatch({ type: GET_TWEET, payload: res.data.data });
		}
	});
};

export const saveImage = (file) => (dispatch) => {
	imageSave(file).then((res) => {
		console.log(file);
		if (res.data.success) {
			dispatch({ type: SAVE_IMAGE, payload: res.data.data.url });
		}
	});
};
