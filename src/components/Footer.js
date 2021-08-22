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
                <Nav.Link href='https://github.com/MarkAndersen'>Github</Nav.Link>
                <Nav.Link href='https://www.linkedin.com/in/mark-andersen-042380105/'>LinkedIn</Nav.Link>
                <Nav.Link href='./assets/res/MA-res-2021.pdf'>Resume</Nav.Link>
                <Nav.Link href='mailto:Mark.Andersen75@gmail.com'>Contact Me</Nav.Link>
            </Nav>
        </Container>
  </Navbar>
    )
}


export default Footer;