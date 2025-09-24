import React from 'react';
import './Navbar.css';

const Navbar = () => {
  const vialeUrl = "https://www.vialehoteis.com.br/";

  return (
    <nav className="navbar">
      <div className="logo">
        <a href={vialeUrl} target="_blank" rel="noopener noreferrer">
          <img 
            src="https://ss-usa.s3.amazonaws.com/companies/MzY0NjA0MjIyAQA/uploads/F_rias_de_Julho/Design_sem_nome.png" 
            alt="Viale Hotéis Logo" 
          />
        </a>
      </div>

      <ul className="nav-links">
        <li><a href={vialeUrl} target="_blank" rel="noopener noreferrer">Início</a></li>
        <li><a href={vialeUrl} target="_blank" rel="noopener noreferrer">Hotéis</a></li>
        <li><a href={vialeUrl} target="_blank" rel="noopener noreferrer">Pacotes</a></li>
        <li className="active-link"><a href={vialeUrl} target="_blank" rel="noopener noreferrer">Passeios em Foz</a></li>
        <li><a href={vialeUrl} target="_blank" rel="noopener noreferrer">Blog</a></li>
        <li><a href={vialeUrl} target="_blank" rel="noopener noreferrer">Contato</a></li>
      </ul>
      
      <div className="nav-actions">
        <a href={vialeUrl} target="_blank" rel="noopener noreferrer" className="reservar-btn-nav">
            Reservar
        </a>
      </div>
      
    </nav>
  );
};

export default Navbar;