# 📋 Portfolio Customization Checklist

Use this checklist to track your customization progress!

## 🔧 Essential Customizations

### Personal Information
- [ ] Update your name in `src/i18n/locales/en.json` (home.name)
- [ ] Update your name in `src/i18n/locales/fr.json` (home.name)
- [ ] Update role/tagline in both language files
- [ ] Update bio in About section (both languages)
- [ ] Update timeline events (both languages)

### Visual Assets
- [ ] Add profile photo to `public/profile.jpg`
- [ ] Add about page photo to `public/about-photo.jpg`
- [ ] Add resume PDF to `public/resume.pdf`
- [ ] Create and add social preview image `public/og-image.jpg` (1200x630px)

### Projects
- [ ] Update `src/data/projects.json` with your real projects
- [ ] Add project screenshots to `public/projects/`
- [ ] Update GitHub links in projects
- [ ] Add live demo links (if available)
- [ ] Update project descriptions

### Social Links & Contact
- [ ] Update GitHub URL in `src/components/layout/Footer.jsx`
- [ ] Update LinkedIn URL in `src/components/layout/Footer.jsx`
- [ ] Update Twitter URL in `src/components/layout/Footer.jsx`
- [ ] Update email in `src/components/layout/Footer.jsx`
- [ ] Update social links in `src/pages/Contact.jsx`

### Branding
- [ ] Update logo/initials in `src/components/layout/Navbar.jsx`
- [ ] Choose your color scheme (edit if desired)
- [ ] Update favicon (replace `public/vite.svg`)

## 📧 EmailJS Setup

- [ ] Create EmailJS account at https://www.emailjs.com
- [ ] Set up email service (Gmail/Outlook/etc.)
- [ ] Create email template with variables:
  - [ ] `{{from_name}}`
  - [ ] `{{from_email}}`
  - [ ] `{{message}}`
  - [ ] `{{to_name}}`
- [ ] Copy Service ID
- [ ] Copy Template ID  
- [ ] Copy Public Key
- [ ] Create `.env` file in root directory
- [ ] Add `VITE_EMAILJS_SERVICE_ID=your_service_id`
- [ ] Add `VITE_EMAILJS_TEMPLATE_ID=your_template_id`
- [ ] Add `VITE_EMAILJS_PUBLIC_KEY=your_public_key`
- [ ] Restart dev server (`npm run dev`)
- [ ] Test contact form

## 🎨 SEO & Meta Tags

- [ ] Update page title in `index.html`
- [ ] Update meta description in `index.html`
- [ ] Update author name in `index.html`
- [ ] Update Open Graph title
- [ ] Update Open Graph description
- [ ] Update Open Graph URL to your domain
- [ ] Update Open Graph image path
- [ ] Update Twitter card meta tags

## 🧪 Testing

- [ ] Test home page on desktop
- [ ] Test home page on mobile
- [ ] Test about page
- [ ] Test projects page
- [ ] Test project filtering
- [ ] Test contact form submission
- [ ] Test dark mode toggle
- [ ] Test language switcher (EN/FR)
- [ ] Test all navigation links
- [ ] Test scroll-to-top button
- [ ] Test all social media links
- [ ] Test resume download button
- [ ] Test GitHub links in projects
- [ ] Test live demo links in projects

## 📱 Responsive Testing

Test on multiple screen sizes:
- [ ] Desktop (1920px+)
- [ ] Laptop (1366px)
- [ ] Tablet (768px)
- [ ] Mobile (375px)
- [ ] Mobile landscape

## 🚀 Pre-Deployment

- [ ] All content is finalized
- [ ] All images are optimized (compressed)
- [ ] Contact form is working
- [ ] All links are working
- [ ] No console errors in browser
- [ ] Run `npm run build` successfully
- [ ] Test production build with `npm run preview`
- [ ] All placeholder text is replaced
- [ ] Privacy policy added (if collecting data)

## 🌐 Deployment

### Option A: Vercel
- [ ] Push code to GitHub
- [ ] Create Vercel account
- [ ] Import GitHub repository
- [ ] Add environment variables (EmailJS)
- [ ] Deploy
- [ ] Test live site
- [ ] Set custom domain (optional)

### Option B: Netlify
- [ ] Push code to GitHub
- [ ] Create Netlify account
- [ ] Import GitHub repository
- [ ] Configure build settings
- [ ] Add environment variables (EmailJS)
- [ ] Deploy
- [ ] Test live site
- [ ] Set custom domain (optional)

## 🎯 Post-Deployment

- [ ] Test all features on live site
- [ ] Share URL with friends for feedback
- [ ] Test social media preview (LinkedIn, Twitter)
- [ ] Submit to Google Search Console (optional)
- [ ] Add Google Analytics (optional)
- [ ] Share on LinkedIn
- [ ] Add URL to resume
- [ ] Add URL to GitHub profile

## 📈 Optional Enhancements

- [ ] Add blog section
- [ ] Add testimonials section
- [ ] Add certifications/achievements
- [ ] Add work experience timeline
- [ ] Create case studies for featured projects
- [ ] Add animations to skills section
- [ ] Implement lazy loading for images
- [ ] Add loading states
- [ ] Add 404 page
- [ ] Add sitemap.xml
- [ ] Add robots.txt
- [ ] Implement PWA features
- [ ] Add unit tests

## 🔍 SEO Optimization

- [ ] Add meta keywords
- [ ] Optimize image alt tags
- [ ] Add schema.org structured data
- [ ] Create XML sitemap
- [ ] Submit to Google Search Console
- [ ] Submit to Bing Webmaster Tools
- [ ] Check mobile-friendliness
- [ ] Test page speed (Lighthouse)
- [ ] Fix any accessibility issues

## ✅ Final Checklist

Before calling it "done":
- [ ] All checkboxes above are completed
- [ ] Website loads in < 3 seconds
- [ ] No broken links
- [ ] All images load properly
- [ ] Contact form sends emails
- [ ] Mobile experience is smooth
- [ ] SEO meta tags are complete
- [ ] You're proud to share it! 🎉

---

## 📝 Notes

Add any custom notes or reminders here:

```
[Your notes here]
```

---

**Remember**: Your portfolio is never truly "finished" - you can always update it with new projects and experiences! 🚀

**Last Updated**: [Add date when you complete customization]
