import React from "react";
import PeopleShell from "./People.shell";
import { connect } from "react-redux";
import { getUsers, followUser } from "../../../redux/reducers/User/UserReducer";

const PeopleYouMayKnow = (props) => {
  const { users, userFollowing, getAllUsers, follow, userName, email } = props;
  let u = [...users];

  for (let user of userFollowing) {
    try {
      u = u.filter((x) => x.userName !== user.userName && x.email !== user.email);
    } catch (e) {}
  }

  u = u.filter((x) => x.userName !== userName && x.email !== email);

  return <PeopleShell users={u} getAllUsers={getAllUsers} follow={follow} />;
};

const mapStateToProps = (state) => {
  let { users, userFollowing, userName, email } = state.userReducer;

  return { users, userFollowing, userName, email };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllUsers: () => {
      dispatch(getUsers());
    },
    follow: (userId, userName) => {
      dispatch(followUser(userId, userName));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PeopleYouMayKnow);
