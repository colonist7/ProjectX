import React, { Component } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Image, Container, Col, Row } from "react-bootstrap";
import Messages from "../Messages/Messages";
import ChatList from "../ChatList/ChatList";

class ChatShell extends Component {
  // componentDidMount = () => {
  //   this.props.getFollowers();
  // };

  componentDidUpdate = () => {
    // debugger;
  };

  render() {
    const {} = this.props;

    return (
      <Container>
        <Row style={{ border: "2px solid #efefef", borderRight: "none" }}>
          <Col md={4}>
            <ChatList />
          </Col>
          <Col md={8}>
            <Messages />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ChatShell;
