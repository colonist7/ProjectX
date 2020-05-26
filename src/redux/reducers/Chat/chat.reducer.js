import { getMessages as messages } from "../../../api/chat.api";

const CHAT_IS_LOADING = "CHAT_IS_LOADING";
const CHAT_LOAD_ERROR = "CHAT_LOAD_ERROR";
const CHAT_LOAD_SUCCESS = "CHAT_LOAD_SUCCESS";
const SET_USER_INFO = "SET_USER_INFO";

export const initialState = {
  messages: [],
  userInfo: {},
  setChatError: false,
  setChatLoading: false,
};

export const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHAT_IS_LOADING:
      return { ...state, setChatError: false, setChatLoading: true };
    case CHAT_LOAD_ERROR:
      return { ...state, setChatError: true, setChatLoading: false };
    case CHAT_LOAD_SUCCESS:
      return { ...state, setChatError: false, setChatLoading: false, messages: action.payload };
    case SET_USER_INFO:
      return { ...state, userInfo: action.payload };
    default:
      return state;
  }
};

export const getMessages = (fromUser, toUser) => (dispatch) => {
  dispatch({ type: CHAT_IS_LOADING });
  messages(fromUser, toUser).then(
    (res) => {
      if (res.data.success) {
        dispatch({ type: CHAT_LOAD_SUCCESS, payload: res.data.messages });
      } else {
        dispatch({ type: CHAT_LOAD_ERROR });
      }
    },
    (res) => {
      dispatch({ type: CHAT_LOAD_ERROR });
    }
  );
};

export const setUserInfo = (info) => (dispatch) => {
  dispatch({ type: SET_USER_INFO, payload: info });
};
