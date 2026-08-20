# Lavanya — Portfolio Website

**Live Demo:** [https://lavu-create.github.io/Portfolio_Lavanya/](https://lavu-create.github.io/Portfolio_Lavanya/)

A personal developer portfolio built with plain **HTML5, CSS3, and Vanilla JavaScript**.
No frameworks, no build step, no dependencies. Deploy anywhere for free.

## Local Development

No installation required. Simply open `index.html` in your browser, or serve it locally:

```bash
# Option 1: Python (built into macOS/Linux)
python3 -m http.server 8080
# Then visit: http://localhost:8080

# Option 2: Node.js http-server
npx http-server .
# Then visit: http://localhost:8080

# Option 3: VS Code
# Install the "Live Server" extension, then right-click index.html → Open with Live Server
```

## File Structure

```
Portfolio/
├── index.html          ← Main HTML (all sections)
├── style.css           ← All styles (dark theme, responsive)
├── main.js             ← All JavaScript (nav, animations, rendering)
├── data.js             ← All portfolio content ← Edit this to update content
├── favicon.svg         ← "L" monogram favicon
├── public/
│   └── assets/
│       └── resume.pdf  ← Replace with your actual resume PDF
└── README.md
```

## Updating Content

**All text content lives in `data.js`.** To update any information:

1. Open `data.js`
2. Find the field you want to change (e.g., `email`, `projects`, `achievements`)
3. Edit the value
4. Save — no build step needed

## Adding Your Resume

Replace the placeholder file:
```bash
cp /path/to/your/resume.pdf public/assets/resume.pdf
```

The "View Resume" and "Download Resume" buttons will automatically work.

## Deployment

### GitHub Pages (Recommended — Free)
1. Push this folder to a GitHub repository
2. Go to **Settings → Pages**
3. Set source to **Deploy from a branch → main → / (root)**
4. Your site will be live at `https://your-username.github.io/repository-name/`

After deployment, update the `url` field in `data.js`:
```js
url: "https://lavu-create.github.io/Portfolio",
```

### Netlify (Alternative — Free, instant)
1. Go to [netlify.com](https://netlify.com) → New site from Git
2. Connect your repository
3. No build command needed — publish directory is `/`

### Vercel (Alternative — Free)
```bash
npx vercel --prod
```

## Content Accuracy

All claims on this website are sourced directly from verified resume data. See the content
audit in the strategy document for the list of verified vs. prohibited claims.

## Contact Form

The contact form uses a `mailto:` fallback — it opens the user's email client with
a pre-filled message. To upgrade to a real form submission, consider:
- [Formspree](https://formspree.io) — free tier, no backend needed
- [EmailJS](https://emailjs.com) — client-side email sending

Replace the `initContactForm()` function in `main.js` with your preferred integration.
