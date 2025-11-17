# Portfolio Website

> A modern, professional portfolio website built with React, Vite, and Tailwind CSS

## 📁 Project Structure

```
portfolio/
├── public/                 # Static assets
│   ├── resume.pdf         # Your resume (add this)
│   └── projects/          # Project images (add your images)
├── src/
│   ├── components/
│   │   ├── common/        # Reusable components
│   │   │   ├── ScrollToTop.jsx
│   │   │   ├── ThemeToggle.jsx
│   │   │   └── LanguageToggle.jsx
│   │   ├── home/
│   │   │   └── ParticlesBackground.jsx
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   └── projects/
│   │       └── ProjectCard.jsx
│   ├── context/
│   │   └── ThemeContext.jsx    # Dark/Light mode management
│   ├── data/
│   │   └── projects.json       # Your projects data
│   ├── i18n/
│   │   ├── config.js          # i18next configuration
│   │   └── locales/
│   │       ├── en.json        # English translations
│   │       └── fr.json        # French translations
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── App.jsx                # Main app component
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles
├── .env.example              # Environment variables template
├── index.html                # HTML template
├── package.json              # Dependencies
├── tailwind.config.js        # Tailwind configuration
├── vite.config.js            # Vite configuration
└── README.md                 # This file
```

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Then edit `.env` and add your EmailJS credentials (see EmailJS Setup section).

### 3. Start Development Server

```bash
npm run dev
```

The site will open at `http://localhost:3000`

## 📝 Customization Guide

### Update Personal Information

1. **Edit Translation Files** (`src/i18n/locales/en.json` and `fr.json`):
   - Update `home.name` with your name
   - Modify `home.role` and `home.tagline`
   - Customize all text content

2. **Update Projects** (`src/data/projects.json`):
   - Add your real projects
   - Update titles, descriptions, tags
   - Add GitHub and demo links
   - Add project images to `public/projects/`

3. **Add Your Resume**:
   - Place your resume PDF in `public/resume.pdf`

4. **Update Social Links**:
   - Edit `src/components/layout/Footer.jsx`
   - Edit `src/pages/Contact.jsx`
   - Replace placeholder URLs with your actual profiles

5. **Add Your Photos**:
   - Profile photo for home page
   - About page photo
   - Project screenshots

### Update Brand Colors

Edit `tailwind.config.js` to change the color scheme:

```js
colors: {
  primary: {
    // Change these color values
    500: '#0ea5e9',
    600: '#0284c7',
    // ...
  },
}
```

### Update Meta Tags for SEO

Edit `index.html`:
- Update title, description, author
- Update Open Graph tags
- Add your actual domain URL

## 📧 EmailJS Setup

1. **Sign up** at [EmailJS](https://www.emailjs.com/)

2. **Add Email Service**:
   - Go to Email Services
   - Add your email service (Gmail, Outlook, etc.)

3. **Create Email Template**:
   - Go to Email Templates
   - Create a new template
   - Use these variables:
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email
     - `{{message}}` - Message content
     - `{{to_name}}` - Your name

4. **Get Credentials**:
   - Service ID (from Email Services)
   - Template ID (from Email Templates)
   - Public Key (from Account > API Keys)

5. **Add to `.env` file**:
```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
```

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub

2. Go to [Vercel](https://vercel.com) and sign in

3. Click "Import Project"

4. Select your repository

5. Add environment variables:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`

6. Click "Deploy"

### Deploy to Netlify

1. Push your code to GitHub

2. Go to [Netlify](https://netlify.com) and sign in

3. Click "New site from Git"

4. Select your repository

5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

6. Add environment variables in Site settings > Environment

7. Deploy!

## 🎨 Features Implemented

✅ Modern, responsive design
✅ Dark/Light mode toggle
✅ English/French language support
✅ Animated background with particles
✅ Smooth page transitions
✅ Project filtering
✅ Functional contact form
✅ SEO optimization
✅ Scroll-to-top button
✅ Mobile-friendly navigation
✅ Social media links
✅ Downloadable resume

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🔧 Tech Stack Details

- **React 18** - Latest React features
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router** - Client-side routing
- **react-i18next** - Internationalization
- **EmailJS** - Email sending service
- **React Icons** - Icon library

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🐛 Troubleshooting

**Issue**: Contact form doesn't send emails
- **Solution**: Check your EmailJS credentials in `.env` file
- Verify your EmailJS template has correct variables

**Issue**: Dark mode doesn't persist
- **Solution**: Check browser's localStorage is enabled

**Issue**: Images not showing
- **Solution**: Make sure images are in `public/` folder
- Use correct paths starting with `/`

## 📚 Next Steps

1. **Add Real Content**:
   - Replace placeholder text with your information
   - Add your actual projects
   - Upload your photos

2. **Customize Design**:
   - Adjust colors to match your brand
   - Modify animations if needed
   - Add more sections if desired

3. **Add More Features** (Optional):
   - Blog section
   - Testimonials
   - Skills certifications
   - Work experience timeline
   - Case studies for projects

4. **SEO Optimization**:
   - Add sitemap.xml
   - Add robots.txt
   - Implement structured data
   - Optimize images

5. **Analytics** (Optional):
   - Add Google Analytics
   - Add Vercel Analytics
   - Track user interactions

## 📧 Support

If you need help or have questions:
- Check the code comments
- Review the documentation
- Search for similar issues online

## 📄 License

MIT License - Feel free to use this template for your portfolio!

---

**Good luck with your portfolio! 🚀**
