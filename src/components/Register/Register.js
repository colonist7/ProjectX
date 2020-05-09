import React from "react";
import { connect } from "react-redux";
import RegisterShell from "./Register.shell";
import { register, RegisterSetResetFalse } from "../../redux/reducers/Register/RegisterReducer";

const Register = (props) => {
  const { reg, setRegisterError, setRegisterLoading, resetForm, setResetFalse } = props;
  return (
    <RegisterShell
      resetForm={resetForm}
      register={reg}
      setRegisterError={setRegisterError}
      setRegisterLoading={setRegisterLoading}
      setResetFalse={setResetFalse}
    />
  );
};

const mapStateToProps = (state) => {
  let { setRegisterLoading, setRegisterError, resetForm } = state.registerReducer;

  return { setRegisterLoading, setRegisterError, resetForm };
};

const mapDispatchToProps = (dispatch) => {
  return {
    reg: (userName, userMail, userPassword, confirmPassword) => {
      dispatch(register(userName, userMail, userPassword, confirmPassword));
    },
    setResetFalse: () => dispatch(RegisterSetResetFalse()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
