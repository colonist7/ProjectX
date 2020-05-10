import React, { Component } from "react";
import { Image } from "react-bootstrap";
import { UserInfoBlock } from "./UserInfo.style";

class UserInfoShell extends Component {
  render() {
    const { userName, email } = this.props;

    return (
      <UserInfoBlock>
        <div className="image-block">
          <Image src={require("../../../assets/images/placeholder.png")} alt="user profile" />
        </div>
        <h3 className="title">{userName ? userName : "John Doe"}</h3>
        <a className="email" href={"mailto:" + (email ? email : "johnDoe@gmail.com")}>
          {email ? email : "johnDoe@gmail.com"}
        </a>
      </UserInfoBlock>
    );
  }
}

export default UserInfoShell;
