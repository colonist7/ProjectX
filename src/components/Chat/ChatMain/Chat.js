import React from "react";
import ChatShell from "./Chat.shell";
import { connect } from "react-redux";
import { getMessages as messages } from "../../../redux/reducers/Chat/chat.reducer";

const Chat = (props) => {
  const {} = props;

  return <ChatShell />;
};

const mapStateToProps = (state) => {
  let { messages } = state.userReducer;

  return { messages };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMessages: (from, to) => dispatch(messages(from, to)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
