import React, { Component } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Image, Container, Col, Row } from "react-bootstrap";
import { ChatListBase, ChatMember } from "./ChatList.style";
class ChatListShell extends Component {
  // componentDidMount = () => {
  //   this.props.getFollowers();
  // };

  componentDidUpdate = () => {
    // debugger;
  };

  render() {
    const {} = this.props;

    return (
      <ChatListBase>
        <ChatMember>
          <div className="image-block">
            <Image src={require("../../../assets/images/profile.png")} />
          </div>
          <div>
            <h6>John Doe</h6>
            <p>5 hours ago</p>
          </div>
        </ChatMember>
        <ChatMember>
          <div className="image-block">
            <Image src={require("../../../assets/images/profile.png")} />
          </div>
          <div>
            <h6>John Doe</h6>
            <p>5 hours ago</p>
          </div>
        </ChatMember>
      </ChatListBase>
    );
  }
}

export default ChatListShell;
