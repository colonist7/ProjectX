import React from "react";
import PeopleShell from "./People.shell";
import { connect } from "react-redux";
import { getUsers, getAllFollowers, getFollowingUsers, followUser } from "../../../redux/reducers/User/UserReducer";

const PeopleYouMayKnow = (props) => {
  const { users, getAllUsers, follow } = props;

  return <PeopleShell users={users} getAllUsers={getAllUsers} follow={follow} />;
};

const mapStateToProps = (state) => {
  let { users } = state.userReducer;

  return { users };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllUsers: () => {
      dispatch(getUsers());
    },
    getFollowers: () => {
      dispatch(getAllFollowers());
    },
    getFollowing: () => {
      dispatch(getFollowingUsers());
    },
    follow: (userId, userName) => {
      dispatch(followUser(userId, userName));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PeopleYouMayKnow);