import ModelFactory from "../../../http/resources";

export const SUBMIT_REGISTRATION = "SUBMIT_REGISTRATION";
export const HANDLE_CHANGE = "HANDLE_CHANGE";

const initialState = {
  userName: "",
  userPassword: "",
  confirmPassword: "",
  userMail: "",
  arePasswordsEqual: false,
};

function submitRegistration(userName, userMail, userPassword, confirmPassword) {
  ModelFactory().Auth().register(userName, userMail, userPassword, confirmPassword);
}

function checkPassword(password, confirmPassword) {
  return password === confirmPassword;
}

export const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_REGISTRATION:
      if (state.arePasswordsEqual) {
        submitRegistration(action.userName, action.userMail, action.userPassword, action.confirmPassword);
      } else {
        alert("not valid data");
      }
      return state;
    case HANDLE_CHANGE:
      switch (action.property) {
        case "userName":
          return Object.assign({}, state, {
            userName: action.value,
          });
        case "userPassword":
          return Object.assign({}, state, {
            userPassword: action.value,
            arePasswordsEqual: checkPassword(action.value, state.confirmPassword),
          });
        case "confirmPassword":
          return Object.assign({}, state, {
            confirmPassword: action.value,
            arePasswordsEqual: checkPassword(state.userPassword, action.value),
          });
        case "userMail":
          return Object.assign({}, state, {
            userMail: action.value,
          });
        default:
          return Object.assign({}, state, state);
      }
    default:
      return state;
  }
};
