# Lavanya — Portfolio Website

**Live Website:** [https://lavu-create.github.io/Portfolio_Lavanya/](https://lavu-create.github.io/Portfolio_Lavanya/)

A modern, responsive personal developer portfolio engineered with **HTML5, CSS3, and Vanilla JavaScript**. Designed with zero build tooling, zero runtime dependencies, high contrast, and accessible UI interactions.

---

## Overview

- **Author:** Lavanya
- **Positioning:** Computer Engineering Student | Software Development | Data Science & AI
- **Institution:** Thapar Institute of Engineering & Technology (B.Tech. Computer Engineering, Expected May 2027, CGPA: 8.07)
- **Architecture:** Lightweight single-page application with a centralized data store (`data.js`) powering dynamic section rendering.

---

## Technology Stack

- **Core:** Semantic HTML5, CSS3 (Custom Properties, Flexbox, CSS Grid), Vanilla JavaScript (ES6+)
- **Typography & Icons:** Inter font via Google Fonts, custom inline SVG icons
- **Styling Architecture:** Single-accent dark theme (`#0d0d0d` base with `#3b82f6` accent), WCAG AA contrast compliance, responsive breakpoints
- **Tooling:** Zero build steps, bundlers, or package managers required. Runs natively in any modern web browser.

---

## Information Hierarchy & Sections

The portfolio uses a recruiter-focused information hierarchy:

1. **Hero:** Full-name header, dynamic typed tagline (`prefers-reduced-motion` compliant), concise oneliner, project CTA, resume link, contact button, and verified GitHub & LinkedIn links.
2. **About:** Academic background at TIET, technical focus across software engineering and data science, natural language proficiencies (English, Hindi, Punjabi), and verified key metrics.
3. **Featured Projects:** Deep-dive cards for Clario, ShopSense, and Nexora detailing problem statements, technical highlights, test suites, and repository links.
4. **Technical Skills:** Categorized into Programming, Frontend, Backend & APIs, Data Science & Machine Learning, Databases, Core Computer Science, and Tools.
5. **Work Experience:** Software Development Engineer Intern at Bluestock Fintech (Aug 2025 – Sep 2025, Remote).
6. **Education:** Thapar Institute of Engineering & Technology (B.Tech. Computer Engineering, CGPA 8.07) and Senior Secondary education at DAV Public School.
7. **Achievements:** GATE 2026 Qualified in Data Science and Artificial Intelligence (DA), Israel-India Hackathon 2025 (Round 3 of 108 teams), and World Computer Hacker League 2025 (National Round).
8. **Extracurricular:** Performing Member of Mudra Dance Society, TIET.
9. **Contact:** Direct email (`lavanya36914@gmail.com`), phone (`+91-7889272190`), verified social links, resume download, and a mailto contact form.

---

## Featured Projects

### 1. Clario — Full-Stack Productivity & Analytics Platform
- **Repository:** [lavu-create/Clario-FullStack-Productivity-System](https://github.com/lavu-create/Clario-FullStack-Productivity-System)
- **Role:** Lead Project (Full-Stack SPA)
- **Stack:** Vanilla JavaScript, Node.js, Express.js, MongoDB, Chart.js, JWT, bcrypt, Jest, Supertest
- **Highlights:**
  - JWT-authenticated REST API with bcrypt password hashing and CORS controls.
  - Server-side OpenWeatherMap proxy securing third-party API credentials.
  - Task and calendar event management, daily mood tracking, and visual analytics via Chart.js.
  - **9/9 passing Jest/Supertest integration tests** utilizing an isolated `mongodb-memory-server` environment covering authentication, protected routes, task CRUD, and CORS policies.

### 2. ShopSense — Multi-Tier E-Commerce Recommendation System
- **Repository:** [lavu-create/ShopSense](https://github.com/lavu-create/ShopSense)
- **Role:** Featured ML Project
- **Stack:** Python, Scikit-learn, TF-IDF, Pandas, NumPy, FastAPI
- **Highlights:**
  - Evaluated on **2.98M+ Amazon review interactions** across multiple ranking strategies.
  - Implements Popularity-based, User-based Collaborative Filtering (User-CF), Item-based Collaborative Filtering (Item-CF), and a Weighted Hybrid pipeline with cold-start routing.
  - Achieved **3.16% Recall@10** on a chronological evaluation split of 39K+ interactions across 10K+ users.
  - Lightweight FastAPI deployment optimized to strictly meet a **512 MB hosting memory constraint**.

### 3. Nexora — Assistive Communication Platform Prototype
- **Repository:** [lavu-create/Nexora-Hackathon](https://github.com/lavu-create/Nexora-Hackathon)
- **Role:** Supporting Hackathon Prototype
- **Stack:** HTML5, CSS3, JavaScript
- **Highlights:**
  - Web-based assistive communication platform prototype designed for ICU-ventilated patients.
  - Developed during the **Israel-India Hackathon 2025** (advanced to Round 3 among 108 competing teams) using AI-assisted development tools.
  - Separate dedicated interfaces for Patients, Nurses, and Family members to facilitate non-verbal bedside communication and status monitoring.

---

## Technical Features

- **Centralized Data Store:** All dynamic content is managed in `data.js`. Updating `data.js` immediately propagates changes across the site without editing complex HTML markup.
- **Scroll Reveal & Active Scroll-Spy:** Leverages native `IntersectionObserver` to trigger performant fade-in transitions and sync active header links during scrolling.
- **Accessible Design:**
  - Visible focus indicators (`:focus-visible`) for keyboard navigation.
  - Semantic landmark elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
  - Mobile drawer includes ESC key dismissal and outside-click closing.
  - Respects OS accessibility preferences (`prefers-reduced-motion: reduce`).
- **One-Click Email Copy:** Clipboard API integration with real-time visual feedback and graceful mailto fallback.
- **GitHub Pages Subpath Compatibility:** Uses relative asset links (`public/assets/...`) so screenshots, stylesheets, scripts, and PDF downloads resolve identically under both root domain and subfolder URLs (`/Portfolio_Lavanya/`).

---

## Project Structure

```
Portfolio/
├── index.html                  # Main semantic HTML document
├── style.css                   # Complete CSS stylesheet (tokens, layout, responsive)
├── main.js                     # DOM rendering, navbar interactions, animations, events
├── data.js                     # Single source of truth for all content & project data
├── favicon.svg                 # SVG brand favicon
├── public/
│   ├── assets/
│   │   ├── resume.pdf          # Latest verified resume (includes GATE 2026 DA)
│   │   ├── clario-screenshot.png
│   │   ├── shopsense-screenshot.png
│   │   └── nexora-screenshot.png
│   ├── favicon.svg
│   └── icons.svg
└── README.md                   # Project documentation
```

---

## Local Development & Setup

No compilation or package installation is required.

### Option 1: Python 3 (Built-in on macOS & Linux)
```bash
# From the repository root:
python3 -m http.server 8080
```
Then navigate to: `http://localhost:8080`

### Option 2: Node.js (via npx)
```bash
npx serve .
# Or:
npx http-server .
```

### Option 3: Direct File Execution
You can also open `index.html` directly in any web browser.

---

## Resume Asset

The current resume is located at:
```
public/assets/resume.pdf
```
Both the navigation "View Resume" link and the contact section "Download Resume" button point to this verified PDF.

---

## Deployment

### GitHub Pages (Active Setup)
The site is hosted live on GitHub Pages:
- **Repository:** `lavu-create/Portfolio_Lavanya`
- **Settings:** Deploy from a branch -> Branch: `main` -> Folder: `/ (root)`
- **Live URL:** [https://lavu-create.github.io/Portfolio_Lavanya/](https://lavu-create.github.io/Portfolio_Lavanya/)

---

## Contact & Profiles

- **Email:** [lavanya36914@gmail.com](mailto:lavanya36914@gmail.com)
- **LinkedIn:** [linkedin.com/in/lavanya14369](https://www.linkedin.com/in/lavanya14369/)
- **GitHub:** [github.com/lavu-create](https://github.com/lavu-create)
- **Location:** Patiala, Punjab, India
