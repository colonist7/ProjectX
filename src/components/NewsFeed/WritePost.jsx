import React, { Component } from "react";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Spinner, Container } from "react-bootstrap";

class WritePost extends Component {
  state = { post: "" };
  changePostValue = (e) => {
    this.setState({ post: e.target.value });
  };
  createPost = () => {
    this.props.createPost(this.state.post);
    this.setState({ post: "" });
  };
  render() {
    let { createPostLoading, createPostError } = this.props;

    return (
      <Container>
        <div style={{ display: "flex" }}>
          <TextField
            value={this.state.post}
            onChange={this.changePostValue}
            name="post"
            style={{ width: "100%" }}
            id="outlined-basic"
            label="Write your post here"
            variant="outlined"
          />
          {!createPostLoading ? (
            <Button disabled={!this.state.post.length} onClick={this.createPost} type="submit">
              Send
            </Button>
          ) : (
            <Spinner animation="border" role="status">
              <span className="sr-only"></span>
            </Spinner>
          )}
          {createPostError && <div>some error occured,please try again later</div>}
        </div>
      </Container>
    );
  }
}

export default WritePost;
