import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

function Footer() {
  return (
    
      <Navbar fixed="bottom" bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand> &copy; 2021</Navbar.Brand>
          <Nav className="justify-content-center">
            <Nav.Link href="https://github.com/MarkAndersen">Github</Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/mark-andersen-042380105/">
              LinkedIn
            </Nav.Link>
            <Nav.Link href="https://twitter.com/MAndersen444">Twitter</Nav.Link>
            <Nav.Link href="mailto:Mark.Andersen75@gmail.com">
              Email Me
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    
  );
}

export default Footer;
