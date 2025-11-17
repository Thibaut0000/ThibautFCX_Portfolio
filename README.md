# Portfolio - Thibaut Faucheux

A modern, high-performance portfolio website showcasing software development projects and technical expertise. Built with React 18, Vite 5, and Tailwind CSS 3 for optimal performance and maintainability.

## Features

- **Theme Management**: Dynamic dark/light mode with persistent user preferences via localStorage
- **Internationalization**: Full bilingual support (English/French) using react-i18next with namespace-based translations
- **Responsive Design**: Mobile-first approach with breakpoint optimization for all screen sizes
- **Contact Integration**: Serverless contact form powered by EmailJS API with client-side validation
- **Animation System**: Declarative animations using Framer Motion with optimized performance
- **SEO Optimization**: Complete meta tag implementation including Open Graph and structured data
- **Type-Safe Routing**: Client-side navigation with React Router DOM v6

## Technology Stack

### Core Framework
- **React 18.2.0** - Component-based UI library with concurrent rendering
- **Vite 5.0.8** - Next-generation frontend build tool with HMR and optimized bundling

### Styling & UI
- **Tailwind CSS 3.3.6** - Utility-first CSS framework with JIT compiler
- **PostCSS 8.4.32** - CSS transformation pipeline with autoprefixer
- **React Icons 4.12.0** - SVG icon library with tree-shaking support

### Routing & Navigation
- **React Router DOM 6.20.0** - Declarative routing with nested routes and lazy loading

### Animation
- **Framer Motion 10.16.16** - Production-ready motion library with spring physics

### Internationalization
- **react-i18next 13.5.0** - React bindings for i18next
- **i18next 23.7.11** - Internationalization framework with plugin architecture

### Forms & Integration
- **EmailJS Browser 3.11.0** - Client-side email service integration

## Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory and add your EmailJS credentials:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Customization

### Update Personal Information

Edit the following files:
- `src/data/projects.json` - Add your projects
- `src/i18n/locales/en.json` & `fr.json` - Update text content
- `public/` - Add your resume PDF and profile image

### EmailJS Setup

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service
3. Create an email template
4. Add your credentials to `.env` file

## 🚢 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Deploy to Netlify

1. Push your code to GitHub
2. Import your repository on [Netlify](https://netlify.com)
3. Add environment variables in Netlify dashboard
4. Deploy!

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

Made with ❤️ using React + Vite + Tailwind CSS
