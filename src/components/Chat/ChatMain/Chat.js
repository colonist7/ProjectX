import React from "react";
import ChatShell from "./Chat.shell";
import { connect } from "react-redux";

const Chat = (props) => {
  return <ChatShell />;
};

export default connect(null, null)(Chat);
