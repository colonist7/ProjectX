import React from "react";
import {Form , Button, Container, Row, FormLabel} from 'react-bootstrap';
import {Link} from "react-router-dom";

export default function AuthShell ({checkCredentials, userName, userPassword, handleChange}) {
    return <Container>
                <Row>
                    <Form lg={8}>
                        <FormLabel className="mt-3">Username</FormLabel>
                        <Form.Control name="userName" 
                                      type="text" 
                                      value={userName} 
                                      onChange={e => {handleChange(e.target.name, e.target.value)}}/>
                        <FormLabel className="mt-3">Password</FormLabel> 
                        <Form.Control name="userPassword" 
                                      type="password" 
                                      value={userPassword} 
                                      onChange={e => {handleChange(e.target.name, e.target.value)}}/>
                        <Button className="mt-3" onClick={e => {checkCredentials(userName, userPassword)}}>Submit</Button>
                    </Form>
                </Row>
                <Row>
                    <h6>Don't have an account? <Link to="/register">Register Now</Link></h6>  
                </Row>
           </Container>
}