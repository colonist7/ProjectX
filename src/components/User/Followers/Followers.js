import React from "react";
import FollowersShell from "./Followers.shell";
import { connect } from "react-redux";
import { getAllFollowers, followUser } from "../../../redux/reducers/User/UserReducer";

const Followers = (props) => {
  const { userFollowers, follow, getFollowers } = props;

  return <FollowersShell followers={userFollowers} follow={follow} getFollowers={getFollowers} />;
};

const mapStateToProps = (state) => {
  let { userFollowers } = state.userReducer;

  return { userFollowers };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getFollowers: () => {
      dispatch(getAllFollowers());
    },
    follow: (userId, userName) => {
      dispatch(followUser(userId, userName));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Followers);
