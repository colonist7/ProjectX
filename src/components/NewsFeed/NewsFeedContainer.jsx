import React, { Component } from "react";
import WritePost from "./WritePost";
import Posts from "./Posts";
import { connect } from "react-redux";
import { createPost, getPosts } from "../../redux/reducers/NewsFeed/newsfeed.reducer";

class NewsFeedContainer extends Component {
  state = {};
  componentDidMount = () => {
    this.props.getPosts();
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
