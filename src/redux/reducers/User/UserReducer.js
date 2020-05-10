import { getUser, getAllUsers } from "../../../api/user.api";
import { follow, getFollowing, getFollowers } from "../../../api/follow.api";

const LOAD_USER_INFO = "LOAD_USER_INFO";
const GET_ALL_USERS = "GET_ALL_USERS";
const SET_USER_FOLLOWERS = "USER_FOLLOWERS";
const SET_USER_FOLLOWING = "USER_FOLLOWING";

const initialState = {
  token: sessionStorage.getItem("_token"),
  id: sessionStorage.getItem("_id"),
  userName: "",
  email: "",
  userFollowers: [],
  userFollowing: [],
  users: [],
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
    default:
      return state;
  }
};

export const getUserInfo = (id) => (dispatch) => {
  getUser(id).then((res) => {
    if (res.data.success) {
      dispatch({ type: LOAD_USER_INFO, payload: res.data });
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
      getFollowers().then((res) => {
        if (res.data.success) {
          dispatch({ type: SET_USER_FOLLOWERS, payload: res.data });
        }
      });
    }
  });
};

export const getAllFollowers = () => (dispatch) => {
  getFollowers().then((res) => {
    if (res.data.success) {
      dispatch({ type: SET_USER_FOLLOWERS, payload: res.data });
    }
  });
};

export const getFollowingUsers = () => (dispatch) => {
  getFollowing().then((res) => {
    if (res.data.success) {
      dispatch({ type: SET_USER_FOLLOWING, payload: res.data });
    }
  });
};
