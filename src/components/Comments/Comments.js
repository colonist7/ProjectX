import React from "react";
import { connect } from "react-redux";
import CommentsShell from "./Comments.shell";
import { postComment } from "../../redux/reducers/Comments/CommentsReducer";

const Comments = (props) => {
  const { tweetId, sendComment } = props;
  return <CommentsShell tweetId={tweetId} sendComment={sendComment} />;
};

// const mapStateToProps = (state) => {
//   let {} = state.commentsReducer;

//   return {};
// };

const mapDispatchToProps = (dispatch) => {
  return {
    sendComment: (id, text) => {
      dispatch(postComment(id, text));
    },
  };
};

export default connect(undefined, mapDispatchToProps)(Comments);
