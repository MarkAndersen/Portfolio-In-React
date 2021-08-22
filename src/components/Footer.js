import React from "react"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from "react-bootstrap/Container";

function Footer() {
    return (
        <Navbar fixed="bottom" bg="dark" variant="dark">
        <Container fluid>
            <Navbar.Brand>Mark Andersen</Navbar.Brand>
            <Nav className="justify-content-end" id="contact">
                <Nav.Link href='#home'>Home</Nav.Link>
                <Nav.Link href='#projects'>Projects</Nav.Link>
                <Nav.Link href='#contact'>Contact Me</Nav.Link>
            </Nav>
        </Container>
  </Navbar>
    )
}


export default Footer;