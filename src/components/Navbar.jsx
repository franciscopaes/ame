import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../assets/logo.png';

const NAV_LINKS = [
  { href: '#sobre',    label: 'Sobre' },
  { href: '#missao',   label: 'Missão & Valores' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#contato',  label: 'Contato' },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [active, setActive]       = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setActive(href);
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        {/* Logo */}
        <a href="#hero" className="navbar__logo" onClick={() => handleNav('#hero')}>
          <img src={logo} alt="AME Logo" className="navbar__logo-img" />
          {/*<div className="navbar__logo-text">
            <span className="navbar__logo-name">AME</span>
            <span className="navbar__logo-sub">Soluções Industriais</span>
          </div>*/}
        </a>

        {/* Desktop nav */}
        <nav className="navbar__links">
          {NAV_LINKS.map(({ href, label }) => (
            <button
              key={href}
              className={`navbar__link ${active === href ? 'navbar__link--active' : ''}`}
              onClick={() => handleNav(href)}
            >
              {label}
            </button>
          ))}
          <a href="#contato" className="btn-primary navbar__cta" onClick={(e) => { e.preventDefault(); handleNav('#contato'); }}>
            Fale Conosco
          </a>
        </nav>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
        {NAV_LINKS.map(({ href, label }) => (
          <button key={href} className="navbar__mobile-link" onClick={() => handleNav(href)}>
            {label}
          </button>
        ))}
        <a href="#contato" className="btn-primary" onClick={(e) => { e.preventDefault(); handleNav('#contato'); }}>
          Fale Conosco
        </a>
      </div>
    </header>
  );
}
