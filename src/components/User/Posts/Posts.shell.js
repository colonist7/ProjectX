import React, { Component } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
// import { Image } from "react-bootstrap";
import { CommentBar } from "./Posts.style";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

class PostsShell extends Component {
  state = {
    formData: {
      post: "",
    },
  };

  onHandleChange = (e) => {
    let { formData } = { ...this.state };
    formData.post = e.target.value;
    this.setState({ formData: formData });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.setState.formData.post.length === 0) {
      return;
    } else {
      this.props.tweet(this.state.formData.post);
      this.setState({ formData: { post: "" } });
    }
  };

  formatData = (date) => {
    let formated = new Date(+date * 1000);
    console.log(formated);
    let str = formated.getDate() + "/" + (formated.getMonth() + 1) + "/" + formated.getFullYear();
    return str;
  };
  // componentDidMount = () => {
  //   this.props.getPosts();
  // };

  componentDidUpdate = () => {
    // debugger;
    // this.props.getPosts();
  };

  render() {
    const { tweets, userName } = this.props;

    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div style={{ display: "flex" }}>
            <TextField
              value={this.state.formData.post}
              onChange={this.onHandleChange}
              name="post"
              style={{ width: "100%" }}
              id="outlined-basic"
              label="Write your post here"
              variant="outlined"
            />
            <Button type="submit">Send</Button>
          </div>
        </form>
        <div>
          <div className="">
            {tweets &&
              tweets.map((x, index) => {
                return (
                  <CommentBar key={index}>
                    <h6 className="title">
                      {userName} <span>{this.formatData(x.postDate)}</span>
                    </h6>
                    <div className="comment">
                      <h3>{x.tweetText}</h3>
                    </div>
                    <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                      <Button>Like</Button>
                      <Button>Comment</Button>
                    </ButtonGroup>
                  </CommentBar>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}

export default PostsShell;
