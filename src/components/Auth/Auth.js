import React from "react";
import { connect } from "react-redux";
import AuthShell from "./Auth.shell";
import { auth } from "../../redux/reducers/Auth/AuthReducer";

const Auth = (props) => {
  const { authUser, isAuthenticated } = props;
  return <AuthShell authUser={authUser} isAuthenticated={isAuthenticated} />;
};

const mapDispatchToProps = (dispatch) => {
  return {
    authUser: (userName, userPassword) => {
      dispatch(auth(userName, userPassword));
    },
  };
};

const mapStateToProps = (state) => {
  const { isAuthenticated } = state.authReducer;

  return { isAuthenticated };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
