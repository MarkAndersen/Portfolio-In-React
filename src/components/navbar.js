import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

function NavBar({ currentPage, handlePageChange }) {
  return (
    <Navbar bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand>Mark Andersen</Navbar.Brand>
        <Nav className="justify-content-end">
          <Nav.Link href="#home" onClick={() => handlePageChange("Home")}>
            Home
          </Nav.Link>
          <Nav.Link
            href="#projects"
            onClick={() => handlePageChange("Project")}
          >
            Projects
          </Nav.Link>
          <Nav.Link href="#resume" onClick={() => handlePageChange("Resume")}>
            Resume
          </Nav.Link>
          <Nav.Link href="#contact" onClick={() => handlePageChange("Contact")}>
            Contact Me
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
