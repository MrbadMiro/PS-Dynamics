// src/components/Header.js
import React from 'react';


function Header() {
  return (
    <nav>
      <div className="menu">
        <div className="logo">
          <a href="#">PX Dynamics</a>
        </div>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Feedback</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
