// Header.js
import React from 'react';

function Header() {
  return (
    <header className="header">
      <h1 className="header-title">Travel Explorer</h1>
      <nav className="header-nav">
        <ul className="nav-list">
          <li className="nav-item"><a href="#destinations">Destinations</a></li>
          <li className="nav-item"><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
