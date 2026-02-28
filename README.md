# Sanket Shelke — Portfolio

Modern, production-ready personal portfolio built with React + Vite + Tailwind CSS + Framer Motion.

## ✨ Features

- Dark/Light theme toggle (persisted to localStorage)
- Custom animated cursor
- Smooth scroll animations with Framer Motion
- Fully responsive mobile-first design
- Typewriter hero text
- Animated skill progress bars
- Expandable experience timeline
- Animated project cards with hover effects
- Copy-to-clipboard email in contact section
- Resume download button
- SEO-optimized meta tags
- CSS grain texture overlay
- Custom scrollbar

## 🗂️ Folder Structure

```
sanket-portfolio/
├── public/
│   ├── favicon.svg
│   └── Sanket_Shelke_Resume.pdf   ← resume download
├── src/
│   ├── components/
│   │   ├── Navbar/        Navbar.jsx
│   │   ├── Hero/          Hero.jsx
│   │   ├── About/         About.jsx
│   │   ├── Skills/        Skills.jsx
│   │   ├── Experience/    Experience.jsx
│   │   ├── Projects/      Projects.jsx
│   │   ├── Contact/       Contact.jsx
│   │   └── shared/        Footer.jsx, CustomCursor.jsx
│   ├── data/
│   │   └── content.js     ← all portfolio content lives here
│   ├── hooks/
│   │   └── useInView.js   ← scroll intersection observer hook
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🚀 Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open http://localhost:5173
```

## 📦 Build for Production

```bash
npm run build
# Output in /dist folder

npm run preview  # preview prod build locally
```

## 🌐 Deploy on Vercel (Recommended)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Framework: **Vite** (auto-detected)
5. Build command: `npm run build`
6. Output directory: `dist`
7. Click **Deploy** ✅

Vercel auto-deploys on every push to `main`.

## 📄 Deploy on GitHub Pages

1. In `vite.config.js`, set `base` to your repo name:
   ```js
   base: '/your-repo-name/',
   ```

2. Install gh-pages (already in devDependencies):
   ```bash
   npm install
   ```

3. In `package.json`, add/update the homepage field:
   ```json
   "homepage": "https://yourusername.github.io/your-repo-name"
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

5. In GitHub repo settings → Pages → Source: `gh-pages` branch

> ⚠️ Note: For GitHub Pages, update the `base` in `vite.config.js` to your repo name.
> For Vercel/custom domain, keep `base: '/'` (default).

## ✏️ Customizing Content

All content is centralized in `src/data/content.js`:
- Edit `skills` array to update skills
- Edit `experiences` array for work history  
- Edit `projects` array for projects

To update the resume: replace `public/Sanket_Shelke_Resume.pdf` with your updated PDF.

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI library |
| Vite 5 | Build tool |
| Tailwind CSS 3 | Utility-first styling |
| Framer Motion 11 | Animations |
| React Icons 5 | Icon library |

## 🎨 Design System

- **Font Display**: Syne (headings, bold text)
- **Font Body**: DM Sans (body text)
- **Font Mono**: JetBrains Mono (code labels, badges)
- **Accent**: `#E8FF47` (electric yellow-green)
- **Dark BG**: `#0F0F0F`
- **Light BG**: `#F5F4EF`
