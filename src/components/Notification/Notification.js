import React from "react";
import { connect } from "react-redux";
import NotificationShell from "./Notification.shell";

const Notification = (props) => {
  const {} = props;
  return <NotificationShell />;
};

const mapStateToProps = (state) => {
  let {} = state.NotificationReducer;

  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
