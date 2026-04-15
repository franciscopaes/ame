import React, { useEffect } from 'react';
import './Hero.css';
import { FaWhatsapp } from 'react-icons/fa';
import CookieBanner from './CookieBanner';

export default function Hero() {
  const scrollTo = (id) =>
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <>
      <section id="hero" className="hero">
        <div className="hero__bg-image" />
        <div className="hero__overlay" />

        <div className="container hero__content">
          <br /><br />
          <h1 className="hero__title">
            ENGENHARIA<br />
            <span>INDUSTRIAL</span><br />
            DE ALTO NÍVEL
          </h1>

          <p className="hero__sub">
            A AME entrega soluções completas em automação, manutenção e engenharia industrial —
            unindo tecnologia de ponta à experiência comprovada para maximizar a produtividade da sua planta.
          </p>

          <div className="hero__actions">
            <button className="btn-primary" onClick={() => scrollTo('#servicos')}>
              Nossos Serviços
            </button>
            <button className="btn-outline" onClick={() => scrollTo('#contato')}>
              Fale Conosco
            </button>
          </div>

          <div className="hero__stats">
            {[
              { value: '15+', label: 'Anos de Experiência' },
              { value: '200+', label: 'Projetos Entregues' },
              { value: '50+', label: 'Clientes Ativos' },
              { value: '99%', label: 'Satisfação' },
            ].map(({ value, label }) => (
              <div key={label} className="hero__stat">
                <span className="hero__stat-value">{value}</span>
                <span className="hero__stat-label">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* WhatsApp */}
        <a
          href="https://wa.me/5519995932083?text=Olá,%20gostaria%20de%20mais%20informações!"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button"
        >
          <FaWhatsapp size={28} />
        </a>
      </section>

      <CookieBanner />
    </>
  );
}