import React, { useState } from 'react';
import './Clientes.css';

/* 
 * INSTRUÇÃO: Substitua os nomes abaixo pelos seus clientes reais.
 * Se tiver logos, adicione-as em /public/clients/ e use <img src="/clients/logo.png" />
 */
const CLIENTES = [
  { name: 'Indústria Alpha', sector: 'Metalurgia' },
  { name: 'Grupo Beta',      sector: 'Petroquímica' },
  { name: 'Delta S.A.',      sector: 'Alimentos' },
  { name: 'Omega Tech',      sector: 'Automotivo' },
  { name: 'Sigmax',          sector: 'Mineração' },
  { name: 'Prime Industrial',sector: 'Energia' },
  { name: 'Tecno Sul',       sector: 'Papel & Celulose' },
  { name: 'MaxPower',        sector: 'Construção' },
];

export default function Clientes() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + CLIENTES.length) % CLIENTES.length);
  const next = () => setActive((a) => (a + 1) % CLIENTES.length);

  const c = CLIENTES[active];

  return (
    <section id="clientes" className="clientes">
      <div className="grid-lines" />
      <div className="container">
        <div className="clientes__header">
          <p className="section-label">Parceiros de Confiança</p>
          <h2 className="section-title">
            Clientes que <span>confiam</span><br />na AME
          </h2>
        </div>

        <div className="clientes__inner">
          {/* Big logo or card */}
          <div className="clientes__slide">
            <div className="clientes__card">
              <div className="clientes__logo-placeholder">
                <span className="clientes__logo-initial">{c.name.charAt(0)}</span>
              </div>
              <div className="clientes__info">
                <strong className="clientes__name">{c.name}</strong>
                <span className="clientes__sector">{c.sector}</span>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="clientes__controls">
            <button className="clientes__btn" onClick={prev}>
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <div className="clientes__dots">
              {CLIENTES.map((_, i) => (
                <button
                  key={i}
                  className={`clientes__dot ${i === active ? 'clientes__dot--active' : ''}`}
                  onClick={() => setActive(i)}
                />
              ))}
            </div>

            <button className="clientes__btn" onClick={next}>
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
}