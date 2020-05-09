import React, { Component } from "react";
import { Form, Button, Container, Row, FormLabel } from "react-bootstrap";

class RegisterShell extends Component {
  state = { userName: "", userPassword: "", confirmPassword: "", userMail: "", arePasswordsEqual: false };

  checkPassword = (a, b) => {
    this.setState({ arePasswordsEqual: a === b });
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    if (e.target.name === "userPassword") {
      this.checkPassword(e.target.value, this.state.confirmPassword);
    } else if (e.target.name === "confirmPassword") {
      this.checkPassword(this.state.userPassword, e.target.value);
    }
  };

  render() {
    const { userName, userMail, userPassword, confirmPassword, arePasswordsEqual } = this.state;
    const { register, setRegisterError, setRegisterLoading } = this.props;

    return (
      <Container>
        <Row>
          <h1>Registration</h1>
        </Row>
        <Row>
          <Form lg={8}>
            <FormLabel className="mt-3">E-Mail</FormLabel>
            <Form.Control
              name="userMail"
              type="email"
              value={userMail}
              onChange={(e) => {
                this.handleChange(e);
              }}
            />

            <FormLabel className="mt-3">Username</FormLabel>
            <Form.Control
              name="userName"
              type="text"
              value={userName}
              onChange={(e) => {
                this.handleChange(e);
              }}
            />

            <FormLabel className="mt-3">Password</FormLabel>
            <Form.Control
              name="userPassword"
              type="password"
              value={userPassword}
              onChange={(e) => {
                this.handleChange(e);
              }}
            />

            <FormLabel className="mt-3">Confirm Password</FormLabel>
            <Form.Control
              name="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => {
                this.handleChange(e);
              }}
            />
            {confirmPassword.length > 0 && <p>{arePasswordsEqual ? "" : "Passwords don't match"}</p>}
            <Button
              className="mt-3"
              onClick={(e) => {
                register(userName, userMail, userPassword, confirmPassword);
              }}
            >
              Submit
            </Button>
          </Form>
        </Row>
      </Container>
    );
  }
}

export default RegisterShell;
