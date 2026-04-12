# AME — Soluções Industriais | Site One Page React

Site institucional completo para a AME Soluções Industriais, desenvolvido em React com identidade visual industrial (azul profundo + prata metálico).

---

## 🚀 Como rodar o projeto

### Pré-requisitos
- Node.js 16+ instalado → https://nodejs.org
- npm ou yarn

### Instalação

```bash
# 1. Acesse a pasta do projeto
cd ame-site

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm start
```

O site abrirá em: **http://localhost:3000**

### Build para produção

```bash
npm run build
```

A pasta `build/` gerada pode ser enviada para qualquer hosting (Vercel, Netlify, GitHub Pages, etc).

---

## 📁 Estrutura de Arquivos

```
ame-site/
├── public/
│   ├── index.html          ← HTML base (fonte Google já incluída)
│   └── logo.png            ← ⚠️ COLOQUE SUA LOGO AQUI
│
├── src/
│   ├── App.jsx             ← Componente raiz
│   ├── index.js            ← Entry point React
│   ├── index.css           ← Design tokens globais, variáveis CSS
│   │
│   └── components/
│       ├── Navbar.jsx/.css             ← Menu fixo com scroll behavior
│       ├── Hero.jsx/.css               ← Seção principal com animação de engrenagem
│       ├── Sobre.jsx/.css              ← Sobre a empresa + player de vídeo
│       ├── MissaoVisaoValores.jsx/.css ← Cards Missão, Visão e Valores
│       ├── Servicos.jsx/.css           ← Grid de serviços expansível (accordion)
│       ├── Clientes.jsx/.css           ← Grid de clientes + segmentos
│       ├── Depoimentos.jsx/.css        ← Carrossel de depoimentos
│       ├── Contato.jsx/.css            ← Formulário + Mapa Google + Redes Sociais
│       └── Footer.jsx/.css             ← Rodapé completo
```

---

## ✏️ Personalizações Necessárias

### 1. Logo
- Copie sua logo para: `public/logo.png`
- Já referenciada como `/logo.png` no Navbar e Footer

### 2. Vídeo institucional (Sobre.jsx)
Localize o comentário `INSTRUÇÃO` em `Sobre.jsx` e substitua a URL:
```jsx
src="https://www.youtube.com/embed/SEU_VIDEO_ID?autoplay=1"
```
Para obter a URL embed do YouTube: vídeo → Compartilhar → Incorporar → copie o `src`.

### 3. Google Maps (Contato.jsx)
Substitua a constante `MAPS_EMBED_URL`:
1. Abra https://maps.google.com
2. Busque seu endereço
3. Clique em "Compartilhar" → "Incorporar um mapa"
4. Copie a URL do `src` do iframe

### 4. Dados da empresa (Contato.jsx + Footer.jsx)
Atualize endereço, telefone, e-mail e horário de atendimento nos dois arquivos.

### 5. Redes Sociais (Contato.jsx)
Edite o array `SOCIALS` com seus handles e URLs reais:
```jsx
const SOCIALS = [
  { name: 'Instagram', handle: '@seuhandle', url: 'https://instagram.com/seuhandle', ... },
  ...
]
```

### 6. Clientes reais (Clientes.jsx)
Edite o array `CLIENTES`. Se tiver logos:
- Coloque os arquivos em `public/clients/`
- Substitua `<div className="clientes__logo-placeholder">` por:
```jsx
<img src="/clients/nome-empresa.png" alt="Nome Empresa" />
```

### 7. Depoimentos reais (Depoimentos.jsx)
Edite o array `DEPOIMENTOS` com os depoimentos reais dos seus clientes.

### 8. Formulário de contato (Contato.jsx)
O formulário atualmente simula o envio. Para integrar de verdade:

**Opção A — EmailJS (gratuito, fácil):**
```bash
npm install @emailjs/browser
```
```jsx
import emailjs from '@emailjs/browser';
emailjs.sendForm('SEU_SERVICE_ID', 'SEU_TEMPLATE_ID', form, 'SUA_PUBLIC_KEY');
```

**Opção B — Formspree:**
```jsx
<form action="https://formspree.io/f/SEU_ID" method="POST">
```

**Opção C — Backend próprio:**
Substitua o `handleSubmit` por um `fetch` para sua API.

### 9. Estatísticas do Hero (Hero.jsx)
Atualize os números com sua realidade:
```jsx
{ value: '15+', label: 'Anos de Experiência' },
{ value: '200+', label: 'Projetos Entregues' },
...
```

---

## 🎨 Personalização Visual

Todas as cores estão centralizadas em `src/index.css` nas variáveis CSS:

```css
:root {
  --blue-deep:    #0D1F4E;   /* Azul escuro principal */
  --blue-primary: #2255CC;   /* Azul médio */
  --blue-bright:  #3B82F6;   /* Azul destaque */
  --silver-light: #C8D0DC;   /* Prata claro */
  --dark-bg:      #060E1E;   /* Fundo escuro */
}
```

Para mudar a paleta inteira, basta editar essas variáveis.

---

## 🌐 Deploy

### Vercel (recomendado — gratuito)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Arraste a pasta build/ para app.netlify.com
```

### GitHub Pages
```bash
npm install --save-dev gh-pages
# Adicione ao package.json: "homepage": "https://seuusuario.github.io/ame-site"
npm run build && npx gh-pages -d build
```

---

## 📋 Seções do Site

| Seção | ID | Descrição |
|---|---|---|
| Hero | `#hero` | Impacto visual com estatísticas |
| Sobre | `#sobre` | Texto + player de vídeo institucional |
| Missão/Visão/Valores | `#missao` | 3 cards com identidade da empresa |
| Serviços | `#servicos` | 6 serviços com accordion expansível |
| Clientes | `#clientes` | Grid de clientes + segmentos atendidos |
| Depoimentos | `#depoimentos` | Carrossel com navegação |
| Contato | `#contato` | Formulário + Google Maps + Redes Sociais |

---

## 📞 Suporte

Site desenvolvido com React 18, CSS puro (sem Tailwind), zero dependências de UI libraries externas — fácil de manter e personalizar.
