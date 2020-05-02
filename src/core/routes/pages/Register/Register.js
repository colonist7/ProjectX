import React from 'react';
import { connect } from 'react-redux';
import RegisterShell from './Register.shell';
import {handleChange, submitRegistration} from '../../../redux/reducers/Register/RegisterActions';
 
const Register = (props) => {
    const {userName, userPassword, userMail, confirmPassword, handleChange, submitRegistration} = props;

    return <RegisterShell userName={userName} 
                          userPassword={userPassword} 
                          userMail={userMail} 
                          confirmPassword={confirmPassword} 
                          handleChange={handleChange} 
                          submitRegistration={submitRegistration}/>
}

const mapStateToProps = (state) => {
    let {userName, userPassword, userMail, confirmPassword} = state.registerReducer;

    return {userName, userPassword, userMail, confirmPassword};
}

const mapDispatchToProps = (dispatch) => {
    return {
        submitRegistration: (userName, userMail, userPassword, confirmPassword) => {dispatch(submitRegistration(userName, userMail, userPassword, confirmPassword))},
        handleChange: (property, value) => {dispatch(handleChange(property, value))}
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
