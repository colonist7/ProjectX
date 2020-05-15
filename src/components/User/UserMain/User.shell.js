import React, { Component } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import UserInfo from "../UserInfo/UserInfo";
import PeopleYouMayKnow from "../PeopleYouMayKnow/People";
import Followers from "../Followers/Followers";
import Following from "../Following/Following";
import { Redirect } from "react-router-dom";

class UserShell extends Component {
  componentDidMount() {
    this.props.getUser();
  }

  render() {
    const { userName, email, isAuthenticated, logOut } = this.props;

    return (
      <Container>
        <Button
          onClick={(e) => {
            logOut();
          }}
        >
          LOG OUT
        </Button>
        <Row>
          <Col lg={4}>
            <div>
              <UserInfo name={userName} email={email} />
            </div>
            <PeopleYouMayKnow />
            <Followers />
            <Following />
          </Col>
          <Col lg="8">Your Posts</Col>
        </Row>
        {!isAuthenticated && <Redirect to="/login" />}
      </Container>
    );
  }
}

export default UserShell;
