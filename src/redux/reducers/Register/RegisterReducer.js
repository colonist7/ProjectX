import ModelFactory from "../../../http/resources";

export const SUBMIT_REGISTRATION = "SUBMIT_REGISTRATION";
export const REGISTER_HANDLE_CHANGE = "REGISTER_HANDLE_CHANGE";

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

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validation(state) {
  let valid = true;

  if (state.userName.length === 0) {
    valid = false;
  }

  if (!validateEmail(state.userMail)) {
    valid = false;
  }

  if (!state.arePasswordsEqual) {
    valid = false;
  }

  return valid;
}

export const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_REGISTRATION:
      if (
        validation({
          userName: action.userName,
          userMail: action.userMail,
          arePasswordsEqual: state.arePasswordsEqual,
        })
      ) {
        submitRegistration(action.userName, action.userMail, action.userPassword, action.confirmPassword);
      } else {
        alert("not valid data");
      }
      return state;
    case REGISTER_HANDLE_CHANGE:
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
