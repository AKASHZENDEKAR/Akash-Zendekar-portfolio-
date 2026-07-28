# Akash Zendekar — Portfolio

A modern, minimal, dark-mode personal portfolio built with React (Vite), Tailwind CSS, Framer Motion, and React Icons.

## Folder structure

```
src/
  components/
    ui/
      SectionHeading.jsx
      FloatingIcons.jsx
    Navbar.jsx
    Hero.jsx
    About.jsx
    Skills.jsx
    Experience.jsx
    Projects.jsx
    Education.jsx
    Contact.jsx
    Footer.jsx
  data/
    portfolioData.js   <- all content lives here (edit this to update the site)
  App.jsx
  main.jsx
  index.css
public/
  profile-placeholder.svg   <- replace with your real photo
  resume/                    <- drop your resume PDF here
  favicon.svg
```

All copy — name, bio, skills, projects, internships, education, links — is centralized in `src/data/portfolioData.js`, so you can update the entire site's content without touching any component.

## Before you deploy

1. **Photo** — replace `public/profile-placeholder.svg` with a real photo (e.g. `profile.jpg`), then update `personalInfo.photo` in `src/data/portfolioData.js`.
2. **Resume** — ✅ already included at `public/resume/Akash_Zendekar_Resume.pdf`. The Download Resume button in the hero links straight to it.
3. **Project GitHub links** — a few projects currently link to your GitHub profile as a placeholder since the exact repo URL wasn't provided. Update the `github` field for each project in `portfolioData.js` with the real repo links.
4. **Contact form → your inbox (required step)** — the form is wired to submit to [Formspree](https://formspree.io) so messages land directly in your email, but it needs a one-time setup on your end since this is a static site with no backend:
   1. Go to formspree.io and sign up with `akashzendekar@gmail.com`.
   2. Create a new form — you'll get an endpoint like `https://formspree.io/f/xxxxxxxx`.
   3. Open `src/data/portfolioData.js` and replace the placeholder `contactFormEndpoint` value with your real endpoint.
   4. Formspree emails a one-time confirmation link to `akashzendekar@gmail.com` — click it, or submissions won't go through.
   5. That's it — every message a recruiter sends through the site now arrives directly in your inbox. Free tier covers 50 submissions/month.

## 1. Installation

Clone or unzip the project, then move into the folder:

```bash
cd akash-portfolio
```

## 2. Install dependencies

```bash
npm install
```

## 3. Run the dev server

```bash
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## 4. Build for production

```bash
npm run build
```

This outputs an optimized, minified build to the `dist/` folder. Preview it locally with:

```bash
npm run preview
```

## 5. Deploy on Vercel

**Option A — Vercel CLI**

```bash
npm install -g vercel
vercel
```

Follow the prompts (framework preset: Vite, build command: `npm run build`, output directory: `dist`).

**Option B — Vercel dashboard**

1. Push this project to a GitHub repository.
2. Go to vercel.com/new and import the repo.
3. Vercel auto-detects Vite — confirm build command `npm run build` and output directory `dist`.
4. Click **Deploy**.

A `vercel.json` is already included with a rewrite rule so client-side routing (if added later) won't 404 on refresh.

## Tech stack

- React 19 + Vite
- Tailwind CSS 3
- Framer Motion (scroll-triggered animations, hover effects)
- React Icons (Feather + Simple Icons for LeetCode)

## Notes on performance & SEO

- Fonts are preconnected and loaded via `display=swap` to avoid render blocking.
- The hero image uses `loading="eager"` (above the fold); consider `loading="lazy"` for any images you add below the fold.
- `index.html` includes title, meta description, Open Graph, and Twitter card tags — update the `og:image` and canonical URL once you have a live domain.
- Reduced-motion is respected via a `prefers-reduced-motion` media query in `index.css`.
