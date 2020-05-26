import React from "react";
import ChatListShell from "./ChatList.shell";
import { connect } from "react-redux";
import { setUserInfo as setInfo } from "../../../redux/reducers/Chat/chat.reducer";
import { getUsers as users } from "../../../redux/reducers/User/UserReducer";

const ChatList = (props) => {
  const { users, setUserInfo, getUsers } = props;

  return <ChatListShell users={users} setUserInfo={setUserInfo} getUsers={getUsers} />;
};

const mapStateToProps = (state) => {
  let { users } = state.userReducer;

  return { users };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUserInfo: (user) => {
      dispatch(setInfo(user));
    },
    getUsers: () => {
      dispatch(users());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);
