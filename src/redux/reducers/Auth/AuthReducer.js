import { auth as authApi } from "../../../api/auth.api";
// import Store from "../../store";

export const CHECK_CREDENTIALS = "CHECK_CREDENTIALS";
export const SET_AUTHENTICATED = "SET_AUTHENTHICATED";
const SET_USER = "SET_USER";
const SET_USER_SUCCESS = "SET_USER_SUCCESS";
const SET_USER_ERROR = "SET_USER_ERROR";

const initialState = {
  setUserLoading: false,
  setUserError: false,
  userName: "",
  password: "",
  isAuthenticated: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, setUserLoading: true, setUserError: false };
    case SET_USER_SUCCESS:
      return { ...state, setUserError: false, setUserLoading: false, isAuthenticated: action.payload.data.success };
    case SET_USER_ERROR:
      return { ...state, setUserLoading: false, setUserError: true };
    default:
      return state;
  }
};

export const auth = (userName, password) => (dispatch) => {
  dispatch({ type: SET_USER });
  authApi(userName, password).then(
    (res) => {
      if (res.data.success) {
        dispatch({ type: SET_USER_SUCCESS, payload: res });
        sessionStorage.setItem("_token", res.data.data.accessToken);
        sessionStorage.setItem("_id", res.data.data.id);
        window.location.pathname = "/user";
        //change redirect
      } else {
        dispatch({ type: SET_USER_ERROR });
      }
    },
    () => {
      dispatch({ type: SET_USER_ERROR });
    }
  );
};
