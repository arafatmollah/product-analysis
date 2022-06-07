import React from 'react';
import "./Header.css";

const Header = () => {
    return (
        <div className="container">
           <nav className="nav-bar">
               <a href="/">Home</a>
               <a href="/">Review</a>
               <a href="/">Dashboard</a>
               <a href="/">About</a>
               <a href="/">Contact Us</a>
           </nav>
        </div>
    );
};

export default Header;