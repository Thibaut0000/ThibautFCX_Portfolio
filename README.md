# 🚀 Modern Portfolio Website

A professional portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## ✨ Features

- 🎨 Modern and clean design
- 🌓 Dark/Light mode toggle
- 🌍 Bilingual support (EN/FR) with react-i18next
- 📱 Fully responsive (mobile, tablet, desktop)
- ✉️ Functional contact form with EmailJS
- 🎭 Smooth animations with Framer Motion
- 🎯 SEO optimized with meta tags
- 📦 Easy to customize and deploy

## 🛠️ Tech Stack

- **React** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **Framer Motion** - Animations
- **react-i18next** - Internationalization
- **EmailJS** - Contact form
- **React Icons** - Icon library

## 🚀 Getting Started

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
