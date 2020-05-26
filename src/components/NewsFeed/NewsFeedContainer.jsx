import React, { Component } from "react";
import WritePost from "./WritePost";
import Posts from "./Posts";
import { connect } from "react-redux";
import { createPost, getPosts } from "../../redux/reducers/NewsFeed/newsfeed.reducer";
import * as signalR from "@microsoft/signalr";

const connection = new signalR.HubConnectionBuilder()
  .withUrl("http://localhost:8080/tweetHub", { accessTokenFactory: () => sessionStorage.getItem("_token") })
  .configureLogging(signalR.LogLevel.Information)
  .build();

async function socketStart() {
  try {
    await connection.start();
    console.log("connected");
  } catch (err) {
    console.log(err);
    setTimeout(() => socketStart(), 5000);
  }
}

connection.on("newTweet", (data) => {
  getPosts();
});

class NewsFeedContainer extends Component {
  state = {};
  componentDidMount = () => {
    this.props.getPosts();
    socketStart();
  };
  render() {
    let { createPost, createPostLoading, createPostError, posts, postsLoading, postsError } = this.props;
    return (
      <>
        <WritePost createPost={createPost} createPostLoading={createPostLoading} createPostError={createPostError} />
        <Posts posts={posts} postsLoading={postsLoading} postsError={postsError} />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  let { createPostLoading, createPostError, posts, postsLoading, postsError } = state.newsfeedReducer;
  return { createPostLoading, createPostError, posts, postsLoading, postsError };
};

let mapDispatchToProps = (dispatch) => {
  return {
    createPost: (post) => {
      dispatch(createPost(post));
    },
    getPosts: () => {
      dispatch(getPosts());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeedContainer);
