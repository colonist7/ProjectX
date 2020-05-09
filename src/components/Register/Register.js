import React from "react";
import { connect } from "react-redux";
import RegisterShell from "./Register.shell";
import { register } from "../../redux/reducers/Register/RegisterReducer";

const Register = (props) => {
  const { reg, setRegisterError, setRegisterLoading } = props;
  return <RegisterShell register={reg} setRegisterError={setRegisterError} setRegisterLoading={setRegisterLoading} />;
};

const mapStateToProps = (state) => {
  let { setRegisterLoading, setRegisterError } = state.registerReducer;

  return { setRegisterLoading, setRegisterError };
};

const mapDispatchToProps = (dispatch) => {
  return {
    reg: (userName, userMail, userPassword, confirmPassword) => {
      dispatch(register(userName, userMail, userPassword, confirmPassword));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
