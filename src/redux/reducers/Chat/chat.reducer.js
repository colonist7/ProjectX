import { getMessages as messages } from "../../../api/chat.api";

export const CHAT_IS_LOADING = "CHAT_IS_LOADING";
export const CHAT_LOAD_ERROR = "CHAT_LOAD_ERROR";
export const CHAT_LOAD_SUCCESS = "CHAT_LOAD_SUCCESS";

export const initialState = {
  messages: [],
  userId: "",
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
