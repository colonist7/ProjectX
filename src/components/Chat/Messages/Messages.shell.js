import React, { Component } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Image, Container, Col, Row } from "react-bootstrap";
import { MessagesTop, MessagesBody, MessagesBottom, MessagesBase, Message } from "./Messages.style";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class MessagesShell extends Component {
  // componentDidMount = () => {
  //   this.props.getFollowers();
  // };

  componentDidUpdate = () => {
    // debugger;
  };

  render() {
    const {} = this.props;

    return (
      <MessagesBase>
        <MessagesTop>
          <div className="image-block">
            <Image src={require("../../../assets/images/profile.png")} />
          </div>
          <div>
            <h6>John Doe</h6>
            <p>5 hours ago</p>
          </div>
        </MessagesTop>
        <MessagesBody>
          <Message currentUser={true}>LOL, your wife, Mary did</Message>
          <Message currentUser={false}>
            Really ? Who told you ? I was going to keep it in secret yet , until I've passed driving exams
          </Message>
          <Message currentUser={true}>I've heard, you bought new car</Message>
          <Message currentUser={true}>Fine, you?</Message>
          <Message currentUser={false}>How Are you ?</Message>
          <Message currentUser={true}>Hey</Message>
          <Message currentUser={false}>Hey dude</Message>
        </MessagesBody>
        <MessagesBottom>
          <div style={{ display: "flex" }}>
            <TextField
              name="post"
              autoComplete={"off"}
              style={{ width: "100%" }}
              id="outlined-basic"
              label="Write your message here"
              variant="outlined"
            />
            <Button type="submit">Send</Button>
          </div>
        </MessagesBottom>
      </MessagesBase>
    );
  }
}

export default MessagesShell;
