import React, { Component } from "react";
// import { Form, Button, Container, Row, FormLabel } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const InitialState = {};
class CommentsShell extends Component {
  state = { userComment: "" };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { sendComment, tweetId } = this.props;

    return (
      <div>
        <div style={{ display: "flex", alignItems: "stretch", marginTop: "20px" }}>
          <TextField
            style={{ width: "100%" }}
            id="outlined-basic"
            label="Write your Comment here"
            variant="outlined"
            name="userComment"
            value={this.state.userComment}
            onChange={this.handleChange}
          />
          <Button
            onClick={(e) => {
              sendComment(tweetId, this.state.userComment);
            }}
          >
            Send
          </Button>
        </div>
        <div className="comments" style={{ padding: "20px" }}>
          <div style={{ borderBottom: "1px solid #efefef" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h6>John Doe</h6> <p>21/07/23</p>
            </div>
            <p>lorem ipsum comment about some shit you will never see again</p>
          </div>
        </div>
      </div>
    );
  }
}

export default CommentsShell;
