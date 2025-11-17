# ⚡ Quick Command Reference

Quick reference for common commands you'll need while working on your portfolio.

## 🎮 Development Commands

```bash
# Start development server (with hot reload)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run linter
npm run lint
```

## 📁 File Locations

### Update Your Info
```bash
src/i18n/locales/en.json    # English text
src/i18n/locales/fr.json    # French text
src/data/projects.json       # Your projects
```

### Add Images
```bash
public/profile.jpg           # Your photo
public/about-photo.jpg       # About page photo
public/resume.pdf            # Your resume
public/projects/*.jpg        # Project images
```

### Update Links
```bash
src/components/layout/Footer.jsx  # Footer social links
src/pages/Contact.jsx             # Contact social links
```

## 🔧 Common Tasks

### Change Your Name
Edit these files:
- `src/i18n/locales/en.json` → "home.name"
- `src/i18n/locales/fr.json` → "home.name"
- `src/components/layout/Navbar.jsx` → Logo/initials

### Add a Project
Edit `src/data/projects.json`:
```json
{
  "id": 7,
  "title": "Your Project",
  "description": "Description here",
  "image": "/projects/yourproject.jpg",
  "tags": ["React", "Node.js"],
  "github": "https://github.com/user/repo",
  "demo": "https://yourproject.com",
  "featured": false
}
```

### Change Colors
Find and replace in all files:
- `from-indigo-500` → `from-yourcolor-500`
- `to-purple-600` → `to-yourcolor-600`

### Setup EmailJS
1. Create `.env` file:
```bash
VITE_EMAILJS_SERVICE_ID=service_xxx
VITE_EMAILJS_TEMPLATE_ID=template_xxx
VITE_EMAILJS_PUBLIC_KEY=xxx
```
2. Restart dev server

## 🌐 Deployment Commands

### Deploy to Vercel
```bash
# Install Vercel CLI (optional)
npm install -g vercel

# Deploy
vercel

# Or use Vercel dashboard (easier!)
# 1. Push to GitHub
# 2. Import on vercel.com
```

### Deploy to Netlify
```bash
# Install Netlify CLI (optional)
npm install -g netlify-cli

# Build first
npm run build

# Deploy
netlify deploy --prod --dir=dist

# Or drag & drop 'dist' folder on netlify.com
```

## 🔍 Debugging Commands

```bash
# Check for errors
npm run lint

# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Check build output
npm run build

# Preview build locally
npm run preview
```

## 📦 Package Management

```bash
# Install new package
npm install package-name

# Update dependencies
npm update

# Check outdated packages
npm outdated

# Check for vulnerabilities
npm audit
```

## 🎨 Tailwind Commands

```bash
# Tailwind is built into Vite, but if you need to:

# Generate Tailwind config
npx tailwindcss init

# Check Tailwind classes
npx tailwindcss --help
```

## 🔄 Git Commands

```bash
# Initialize Git
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit"

# Add remote
git remote add origin YOUR_GITHUB_URL

# Push to GitHub
git push -u origin main

# Check status
git status

# View changes
git diff
```

## 🌍 Environment Variables

### Create .env file
```bash
# Copy template
cp .env.example .env

# Edit with your values
# (Use any text editor)
```

### Required Variables
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## 📱 Testing

```bash
# Test on different devices:
# 1. Find your local IP
ipconfig  # Windows
ifconfig  # Mac/Linux

# 2. Start dev server with host
npm run dev -- --host

# 3. Access from mobile
# http://YOUR_IP:3000
```

## 🛠️ Troubleshooting

```bash
# Port already in use?
# Kill process on port 3000 (Windows)
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Clear npm cache
npm cache clean --force

# Reinstall everything
rm -rf node_modules package-lock.json
npm install
```

## 📝 Useful One-Liners

```bash
# Open project in VS Code
code .

# Open in browser
start http://localhost:3000  # Windows
open http://localhost:3000   # Mac

# Count lines of code
find src -name '*.jsx' | xargs wc -l

# Search for text in files
grep -r "text to find" src/

# Find all TODO comments
grep -r "TODO" src/
```

## 🚀 Quick Deploy Workflow

```bash
# 1. Make sure everything works
npm run build
npm run preview

# 2. Commit changes
git add .
git commit -m "Update portfolio"
git push

# 3. Deploy automatically triggers on Vercel/Netlify
# (if connected to GitHub)
```

## 📊 Performance Check

```bash
# Build and check bundle size
npm run build

# Check bundle analyzer (add if needed)
npm install -D rollup-plugin-visualizer

# Run Lighthouse in Chrome DevTools
# (F12 → Lighthouse tab)
```

## 🎯 Shortcuts

### VS Code
- `Ctrl/Cmd + P` - Quick file open
- `Ctrl/Cmd + Shift + P` - Command palette
- `Ctrl/Cmd + B` - Toggle sidebar
- `Ctrl/Cmd + /` - Toggle comment
- `Alt + Shift + F` - Format document

### Browser DevTools
- `F12` - Open DevTools
- `Ctrl/Cmd + Shift + M` - Toggle device toolbar
- `Ctrl/Cmd + Shift + C` - Inspect element

## 📚 Quick Reference Links

- React: https://react.dev
- Tailwind: https://tailwindcss.com
- Vite: https://vitejs.dev
- Framer Motion: https://framer.com/motion
- EmailJS: https://emailjs.com
- Vercel: https://vercel.com
- Netlify: https://netlify.com

## 🎨 Color Tools

- Coolors: https://coolors.co
- Tailwind Colors: https://uicolors.app
- Color Hunt: https://colorhunt.co

## 📷 Image Tools

- TinyPNG: https://tinypng.com
- Squoosh: https://squoosh.app
- Remove.bg: https://remove.bg

## ✨ Icon Resources

- React Icons: https://react-icons.github.io/react-icons
- Heroicons: https://heroicons.com
- Font Awesome: https://fontawesome.com
- Simple Icons: https://simpleicons.org

---

## 💡 Pro Tip

Save this file for quick reference while working on your portfolio!

Bookmark these commands or keep this file open in a tab.

---

**Last Updated**: November 17, 2025
**Version**: 1.0.0
