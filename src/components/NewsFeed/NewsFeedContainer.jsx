import React, { Component } from "react";
import WritePost from "./WritePost";
import Posts from "./Posts";
import { connect } from "react-redux";

class NewsFeedContainer extends Component {
  state = {};
  render() {
    return (
      <>
        <WritePost />
        <Posts />
      </>
    );
  }
}

export default connect(null, null)(NewsFeedContainer);
