import React from "react";
import UserShell from "./User.shell";
import { connect } from "react-redux";
import { getUserInfo, getAllFollowers, getFollowingUsers } from "../../../redux/reducers/User/UserReducer";

const User = (props) => {
  const { id, userName, email, getUser } = props;

  return <UserShell userName={userName} email={email} id={id} getUser={getUser} />;
};

const mapStateToProps = (state) => {
  let { id, userName, email } = state.userReducer;

  return { id, userName, email };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: (id) => {
      dispatch(getUserInfo(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
