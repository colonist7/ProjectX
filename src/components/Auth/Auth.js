import React from "react";
import { connect } from "react-redux";
import AuthShell from "./Auth.shell";
import { auth } from "../../redux/reducers/Auth/AuthReducer";

const Auth = (props) => {
  const { authUser } = props;
  return <AuthShell authUser={authUser} />;
};

const mapDispatchToProps = (dispatch) => {
  return {
    authUser: (userName, userPassword) => {
      dispatch(auth(userName, userPassword));
    },
  };
};

export default connect(null, mapDispatchToProps)(Auth);
