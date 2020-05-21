import React, { Component } from "react";
import { Card } from "react-bootstrap";

class Posts extends Component {
  state = {};
  render() {
    return (
      <Card className="mt-3">
        <Card.Header>name surname</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. </p>
            <footer className="blockquote-footer">
              <cite title="Source Title">date</cite>
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
    );
  }
}

export default Posts;
