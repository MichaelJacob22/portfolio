# Michael Jacob — Professional Portfolio Website

A modern, high-performance, dark-themed personal portfolio website built with **React**, **Vite**, **TypeScript**, and **Tailwind CSS**. Designed specifically for **AI/ML** and **Software Engineering** internship recruiting.

---

## 🚀 Quick Start (Run Locally)

### 1. Prerequisites
Ensure you have **Node.js** (version 18 or newer) installed on your machine.
- Download Node.js: [https://nodejs.org/](https://nodejs.org/)

### 2. Installation
Open a terminal in the project directory:

```bash
cd "C:\Users\Michael\.gemini\antigravity\scratch\michael-jacob-portfolio"
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
The application will launch automatically at `http://localhost:3000`.

### 4. Production Build
```bash
npm run build
```
This compiles TypeScript and bundles minified assets into the `dist/` directory, ready for deployment.

---

## ⚡ Instant No-Install Preview

If you want to view the portfolio immediately without running `npm install`:
- Simply double-click **`portfolio_preview.html`** in this folder! It opens in Google Chrome or Microsoft Edge with all interactive features functioning out of the box.

---

## 📁 Project Architecture & File Structure

```
michael-jacob-portfolio/
├── public/
│   ├── resume.html          # Clean printable A4 ATS resume
│   ├── resume.pdf           # Downloadable PDF asset
│   └── images/              # Project screenshots & assets
├── src/
│   ├── components/
│   │   ├── Navbar.tsx            # Sticky blur nav, active indicator, mobile drawer
│   │   ├── Footer.tsx            # Brand footer, dynamic copyright, back-to-top
│   │   ├── SectionHeading.tsx    # Reusable section headers with tech badge
│   │   ├── ProjectCard.tsx       # Tech canvas preview, tags, detail trigger
│   │   ├── ProjectModal.tsx      # Deep-dive dialog (contributions, roadmap)
│   │   ├── SkillCategory.tsx     # Categorized skill blocks without fake % bars
│   │   ├── SocialLinks.tsx       # GitHub, LinkedIn, email icons
│   │   └── CopyEmailButton.tsx   # 1-click clipboard copy with feedback toast
│   ├── sections/
│   │   ├── Hero.tsx              # Interactive greeting, tech schematic, CTAs
│   │   ├── About.tsx             # ECE narrative & "Currently Exploring"
│   │   ├── Skills.tsx            # Categorized skills grid
│   │   ├── Projects.tsx          # Filterable project showcase + modal view
│   │   ├── Education.tsx         # Sri Shakthi & Anna University credentials
│   │   ├── Journey.tsx           # Technical milestones & learning journey
│   │   ├── ResumeSection.tsx     # Download & preview resume CTAs
│   │   └── Contact.tsx           # Direct email, copy, LinkedIn, mailto form
│   ├── data/
│   │   ├── profile.ts            # Central profile details & bio
│   │   ├── skills.ts             # Verified technical tools & frameworks
│   │   ├── projects.ts           # Project data (YOLO, Agentic, Telegaurd)
│   │   ├── education.ts          # Academic timeline & coursework
│   │   └── experience.ts         # Milestones & key learnings
│   ├── types/
│   │   └── index.ts              # Strongly typed TypeScript interfaces
│   ├── App.tsx                   # Master page layout
│   ├── main.tsx                  # React DOM root entry
│   └── index.css                 # Tailwind directives, dark theme tokens
├── package.json                  # Dependencies and build scripts
├── tailwind.config.js            # Design tokens (cyan/blue/dark palettes)
├── tsconfig.json                 # TypeScript strict configuration
├── vite.config.ts                # Vite build and dev server config
├── vercel.json                   # Vercel SPA rewrite rules
└── README.md                     # Documentation & deployment guide
```

---

## 🛠️ How to Customize Your Content

All content is cleanly decoupled from presentation inside the `src/data/` folder:

| File | What to Customize |
| :--- | :--- |
| **`src/data/profile.ts`** | Your name, tagline, email, phone, location, LinkedIn/GitHub URLs, and "Currently Exploring" topics. |
| **`src/data/skills.ts`** | Add or remove technical tools as you learn them. |
| **`src/data/projects.ts`** | Add new projects, update GitHub repository URLs, or move roadmap items into completed features. |
| **`src/data/education.ts`** | Update your CGPA, semester milestones, or coursework. |
| **`src/data/experience.ts`** | Document new hackathons, workshops, or future internship achievements. |

---

## 📄 How to Update Your Resume PDF

1. Print or export your latest resume to PDF.
2. Save it directly as:
   `public/resume.pdf`
3. The "Download Resume" buttons across the website are already configured to download this exact file automatically.

---

## 🚢 Deploying to Vercel (Free & Instant)

### Option 1: Deploy with Vercel CLI
1. Install Vercel CLI globally:
   ```bash
   npm install -g vercel
   ```
2. In the project folder, run:
   ```bash
   vercel
   ```
3. Follow the on-screen prompts (accept defaults). Vercel will build and output your live production URL (e.g., `https://michael-jacob-portfolio.vercel.app`).

### Option 2: Deploy via GitHub (Recommended)
1. Initialize Git in the project:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Michael Jacob professional portfolio"
   ```
2. Create a new repository on your GitHub account (`MichaelJacob22/portfolio`).
3. Push your repository:
   ```bash
   git remote add origin https://github.com/MichaelJacob22/portfolio.git
   git branch -M main
   git push -u origin main
   ```
4. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
5. Select your GitHub repository and click **Deploy**. Vercel will automatically build and publish your site with continuous deployment on every Git push!

---

## 🌐 Connecting a Custom Domain (e.g. `michaeljacob.dev`)
1. In your Vercel Dashboard, go to **Settings &rarr; Domains**.
2. Enter your custom domain (e.g. `michaeljacob.dev` or `michaeljacob.in`).
3. Add the generated DNS CNAME or A-records in your domain registrar (Namecheap, GoDaddy, Cloudflare).
4. Vercel automatically provisions a free SSL (HTTPS) certificate.
