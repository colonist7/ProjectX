import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

class PublicRoute extends Component {
  state = {};
  render() {
    let { component: Component, restricted, isAuth, ...rest } = this.props;
    return (
      <Route {...rest} render={(props) => (isAuth && restricted ? <Redirect to="/" /> : <Component {...props} />)} />
    );
  }
}

let mapStateToProps = (state) => {
  let isAuth = state.authReducer.isAuthenticated;
  return { isAuth };
};

export default connect(mapStateToProps, null)(PublicRoute);
