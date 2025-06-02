import React from 'react';

const HomePage = () => {
  const containerStyle = {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: 'skyblue'
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ fontSize: '2rem', color: '#333' }}>Welcome to Our Fashion Store</h1>
      <p style={{ fontSize: '1.2rem', color: '#777' }}>
        Discover the latest trends in fashion! From elegant dresses to stylish accessories, we've got it all.
      </p>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '30px' }}>
        <div>
          {/* Placeholder for Fashion Product 1 */}
          
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <h2>Our Story</h2>
        <p>
        
          Founded in 2021, our passion for fashion drives us to curate the finest collection of clothing,
          accessories, and footwear. From runway-inspired looks to everyday essentials, we're here to elevate
          your style.
        </p>
        <h2>Our Mission</h2>
        <p>
          At FashionCo, we believe that everyone deserves to feel confident and express their unique style.
          Our mission is to provide high-quality, affordable fashion that empowers our customers to embrace
          their individuality.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
