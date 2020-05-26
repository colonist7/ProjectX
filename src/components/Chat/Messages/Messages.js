import React from "react";
import MessagesShell from "./Messages.shell";
import { connect } from "react-redux";
import { getMessages as messages } from "../../../redux/reducers/Chat/chat.reducer";

const Messages = (props) => {
  const { messages, getMessages, userInfo } = props;
  const id = sessionStorage.getItem("_id");

  return <MessagesShell messages={messages} getMessages={getMessages} userInfo={userInfo} currentUser={id} />;
};

const mapStateToProps = (state) => {
  let { messages, userInfo } = state.chatReducer;

  return { messages, userInfo };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMessages: (from, to) => {
      dispatch(messages(from, to));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
