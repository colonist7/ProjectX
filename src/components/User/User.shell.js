import React, { Component } from "react";
import { Form, Button, Col, Container, Row, FormLabel } from "react-bootstrap";

class UserShell extends Component {
  componentDidMount() {
    this.props.getUser(this.props.id);
  }

  render() {
    const { userName, email } = this.props;

    return (
      <Container>
        <Row>
          <Col lg={4}>
            <div>
              name : {userName} <p>email : {email}</p>
            </div>
            <div>People you may know</div>
            <div>Followers</div>
          </Col>
          <Col lg="8">Your Posts</Col>
        </Row>
      </Container>
    );
  }
}

export default UserShell;
