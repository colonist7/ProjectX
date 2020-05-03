import React, { useState } from "react";
import { connect } from "react-redux";
import RegisterShell from "./Register.shell";
import { handleChange, submitRegistration } from "../../redux/reducers/Register/RegisterActions";

const Register = (props) => {
  const {
    userName,
    userPassword,
    userMail,
    confirmPassword,
    handleChange,
    submitRegistration,
    arePasswordsEqual,
  } = props;

  return (
    <RegisterShell
      userName={userName}
      userPassword={userPassword}
      userMail={userMail}
      confirmPassword={confirmPassword}
      handleChange={handleChange}
      submitRegistration={submitRegistration}
      arePasswordsEqual={arePasswordsEqual}
    />
  );
};

const mapStateToProps = (state) => {
  let { userName, userPassword, userMail, confirmPassword, arePasswordsEqual } = state.registerReducer;

  return { userName, userPassword, userMail, confirmPassword, arePasswordsEqual };
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitRegistration: (userName, userMail, userPassword, confirmPassword) => {
      dispatch(submitRegistration(userName, userMail, userPassword, confirmPassword));
    },
    handleChange: (property, value) => {
      dispatch(handleChange(property, value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
