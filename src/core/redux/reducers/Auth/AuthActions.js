import { SET_AUTHENTICATED, CHECK_CREDENTIALS, HANDLE_CHANGE} from './AuthReducer';

export const checkCredentials = (userName, userPassword) => {
    return {
        type: CHECK_CREDENTIALS,
        userName: userName,
        userPassword: userPassword
    }
}

export const setAuthenticated = () => {
    return {
        type: SET_AUTHENTICATED,
    }
}

export const handleChange = (property, value) => {
    return {
        type: HANDLE_CHANGE,
        property: property,
        value: value,
    }
}