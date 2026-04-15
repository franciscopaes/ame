import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// VLibras
const vwDiv = document.createElement('div');
vwDiv.setAttribute('vw', '');
vwDiv.classList.add('enabled');
vwDiv.innerHTML = `
  <div vw-access-button class="active"></div>
  <div vw-plugin-wrapper>
    <div class="vw-plugin-top-wrapper"></div>
  </div>
`;
document.body.appendChild(vwDiv);

const script = document.createElement('script');
script.src = 'https://vlibras.gov.br/app/vlibras-plugin.js';
script.onload = () => new window.VLibras.Widget('https://vlibras.gov.br/app');
document.body.appendChild(script);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);