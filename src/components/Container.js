import Footer from "./Footer";
import Header from "./Header";
import NavBar from "./Navbar";
import Project from "./pages/Project";
import React, { useState } from 'react';

//conditional render from ACT 24. this will be my shell for the the APP
export default function Container() {
    // const [currentPage, setCurrentPage] = useState('Home');
  
    // // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    // const renderPage = () => {
    //   if (currentPage === 'Home') {
    //     return <Home />;
    //   }
    //   if (currentPage === 'Project') {
    //     return <Project />;
    //   }
    //   return <Contact />;
    // };
  
    // const handlePageChange = (page) => setCurrentPage(page);
  
    // return (
    //   <div>
    //     {/* We are passing the currentPage from state and the function to update it */}
    //     <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
    //     {/* Here we are calling the renderPage method which will return a component  */}
    //     {renderPage()}
    //   </div>
    // );
  }
  