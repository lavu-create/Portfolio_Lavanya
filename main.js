/* ============================================================
   MAIN.JS — Portfolio interactions & dynamic rendering
   Reads from DATA (data.js) to populate all sections.
   No frameworks. No external dependencies.
   ============================================================ */

'use strict';

// ── Utility: safe DOM query ──────────────────────────────────
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

// ── Run after DOM is ready ───────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initHeroTyping();
  initScrollSpy();
  // Render all dynamic content FIRST so their .reveal elements exist in the DOM
  renderAbout();
  renderSkills();
  renderClarioHighlights();
  renderShopSenseMetrics();
  renderShopSenseModels();
  renderNexoraPoints();
  renderAchievements();
  renderExperience();
  renderEducation();
  renderExtracurricular();
  initCopyEmail();
  initContactForm();
  // Observe AFTER all content is in the DOM
  initScrollReveal();
});

/* ─────────────────────────────────────────────────────────────
   NAVBAR — scroll shadow + hamburger
──────────────────────────────────────────────────────────── */
function initNavbar() {
  const navbar    = $('#navbar');
  const hamburger = $('#hamburger');
  const mobileNav = $('#nav-mobile');

  // Scroll shadow
  const onScroll = () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Hamburger toggle
  hamburger.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
  });

  // Close mobile nav on link click
  $$('#nav-mobile a').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  // Close mobile nav on outside click
  document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && !mobileNav.contains(e.target)) {
      mobileNav.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });
}

/* ─────────────────────────────────────────────────────────────
   HERO TYPING EFFECT
──────────────────────────────────────────────────────────── */
function initHeroTyping() {
  const el = $('#hero-tagline');
  if (!el) return;

  // Respect reduced motion
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    el.textContent = DATA.personal.tagline;
    return;
  }

  const phrases = [
    DATA.personal.tagline,
    'Full-Stack Development',
    'REST APIs & Backend',
    'Data-Driven Systems',
    DATA.personal.tagline,
  ];

  let phraseIndex  = 0;
  let charIndex    = 0;
  let isDeleting   = false;

  // Cursor
  const cursor = document.createElement('span');
  cursor.className = 'typed-cursor';
  cursor.setAttribute('aria-hidden', 'true');

  function tick() {
    const current = phrases[phraseIndex];

    if (!isDeleting) {
      charIndex++;
      el.textContent = current.slice(0, charIndex);
    } else {
      charIndex--;
      el.textContent = current.slice(0, charIndex);
    }

    el.appendChild(cursor);

    let delay = isDeleting ? 40 : 70;

    if (!isDeleting && charIndex === current.length) {
      // Pause at end
      if (phraseIndex === phrases.length - 1) return; // final phrase — stop
      delay = 1800;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex++;
      delay = 300;
    }

    setTimeout(tick, delay);
  }

  tick();
}

/* ─────────────────────────────────────────────────────────────
   SCROLL REVEAL — IntersectionObserver
──────────────────────────────────────────────────────────── */
function initScrollReveal() {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) {
    $$('.reveal, .reveal-group').forEach(el => el.classList.add('visible'));
    return;
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

  $$('.reveal, .reveal-group').forEach(el => io.observe(el));
}

/* ─────────────────────────────────────────────────────────────
   SCROLL SPY — active nav link
──────────────────────────────────────────────────────────── */
function initScrollSpy() {
  const sections = $$('section[id], header[id]');
  const navLinks = $$('.nav-links a, #nav-mobile a');

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          const href = link.getAttribute('href');
          link.classList.toggle('active', href === `#${id}`);
        });
      }
    });
  }, { rootMargin: '-65px 0px -50% 0px' });

  sections.forEach(s => io.observe(s));
}

/* ─────────────────────────────────────────────────────────────
   ABOUT — fill from data
──────────────────────────────────────────────────────────── */
function renderAbout() {
  const el = $('#about-text');
  if (el) el.textContent = DATA.about;
}

/* ─────────────────────────────────────────────────────────────
   SKILLS — render categories
──────────────────────────────────────────────────────────── */
function renderSkills() {
  const grid = $('#skills-grid');
  if (!grid) return;

  grid.innerHTML = DATA.skills.map(cat => `
    <div class="skill-category">
      <div class="skill-category__title">${escHtml(cat.category)}</div>
      <div class="skill-tags">
        ${cat.items.map(s => `<span class="skill-tag">${escHtml(s)}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

/* ─────────────────────────────────────────────────────────────
   CLARIO highlights
──────────────────────────────────────────────────────────── */
function renderClarioHighlights() {
  const el = $('#clario-highlights');
  if (!el) return;

  const clario = DATA.projects.find(p => p.id === 'clario');
  if (!clario) return;

  el.innerHTML = clario.highlights.map(h => `
    <div class="highlight-item">
      <svg class="highlight-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
           fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
           aria-hidden="true">
        ${getIconPath(h.icon)}
      </svg>
      <span>${escHtml(h.label)}</span>
    </div>
  `).join('');
}

/* ─────────────────────────────────────────────────────────────
   SHOPSENSE metrics
──────────────────────────────────────────────────────────── */
function renderShopSenseMetrics() {
  const el = $('#shopsense-metrics');
  if (!el) return;

  const shop = DATA.projects.find(p => p.id === 'shopsense');
  if (!shop) return;

  el.innerHTML = shop.metrics.map(m => `
    <div class="metric-card">
      <div class="metric-value">${escHtml(m.value)}</div>
      <div class="metric-label">${escHtml(m.label)}</div>
    </div>
  `).join('');
}

/* ─────────────────────────────────────────────────────────────
   SHOPSENSE models
──────────────────────────────────────────────────────────── */
function renderShopSenseModels() {
  const el = $('#shopsense-models');
  if (!el) return;

  const shop = DATA.projects.find(p => p.id === 'shopsense');
  if (!shop) return;

  el.innerHTML = shop.models.map(m => `
    <div class="model-item">${escHtml(m)}</div>
  `).join('');
}

/* ─────────────────────────────────────────────────────────────
   NEXORA points
──────────────────────────────────────────────────────────── */
function renderNexoraPoints() {
  const el = $('#nexora-points');
  if (!el) return;

  const nex = DATA.projects.find(p => p.id === 'nexora');
  if (!nex) return;

  el.innerHTML = nex.highlights.map(h => `
    <div class="supporting-point">${escHtml(h)}</div>
  `).join('');
}

/* ─────────────────────────────────────────────────────────────
   ACHIEVEMENTS
──────────────────────────────────────────────────────────── */
function renderAchievements() {
  const grid = $('#achievements-grid');
  if (!grid) return;

  grid.innerHTML = DATA.achievements.map(a => `
    <div class="achievement-card">
      <svg class="achievement-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
           fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
           aria-hidden="true">
        <circle cx="12" cy="8" r="6"/>
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
      </svg>
      <h3 class="achievement-title">${escHtml(a.title)}</h3>
      <p class="achievement-desc">${escHtml(a.description)}</p>
      ${a.project ? `<p class="achievement-project">Project: <span>${escHtml(a.project)}</span></p>` : ''}
    </div>
  `).join('');
}

/* ─────────────────────────────────────────────────────────────
   EXPERIENCE
──────────────────────────────────────────────────────────── */
function renderExperience() {
  const list = $('#experience-list');
  if (!list) return;

  list.innerHTML = DATA.experience.map(e => `
    <div class="experience-card reveal">
      <div class="exp-header">
        <div>
          <div class="exp-role">${escHtml(e.role)}</div>
          <div class="exp-company">${escHtml(e.company)}</div>
        </div>
        <div class="exp-meta">
          <span class="exp-duration">${escHtml(e.duration)}</span>
          <span class="exp-location">${escHtml(e.location)}</span>
        </div>
      </div>
      <p class="exp-desc">${escHtml(e.description)}</p>
    </div>
  `).join('');
}

/* ─────────────────────────────────────────────────────────────
   EDUCATION
──────────────────────────────────────────────────────────── */
function renderEducation() {
  const el = $('#education-card');
  if (!el) return;

  el.innerHTML = DATA.education.map(edu => `
    <div class="education-card reveal" style="margin-bottom: 20px;">
      <div>
        <h3 class="edu-institution">${escHtml(edu.institution)}</h3>
        <p class="edu-degree">${escHtml(edu.degree)}</p>
        ${edu.details ? `<p class="edu-location">${escHtml(edu.details)}</p>` : ''}
        <p class="edu-location">${escHtml(edu.location)}</p>
      </div>
      <div class="edu-right">
        <p class="edu-cgpa-label">${escHtml(edu.scoreLabel)}</p>
        <p class="edu-cgpa">${escHtml(edu.scoreValue)}</p>
        <span class="edu-graduation">${escHtml(edu.graduation)}</span>
      </div>
    </div>
  `).join('');
}

/* ─────────────────────────────────────────────────────────────
   EXTRACURRICULAR
──────────────────────────────────────────────────────────── */
function renderExtracurricular() {
  const el = $('#extra-card');
  if (!el) return;

  const extra = DATA.extracurricular;
  el.innerHTML = `
    <div class="extra-card reveal">
      <svg class="extra-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
           fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
           aria-hidden="true">
        <path d="M9 18V5l12-2v13"/>
        <circle cx="6" cy="18" r="3"/>
        <circle cx="18" cy="16" r="3"/>
      </svg>
      <div>
        <div class="extra-role">${escHtml(extra.role)}</div>
        <div class="extra-org">${escHtml(extra.org)}</div>
        <p class="extra-desc">${escHtml(extra.description)}</p>
      </div>
    </div>
  `;
}

/* ─────────────────────────────────────────────────────────────
   COPY EMAIL BUTTON
──────────────────────────────────────────────────────────── */
function initCopyEmail() {
  const btn = $('#copy-email');
  if (!btn) return;

  btn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(DATA.personal.email);
      btn.classList.add('copied');
      btn.textContent = 'Copied!';
      setTimeout(() => {
        btn.classList.remove('copied');
        btn.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"
               fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
               aria-hidden="true">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
          </svg>
          Copy`;
      }, 2000);
    } catch {
      // Fallback: select text
      window.getSelection()?.selectAllChildren(btn.previousElementSibling);
    }
  });
}

/* ─────────────────────────────────────────────────────────────
   CONTACT FORM — mailto fallback
──────────────────────────────────────────────────────────── */
function initContactForm() {
  const form = $('#contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name    = form.querySelector('#cf-name').value.trim();
    const email   = form.querySelector('#cf-email').value.trim();
    const message = form.querySelector('#cf-message').value.trim();

    if (!name || !email || !message) return;

    const subject  = encodeURIComponent(`Portfolio contact from ${name}`);
    const body     = encodeURIComponent(`Hi Lavanya,\n\n${message}\n\nFrom: ${name}\nEmail: ${email}`);
    const mailto   = `mailto:${DATA.personal.email}?subject=${subject}&body=${body}`;

    window.location.href = mailto;
  });
}

/* ─────────────────────────────────────────────────────────────
   HELPERS
──────────────────────────────────────────────────────────── */

// Escape HTML to prevent XSS
function escHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Inline SVG icon paths for highlight icons
function getIconPath(icon) {
  const paths = {
    shield:   '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
    lock:     '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
    globe:    '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
    server:   '<rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>',
    check:    '<polyline points="20 6 9 17 4 12"/>',
    database: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>',
    file:     '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>',
  };
  return paths[icon] || paths.check;
}
