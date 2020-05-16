import { auth as authApi } from "../../../api/auth.api";

export const CHECK_CREDENTIALS = "CHECK_CREDENTIALS";
export const SET_AUTHENTICATED = "SET_AUTHENTHICATED";
const SET_USER = "SET_USER";
const SET_USER_SUCCESS = "SET_USER_SUCCESS";
const SET_USER_ERROR = "SET_USER_ERROR";
const LOGOUT = "LOGOUT";

const initialState = {
  setUserLoading: false,
  setUserError: false,
  userName: "",
  password: "",
  isAuthenticated: sessionStorage.getItem("isAuthenticated") ? sessionStorage.getItem("isAuthenticated") : false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, setUserLoading: true, setUserError: false };
    case SET_USER_SUCCESS:
      return { ...state, setUserError: false, setUserLoading: false, isAuthenticated: action.payload.data.success };
    case SET_USER_ERROR:
      return { ...state, setUserLoading: false, setUserError: true };
    case LOGOUT:
      return { ...initialState, isAuthenticated: false };
    default:
      return state;
  }
};

export const auth = (userName, password) => (dispatch) => {
  dispatch({ type: SET_USER });
  authApi(userName, password).then(
    (res) => {
      if (res.data.success) {
        sessionStorage.setItem("_token", res.data.data.accessToken);
        sessionStorage.setItem("_id", res.data.data.id);
        sessionStorage.setItem("isAuthenticated", true);
        dispatch({ type: SET_USER_SUCCESS, payload: res });
      } else {
        dispatch({ type: SET_USER_ERROR });
      }
    },
    () => {
      dispatch({ type: SET_USER_ERROR });
    }
  );
};

export const logout = () => (dispatch) => {
  sessionStorage.removeItem("_token");
  sessionStorage.removeItem("_id");
  sessionStorage.removeItem("isAuthenticated");
  dispatch({ type: LOGOUT });
};
