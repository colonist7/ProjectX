import React from "react";
import MessagesShell from "./Messages.shell";
import { connect } from "react-redux";

const Messages = (props) => {
  const {} = props;

  return <MessagesShell />;
};

const mapStateToProps = (state) => {
  let {} = state.userReducer;

  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
