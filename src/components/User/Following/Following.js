import React from "react";
import FollowingShell from "./Following.shell";
import { connect } from "react-redux";
import { followUser } from "../../../redux/reducers/User/UserReducer";

const Following = (props) => {
  const { userFollowing, follow } = props;

  return <FollowingShell userFollowing={userFollowing} follow={follow} />;
};

const mapStateToProps = (state) => {
  let { userFollowing } = state.userReducer;

  return { userFollowing };
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId, userName) => {
      dispatch(followUser(userId, userName));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Following);
