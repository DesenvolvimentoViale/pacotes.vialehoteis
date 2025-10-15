import React, { useState } from 'react';
import './Newsletter.css';

const Newsletter = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        lastname: '',
        mail: '',
        phone: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (!formData.name || !formData.lastname || !formData.mail) {
            alert('Por favor, preencha os campos Nome, Sobrenome e Email.');
            setIsSubmitting(false);
            return;
        }

        // URL CONSTRUÍDA A PARTIR DO SEU NOVO SCRIPT
        const endpointUrl = 'https://app-3SMTDNLIFO.marketingautomation.services/webforms/receivePostback/MzY0NjA0MjIyAQA/9fd042db-0712-4402-896a-4624512572b7';

        const formUrlEncoded = new URLSearchParams();
        formUrlEncoded.append('name', formData.name);
        formUrlEncoded.append('lastname', formData.lastname);
        formUrlEncoded.append('email', formData.mail); // O seu endpoint anterior esperava 'email'
        formUrlEncoded.append('phone', formData.phone);
        
        try {
            await fetch(endpointUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: formUrlEncoded.toString(),
                mode: 'no-cors'
            });

            setIsSubmitted(true);

        } catch (error) {
            console.error('Erro ao enviar o formulário:', error);
            alert('Ocorreu um erro ao tentar se cadastrar. Por favor, tente novamente.');
            setIsSubmitting(false);
        }
    };

    return (
        <section className="newsletter-section-final">
            <div className="newsletter-container-final">
                {isSubmitted ? (
                    <div className="success-message">
                        <i className="fas fa-check-circle success-icon"></i>
                        <h3>Obrigado!</h3>
                        <p>Cadastro realizado com sucesso! Fique de olho no seu e-mail.</p>
                    </div>
                ) : (
                    <>
                        <i className="fas fa-envelope-open-text newsletter-icon"></i>
                        <h2>Fique por Dentro das Novidades</h2>
                        <p className="section-subtitle">
                            Cadastre-se e receba em primeira mão nossas promoções exclusivas e pacotes especiais.
                        </p>
                        <form id="crm-newsletter-form" className="crm-newsletter-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Nome</label>
                                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastname">Sobrenome</label>
                                <input type="text" id="lastname" name="lastname" value={formData.lastname} onChange={handleChange} required />
                            </div>
                            <div className="form-group full-width">
                                <label htmlFor="mail">Email</label>
                                <input type="email" id="mail" name="mail" placeholder="seu.email@exemplo.com" value={formData.mail} onChange={handleChange} required />
                            </div>
                            <div className="form-group full-width">
                                <label htmlFor="phone">Celular</label>
                                <input type="tel" id="phone" name="phone" placeholder="+55 (45) 99999-9999" value={formData.phone} onChange={handleChange} />
                            </div>
                            <div className="submit-container">
                                <button type="submit" disabled={isSubmitting}>
                                    {isSubmitting ? 'Enviando...' : 'QUERO RECEBER OFERTAS'}
                                </button>
                            </div>
                        </form>
                    </>
                )}
            </div>
        </section>
    );
};

export default Newsletter;