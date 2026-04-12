import React, { useEffect, useRef } from 'react';
import './Hero.css';

import { FaWhatsapp } from 'react-icons/fa';
import CookieBanner from './CookieBanner';

/* Gear SVG (mantido) */
function GearSVG({ teeth = 12, outerR = 90, innerR = 70, holeR = 22, holeInnerR, color = 'rgba(59,130,246,0.18)', strokeW = 1.5 }) {
  const cx = 100, cy = 100;
  const toothWidth = (2 * Math.PI) / teeth;
  const toothArc = toothWidth * 0.38;
  const baseArc = toothWidth * 0.62;

  let d = '';
  for (let i = 0; i < teeth; i++) {
    const baseAngle = (i / teeth) * Math.PI * 2 - Math.PI / 2;

    const a1 = baseAngle;
    const a2 = baseAngle + baseArc * 0.5 - toothArc * 0.5;
    const a3 = a2 + toothArc;
    const a4 = baseAngle + baseArc;

    const pt = (r, a) => `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`;

    if (i === 0) d += `M ${pt(innerR, a1)} `;
    else d += `A ${innerR} ${innerR} 0 0 1 ${pt(innerR, a1)} `;

    d += `L ${pt(outerR, a2)} `;
    d += `A ${outerR} ${outerR} 0 0 1 ${pt(outerR, a3)} `;
    d += `L ${pt(innerR, a4)} `;
  }
  d += 'Z';

  const stroke = color.replace(/[\d.]+\)$/, '0.45)');
  const hInner = holeInnerR ?? holeR * 0.55;

  return (
    <svg viewBox="0 0 200 200" fill="none">
      <path d={d} fill={color} stroke={stroke} strokeWidth={strokeW} />
      <circle cx={cx} cy={cy} r={holeR} stroke={stroke} />
      <circle cx={cx} cy={cy} r={hInner} fill={color} stroke={stroke} />
    </svg>
  );
}

export default function Hero() {
  const gear1Ref = useRef(null);
  const gear2Ref = useRef(null);

  useEffect(() => {
    let angle = 0;
    let raf;

    const tick = () => {
      angle += 0.08;
      if (gear1Ref.current) gear1Ref.current.style.transform = `rotate(${angle}deg)`;
      if (gear2Ref.current) gear2Ref.current.style.transform = `rotate(${-angle * 1.4}deg)`;
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const scrollTo = (id) =>
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <>
      <section id="hero" className="hero">
        <div className="noise-overlay" />
        <div className="grid-lines" />

        {/* Engrenagens */}
        <div className="hero__gear-bg">
          <div ref={gear1Ref} className="hero__gear hero__gear--1">
            <GearSVG />
          </div>

          <div ref={gear2Ref} className="hero__gear hero__gear--2">
            <GearSVG color="rgba(34,85,204,0.18)" />
          </div>
        </div>

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

          {/* Stats */}
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

        <a
          href="https://wa.me/5519995932083?text=Olá,%20gostaria%20de%20mais%20informações!"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button"
        >
          <FaWhatsapp size={28} />
        </a>
      </section>

      {/* Cookie Banner — renderizado fora da section para não herdar overflow:hidden */}
      <CookieBanner />
    </>
  );
}
