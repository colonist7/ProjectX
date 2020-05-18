import React from "react";
import PostsShell from "./Posts.shell";
import { connect } from "react-redux";
import { sendTweet, getUserTweets } from "../../../redux/reducers/User/UserReducer";

const Posts = (props) => {
  const { tweets, userName, tweet, getTweets } = props;
  return <PostsShell userName={userName} tweets={tweets} tweet={tweet} getTweets={getTweets} />;
};

const mapStateToProps = (state) => {
  let { tweets, userName } = state.userReducer;
  return { tweets, userName };
};

const mapDispatchToProps = (dispatch) => {
  return {
    tweet: (tweetText) => {
      dispatch(sendTweet(tweetText));
    },
    getTweets: () => {
      dispatch(getUserTweets());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
