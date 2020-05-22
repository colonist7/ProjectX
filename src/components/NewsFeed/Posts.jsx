import React, { Component } from "react";
import { Card, Spinner, Alert } from "react-bootstrap";
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
      <>
        {posts.map((post) => (
          <Card key={post.id} className="mt-2 mb-3">
            <Card.Header>{post.userName}</Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p> {post.tweetText}</p>
                <footer className="blockquote-footer">
                  <cite title="Source Title">{moment.unix(post.postDate).startOf().fromNow()}</cite>
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
        ))}
      </>
    );
  }
}

export default Posts;
