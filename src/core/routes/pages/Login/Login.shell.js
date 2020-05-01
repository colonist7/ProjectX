import React from "react";
import {Form , Button, Container, Row, FormLabel} from 'react-bootstrap';

export default function LoginShell () {
    return <Container>
                <Row>
                    <Form lg={8}>
                        <FormLabel className="mt-3">Username</FormLabel>
                        <Form.Control type="text"/>
                        <FormLabel className="mt-3">Password</FormLabel> 
                        <Form.Control type="password"/>
                        <Button className="mt-3">Submit</Button>
                    </Form>
                </Row>
           </Container>
}