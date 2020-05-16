import { getUser, getAllUsers } from "../../../api/user.api";
import { follow, getFollowing, getFollowers } from "../../../api/follow.api";
import { tweet } from "../../../api/tweets.api";

const LOAD_USER_INFO = "LOAD_USER_INFO";
const GET_ALL_USERS = "GET_ALL_USERS";
const SET_USER_FOLLOWERS = "USER_FOLLOWERS";
const SET_USER_FOLLOWING = "USER_FOLLOWING";
const CLEAR_USER = "CLEAR_USER";
const GET_TWEET = "GET_TWEET";

const initialState = {
  token: "",
  id: "",
  userName: "",
  email: "",
  userFollowers: [],
  userFollowing: [],
  users: [],
  tweets: [],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USER_INFO:
      return { ...state, userName: action.payload.data.userName, email: action.payload.data.email };
    case GET_ALL_USERS:
      return { ...state, users: action.payload.data.users };
    case SET_USER_FOLLOWERS:
      return { ...state, userFollowers: action.payload.data.followers };
    case SET_USER_FOLLOWING:
      return { ...state, userFollowing: action.payload.data.followings };
    case CLEAR_USER:
      return { ...initialState };
    case GET_TWEET:
      let tweets = [...state.tweets];
      tweets.push(action.payload);
      return { ...state, tweets: tweets };
    default:
      return state;
  }
};

export const getUserInfo = (id = sessionStorage.getItem("_id")) => (dispatch) => {
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
      dispatch({ type: GET_TWEET, payload: res.data.data });
    }
  });
};
