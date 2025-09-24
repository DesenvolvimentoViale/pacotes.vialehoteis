import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
    return (
        <section className="newsletter-section-final">
            <div className="newsletter-container-final">
                <h2>Fique por Dentro das Novidades</h2>
                <p className="section-subtitle">
                    Cadastre-se e receba em primeira mão nossas promoções exclusivas e pacotes especiais.
                </p>
                <form className="crm-newsletter-form">
                    <div className="form-group">
                        <label htmlFor="form-name">Nome</label>
                        <input type="text" id="form-name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="form-lastname">Sobrenome</label>
                        <input type="text" id="form-lastname" name="lastname" required />
                    </div>
                    <div className="form-group full-width">
                        <label htmlFor="form-mail">Email</label>
                        <input type="email" id="form-mail" name="mail" placeholder="seu.email@exemplo.com" required />
                    </div>
                    <div className="submit-container">
                        <button type="submit">QUERO RECEBER OFERTAS</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Newsletter;