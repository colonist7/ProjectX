import React from "react";
import ChatListShell from "./ChatList.shell";
import { connect } from "react-redux";

const ChatList = (props) => {
  const {} = props;

  return <ChatListShell />;
};

const mapStateToProps = (state) => {
  let {} = state.userReducer;

  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);
