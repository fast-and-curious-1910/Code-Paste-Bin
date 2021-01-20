import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css';
import React from 'react';
import {Container,Nav, Navbar,Form, Button, FormControl, Row,Col} from 'react-bootstrap'


function App({ Component, pageProps}) {
  return (
    <div className='app'>
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">CodePasteBin</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Button variant="outline-info" href='/create-paste'>Create A Paste</Button>
        </Nav>
    </Navbar>
    <Container> 
      <Row>
        <Col> 
        </Col>
      <Component {...pageProps}> </Component>
      </Row>
    </Container>
    </div>
  )
}

export default App;