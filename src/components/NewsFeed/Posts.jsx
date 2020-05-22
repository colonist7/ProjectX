import React, { Component } from "react";
import { Container } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { CommentBar } from "./NewsFeed.style";
class Posts extends Component {
  state = {};

  render() {
    const { posts } = this.props;

    return (
      <Container>
        {posts &&
          posts.map((x, index) => {
            return (
              <CommentBar key={index}>
                <h6 className="title">
                  {x.userName} <span>{x.postDate}</span>
                </h6>
                <div className="comment">
                  <h3>{x.tweetText}</h3>
                </div>
                <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                  <Button>Like</Button>
                  <Button>Comment</Button>
                </ButtonGroup>
              </CommentBar>
            );
          })}
      </Container>
    );
  }
}

export default Posts;
