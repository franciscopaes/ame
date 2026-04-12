import React, { useState, useEffect } from 'react';
import './CookieBanner.css';

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('ame_cookie_consent')) {
      setTimeout(() => setShow(true), 600);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('ame_cookie_consent', 'all');
    setShow(false);
  };

  const reject = () => {
    localStorage.setItem('ame_cookie_consent', 'necessary');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="cb">
      <div className="cb__inner">
        <p className="cb__text">
          Utilizamos cookies para melhorar a experiência de navegação e identificar suas
          preferências. Você pode aceitar todos os cookies ou rejeitar os não essenciais.
          Leia mais em nossa{' '}
          <a href="/politica-de-privacidade" target="_blank" rel="noopener noreferrer">
            Política de Privacidade e cookies
          </a>.
        </p>

        <div className="cb__actions">
          <button className="cb__btn cb__btn--outline" onClick={reject}>
            Rejeitar não essenciais
          </button>
          <button className="cb__btn cb__btn--primary" onClick={accept}>
            Aceitar todos
          </button>
        </div>
      </div>
    </div>
  );
}
