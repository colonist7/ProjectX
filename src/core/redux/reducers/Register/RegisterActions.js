import { SUBMIT_REGISTRATION, HANDLE_CHANGE, CHECK_PASSWORD } from "./RegisterReducer";

export const submitRegistration = (userName, userMail, userPassword, confirmPassword) => {
  return {
    type: SUBMIT_REGISTRATION,
    userName,
    userPassword,
    userMail,
    confirmPassword,
  };
};

export const handleChange = (property, value) => {
  return {
    type: HANDLE_CHANGE,
    property: property,
    value: value,
  };
};
