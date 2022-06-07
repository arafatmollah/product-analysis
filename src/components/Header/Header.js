import React from 'react';
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <div className="container">
           <nav className="nav-bar">
               <Link to="/">Home</Link>
               <Link to="/reviews">Review </Link>
               <Link to="/dashboard">Dashboard</Link>
               <a href="/">About</a>
               <a href="/">Contact Us</a>
           </nav>
        </div>
    );
};

export default Header;