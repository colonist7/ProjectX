import { SUBMIT_REGISTRATION, REGISTER_HANDLE_CHANGE } from "./RegisterReducer";

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
    type: REGISTER_HANDLE_CHANGE,
    property: property,
    value: value,
  };
};
