// ─────────────────────────────────────────────────────────────
//  main.js — Bento Portfolio
//  Renders tiles from DATA, handles sheet open/close,
//  theme toggle, scroll animations.
// ─────────────────────────────────────────────────────────────

/* ── SVG Icons ── */
const ICONS = {
  sun: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1" x2="12" y2="3"/>
    <line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1" y1="12" x2="3" y2="12"/>
    <line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>`,

  moon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>`,

  email: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>`,

  linkedin: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>`,

  github: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54
      6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38
      0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0
      5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>`,

  arrowUpRight: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
    <line x1="7" y1="17" x2="17" y2="7"/>
    <polyline points="7 7 17 7 17 17"/>
  </svg>`,

  externalLink: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>`,
};

/* ── Skill → Devicon mapping ── */
const SKILL_ICONS = {
  // Languages
  Python: "devicon-python-plain",
  SQL: "devicon-azuresqldatabase-plain colored",
  "C++": "devicon-cplusplus-plain colored",
  Java: "devicon-java-plain colored",
  C: "devicon-c-plain colored",
  Dart: "devicon-dart-plain colored",
  JavaScript: "devicon-javascript-plain colored",
  Golang: "devicon-go-plain colored",
  Erlang: "devicon-erlang-plain colored",
  Shell: "devicon-bash-plain colored",
  R: "devicon-r-plain colored",
  // Frameworks & Libraries
  pandas: "devicon-pandas-plain colored",
  NumPy: "devicon-numpy-plain colored",
  Matplotlib: "devicon-matplotlib-plain colored",
  "scikit-learn": "devicon-scikitlearn-plain colored",
  TensorFlow: "devicon-tensorflow-original colored",
  ReactJS: "devicon-react-plain colored",
  "Express.js": "devicon-express-plain",
  Flutter: "devicon-flutter-plain colored",
  "Material-UI": "devicon-materialui-plain colored",
  // Tools & Technologies
  PySpark: "devicon-apachespark-plain colored",
  MySQL: "devicon-mysql-plain colored",
  AWS: "devicon-amazonwebservices-plain-wordmark colored",
  Docker: "devicon-docker-plain colored",
  Linux: "devicon-linux-plain colored",
  GitHub: "devicon-github-original",
  Tableau: "devicon-tableau-plain colored",
  Selenium: "devicon-selenium-plain colored",
  Jupyter: "devicon-jupyter-plain colored",
  "Oracle DB": "devicon-oracle-plain colored",
  Firebase: "devicon-firebase-plain colored",
  "Android Studio": "devicon-androidstudio-plain colored",
  Git: "devicon-git-plain colored",
  JIRA: "devicon-jira-plain colored",
};

function skillIcon(name) {
  return SKILL_ICONS[name] ? `<i class="${SKILL_ICONS[name]}"></i>` : "";
}

/* ── Cert issuer logos ── */
const CERT_ISSUER_LOGOS = {
  NVIDIA:   { dark: "https://cdn.simpleicons.org/nvidia/76b900",   light: "https://cdn.simpleicons.org/nvidia/76b900" },
  Coursera: { dark: "https://cdn.simpleicons.org/coursera/ffffff", light: "https://cdn.simpleicons.org/coursera/0056d2" },
};

/* ── Company → Simple Icons mapping ── */
const COMPANY_ICONS = {
  Apple: "https://cdn.simpleicons.org/apple",
  "University of Florida – CTSI": "logos/uf.png",
};

function companyIcon(company, size = 14) {
  const url = COMPANY_ICONS[company];
  if (!url) return "";
  return `<img class="company-icon" src="${url}" width="${size}" height="${size}" alt="${company}">`;
}

/* ── Helpers ── */
function computeYOE(startDateStr) {
  const start = new Date(startDateStr);
  const now = new Date();
  const years = (now - start) / (1000 * 60 * 60 * 24 * 365.25);
  return Math.floor(years); // floor so it's never overstated
}

/* ── Tile Definitions ── */
const TILES = [
  { id: "about", gridClass: "tile-about", icon: "◉", title: "About" },
  { id: "projects", gridClass: "tile-projects", icon: "⬡", title: "Projects" },
  { id: "work", gridClass: "tile-work", icon: "◈", title: "Experience" },
  { id: "edu", gridClass: "tile-edu", icon: "◇", title: "Education & Skills" },
  { id: "cert", gridClass: "tile-cert", icon: "✦", title: "Certifications" },
  {
    id: "vol",
    gridClass: "tile-vol",
    icon: "❖",
    title: "Volunteering & Leadership",
  },
];

/* ── Sheet Content Renderers ── */

function renderAboutSheet() {
  const d = DATA;
  return `
    <div class="sheet-about-hero">
      <div class="sheet-avatar">${d.initials}</div>
      <div>
        <div class="sheet-about-name">${d.name}</div>
        <div class="sheet-about-role">Marketing Data Analyst @ ${companyIcon("Apple", 14)}<span>Apple</span></div>
      </div>
    </div>
    <p class="sheet-about-bio">${d.bio}</p>
    <div class="sheet-contact-links">
      <a class="sheet-contact-link" href="mailto:${d.email}" target="_blank" rel="noopener">
        <img class="social-icon" src="https://cdn.simpleicons.org/gmail" width="16" height="16" alt="Email"> ${d.email}
      </a>
      <a class="sheet-contact-link" href="${d.linkedin}" target="_blank" rel="noopener">
        <i class="devicon-linkedin-plain colored" style="font-size:17px"></i> LinkedIn: /sinhakshitij319
      </a>
      <a class="sheet-contact-link" href="${d.github}" target="_blank" rel="noopener">
        <i class="devicon-github-original" style="font-size:17px"></i> GitHub: /sinarest1608
      </a>
    </div>
  `;
}

function renderLogo(logo, size = 20) {
  if (!logo) return "";
  // Theme-variant logo: { dark: "...", light: "..." }
  if (typeof logo === "object") {
    return `
      <img class="theme-logo logo-dark-only" src="${logo.dark}" width="${size}" height="${size}" alt="">
      <img class="theme-logo logo-light-only" src="${logo.light}" width="${size}" height="${size}" alt="">
    `;
  }
  const isDevicon = logo.startsWith("devicon-");
  if (isDevicon) return `<i class="${logo}" style="font-size:${size}px"></i>`;
  return `<img class="company-icon" src="${logo}" width="${size}" height="${size}" alt="">`;
}

function renderWorkSheet() {
  return `
    <div class="timeline">
      ${DATA.experience
        .map(
          (job, i) => `
        <div class="timeline-item">
          <div class="timeline-line-col">
            <div class="timeline-dot"></div>
            ${i < DATA.experience.length - 1 ? '<div class="timeline-vert"></div>' : ""}
          </div>
          <div class="timeline-content">
            <div class="timeline-header">
              <div class="timeline-company">${renderLogo(job.logo)}<span>${job.company}</span></div>
              <div class="timeline-role">${job.role}</div>
              <div class="timeline-dates">${job.dates}</div>
            </div>
            <ul class="timeline-bullets">
              ${job.bullets.map((b) => `<li>${b}</li>`).join("")}
            </ul>
          </div>
        </div>
      `,
        )
        .join("")}
    </div>
  `;
}

function renderProjectsSheet() {
  return `
    <div class="projects-list">
      ${DATA.projects
        .map(
          (p) => `
        <div class="project-card">
          <div class="project-header">
            ${p.icon ? renderLogo(p.icon, 26) : ""}
            <div class="project-title">${p.title}</div>
          </div>
          <div class="tech-pills">
            ${p.tech.map((t) => `<span class="tech-pill">${t}</span>`).join("")}
          </div>
          <ul class="project-bullets">
            ${p.bullets.map((b) => `<li>${b}</li>`).join("")}
          </ul>
          <div class="project-links">
            ${
              p.github
                ? `
              <a class="project-link" href="${p.github}" target="_blank" rel="noopener">
                ${ICONS.github} GitHub
              </a>`
                : ""
            }
            ${
              p.demo
                ? `
              <a class="project-link" href="${p.demo}" target="_blank" rel="noopener">
                ${ICONS.externalLink} Live Demo
              </a>`
                : ""
            }
          </div>
        </div>
      `,
        )
        .join("")}
    </div>
  `;
}

function renderEduSheet() {
  const e = DATA.education;
  const s = DATA.skills;
  return `
    <div class="edu-card">
      <div class="edu-school">${e.school}</div>
      <div class="edu-meta">
        <span class="edu-degree">${e.degree}</span>
        <span class="edu-gpa">GPA ${e.gpa}</span>
        <span class="edu-date">${e.dates} · ${e.location}</span>
      </div>
      <div class="edu-note"><b>${e.note}</b></div>
    </div>

    <div class="skills-section">
      <div class="skills-section-title">Languages</div>
      <div class="skills-pills">
        ${s.languages.map((sk) => `<span class="skill-pill">${skillIcon(sk)}<span>${sk}</span></span>`).join("")}
      </div>

      <div class="skills-section-title">Frameworks & Libraries</div>
      <div class="skills-pills">
        ${s.frameworks.map((sk) => `<span class="skill-pill">${skillIcon(sk)}<span>${sk}</span></span>`).join("")}
      </div>

      <div class="skills-section-title">Tools & Technologies</div>
      <div class="skills-pills">
        ${s.tools.map((sk) => `<span class="skill-pill">${skillIcon(sk)}<span>${sk}</span></span>`).join("")}
      </div>
    </div>
  `;
}

function renderCertSheet() {
  return `
    <div class="cert-list">
      ${DATA.certifications
        .map(
          (c) => {
            const issuerLogo = CERT_ISSUER_LOGOS[c.issuer];
            const logoHtml = issuerLogo ? renderLogo(issuerLogo, 28) : "";
            return `
        <div class="cert-card">
          <div class="cert-card-logo">${logoHtml}</div>
          <div class="cert-card-main">
            <div class="cert-title">${c.title}</div>
            <div class="cert-meta">
              <span class="cert-issuer">${c.issuer}</span>
              <span class="cert-date">${c.issued}</span>
            </div>
          </div>
          ${
            c.url
              ? `<a class="cert-credential-btn" href="${c.url}" target="_blank" rel="noopener">Show Credential ${ICONS.externalLink}</a>`
              : `<span class="cert-issued-label">Issued ${c.issued}</span>`
          }
        </div>
      `;
          }
        )
        .join("")}
    </div>
  `;
}

function renderVolSheet() {
  return `
    <div class="timeline">
      ${DATA.volunteering
        .map(
          (v, i) => `
        <div class="timeline-item">
          <div class="timeline-line-col">
            <div class="timeline-dot"></div>
            ${i < DATA.volunteering.length - 1 ? '<div class="timeline-vert"></div>' : ""}
          </div>
          <div class="timeline-content">
            <div class="timeline-header">
              <div class="timeline-company">${renderLogo(v.logo)}<span>${v.org}</span></div>
              <div class="timeline-role">${v.role}</div>
              ${v.dates ? `<div class="timeline-dates">${v.dates}</div>` : ""}
            </div>
            <ul class="timeline-bullets">
              ${v.bullets.map((b) => `<li>${b}</li>`).join("")}
            </ul>
          </div>
        </div>
      `,
        )
        .join("")}
    </div>
  `;
}

const SHEET_RENDERERS = {
  about: { render: renderAboutSheet, icon: "◉", title: "About" },
  work: { render: renderWorkSheet, icon: "◈", title: "Experience" },
  projects: { render: renderProjectsSheet, icon: "⬡", title: "Projects" },
  edu: { render: renderEduSheet, icon: "◇", title: "Education & Skills" },
  cert: { render: renderCertSheet, icon: "✦", title: "Certifications" },
  vol: {
    render: renderVolSheet,
    icon: "❖",
    title: "Volunteering & Leadership",
  },
};

/* ── Tile Inner HTML ── */

function buildAboutTile() {
  const d = DATA;
  return `
    <div class="tile-bg-glyph">◉</div>
    <div class="tile-expand-icon">${ICONS.arrowUpRight}</div>
    <div class="about-horizontal">
      <div class="about-horizontal-left">
        <div class="avatar">${d.initials}</div>
        <div class="about-name">${d.name}</div>
        <div class="about-role">Marketing Data Analyst @ ${companyIcon("Apple", 13)}<span>Apple</span></div>
      </div>
      <div class="about-horizontal-center">
        <p class="about-bio-tile">${d.bio}</p>
      </div>
      <div class="about-horizontal-right">
        <div class="about-links">
          <a class="about-link" href="mailto:${d.email}" onclick="event.stopPropagation()">
            <img class="social-icon" src="https://cdn.simpleicons.org/gmail" width="14" height="14" alt="Email"> Email
          </a>
          <a class="about-link" href="${d.linkedin}" target="_blank" rel="noopener" onclick="event.stopPropagation()">
            <i class="devicon-linkedin-plain colored" style="font-size:15px"></i> LinkedIn
          </a>
          <a class="about-link" href="${d.github}" target="_blank" rel="noopener" onclick="event.stopPropagation()">
            <i class="devicon-github-original" style="font-size:15px"></i> GitHub
          </a>
        </div>
      </div>
    </div>
  `;
}

function buildGenericTile(tile) {
  const yoe = computeYOE(DATA.yoeStart);

  // ── Projects: colorful icon grid ──
  if (tile.id === "projects") {
    const icons = DATA.projects
      .map((p) => `<span class="tile-proj-icon">${renderLogo(p.icon, 26)}</span>`)
      .join("");
    return `
      <div class="tile-bg-glyph">${tile.icon}</div>
      <div class="tile-expand-icon">${ICONS.arrowUpRight}</div>
      <div class="tile-title">${tile.title}</div>
      <div class="tile-icon-grid">${icons}</div>
    `;
  }

  // ── Certifications: two full-height logo panels ──
  if (tile.id === "cert") {
    return `
      <div class="tile-expand-icon">${ICONS.arrowUpRight}</div>
      <div class="tile-title">${tile.title}</div>
      <div class="tile-cert-split">
        <div class="tile-cert-half">
          <img class="logo-dark-only" src="https://cdn.simpleicons.org/nvidia/76b900" alt="NVIDIA">
          <img class="logo-light-only" src="https://cdn.simpleicons.org/nvidia/76b900" alt="NVIDIA">
        </div>
        <div class="tile-cert-half">
          <img class="logo-dark-only" src="https://cdn.simpleicons.org/coursera/ffffff" alt="Coursera">
          <img class="logo-light-only" src="https://cdn.simpleicons.org/coursera/0056d2" alt="Coursera">
        </div>
      </div>
    `;
  }

  // ── Volunteering: org logo grid ──
  if (tile.id === "vol") {
    const logos = DATA.volunteering
      .map((v) => `<span class="tile-org-logo">${renderLogo(v.logo, 30)}</span>`)
      .join("");
    return `
      <div class="tile-bg-glyph">${tile.icon}</div>
      <div class="tile-expand-icon">${ICONS.arrowUpRight}</div>
      <div class="tile-title">${tile.title}</div>
      <div class="tile-logo-grid">${logos}</div>
    `;
  }

  // ── Default (work, edu): stat number ──
  const stats = {
    work: { num: `${yoe}+`, label: "Yrs. Software Dev & Analytics." },
    edu: { num: "MS", label: "CS Degree." },
  };
  const teasers = {
    work: DATA.experience.map((e) => e.company.split("–")[0].trim()).join("  ·  "),
    edu: `MS Computer Science · University of Florida`,
  };
  const previews = {
    work: DATA.experience
      .map(
        (e) =>
          `<span class="tile-skill-pill">${renderLogo(e.logo, 14)}<span>${e.company.split("–")[0].trim()}</span></span>`,
      )
      .join(""),
    edu: [...DATA.skills.languages, ...DATA.skills.frameworks]
      .slice(0, 7)
      .map(
        (s) =>
          `<span class="tile-skill-pill">${skillIcon(s)}<span>${s}</span></span>`,
      )
      .join(""),
  };

  const stat = stats[tile.id] || { num: "", label: "" };
  return `
    <div class="tile-bg-glyph">${tile.icon}</div>
    <div class="tile-expand-icon">${ICONS.arrowUpRight}</div>
    <div class="tile-title">${tile.title}</div>
    <div class="tile-stat">
      <div class="tile-stat-num">${stat.num}</div>
      <div class="tile-stat-label">${stat.label}</div>
      <p class="tile-teaser">${teasers[tile.id] || ""}</p>
    </div>
    <div class="tile-skill-preview" style="margin-top:16px">${previews[tile.id] || ""}</div>
  `;
}

/* ── Render Bento Grid ── */
function renderGrid() {
  const grid = document.getElementById("bento-grid");

  TILES.forEach((tile) => {
    const el = document.createElement("div");
    el.className = `tile ${tile.gridClass}`;
    el.dataset.section = tile.id;
    el.setAttribute("role", "button");
    el.setAttribute("tabindex", "0");
    el.setAttribute("aria-label", `Open ${tile.title}`);

    el.innerHTML =
      tile.id === "about" ? buildAboutTile() : buildGenericTile(tile);

    el.addEventListener("click", () => openSheet(tile.id));
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openSheet(tile.id);
      }
    });

    grid.appendChild(el);
  });
}

/* ── Sheet Open / Close ── */
let currentSection = null;

function openSheet(sectionId) {
  const config = SHEET_RENDERERS[sectionId];
  if (!config) return;

  currentSection = sectionId;

  document.getElementById("sheet-icon").textContent = config.icon;
  document.getElementById("sheet-title").textContent = config.title;
  document.getElementById("sheet-body").innerHTML = config.render();

  document.getElementById("sheet").classList.add("open");
  document.getElementById("backdrop").classList.add("visible");
  document.body.style.overflow = "hidden";

  // Focus close button for accessibility
  setTimeout(() => document.getElementById("sheet-close").focus(), 50);
}

function closeSheet() {
  const sheet = document.getElementById("sheet");
  sheet.classList.remove("open");
  sheet.classList.add("closing");
  document.getElementById("backdrop").classList.remove("visible");
  document.body.style.overflow = "";
  currentSection = null;
  sheet.addEventListener(
    "animationend",
    () => sheet.classList.remove("closing"),
    { once: true },
  );
}

/* ── Theme Toggle ── */
const THEME_KEY = "portfolio-theme";

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  document.getElementById("theme-toggle").innerHTML =
    theme === "dark" ? ICONS.sun : ICONS.moon;
  localStorage.setItem(THEME_KEY, theme);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme");
  applyTheme(current === "dark" ? "light" : "dark");
}

/* ── Scroll Fade-in ── */
function initScrollAnimations() {
  const tiles = document.querySelectorAll(".tile");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // Stagger delay based on tile index
          const idx = Array.from(tiles).indexOf(entry.target);
          setTimeout(() => entry.target.classList.add("visible"), idx * 80);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 },
  );

  tiles.forEach((tile) => observer.observe(tile));
}

/* ── Init ── */
document.addEventListener("DOMContentLoaded", () => {
  // Restore theme — default light (Apple style)
  const saved = localStorage.getItem(THEME_KEY) || "light";
  applyTheme(saved);

  // Render tiles
  renderGrid();

  // Scroll animations
  initScrollAnimations();

  // Theme toggle
  document
    .getElementById("theme-toggle")
    .addEventListener("click", toggleTheme);

  // Close handlers
  document.getElementById("sheet-close").addEventListener("click", closeSheet);
  document.getElementById("backdrop").addEventListener("click", closeSheet);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && currentSection) closeSheet();
  });
});
