import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { CommentBar } from "./newsFeed.style";
import { Spinner, Alert } from "react-bootstrap";
import moment from "moment";

class Posts extends Component {
  state = {};

  render() {
    let { posts, postsLoading, postsError } = this.props;
    if (postsLoading)
      return (
        <Spinner animation="border" role="status">
          <span className="sr-only"></span>
        </Spinner>
      );
    if (postsError) return <Alert variant="danger">some error occured</Alert>;
    return (
      <Container>
        {posts.map((post, index) => (
          <CommentBar key={index}>
            <h6 className="title">
              {post.userName} <span>{moment.unix(post.postDate).startOf().fromNow()}</span>
            </h6>
            <div className="comment">
              <h3>{post.tweetText}</h3>
            </div>
            <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
              <Button>Like</Button>
              <Button>Comment</Button>
            </ButtonGroup>
          </CommentBar>
        ))}
      </Container>
    );
  }
}

export default Posts;
