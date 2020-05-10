import React from "react";
import FollowingShell from "./Following.shell";
import { connect } from "react-redux";
import { getFollowingUsers, followUser } from "../../../redux/reducers/User/UserReducer";

const Following = (props) => {
  const { userFollowing, getFollowing, follow } = props;

  return <FollowingShell userFollowing={userFollowing} getFollowing={getFollowing} follow={follow} />;
};

const mapStateToProps = (state) => {
  let { userFollowing } = state.userReducer;

  return { userFollowing };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getFollowing: () => {
      dispatch(getFollowingUsers());
    },
    follow: (userId, userName) => {
      dispatch(followUser(userId, userName));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Following);
