import React from "react";
import { connect } from "react-redux";
import CommentsShell from "./Comments.shell";
import { postComment, getComments as reducerGetComments } from "../../redux/reducers/Comments/CommentsReducer";

const Comments = (props) => {
  const { tweetId, sendComment, getComments, comments } = props;
  return <CommentsShell comments={comments} tweetId={tweetId} sendComment={sendComment} getComments={getComments} />;
};

const mapStateToProps = (state) => {
  let { comments } = state.commentsReducer;

  return { comments };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendComment: (id, text) => {
      dispatch(postComment(id, text));
    },
    getComments: (tweetId) => {
      dispatch(reducerGetComments(tweetId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
