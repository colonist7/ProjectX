import { auth } from "../../../api/auth.api";
import { setAuthenticated } from "./AuthActions";
import Store from "../../store";

export const CHECK_CREDENTIALS = "CHECK_CREDENTIALS";
export const SET_AUTHENTICATED = "SET_AUTHENTHICATED";
export const AUTH_HANDLE_CHANGE = "AUTH_HANDLE_CHANGE";

const initialState = {
  userName: "",
  userPassword: "",
  isAuthenticated: false,
};

const checkCredentials = (username, password) => {
  auth(username, password).then((res) => {
    if (res.statusText === "OK" && res.data.success) {
      alert("good");
      Store.dispatch(setAuthenticated());
      window.location.pathname = "/user";
    }
    console.log(res);
  });
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_CREDENTIALS:
      checkCredentials(action.userName, action.userPassword);
      return state;
    case SET_AUTHENTICATED:
      return Object.assign({}, state, {
        isAuthenticated: true,
      });
    case AUTH_HANDLE_CHANGE:
      switch (action.property) {
        case "userName":
          return Object.assign({}, state, {
            userName: action.value,
          });
        case "userPassword":
          return Object.assign({}, state, {
            userPassword: action.value,
          });
        default:
          return Object.assign({}, state, state);
      }
    default:
      return state;
  }
};
