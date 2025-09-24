import React from 'react';
import Navbar from '../Navbar/Navbar.jsx';
// Linha removida: import BookingWidget from '../BookingWidget/BookingWidget.jsx';
import './Header.css';

const Header = () => {
  const headerStyle = {
    backgroundImage: `url('https://ss-usa.s3.amazonaws.com/companies/MzY0NjA0MjIyAQA/uploads/fundo_viale.jpg')`
  };

  return (
    <header className="hero-section" style={headerStyle}>
      <div className="hero-overlay"></div>
      <Navbar />

      <div className="hero-content">
        <h1>Encontre a sua próxima experiência!</h1>
        <p>Em nossa rede, sua estadia perfeita está a um clique de distância</p>
      </div>
      
      {/* A linha <BookingWidget /> foi removida daqui */}
    </header>
  );
};

export default Header;