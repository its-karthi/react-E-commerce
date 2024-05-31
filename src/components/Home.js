import React from 'react';

const HomePage = () => {
  const containerStyle = {
    backgroundColor: 'lightblue',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  };

  return (
    <center>
    <div style={containerStyle}>
      <h1>Welcome to our E-commerce website</h1>
      <p>We are passionate about providing high-quality products to our customers.</p>
      {/* Other content */}
      
    </div>
    </center>
  );
};

export default HomePage;
