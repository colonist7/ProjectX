import React, { Component } from "react";
import "pure-react-carousel/dist/react-carousel.es.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import { Image } from "react-bootstrap";
import { MessagesTop, MessagesBody, MessagesBottom, MessagesBase, Message } from "./Messages.style";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import store from "../../../redux/store";
import { chat } from "../../../redux/Socket";

class MessagesShell extends Component {
  state = {
    message: "",
  };
  // componentDidMount = () => {
  //   console.log(store.getState());
  // };

  componentDidUpdate = () => {
    if (this.props.userInfo) {
      this.props.getMessages(this.props.currentUser, this.props.userInfo.id);
    }
  };

  sendMessage = (e, currentUser, userId, message) => {
    e.preventDefault();
    chat.invoke("SendMessage", currentUser, userId, message).catch((err) => console.error(err));
    this.resetMessage();
  };

  handleChange = (txt) => {
    this.setState({ message: txt });
  };

  resetMessage = () => {
    this.setState({ message: "" });
  };

  render() {
    const { userInfo, messages, currentUser } = this.props;

    return (
      <MessagesBase>
        <MessagesTop>
          <div className="image-block">
            <Image src={require("../../../assets/images/profile.png")} />
          </div>
          <div>
            <h6>{userInfo && userInfo.userName}</h6>
            <p>5 hours ago</p>
          </div>
        </MessagesTop>
        <MessagesBody>
          {messages &&
            messages.map((mes, index) => {
              return (
                <Message currentUser={mes.fromUser.id == currentUser} key={index} title={mes.sendDate}>
                  {mes.text}
                </Message>
              );
            })}
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
              onChange={(e) => {
                this.handleChange(e.value);
              }}
            />
            <Button
              type="submit"
              onClick={(e) => {
                this.sendMessage(e, currentUser, userInfo.id, this.state.message);
              }}
            >
              Send
            </Button>
          </div>
        </MessagesBottom>
      </MessagesBase>
    );
  }
}

export default MessagesShell;
