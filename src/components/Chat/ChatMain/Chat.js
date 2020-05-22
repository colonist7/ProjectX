import React from "react";
import ChatShell from "./Chat.shell";
import { connect } from "react-redux";

const Chat = (props) => {
  const {} = props;

  return <ChatShell />;
};

const mapStateToProps = (state) => {
  let {} = state.userReducer;

  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
