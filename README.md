# Portfolio | Lucas Cintra

A modern, responsive portfolio website built with Next.js, featuring dark/light theme switching, internationalization (English/Portuguese), and smooth animations.

## 🚀 Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Theme Switching**: Toggle between dark and light modes with persistent storage
- **Internationalization**: Support for English and Portuguese languages
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Smooth Scrolling**: Navigation between sections with intersection observer
- **Modern UI**: Clean design with Tailwind CSS and custom CSS variables
- **Performance Optimized**: Built with Next.js for optimal performance and SEO

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.3
- **Frontend**: React 19.1.0
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Heroicons
- **Font**: Geist (Google Fonts)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/LucasCintra10/portifolio-app.git
cd portifolio-app
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build

To build the application for production:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## 🎨 Customization

### Theme Colors
Customize theme colors in [`src/app/globals.css`](src/app/globals.css):

```css
:root {
  --background: #ffffff;
  --foreground: #0a0a0a;
  --primary: #0a0a0a;
  --secondary: #a1a1a1;
  --border: #262626;
}
```

### Languages
Add or modify translations in [`src/contexts/LanguageContext.js`](src/contexts/LanguageContext.js).

### Skills
Update the skills array in [`src/app/page.js`](src/app/page.js):

```javascript
const skills = [
  "React",
  "Next.js",
  // Add your skills here
];
```

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css       # Global styles and theme variables
│   ├── layout.js         # Root layout with providers
│   └── page.js           # Main portfolio page
├── components/
│   └── ButtonSection.js  # Navigation button component
└── contexts/
    ├── LanguageContext.js # Internationalization context
    └── ThemeContext.js    # Theme switching context
```

## 🌟 Sections

- **About**: Introduction, current role, and skills
- **Experience**: Professional experience timeline
- **Projects**: Showcase of featured projects
- **Contact**: Contact information and social links

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints optimized for:
- Mobile devices (< 768px)
- Tablets (768px - 1024px)
- Desktop (> 1024px)

## 🔧 Configuration

### Next.js Config
Configuration is handled in [`next.config.mjs`](next.config.mjs).

### PostCSS Config
Tailwind CSS is configured via PostCSS in [`postcss.config.mjs`](postcss.config.mjs).

### Path Aliases
Import aliases are configured in [`jsconfig.json`](jsconfig.json):
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

## 📄 License

© 2025 Lucas Cintra. All rights reserved.

---

# Portfolio | Lucas Cintra (Português)

Um site de portfólio moderno e responsivo construído com Next.js, com alternância de tema escuro/claro, internacionalização (Inglês/Português) e animações suaves.

## 🚀 Funcionalidades

- **Design Responsivo**: Otimizado para todos os dispositivos e tamanhos de tela
- **Alternância de Tema**: Alternar entre modos escuro e claro com armazenamento persistente
- **Internacionalização**: Suporte para idiomas inglês e português
- **Animações Suaves**: Animações com Framer Motion para experiência do usuário aprimorada
- **Rolagem Suave**: Navegação entre seções com intersection observer
- **UI Moderna**: Design limpo com Tailwind CSS e variáveis CSS customizadas
- **Performance Otimizada**: Construído com Next.js para performance e SEO otimais

## 🛠️ Stack Tecnológica

- **Framework**: Next.js 15.5.3
- **Frontend**: React 19.1.0
- **Estilização**: Tailwind CSS 4
- **Animações**: Framer Motion
- **Ícones**: Heroicons
- **Fonte**: Geist (Google Fonts)

## 📦 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/LucasCintra10/portifolio-app.git
cd portifolio-app
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 🏗️ Build

Para fazer o build da aplicação para produção:

```bash
npm run build
```

Para iniciar o servidor de produção:

```bash
npm start
```

## 🎨 Personalização

### Cores do Tema
Personalize as cores do tema em [`src/app/globals.css`](src/app/globals.css):

```css
:root {
  --background: #ffffff;
  --foreground: #0a0a0a;
  --primary: #0a0a0a;
  --secondary: #a1a1a1;
  --border: #262626;
}
```

### Idiomas
Adicione ou modifique traduções em [`src/contexts/LanguageContext.js`](src/contexts/LanguageContext.js).

### Habilidades
Atualize o array de habilidades em [`src/app/page.js`](src/app/page.js):

```javascript
const skills = [
  "React",
  "Next.js",
  // Adicione suas habilidades aqui
];
```

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── globals.css       # Estilos globais e variáveis de tema
│   ├── layout.js         # Layout raiz com providers
│   └── page.js           # Página principal do portfólio
├── components/
│   └── ButtonSection.js  # Componente de botão de navegação
└── contexts/
    ├── LanguageContext.js # Contexto de internacionalização
    └── ThemeContext.js    # Contexto de alternância de tema
```

## 🌟 Seções

- **Sobre**: Introdução, função atual e habilidades
- **Experiência**: Linha do tempo da experiência profissional
- **Projetos**: Vitrine de projetos em destaque
- **Contato**: Informações de contato e links sociais

## 📱 Design Responsivo

O portfólio é totalmente responsivo com breakpoints otimizados para:
- Dispositivos móveis (< 768px)
- Tablets (768px - 1024px)
- Desktop (> 1024px)

## 🔧 Configuração

### Configuração do Next.js
A configuração é feita em [`next.config.mjs`](next.config.mjs).

### Configuração do PostCSS
O Tailwind CSS é configurado via PostCSS em [`postcss.config.mjs`](postcss.config.mjs).

### Aliases de Caminho
Os aliases de importação são configurados em [`jsconfig.json`](jsconfig.json):
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

## 📄 Licença

© 2025 Lucas Cintra. Todos os direitos reservados.

