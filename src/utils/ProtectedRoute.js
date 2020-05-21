import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

class PrivateRoute extends Component {
  render() {
    let { component: Component, isAuth, ...rest } = this.props;
    return <Route {...rest} render={(props) => (isAuth ? <Component {...props} /> : <Redirect to="/login" />)} />;
  }
}

let mapStateToProps = (state) => {
  let isAuth = state.authReducer.isAuthenticated;
  return { isAuth };
};

export default connect(mapStateToProps, null)(PrivateRoute);
