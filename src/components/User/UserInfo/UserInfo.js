import React, { useEffect } from "react";
import UserInfoShell from "./UserInfo.shell";
import { connect } from "react-redux";

const UserInfo = (props) => {
  const { userName, email } = props;

  return <UserInfoShell userName={userName} email={email} />;
};

const mapStateToProps = (state) => {
  let { userName, email } = state.userReducer;

  return { userName, email };
};

// const mapDispatchToProps = (dispatch) => {
//   return {};
// };

export default connect(mapStateToProps)(UserInfo);
