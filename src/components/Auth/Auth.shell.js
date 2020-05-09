import React, { Component } from "react";
import { Form, Button, Container, Row, FormLabel } from "react-bootstrap";
import { Link } from "react-router-dom";

class AuthShell extends Component {
  state = { name: "", password: "" };

  changeInputValue = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    let { name, password } = this.state;
    let { authUser } = this.props;

    return (
      <Container>
        <Row>
          <Form lg={8}>
            <FormLabel className="mt-3">Username</FormLabel>
            <Form.Control name="name" type="text" value={name} onChange={this.changeInputValue} />
            <FormLabel className="mt-3">Password</FormLabel>
            <Form.Control name="password" type="password" value={password} onChange={this.changeInputValue} />
            <Button
              className="mt-3"
              onClick={() => {
                authUser(name, password);
              }}
            >
              Submit
            </Button>
          </Form>
        </Row>
        <Row>
          <h6>
            Don't have an account? <Link to="/register">Register Now</Link>
          </h6>
        </Row>
      </Container>
    );
  }
}

export default AuthShell;
