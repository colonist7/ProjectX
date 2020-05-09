import { register as regApi } from "../../../api/auth.api";

const REGISTER_USER = "REGISTER_USER";
const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
const REGISTER_USER_ERROR = "REGISTER_USER_ERROR";

const initialState = {
  setRegisterError: false,
  setRegisterLoading: false,
  arePasswordsEqual: false,
};

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
    case REGISTER_USER:
      return { ...state, setRegisterError: false, setRegisterLoading: true };
    case REGISTER_USER_ERROR:
      return { ...state, setRegisterError: true, setRegisterLoading: false };
    case REGISTER_USER_SUCCESS:
      return { ...state, setRegisterError: false, setRegisterLoading: false };
    default:
      return state;
  }
};

export const register = (userName, userMail, userPassword, confirmPassword) => (dispatch) => {
  if (
    validation({
      userName: userName,
      userMail: userMail,
      arePasswordsEqual: userPassword === confirmPassword,
    })
  ) {
    dispatch({ type: REGISTER_USER });

    regApi(userName, userMail, userPassword, confirmPassword).then(
      (res) => {
        if (res.data.success) {
          dispatch({ type: REGISTER_USER_SUCCESS, payload: res });
        } else {
          dispatch({ type: REGISTER_USER_ERROR });
        }
      },
      () => {
        dispatch({ type: REGISTER_USER_ERROR });
      }
    );
  } else {
    alert("data isn;t valid");
  }
};
