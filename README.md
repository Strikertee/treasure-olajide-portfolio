# Treasure Olajide — Personal Portfolio

A premium, modern personal portfolio website for Treasure Olajide — AI/ML Engineer, Product Builder & Technical Lead.

## 🎯 Overview

This portfolio showcases:
- **AI/ML Engineering** — Computer vision, LLMs, edge deployment
- **Product Building** — End-to-end product development
- **Technical Leadership** — Leading Devions technology team
- **Real-world Impact** — Healthcare, transportation, education projects

## 🛠 Tech Stack

- **React 18** + **Vite** — Modern frontend framework
- **Vanilla CSS** — Custom design system, no UI libraries
- **Intersection Observer API** — Scroll animations
- **Semantic HTML** — Accessibility-first approach

## 🎨 Design System

- **Dark theme** — Near-black backgrounds (#0A0A0A)
- **Warm orange accent** — #FF6600 (Devions brand color)
- **Typography** — Geist, Geist Mono, Space Grotesk
- **Responsive** — Mobile-first, works on all devices
- **Accessible** — WCAG AA compliant, prefers-reduced-motion support

## 📁 Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── Button.jsx
│   ├── Card.jsx
│   ├── Footer.jsx
│   ├── Navbar.jsx
│   ├── ProjectCard.jsx
│   ├── ProjectEvolution.jsx
│   └── Tag.jsx
├── sections/         # Page sections
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── CurrentlyBuilding.jsx
│   ├── Devions.jsx
│   ├── Experience.jsx
│   ├── Hero.jsx
│   ├── Projects.jsx
│   ├── Recognition.jsx
│   ├── Skills.jsx
│   └── Stats.jsx
├── data/             # Content data (easy to update)
│   ├── personal.js
│   ├── projects.js
│   ├── experience.js
│   ├── skills.js
│   └── recognition.js
├── styles/
│   └── globals.css   # Design system & utilities
├── App.jsx
└── main.jsx
```

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Customization

All content is centralized in `src/data/`:
- **Personal info** — `personal.js`
- **Projects** — `projects.js`
- **Experience** — `experience.js`
- **Skills** — `skills.js`
- **Recognition** — `recognition.js`

To add a new project:
1. Add project object to `projects.js`
2. Add placeholder image to `public/projects/`
3. Project automatically appears in portfolio

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel deploy
```

### Netlify
```bash
npm run build
# Drag dist/ folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Push dist/ to gh-pages branch
```

## ♿ Accessibility Features

- Semantic HTML5 elements
- Proper heading hierarchy (h1-h6)
- ARIA labels and roles
- Keyboard navigation support
- Visible focus states
- Color contrast compliance
- Reduced motion support
- Screen reader optimized

## ⚡ Performance

- Lazy-loaded images
- Minimal dependencies
- Optimized CSS (51KB gzipped)
- Code-split JavaScript
- No heavy animation libraries
- Fast initial load

## 📄 License

MIT License — Feel free to use as inspiration for your own portfolio.

---

Built with curiosity and code by Treasure Olajide.