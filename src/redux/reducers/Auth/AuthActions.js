import { SET_AUTHENTICATED, CHECK_CREDENTIALS, AUTH_HANDLE_CHANGE } from "./AuthReducer";

export const checkCredentials = (userName, userPassword) => {
  return {
    type: CHECK_CREDENTIALS,
    userName: userName,
    userPassword: userPassword,
  };
};

export const setAuthenticated = () => {
  return {
    type: SET_AUTHENTICATED,
  };
};

export const handleChange = (property, value) => {
  return {
    type: AUTH_HANDLE_CHANGE,
    property: property,
    value: value,
  };
};
