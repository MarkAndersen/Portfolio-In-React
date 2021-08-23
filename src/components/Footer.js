import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

function Footer() {
  return (
    <footer>
      <Navbar fixed="bottom" bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand>Copyright Mark Andersen 2021</Navbar.Brand>
          <Nav className="justify-content-center" id="contact">
            <Nav.Link href="https://github.com/MarkAndersen">Github</Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/mark-andersen-042380105/">
              LinkedIn
            </Nav.Link>
            <Nav.Link href="https://drive.google.com/file/d/1uspfODwq4PbBRWtda8bnglD97X3zSMeg/view?usp=sharing">Resume</Nav.Link>
            <Nav.Link href="mailto:Mark.Andersen75@gmail.com">
              Contact Me
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </footer>
  );
}

export default Footer;
