import { auth as authApi } from "../../../api/auth.api";
import { setAuthenticated } from "./AuthActions";
// import Store from "../../store";

export const CHECK_CREDENTIALS = "CHECK_CREDENTIALS";
export const SET_AUTHENTICATED = "SET_AUTHENTHICATED";
export const AUTH_HANDLE_CHANGE = "AUTH_HANDLE_CHANGE";
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

// const checkCredentials = (username, password) => {
//   auth(username, password).then((res) => {
//     if (res.statusText === "OK" && res.data.success) {
//       alert("good");
//       Store.dispatch(setAuthenticated());
//       window.location.pathname = "/user";
//     }
//     console.log(res);
//   });
// };

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    // case CHECK_CREDENTIALS:
    //   checkCredentials(action.userName, action.userPassword);
    //   return state;
    // case SET_AUTHENTICATED:
    //   return Object.assign({}, state, {
    //     isAuthenticated: true,
    //   });
    // case AUTH_HANDLE_CHANGE:
    //   switch (action.property) {
    //     case "userName":
    //       return Object.assign({}, state, {
    //         userName: action.value,
    //       });
    //     case "userPassword":
    //       return Object.assign({}, state, {
    //         userPassword: action.value,
    //       });
    //     default:
    //       return Object.assign({}, state, state);
    //   }
    case SET_USER:
      return { ...state, setUserLoading: true, setUserError: false };
    case SET_USER_SUCCESS:
      return { ...state, setUserError: false, setUserLoading: false };
    case SET_USER_ERROR:
      return { ...state, setUserLoading: false, setUserError: false };
    default:
      return state;
  }
};

export const auth = (userName, password) => (dispatch) => {
  dispatch({ type: SET_USER });
  authApi(userName, password).then(
    (res) => {
      dispatch({ type: SET_USER_SUCCESS, payload: res });
    },
    () => {
      dispatch({ type: SET_USER_ERROR });
    }
  );
};
