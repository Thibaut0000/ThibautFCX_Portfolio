# 🎨 Visual Style Guide

## Color Palette

### Primary Colors (Indigo-Purple Gradient)
```css
Indigo-500: #6366f1
Indigo-600: #4f46e5
Indigo-700: #4338ca
Purple-500: #a855f7
Purple-600: #9333ea
Pink-500: #ec4899
```

### Neutral Colors
```css
White: #ffffff
Gray-50: #f9fafb
Gray-100: #f3f4f6
Gray-700: #374151
Gray-800: #1f2937
Gray-900: #111827
```

## Typography

### Font Families
- **Display/Headings**: Poppins (600, 700, 800)
- **Body Text**: Inter (300, 400, 500, 600)

### Font Sizes
- **Hero Title**: 4xl-7xl (clamp based on screen)
- **Page Titles**: 4xl-5xl
- **Section Titles**: 2xl-3xl
- **Body**: base-lg
- **Small Text**: sm-xs

### Font Weights
- Light: 300
- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700
- Extra Bold: 800

## Spacing

### Standard Spacing Scale (Tailwind)
- xs: 0.5rem (8px)
- sm: 0.75rem (12px)
- base: 1rem (16px)
- lg: 1.25rem (20px)
- xl: 1.5rem (24px)
- 2xl: 2rem (32px)
- 3xl: 3rem (48px)
- 4xl: 4rem (64px)

### Section Padding
- Desktop: py-20 (5rem / 80px)
- Mobile: py-12 (3rem / 48px)

### Container
- Max Width: 7xl (80rem / 1280px)
- Padding: px-4 sm:px-6 lg:px-8

## Components

### Buttons

**Primary Button (Gradient)**
```jsx
className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 
  text-white rounded-lg font-semibold shadow-lg 
  hover:shadow-xl transition-shadow"
```

**Secondary Button (Outlined)**
```jsx
className="px-8 py-4 border-2 border-indigo-600 text-indigo-600 
  rounded-lg font-semibold hover:bg-indigo-600 
  hover:text-white transition-colors"
```

**Icon Button**
```jsx
className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 
  hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
```

### Cards

**Standard Card**
```jsx
className="bg-white dark:bg-gray-800 rounded-xl shadow-lg 
  hover:shadow-2xl transition-all p-6"
```

**Glass Card**
```jsx
className="bg-white/10 backdrop-blur-lg border border-white/20 
  rounded-xl p-6"
```

### Forms

**Input Field**
```jsx
className="w-full px-4 py-3 rounded-lg border border-gray-300 
  dark:border-gray-600 bg-white dark:bg-gray-700 
  focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
```

**Label**
```jsx
className="block text-sm font-medium text-gray-700 
  dark:text-gray-300 mb-2"
```

## Animations

### Framer Motion Variants

**Container (Stagger Children)**
```javascript
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}
```

**Item (Slide Up)**
```javascript
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
}
```

**Hover Scale**
```jsx
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
```

### CSS Animations

**Gradient Animation**
```css
animation: gradient 8s linear infinite
```

**Float Animation**
```css
animation: float 6s ease-in-out infinite
```

**Fade In**
```css
animation: fadeIn 0.5s ease-in
```

## Shadows

### Tailwind Shadow Scale
- sm: Small, subtle shadow
- md: Default shadow
- lg: Large shadow for cards
- xl: Extra large for elevated elements
- 2xl: Maximum elevation

### Usage
```jsx
shadow-lg hover:shadow-2xl
```

## Border Radius

### Standard Radius
- sm: 0.25rem (4px)
- base: 0.5rem (8px)
- lg: 0.75rem (12px)
- xl: 1rem (16px)
- 2xl: 1.5rem (24px)
- full: 9999px (circle)

### Usage
- Buttons: rounded-lg
- Cards: rounded-xl or rounded-2xl
- Images: rounded-full (circular)
- Badges: rounded-full

## Icons

### Size Guide
- Small: 16px-20px
- Medium: 24px-32px
- Large: 48px-64px

### Icon Library
Using `react-icons` package:
- Hi (Hero Icons) - UI elements
- Fa (Font Awesome) - Social media
- Si (Simple Icons) - Tech logos

### Usage Example
```jsx
import { HiMenu } from 'react-icons/hi'
<HiMenu size={24} />
```

## Gradients

### Text Gradient
```jsx
className="gradient-text"
// Applies: bg-clip-text text-transparent 
// bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
```

### Background Gradient
```jsx
className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50
  dark:from-gray-900 dark:via-purple-900/20 dark:to-gray-900"
```

### Button Gradient
```jsx
className="bg-gradient-to-r from-indigo-600 to-purple-600"
```

## Responsive Breakpoints

```css
/* Mobile First Approach */
sm: 640px   /* Small devices (phones) */
md: 768px   /* Medium devices (tablets) */
lg: 1024px  /* Large devices (laptops) */
xl: 1280px  /* Extra large (desktops) */
2xl: 1536px /* 2X large (large desktops) */
```

### Usage
```jsx
className="text-2xl md:text-4xl lg:text-6xl"
className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
```

## Dark Mode

### Implementation
Using `dark:` prefix with Tailwind classes

### Color Strategy
- Light mode: White backgrounds, gray text
- Dark mode: Dark backgrounds, light text
- Always maintain contrast ratios for accessibility

### Example
```jsx
className="bg-white dark:bg-gray-900 
  text-gray-900 dark:text-white"
```

## Accessibility

### Focus States
```jsx
className="focus:ring-2 focus:ring-indigo-500 
  focus:outline-none"
```

### ARIA Labels
```jsx
aria-label="Scroll to top"
```

### Semantic HTML
- Use proper heading hierarchy (h1 → h2 → h3)
- Use semantic tags (nav, main, section, footer)
- Add alt text to all images

## Best Practices

### Component Structure
1. Import statements
2. Component definition
3. State/hooks
4. Helper functions
5. JSX return

### Tailwind Classes Order
1. Layout (flex, grid)
2. Sizing (w-, h-)
3. Spacing (p-, m-)
4. Typography (text-, font-)
5. Colors (bg-, text-)
6. Effects (shadow-, opacity-)
7. Interactions (hover:, focus:)
8. Responsive (md:, lg:)

### Animation Guidelines
- Keep animations subtle (< 0.5s for UI elements)
- Use easing functions (ease-in-out)
- Avoid animating layout properties
- Prefer transforms over position changes

## Quick Copy Templates

### Section Container
```jsx
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
  {/* Content */}
</div>
```

### Gradient Text
```jsx
<h1 className="gradient-text font-display text-5xl font-bold">
  Your Title
</h1>
```

### Animated Card
```jsx
<motion.div
  whileHover={{ y: -8 }}
  className="bg-white dark:bg-gray-800 rounded-xl p-6 
    shadow-lg hover:shadow-2xl transition-all"
>
  {/* Card content */}
</motion.div>
```

### Social Icon Button
```jsx
<motion.a
  whileHover={{ scale: 1.1, y: -2 }}
  href="https://github.com/yourusername"
  className="w-10 h-10 flex items-center justify-center 
    rounded-full bg-gray-200 dark:bg-gray-800 
    hover:bg-indigo-600 hover:text-white transition-all"
>
  <FaGithub size={20} />
</motion.a>
```

---

## 🎨 Want to Change the Color Scheme?

### Step 1: Choose Your Colors
Use tools like:
- [Coolors.co](https://coolors.co) - Color palette generator
- [Tailwind Color Generator](https://uicolors.app) - Generate Tailwind colors

### Step 2: Update Gradient Classes
Replace these throughout the codebase:
- `from-indigo-500` → `from-yourcolor-500`
- `to-purple-600` → `to-yourcolor-600`

### Step 3: Update Tailwind Config
Edit `tailwind.config.js` to add custom colors if needed.

---

**Remember**: Consistency is key! Stick to this style guide for a cohesive design. 🎨✨
