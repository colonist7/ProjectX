import { getUser } from "../../../api/user.api";

const LOAD_USER_INFO = "LOAD_USER_INFO";

const initialState = {
  token: localStorage.getItem("_token"),
  id: localStorage.getItem("_id"),
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USER_INFO:
      return { ...state, userName: action.payload.data.userName, email: action.payload.data.email };
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
