import React from 'react';
import './App.css'; // Import your CSS file for styling
import Destination from './DestinationsSection';
import Contact from './ContactForm';

const App = () => {
  return (
    <div className="container">
      <header>
        <h1 className="logo">Travel Adventures</h1>
        <nav>
          <ul>
            <li><a href="#destinations" className="nav-link">Destinations</a></li>
            <li><a href="#packages" className="nav-link">Packages</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
        </nav>
      </header>
      
      <section id="hero" className="hero-section">
        <div className="hero-image">
          <div className="hero-content">
            <h2>Your Next Adventure Awaits</h2>
            <p>Discover amazing destinations and book your dream vacation today!</p>
            <a href="#packages" className="btn">Explore Packages</a>
          </div>
        </div>
      </section>

      <Destination />

      <section id="packages" className="section packages-section">
        <h2 className="section-title">Featured Packages</h2>
        <div className="package-grid">
          <div className="package-card">
            <img src="/laksh.jpeg" alt="Lakshadweep Getaway" className="package-img" widht="500" height="300"/>
            <div className="package-info">
              <h3 className="package-title">Lakshadweep Getaway</h3>
              <p className="package-description"><b></b>Embark on a 5-day island adventure in Lakshadweep.</p>
              <a href="#contact" className="btn">Book Now</a>
            </div>
          </div>
          <div className="package-card">
            <img src="/araku.jpg" alt="Ooty Retreat" className="package-img" width="100" height="100"/>
            <div className="package-info">
              <h3 className="package-title">Araku Valley</h3>
              <p className="package-description">Enjoy a relaxing vacation amidst the tranquil Araku valley.</p>
              <a href="#contact" className="btn">Book Now</a>
            </div>
          </div>
          {/* Add more package cards here */}
        </div>
      </section>

      <Contact />

      <footer className="footer">
        <p>&copy; 2024 Travel Adventures. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
