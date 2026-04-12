import React from 'react';
import './Servicos.css';

// 🔥 Ícones modernos
import {
  FiSettings,
  FiTool,
  FiFileText,
  FiZap,
  FiSearch
} from 'react-icons/fi';

const SERVICOS = [
  {
    id: 1,
    icon: <FiSettings size={28} />,
    title: 'Automação Industrial',
    short: 'Sistemas de controle, CLP, SCADA e IHM.',
    desc:
      'Desenvolvemos e implantamos sistemas de automação completos: programação de CLPs, ' +
      'supervisão SCADA, interfaces IHM e integração de redes industriais (Profibus, Modbus, Ethernet/IP).',
    tags: ['CLP', 'SCADA', 'IHM', 'Redes Industriais'],
  },
  {
    id: 2,
    icon: <FiTool size={28} />,
    title: 'Manutenção Industrial',
    short: 'Preventiva, preditiva e corretiva 24h.',
    desc:
      'Planos de manutenção personalizados — preventiva, preditiva e corretiva — com equipe ' +
      'disponível 24/7. Reduzimos paradas não programadas e aumentamos a vida útil dos equipamentos.',
    tags: ['Preventiva', 'Preditiva', 'Corretiva', '24/7'],
  },
  {
    id: 3,
    icon: <FiFileText size={28} />,
    title: 'Projetos de Engenharia',
    short: 'Elétrica, mecânica e civil industrial.',
    desc:
      'Elaboração de projetos completos: plantas elétricas, layouts industriais, dimensionamento ' +
      'de sistemas de energia, laudos técnicos e documentação conforme normas vigentes.',
    tags: ['Elétrica', 'Mecânica', 'Civil', 'Laudos'],
  },
  {
    id: 4,
    icon: <FiZap size={28} />,
    title: 'Instalações Elétricas',
    short: 'Alta, média e baixa tensão.',
    desc:
      'Execução de instalações elétricas industriais em todas as tensões, cabine primária, SPDA, ' +
      'aterramento, quadros de distribuição e correção de fator de potência.',
    tags: ['Alta Tensão', 'Média Tensão', 'SPDA', 'QD'],
  },
  {
    id: 5,
    icon: <FiSearch size={28} />,
    title: 'Análise e Diagnóstico',
    short: 'Termografia, análise de vibração e mais.',
    desc:
      'Diagnósticos precisos com equipamentos de última geração: termografia infravermelha, ' +
      'análise de vibração, qualidade de energia e ultrassom para detecção precoce de falhas.',
    tags: ['Termografia', 'Vibração', 'Ultrassom', 'Qualidade de Energia'],
  },
  {
    id: 6,
    icon: <FiTool size={28} />,
    title: 'Montagem e Comissionamento',
    short: 'Montagem eletromecânica e start-up.',
    desc:
      'Serviços de montagem eletromecânica de máquinas e equipamentos, tubulação industrial, ' +
      'comissionamento completo e treinamento das equipes para operação segura.',
    tags: ['Montagem', 'Eletromecânica', 'Start-up', 'Treinamento'],
  },
];

export default function Servicos() {
  return (
    <section id="servicos" className="servicos">
      <div className="noise-overlay" />

      <div className="container">
        <div className="servicos__header">
          <div className="mvv__header">
            <p className="section-label">O que fazemos</p>

            <h2 className="section-title">
              Nossos<br />
              <span>Serviços</span>
            </h2>

            <p className="section-subtitle">
              Soluções completas para manter sua operação eficiente, segura e sempre em movimento.
            </p>
          </div>
        </div>

        <div className="servicos__grid">
          {SERVICOS.map((s, i) => (
            <div
              key={s.id}
              className="servicos__card"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="servicos__card-header">
                <span className="servicos__icon">{s.icon}</span>
                <span className="servicos__num">0{s.id}</span>
              </div>

              <h3 className="servicos__title">{s.title}</h3>
              <p className="servicos__short">{s.short}</p>

              {/* 🔥 Sempre visível agora */}
              <div className="servicos__expand">
                <p className="servicos__desc">{s.desc}</p>

                <div className="servicos__tags">
                  {s.tags.map((t) => (
                    <span key={t} className="servicos__tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}