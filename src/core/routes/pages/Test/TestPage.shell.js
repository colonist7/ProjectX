import React from "react";
import { Container, Button } from 'react-bootstrap';


export default function TestShell ({increment, decrement, count, get, findAll}) {
    return <Container>
                <h1>{count || count === 0 ? count.toString() : 'NOTHING'}</h1>
                <Button onClick={() => {decrement()}}> - </Button>
                <Button onClick={() => {increment()}}> + </Button>

                <br></br>
                <br></br>

                <Button onClick={e => {get()}}>GET</Button>
                <Button onClick={e => {findAll()}}>FIND ALL</Button>

           </Container>
}