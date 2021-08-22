import Footer from "./Footer";
import Picture from "./Picture";
import NavBar from "./Navbar";
import Project from "./pages/Project";
import Home from "./pages/Home";
import "../styles/wrapper.css";
import React, { useState } from 'react';

//conditional render from ACT 24. this will be my shell for the the APP
export default function Wrapper() {
    const [currentPage, setCurrentPage] = useState('Home');
  
    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
      if (currentPage === 'Home') {
        return <Home />;
      }
      return <Project />;
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div>
        <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
        <Picture />
        {renderPage()}
        <br></br>
        <br></br>
        <br></br>
        <Footer />
      </div>
    );
  }
  