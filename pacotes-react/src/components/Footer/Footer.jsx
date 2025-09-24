import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="footer-content">
                <div className="footer-column">
                    <h5>Links Úteis</h5>
                    <ul>
                        <li><a href="#sobre">Sobre Nós</a></li>
                        <li><a href="#contato">Contato</a></li>
                        <li><a href="#reservas">Reservas</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h5>Carreiras</h5>
                    <ul>
                        <li><a href="#blog">Blog</a></li>
                        <li><a href="#imprensa">Imprensa</a></li>
                        <li><a href="#parcerias">Parcerias</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h5>Recursos</h5>
                    <ul>
                        <li><a href="#eventos">Eventos</a></li>
                        <li><a href="#comunidade">Comunidade</a></li>
                        <li><a href="#social">Mídia Social</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-brand">VIALE <span>HOTÉIS</span></div>
                <div className="footer-copyright">
                    © 2025 Viale Hotéis. Todos os direitos reservados.
                </div>
            </div>
        </footer>
    );
};

export default Footer;