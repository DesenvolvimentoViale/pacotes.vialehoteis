import React from 'react';
import './EventCard.css';

const EventCard = ({ event }) => {
  const { title, subtitle, image, details } = event;

  return (
    <div className="event-card">
      {/* FRENTE DO CARD */}
      <div className="event-card-front">
        <div 
          className="event-card-bg-image" 
          style={{ backgroundImage: `url('${image}')` }}
        ></div>
        <div className="event-card-overlay-content">
          <h2>{title}</h2>
          <div className="event-info">
            <span>{subtitle}</span>
          </div>
        </div>
      </div>

      {/* VERSO DO CARD */}
      <div className="event-card-back">
          <h3>{details.title}</h3>
          <ul className="event-details-pills">
              {details.pills.map((pill, index) => (
                  <li key={index}>
                      {/* Ícones removidos daqui */}
                      <a href={details.bookingLink} target="_blank" rel="noopener noreferrer">
                        {pill.text}
                      </a>
                  </li>
              ))}
          </ul>
          
          {/* ÍCONE DO WHATSAPP ADICIONADO AQUI */}
          <a href={details.whatsappLink} className="whatsapp-link" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp"></i> {details.whatsappText}
          </a>
          
          <a href={details.bookingLink} className="btn-see-more" target="_blank" rel="noopener noreferrer">
            {details.buttonText}
          </a>
      </div>
    </div>
  );
};

export default EventCard;