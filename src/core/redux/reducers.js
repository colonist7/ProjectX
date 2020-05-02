import {testReducer} from './reducers/Test/TestReducer';
import {authReducer} from './reducers/Auth/AuthReducer';
import {registerReducer} from './reducers/Register/RegisterReducer';
import {combineReducers } from 'redux';


const reducer =  combineReducers({
    testReducer,
    authReducer,
    registerReducer
})                    

export default reducer;