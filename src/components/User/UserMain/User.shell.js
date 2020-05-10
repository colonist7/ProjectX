import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import UserInfo from "../UserInfo/UserInfo";
import PeopleYouMayKnow from "../PeopleYouMayKnow/People";
import Followers from "../Followers/Followers";
import Following from "../Following/Following";

class UserShell extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.getUser(this.props.id);
  }

  render() {
    const { userName, email } = this.props;

    return (
      <Container>
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
      </Container>
    );
  }
}

export default UserShell;
