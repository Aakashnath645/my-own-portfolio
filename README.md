# Aakash Nath — Portfolio

A modern, Anthropic-inspired software engineer portfolio built with React and Vite. Features editorial typography, persistent light/dark mode, scroll-triggered animations, and full mobile responsiveness.

**Live:** Deployed on Vercel

---

## Tech Stack

| Layer        | Technology                                                   |
|-------------|--------------------------------------------------------------|
| Framework   | React 18, Vite 5                                             |
| Styling     | Vanilla CSS with CSS Custom Properties (design tokens)       |
| Typography  | Playfair Display, Cormorant Garamond, Inter (Google Fonts)   |
| Animations  | CSS transitions with custom `useInView` React hook           |
| Deployment  | Vercel (static export)                                       |

---

## Features

- **Light / Dark Mode** — Persistent theme toggle stored in `localStorage`
- **Fluid Typography** — `clamp()`-based sizing that scales across all viewports
- **Scroll Animations** — State-driven reveal animations using Intersection Observer
- **Responsive Design** — Three-tier breakpoints (1024px, 768px, 480px) across all components
- **Resume Download** — PDF served directly from `/public/resume.pdf`
- **Project Showcase** — Six featured projects with live demo and source links
- **Contact Integration** — Email, phone (with copy-to-clipboard), GitHub, and LinkedIn

---

## Project Structure

```
src/
  components/       # React components (Hero, About, Projects, Experience, Contact, etc.)
  data/             # Centralized content data (projects, skills, education, experience)
  hooks/            # Custom hooks (useInView for scroll-triggered animations)
  styles/           # Global design system (index.css with all tokens and utilities)
public/
  resume.pdf        # Downloadable resume
  favicon.svg       # Site favicon
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
git clone https://github.com/Aakashnath645/my-own-portfolio.git
cd my-own-portfolio
npm install
```

### Development

```bash
npm run dev
```

Opens at `http://localhost:5173/`

### Production Build

```bash
npm run build
npm run preview
```

---

## Design System

The design system is defined in `src/styles/index.css` using CSS Custom Properties:

- **Colors** — Warm terracotta accent palette with full light/dark theme support
- **Typography** — Three font families (sans, serif, accent) with fluid scaling
- **Spacing** — Consistent spacing scale from `xs` (0.25rem) to `5xl` (8rem)
- **Shapes** — Border radius tokens from `sm` (6px) to `pill` (100px)
- **Transitions** — Shared easing curves and duration tokens

---

## Deployment

This project is configured for Vercel deployment. Connect the GitHub repository to Vercel for automatic CI/CD on every push to `main`.

No additional configuration is required — Vite's default build output works out of the box with Vercel's static hosting.

---

## License

This project is open source and available for personal use and reference.

---

Built by [Aakash Nath](https://github.com/Aakashnath645)
