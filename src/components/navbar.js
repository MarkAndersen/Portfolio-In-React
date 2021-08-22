import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from "react-bootstrap/Container";

function NavBar({ currentPage, handlePageChange }) {
    return (
        <Navbar bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Brand>Mark Andersen</Navbar.Brand>
                <Nav className="justify-content-end">
                    <Nav.Link href='#home' onClick={() => handlePageChange('Home')}>Home</Nav.Link>
                    <Nav.Link href='#projects' onClick={() => handlePageChange('Projects')}>Projects</Nav.Link>
                </Nav>
            </Container>
      </Navbar>
      
    );
}

  export default NavBar;
