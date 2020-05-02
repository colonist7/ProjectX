import React from "react";
import {Form , Button, Container, Row, FormLabel} from 'react-bootstrap';

export default function RegisterShell ({userMail, userName, userPassword, confirmPassword, handleChange, submitRegistration}) {
    return <Container>
                <Row>
                    <h1>Registration</h1>
                </Row>
                <Row>
                    <Form lg={8}>
                        <FormLabel className="mt-3">E-Mail</FormLabel> 
                        <Form.Control name="userMail" 
                                      type="email"
                                      value={userMail}
                                      onChange={e => {handleChange(e.target.name, e.target.value)}} />

                        <FormLabel className="mt-3">Username</FormLabel>
                        <Form.Control name="userName" 
                                      type="text"
                                      value={userName}
                                      onChange={e => {handleChange(e.target.name, e.target.value)}} />

                        <FormLabel className="mt-3">Password</FormLabel> 
                        <Form.Control name="userPassword" 
                                    type="password"
                                    value={userPassword}
                                    onChange={e => {handleChange(e.target.name, e.target.value)}} />

                        <FormLabel className="mt-3">Confirm Password</FormLabel> 
                        <Form.Control name="confirmPassword" 
                                      type="password"
                                      value={confirmPassword}
                                      onChange={e => {handleChange(e.target.name, e.target.value)}} />
                        <Button className="mt-3" onClick={e => {submitRegistration(userName, userMail, userPassword, confirmPassword)}}>Submit</Button>
                    </Form>
                </Row>
           </Container> 
}