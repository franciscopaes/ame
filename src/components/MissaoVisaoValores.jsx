import React from 'react';
import './MissaoVisaoValores.css';

// 🔥 Ícones modernos
import {
  FiShield,
  FiEye,
  FiStar,
  FiCheck
} from 'react-icons/fi';

const CARDS = [
  {
    id: 'missao',
    icon: <FiShield size={30} />,
    tag: 'Missão',
    title: 'Nossa Razão de Existir',
    text:
      'Prover soluções industriais integradas com excelência técnica, comprometimento e inovação — ' +
      'gerando valor para nossos clientes, colaboradores e para a sociedade, por meio de projetos que ' +
      'elevam a produtividade e a segurança operacional.',
  },
  {
    id: 'visao',
    icon: <FiEye size={30} />,
    tag: 'Visão',
    title: 'Onde Queremos Chegar',
    text:
      'Ser reconhecida até 2030 como a empresa referência em soluções industriais no Brasil, ' +
      'destacando-se pela capacidade técnica, confiabilidade e pelo impacto positivo gerado ' +
      'em cada cliente atendido.',
  },
  {
    id: 'valores',
    icon: <FiStar size={30} />,
    tag: 'Valores',
    title: 'O Que nos Guia',
    values: [
      'Integridade e transparência',
      'Comprometimento com resultados',
      'Segurança como prioridade',
      'Inovação contínua',
      'Respeito às pessoas',
      'Responsabilidade socioambiental',
    ],
  },
];

export default function MissaoVisaoValores() {
  return (
    <section id="missao" className="mvv">
      <div className="grid-lines" />

      <div className="container">
        <div className="mvv__header">
          <p className="section-label">Nossa Essência</p>

          <h2 className="section-title">
            Missão, Visão<br />
            <span>& Valores</span>
          </h2>

          <p className="section-subtitle">
            Os pilares que sustentam cada decisão, projeto e relacionamento que construímos.
          </p>
        </div>

        <div className="mvv__cards">
          {CARDS.map((card, i) => (
            <div
              key={card.id}
              className="mvv__card"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="mvv__card-top">
                <div className="mvv__icon">{card.icon}</div>
                <span className="mvv__tag">{card.tag}</span>
              </div>

              <h3 className="mvv__card-title">{card.title}</h3>

              {card.text ? (
                <p className="mvv__card-text">{card.text}</p>
              ) : (
                <ul className="mvv__values-list">
                  {card.values.map((v) => (
                    <li key={v} className="mvv__value-item">
                      <span className="mvv__check">
                        <FiCheck size={14} />
                      </span>
                      {v}
                    </li>
                  ))}
                </ul>
              )}

              <div className="mvv__card-number">0{i + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}