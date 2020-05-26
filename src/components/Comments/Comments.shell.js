import React, { Component } from "react";
// import { Form, Button, Container, Row, FormLabel } from "react-bootstrap";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const InitialState = { userComment: "" };
class CommentsShell extends Component {
  state = { userComment: "" };

  componentDidMount() {
    this.props.getComments(this.props.tweetId);
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { sendComment, tweetId, comments } = this.props;

    return (
      <div>
        <div style={{ display: "flex", alignItems: "stretch", marginTop: "20px" }}>
          <TextField
            style={{ width: "100%" }}
            label="Write your Comment here"
            variant="outlined"
            name="userComment"
            value={this.state.userComment}
            onChange={this.handleChange}
          />
          <Button
            onClick={(e) => {
              sendComment(tweetId, this.state.userComment);
              this.setState({ ...InitialState });
            }}
          >
            Send
          </Button>
        </div>
        <div className="comments" style={{ padding: "20px" }}>
          {comments &&
            comments[tweetId] &&
            comments[tweetId].map((x, index) => {
              return (
                <div key={index} style={{ borderBottom: "1px solid #efefef" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <h6>{x.userName}</h6> <p>{x.postDate}</p>
                  </div>
                  <p>{x.text}</p>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default CommentsShell;
