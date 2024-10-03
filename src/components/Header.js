
import React from 'react';
import '../css/header.css'
import Profilepic from '../images/User.png'

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        
        <div className="left-side">
          <div className="name">Maseerah</div>
        </div>

        
        <div className="middle">
          <ul className="nav-links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
            <li>
              <a href="#">Reviews</a>
            </li>
          </ul>
        </div>

        
        <div className="right-side">
          <a href="/login" className="login-btn">Login</a>
          <img 
            src={Profilepic} 
            alt="Profile Pic" 
            className="profile-pic" 
          />
        </div>
      </nav>
    </header>
  );
};


export default Header;
