import React, { useState } from 'react';
import './Contato.css';

// 🔥 Ícones modernos
import {
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaFacebookF
} from 'react-icons/fa';

import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiSend
} from 'react-icons/fi';

/*
 * Configure sua URL do Google Maps aqui
 */
const MAPS_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.2471292100086!2d-47.21578152595069!3d-22.90425393777802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8b9806c8bdd8d%3A0x7c589c95edd416bb!2sR.%20Cazuza%20-%20Jardim%20Sao%20Bento%2C%20Hortol%C3%A2ndia%20-%20SP%2C%2013187-093!5e0!3m2!1spt-BR!2sbr!4v1775524225055!5m2!1spt-BR!2sbr';

const SOCIALS = [
  {
    name: 'Instagram',
    handle: '@ame.industrial',
    url: 'https://instagram.com/ame.industrial',
    color: '#E1306C',
    icon: <FaInstagram size={18} />,
  },
  {
    name: 'LinkedIn',
    handle: 'AME Soluções Industriais',
    url: 'https://linkedin.com/company/ame-industrial',
    color: '#0A66C2',
    icon: <FaLinkedinIn size={18} />,
  },
  {
    name: 'WhatsApp',
    handle: '+55 (19) 99999-0000',
    url: 'https://wa.me/5519999990000',
    color: '#25D366',
    icon: <FaWhatsapp size={18} />,
  },
  {
    name: 'Facebook',
    handle: 'AME Industrial',
    url: 'https://facebook.com/ameindustrial',
    color: '#1877F2',
    icon: <FaFacebookF size={18} />,
  },
];

const CONTACT_INFOS = [
  {
    icon: <FiMapPin size={20} />,
    label: 'Endereço',
    value: 'Rua Industrial, 1000\nSua Cidade — SP, 13000-000',
  },
  {
    icon: <FiPhone size={20} />,
    label: 'Telefone',
    value: '+55 (19) 3000-0000\n+55 (19) 99999-0000',
  },
  {
    icon: <FiMail size={20} />,
    label: 'E-mail',
    value: 'contato@ame.com.br\ncomercial@ame.com.br',
  },
  {
    icon: <FiClock size={20} />,
    label: 'Atendimento',
    value: 'Seg–Sex: 8h às 18h\nPlantão 24h para emergências',
  },
];

export default function Contato() {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    mensagem: ''
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    // 👉 Aqui você pode integrar com backend futuramente
    setSent(true);
    setTimeout(() => setSent(false), 4000);

    setForm({
      nome: '',
      email: '',
      telefone: '',
      empresa: '',
      mensagem: ''
    });
  };

  return (
    <section id="contato" className="contato">
      <div className="noise-overlay" />

      <div className="container">
        <div className="mvv__header">
          <p className="section-label">Entre em Contato</p>

          <h2 className="section-title">
            Vamos <span>trabalhar</span><br />
            juntos?
          </h2>

          <p className="section-subtitle">
            Fale com nossos especialistas e descubra a solução ideal para sua indústria.
          </p>
        </div>

        <div className="contato__grid">

          {/* ESQUERDA */}
          <div className="contato__left">
            <div className="contato__infos">
              {CONTACT_INFOS.map(({ icon, label, value }) => (
                <div key={label} className="contato__info-card">
                  <span className="contato__info-icon">{icon}</span>

                  <div>
                    <strong className="contato__info-label">{label}</strong>
                    <p className="contato__info-value">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DIREITA - FORM */}
          <div className="contato__right">
            <div className="contato__form-wrap">
              <h3 className="contato__form-title">Envie uma Mensagem</h3>

              {sent && (
                <div className="contato__success">
                  ✅ Mensagem enviada! Entraremos em contato em breve.
                </div>
              )}

              <form className="contato__form" onSubmit={handleSubmit}>

                <div className="contato__row">
                  <div className="contato__field">
                    <label>Nome *</label>
                    <input
                      type="text"
                      name="nome"
                      required
                      placeholder="Seu nome completo"
                      value={form.nome}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="contato__field">
                    <label>E-mail *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="seu@email.com"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="contato__row">
                  <div className="contato__field">
                    <label>Telefone</label>
                    <input
                      type="tel"
                      name="telefone"
                      placeholder="(00) 00000-0000"
                      value={form.telefone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="contato__field">
                    <label>Empresa</label>
                    <input
                      type="text"
                      name="empresa"
                      placeholder="Nome da sua empresa"
                      value={form.empresa}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="contato__field">
                  <label>Mensagem *</label>
                  <textarea
                    name="mensagem"
                    required
                    rows={5}
                    placeholder="Descreva sua necessidade ou projeto..."
                    value={form.mensagem}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="btn-primary contato__submit">
                  <FiSend size={18} />
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* MAPA */}
        <div className="contato__map-wrap">
          <div className="contato__map-header">
            <span className="contato__map-label">
              Nossa Localização
            </span>
          </div>

          <div className="contato__map">
            <iframe
              src={MAPS_EMBED_URL}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização AME"
            />
          </div>
        </div>

      </div>
    </section>
  );
}