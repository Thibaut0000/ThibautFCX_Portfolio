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

- **Node.js**: v16.x or higher (LTS recommended)
- **npm**: v8.x or higher (bundled with Node.js)

### Local Development

1. **Clone the repository**
```bash
git clone https://github.com/Thibaut0000/ThibautFCX_Portfolio.git
cd ThibautFCX_Portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment variables**

Create a `.env` file in the project root:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

4. **Start development server**
```bash
npm run dev
```

The application will be available at `http://localhost:3000` with Hot Module Replacement (HMR) enabled.

5. **Build for production**
```bash
npm run build
```

Output will be generated in the `dist/` directory with optimized bundles and assets.

6. **Preview production build**
```bash
npm run preview
```

## Configuration

### Content Management

#### Projects
Edit `src/data/projects.json` to add or modify project entries:
```json
{
  "id": "unique-id",
  "title": "Project Name",
  "description": "Project description",
  "longDescription": "Detailed description",
  "image": "/projects/image.jpg",
  "technologies": ["React", "Node.js"],
  "github": "https://github.com/username/repo",
  "demo": "https://demo-url.com",
  "featured": true
}
```

#### Translations
Update translation files for bilingual content:
- `src/i18n/locales/en.json` - English translations
- `src/i18n/locales/fr.json` - French translations

#### Static Assets
- Place resume PDF in `public/resume_ThibautFCX.pdf`
- Add project images to `public/projects/`
- Update favicon at `public/favicon.svg`

### EmailJS Integration

1. Create an account at [emailjs.com](https://www.emailjs.com/)
2. Configure an email service (Gmail, Outlook, etc.)
3. Create an email template with variables: `{{from_name}}`, `{{from_email}}`, `{{message}}`
4. Copy Service ID, Template ID, and Public Key to `.env` file

## Deployment

### Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

Configure environment variables in Vercel dashboard under Project Settings > Environment Variables.

### Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

Add environment variables in Netlify dashboard under Site Settings > Build & Deploy > Environment.

### Manual Deployment

Build the project and upload the `dist/` folder to any static hosting service (GitHub Pages, AWS S3, Cloudflare Pages, etc.).

## Project Structure

```
src/
├── components/
│   ├── common/          # Reusable UI components
│   └── layout/          # Layout components (Navbar, Footer)
├── data/                # Static data (projects.json)
├── i18n/                # Internationalization config and translations
├── pages/               # Route components (Home, About, Projects, Contact)
├── App.jsx              # Root component with routing
└── main.jsx             # Application entry point
```

## Performance

- **Bundle Size**: ~150KB gzipped (production build)
- **First Contentful Paint**: < 1.5s
- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Code Splitting**: Automatic route-based splitting via React.lazy
- **Asset Optimization**: Vite automatically minifies JS/CSS and optimizes images

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- iOS Safari (last 2 versions)
- Chrome Android (last 2 versions)

## License

MIT License - Free to use for personal and commercial projects.

## Contact

Thibaut Faucheux - [thibautfaucheux1@gmail.com](mailto:thibautfaucheux1@gmail.com)

Project Repository: [https://github.com/Thibaut0000/ThibautFCX_Portfolio](https://github.com/Thibaut0000/ThibautFCX_Portfolio)
