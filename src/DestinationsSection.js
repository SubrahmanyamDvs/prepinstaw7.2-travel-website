import React from 'react';

const DestinationsSection = () => {
  return (
    <section id="destinations" className="destination-section">
      <div className="destination">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ width: '250px', height: '200px', overflow: 'hidden', borderRadius: '5px', marginBottom: '10px' }}>
            <img src="/laksh.jpeg" alt="Lakshadweep" className="destination-image" />
          </div>
          <div className="destination-description">
            <h2>Lakshadweep</h2>
            <p>Explore the pristine beaches and crystal-clear waters of Lakshadweep, offering a perfect escape for a tropical vacation.</p>
          </div>
        </div>
      </div>
      <div className="destination">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ width: '250px', height: '200px', overflow: 'hidden', borderRadius: '5px', marginBottom: '10px' }}>
            <img src="/araku.jpg" alt="Araku" className="destination-image" />
          </div>
          <div className="destination-description">
            <h2>Araku Valley</h2>
            <p>Discover the serene hills and lush greenery of Araku, a charming valley perfect for a peaceful retreat.</p>
          </div>
        </div>
      </div>
      {/* Add more destination items as needed */}
    </section>
  );
};

export default DestinationsSection;
