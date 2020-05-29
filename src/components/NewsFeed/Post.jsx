import React, { Component } from "react";
import { CommentBar } from "./NewsFeed.style";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import moment from "moment";
import { Button } from "react-bootstrap";
class Post extends Component {
  state = {
    showCommentInput: false,
    comment: "",
  };
  componentDidMount = () => {
    this.props.getPostComments(this.props.id);
  };
  toggleShowCommentInput = () => {
    this.setState({ showCommentInput: !this.state.showCommentInput });
  };
  onCommentChange = (e) => {
    this.setState({ comment: e.target.value });
  };
  render() {
    let { id, userName, date, text, createPostComment, comments } = this.props;
    return (
      <CommentBar>
        <h6 className="title">
          {userName} <span>{moment.unix(date).startOf().fromNow()}</span>
        </h6>
        <div className="comment">
          <h3>{text}</h3>
        </div>
        {comments &&
          comments.map((comment) => (
            <div key={comment.id}>
              <div>{comment.userName}</div>
              <div className="row">
                <div className="col">{comment.text}</div>
                <div className="col">{moment.unix(comment.postDate).startOf().fromNow()}</div>
              </div>
            </div>
          ))}

        <ButtonGroup className="mb-3 mt-3" variant="text" color="primary" aria-label="text primary button group">
          <Button className="mr-2" variant="primary">
            Like
          </Button>
          <Button variant="info" onClick={this.toggleShowCommentInput}>
            Comment
          </Button>
        </ButtonGroup>
        {this.state.showCommentInput && (
          <div class="row">
            <div class="col">
              <input
                value={this.state.comment}
                onChange={this.onCommentChange}
                type="text"
                class="form-control"
                placeholder="Comment"
              />
            </div>
            <div class="col">
              <Button
                disabled={!this.state.comment.length}
                onClick={() => createPostComment(id, this.state.comment)}
                variant="success"
              >
                Post
              </Button>
            </div>
          </div>
        )}
      </CommentBar>
    );
  }
}

export default Post;
