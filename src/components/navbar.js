import React from "react";
// import Nav from "react-bootstrap/Nav"
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
    return (
    //     <Nav
    //     activeKey="/home"
    //     onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    //   >
    //     <Nav.Item>
    //       <Nav.Link href="/home">Active</Nav.Link>
    //     </Nav.Item>
    //     <Nav.Item>
    //       <Nav.Link eventKey="link-1">Link</Nav.Link>
    //     </Nav.Item>
    //     <Nav.Item>
    //       <Nav.Link eventKey="link-2">Link</Nav.Link>
    //     </Nav.Item>
    //     <Nav.Item>
    //       <Nav.Link eventKey="disabled" disabled>
    //         Disabled
    //       </Nav.Link>
    //     </Nav.Item>
    //   </Nav>
    // );
    <nav class="navbar navbar-expand-md navbar-light pb-4"  style="background-color: #a6e681;">
        
    <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style="background-color: #a6e681;">
        <span class="navbar-toggler-icon" style="background-color: #a6e681;"></span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent"  style="background-color: #a6e681;">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <button class="nav-link" href="#bio">About Me <span class="sr-only">(current)</span></button>
            </li>
            <li class="nav-item">
                <button class="nav-link" href="#work">My Work</button>
            </li>
            <li class="nav-item">
                <button class="nav-link" href="#contact">Contact Me</button>
            </li>
        </ul>
        <button class="navbar-brand justify-content-center" href="#">Mark Andersen</button>
    </div>
</nav>
    );
  }
  
  export default NavBar;
// export default navbar;