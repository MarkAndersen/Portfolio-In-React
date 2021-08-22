import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from "react-bootstrap/Container";
// import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar({ currentPage, handlePageChange }) {
    return (
        <Navbar bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Brand>Mark Andersen</Navbar.Brand>
                <Nav className="justify-content-end">
                    <Nav.Link href='#home' onClick={() => handlePageChange('Home')}>Home</Nav.Link>
                    <Nav.Link href='#projects' onClick={() => handlePageChange('Projects')}>Projects</Nav.Link>
                    <Nav.Link href='#contact'>Contact Me</Nav.Link>
                </Nav>
            </Container>
      </Navbar>
      
    );
}
//     <nav class="navbar navbar-expand-md navbar-light pb-4"  style="background-color: #a6e681;">
        
//     <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
//         aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style="background-color: #a6e681;">
//         <span class="navbar-toggler-icon" style="background-color: #a6e681;"></span>
//     </button>
    
//     <div class="collapse navbar-collapse" id="navbarSupportedContent"  style="background-color: #a6e681;">
//         <ul class="navbar-nav mr-auto">
//             <li class="nav-item">
//                 <button class="nav-link" href="#bio">About Me <span class="sr-only">(current)</span></button>
//             </li>
//             <li class="nav-item">
//                 <button class="nav-link" href="#work">My Work</button>
//             </li>
//             <li class="nav-item">
//                 <button class="nav-link" href="#contact">Contact Me</button>
//             </li>
//         </ul>
//         <button class="navbar-brand justify-content-center" href="#">Mark Andersen</button>
//     </div>
// </nav>

  
  export default NavBar;
// export default navbar;