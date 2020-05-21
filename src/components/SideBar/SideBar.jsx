import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class SideBar extends Component {
  state = {};
  render() {
    let { isAuth } = this.props;
    let links = [
      { label: "Home", path: "/", isVisible: true },
      { label: "NewsFeed", path: "/newsfeed", isVisible: isAuth },
      { label: "User", path: "/user", isVisible: isAuth },
      { label: "Login", path: "/login", isVisible: !isAuth },
    ];
    return (
      <nav>
        <ul>
          {links.map(
            (link) =>
              link.isVisible && (
                <li>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              )
          )}
        </ul>
      </nav>
    );
  }
}

let mapStateToProps = (state) => {
  return { isAuth: state.authReducer.isAuthenticated };
};

export default connect(mapStateToProps, null)(SideBar);
