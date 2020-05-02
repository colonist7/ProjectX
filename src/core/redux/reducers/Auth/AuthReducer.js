import ModelFactory from '../../../http/resources';

export const CHECK_CREDENTIALS = "CHECK_CREDENTIALS";
export const SET_AUTHENTICATED = "SET_AUTHENTHICATED"; 
export const HANDLE_CHANGE = "HANDLE_CHANGE";

const initialState = {
    userName: "",
    userPassword: "",
    isAuthenticated: false,
}

const checkCredentials = (username, password) => {
    ModelFactory().Auth().login(username, password).then((res) => {
        console.log(res);
    })
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHECK_CREDENTIALS:
            checkCredentials(action.userName, action.userPassword);
            return state;
        case SET_AUTHENTICATED:
            return Object.assign({}, state, {
                isAuthenticated: state.isAuthenticated
            });
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
                default:
                    return Object.assign({},state, state);
            };
        default:
          return state
    }
};
