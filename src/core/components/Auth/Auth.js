import React from "react";
import { connect } from "react-redux";
import AuthShell from "./Auth.shell";
import { checkCredentials, handleChange } from "../../redux/reducers/Auth/AuthActions";

const Auth = (props) => {
  const { checkCredentials, userName, userPassword, handleChange } = props;
  return (
    <AuthShell
      checkCredentials={checkCredentials}
      userName={userName}
      userPassword={userPassword}
      handleChange={handleChange}
    />
  );
};

const mapStateToProps = (state) => {
  let { userName, userPassword } = state.authReducer;
  return { userName, userPassword };
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkCredentials: (userName, userPassword) => {
      dispatch(checkCredentials(userName, userPassword));
    },
    handleChange: (property, value) => {
      dispatch(handleChange(property, value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
