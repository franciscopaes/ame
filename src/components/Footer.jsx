import React from 'react';
import './Footer.css';
import logo from '../assets/logo.png';

// 🔥 Ícones modernos
import {
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaFacebookF
} from 'react-icons/fa';

import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiChevronRight
} from 'react-icons/fi';

const NAV = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#missao', label: 'Missão & Valores' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#clientes', label: 'Clientes' },
  { href: '#contato', label: 'Contato' },
];

const SERVICES = [
  'Automação Industrial',
  'Manutenção Industrial',
  'Projetos de Engenharia',
  'Instalações Elétricas',
  'Análise e Diagnóstico',
  'Montagem e Comissionamento',
];

const SOCIAL_MEDIA = [
  { name: 'Instagram', url: 'https://instagram.com', icon: <FaInstagram size={18} /> },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: <FaLinkedinIn size={18} /> },
  { name: 'YouTube', url: 'https://youtube.com', icon: <FaYoutube size={18} /> },
  { name: 'Facebook', url: 'https://facebook.com', icon: <FaFacebookF size={18} /> },
];

const CONTACT_ITEMS = [
  {
    icon: <FiMapPin size={18} />,
    text: 'Rua Industrial, 1000\nSua Cidade — SP',
  },
  {
    icon: <FiPhone size={18} />,
    text: '+55 (19) 3000-0000',
  },
  {
    icon: <FiMail size={18} />,
    text: 'contato@ame.com.br',
  },
];

export default function Footer() {
  const scrollTo = (id) =>
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="grid-lines" style={{ opacity: 0.3 }} />
      <div className="noise-overlay" />

      <div className="footer__top">
        <div className="container footer__grid">

          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <img src={logo} alt="AME Logo" className="footer__logo-img" />
            </div>

            <p className="footer__tagline">
              Excelência técnica, comprometimento e inovação em cada projeto que entregamos.
            </p>

            <div className="footer__social">
              {SOCIAL_MEDIA.map(({ name, url, icon }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-link"
                  title={name}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navegação */}
          <div className="footer__col">
            <h4 className="footer__col-title">Navegação</h4>
            <ul className="footer__links">
              {NAV.map(({ href, label }) => (
                <li key={href}>
                  <button onClick={() => scrollTo(href)} className="footer__link">
                    <FiChevronRight size={16} />
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Serviços */}
          <div className="footer__col">
            <h4 className="footer__col-title">Serviços</h4>
            <ul className="footer__links">
              {SERVICES.map((s) => (
                <li key={s}>
                  <button onClick={() => scrollTo('#servicos')} className="footer__link">
                    <FiChevronRight size={16} />
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div className="footer__col">
            <h4 className="footer__col-title">Contato</h4>
            <div className="footer__contact-list">
              {CONTACT_ITEMS.map(({ icon, text }) => (
                <div key={text} className="footer__contact-item">
                  <span className="footer__contact-icon">{icon}</span>
                  <span style={{ whiteSpace: 'pre-line' }}>{text}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copy">
            © {new Date().getFullYear()} AME Soluções Industriais. Todos os direitos reservados.
          </p>

          <div className="footer__bottom-links">
            <button className="footer__bottom-link">Política de Privacidade</button>
            <button className="footer__bottom-link">Termos de Uso</button>
          </div>
        </div>
      </div>
    </footer>
  );
}