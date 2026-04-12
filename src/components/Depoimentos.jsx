import React, { useState } from 'react';
import './Depoimentos.css';

/* INSTRUÇÃO: Substitua pelos depoimentos reais dos seus clientes */
const DEPOIMENTOS = [
  {
    id: 1,
    name: 'Carlos Mendes',
    role: 'Gerente de Manutenção',
    company: 'Indústria Alpha',
    text:
      'A AME transformou nossa gestão de manutenção. Após a implantação do plano preditivo, ' +
      'reduzimos as paradas não programadas em 60% no primeiro ano. Equipe extremamente competente e comprometida.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Ana Paula Souza',
    role: 'Diretora de Operações',
    company: 'Grupo Beta',
    text:
      'Trabalhamos com a AME em um projeto de automação completo da nossa linha de produção. ' +
      'O resultado superou as expectativas: ganho de 35% na produtividade e retorno do investimento em menos de 18 meses.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Roberto Lima',
    role: 'Supervisor Elétrico',
    company: 'Delta S.A.',
    text:
      'Profissionalismo, pontualidade e qualidade técnica impecável. A AME entregou o projeto ' +
      'elétrico dentro do prazo e orçamento, com zero não-conformidades na inspeção final.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Fernanda Costa',
    role: 'Coordenadora de Projetos',
    company: 'Omega Tech',
    text:
      'Escolhemos a AME após avaliar vários fornecedores. A clareza técnica na proposta e ' +
      'a capacidade de resolver problemas complexos foi o diferencial. Parceiro para a vida toda.',
    rating: 5,
  },
];

export default function Depoimentos() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + DEPOIMENTOS.length) % DEPOIMENTOS.length);
  const next = () => setActive((a) => (a + 1) % DEPOIMENTOS.length);

  const d = DEPOIMENTOS[active];

  return (
    <section id="depoimentos" className="depo">
      <div className="noise-overlay" />
      <div className="container">
        <div className="depo__header">
          <p className="section-label">O que dizem</p>
          <h2 className="section-title">
            <span>Depoimentos</span><br />
            de Clientes
          </h2>
        </div>

        <div className="depo__inner">
          {/* Big quote */}
          <div className="depo__quote-mark">"</div>

          <div className="depo__slide">
            <p className="depo__text">{d.text}</p>

            <div className="depo__footer">
              <div className="depo__avatar">
                <span>{d.name.charAt(0)}</span>
              </div>
              <div className="depo__info">
                <strong className="depo__name">{d.name}</strong>
                <span className="depo__role">{d.role} · {d.company}</span>
              </div>
              <div className="depo__stars">
                {Array.from({ length: d.rating }).map((_, i) => (
                  <svg key={i} width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="depo__controls">
            <button className="depo__btn" onClick={prev}>
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <div className="depo__dots">
              {DEPOIMENTOS.map((_, i) => (
                <button
                  key={i}
                  className={`depo__dot ${i === active ? 'depo__dot--active' : ''}`}
                  onClick={() => setActive(i)}
                />
              ))}
            </div>

            <button className="depo__btn" onClick={next}>
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
