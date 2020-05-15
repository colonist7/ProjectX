import React from "react";
import UserShell from "./User.shell";
import { connect } from "react-redux";
import { getUserInfo, clearUser } from "../../../redux/reducers/User/UserReducer";
import { logout } from "../../../redux/reducers/Auth/AuthReducer";

const User = (props) => {
  const { id, userName, email, getUser, isAuthenticated, logOut } = props;

  return (
    <UserShell
      userName={userName}
      email={email}
      id={id}
      getUser={getUser}
      isAuthenticated={isAuthenticated}
      logOut={logOut}
    />
  );
};

const mapStateToProps = (state) => {
  let { userName, email } = state.userReducer;
  let { isAuthenticated } = state.authReducer;

  return { userName, email, isAuthenticated };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: () => {
      dispatch(getUserInfo());
    },
    logOut: () => {
      dispatch(logout());
      dispatch(clearUser());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
