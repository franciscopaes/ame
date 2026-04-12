import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import MissaoVisaoValores from './components/MissaoVisaoValores';
import Servicos from './components/Servicos';
/*import Clientes from './components/Clientes';*/
/*import Depoimentos from './components/Depoimentos';*/
import Contato from './components/Contato';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Sobre />
      <MissaoVisaoValores />
      <Servicos />
      <Contato />
      <Footer />
      <CookieBanner />
    </div>
  );
}

export default App;
