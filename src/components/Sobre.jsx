import React, { useState } from 'react';
import './Sobre.css';

export default function Sobre() {
  const [playing, setPlaying] = useState(false);

  return (
    <section id="sobre" className="sobre">
      <div className="noise-overlay" />
      <div className="container sobre__video-container">
        <div className="sobre__video-wrap">
          <div className="sobre__video-frame">
            {!playing ? (
              <div className="sobre__video-thumb">
                {/* Replace this gradient with an actual thumbnail img if you have one */}
                <div className="sobre__video-bg" />
                <div className="sobre__video-overlay">
                  <button className="sobre__play-btn" onClick={() => setPlaying(true)}>
                    <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                  <p className="sobre__video-caption">Conheça a AME</p>
                </div>
                {/* Corner decorations */}
                <span className="sobre__corner sobre__corner--tl" />
                <span className="sobre__corner sobre__corner--br" />
              </div>
            ) : (
              
              <iframe
                className="sobre__iframe"
                src="https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1&mute=1"
                title="AME - Soluções Industriais"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>

          {/* Floating badge */}
          {/*<div className="sobre__badge">
            <span className="sobre__badge-num">15+</span>
            <span className="sobre__badge-text">anos de<br />experiência</span>
          </div>*/}
        </div>
      </div>
    </section>
  );
}