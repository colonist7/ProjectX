import React from "react";
import FollowersShell from "./Followers.shell";
import { connect } from "react-redux";
import { followUser } from "../../../redux/reducers/User/UserReducer";

const Followers = (props) => {
  const { userFollowers, follow } = props;

  return <FollowersShell followers={userFollowers} follow={follow} />;
};

const mapStateToProps = (state) => {
  let { userFollowers } = state.userReducer;

  return { userFollowers };
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId, userName) => {
      dispatch(followUser(userId, userName));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Followers);
