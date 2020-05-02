import ModelFactory from '../../../http/resources';

export const SUBMIT_REGISTRATION = "SUBMIT_REGISTRATION";
export const HANDLE_CHANGE = "HANDLE_CHANGE";

const initialState = {
    userName: "",
    userPassword: "",
    confirmPassword:"",
    userMail: ""
}

function submitRegistration (userName, userMail, userPassword, confirmPassword) {
    ModelFactory().Auth().register(userName, userMail, userPassword, confirmPassword);
} 

export const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUBMIT_REGISTRATION:
            submitRegistration(action.userName, action.userMail, action.userPassword, action.confirmPassword);
            return state;
        case HANDLE_CHANGE:
            switch(action.property) {
                case "userName":
                    return Object.assign({}, state, {
                        userName: action.value
                    });
                case "userPassword":
                    return Object.assign({}, state, {
                        userPassword: action.value
                    });
                case "confirmPassword":
                    return Object.assign({}, state, {
                        confirmPassword: action.value
                    });
                case "userMail":
                    return Object.assign({}, state, {
                        userMail: action.value
                    });
                default:
                    return Object.assign({},state, state);
            };
        default:
          return state
    }
};
