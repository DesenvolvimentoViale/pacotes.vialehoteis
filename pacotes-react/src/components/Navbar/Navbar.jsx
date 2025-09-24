import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo-mobile-container">
        <div className="logo">
          <img 
            src="https://ss-usa.s3.amazonaws.com/companies/MzY0NjA0MjIyAQA/uploads/F_rias_de_Julho/Design_sem_nome.png" 
            alt="Viale Hotéis Logo" 
          />
        </div>
      </div>

      <div className="desktop-nav-container">
        <div className="navbar-left">
          <ul className="nav-links">
            <li><a href="#inicio">Início</a></li>
            <li><a href="#hoteis">Hotéis</a></li>
            <li><a href="#pacotes">Pacotes</a></li>
          </ul>
        </div>
        <div className="logo-desktop">
          <img 
            src="https://ss-usa.s3.amazonaws.com/companies/MzY0NjA0MjIyAQA/uploads/F_rias_de_Julho/Design_sem_nome.png" 
            alt="Viale Hotéis Logo" 
          />
        </div>
        <div className="navbar-right">
          <ul className="nav-links">
            <li><a href="#passeios">Passeios em Foz</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
          <div className="nav-actions">
            <button className="reservar-btn-nav">Reservar</button>
          </div>
        </div>
      </div>
      
      <button className="mobile-menu-icon">
        <FontAwesomeIcon icon={faBars} />
      </button>
    </nav>
  );
};

export default Navbar;