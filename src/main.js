import './style.css'

document.querySelector('#app').innerHTML = `
  <nav class="navbar">
    <a class="brand" href="#top" aria-label="NanoOS home">
      <span class="brand-mark">N</span>
      <span>NanoOS</span>
    </a>

    <div class="nav-links">
      <a href="#features">Features</a>
      <a href="#desktop">Desktop</a>
      <a href="#editions">Editions</a>
      <a href="#roadmap">Roadmap</a>
    </div>

    <a class="nav-button" href="#download">Get NanoOS</a>
  </nav>

  <main id="top">

    <section class="hero-section">
      <div class="hero-content">
        <div class="eyebrow">
          <span class="status-dot"></span>
          Arch Linux based
        </div>

        <h1>Your Linux,<br><span>Refined.</span></h1>

        <p>
          NanoOS is a modern Linux project focused on speed, simplicity,
          customization, and a carefully crafted desktop experience.
        </p>

        <div class="hero-buttons">
          <a class="primary-button" href="#editions">
            Explore editions
            <span>→</span>
          </a>

          <a class="secondary-button" href="#roadmap">
            View roadmap
          </a>
        </div>

        <div class="hero-stats">
          <div>
            <strong>Arch</strong>
            <span>Foundation</span>
          </div>
          <div>
            <strong>COSMIC</strong>
            <span>Desktop</span>
          </div>
          <div>
            <strong>Open</strong>
            <span>Source</span>
          </div>
        </div>
      </div>

      <div class="hero-visual" aria-hidden="true">
        <div class="orb orb-one"></div>
        <div class="orb orb-two"></div>
        <div class="glow"></div>

        <div class="nano-emblem">
          <div class="nano-emblem-inner">
            <span>N</span>
          </div>
        </div>

        <div class="floating-card floating-card-top">
          <span class="floating-dot"></span>
          <span>Built on Arch</span>
        </div>

        <div class="floating-card floating-card-bottom">
          <span>01</span>
          <span>Glacier experience</span>
        </div>
      </div>
    </section>

    <section id="features" class="section">
      <div class="section-heading">
        <span>01</span>
        <h2>Built different.</h2>
      </div>

      <div class="feature-grid">
        <article class="feature-card">
          <div class="feature-icon">⚡</div>
          <h3>Fast</h3>
          <p>
            An Arch Linux foundation with a focused software stack and
            minimal unnecessary overhead.
          </p>
        </article>

        <article class="feature-card">
          <div class="feature-icon">❄</div>
          <h3>Glacier</h3>
          <p>
            A distinctive visual identity designed around clean surfaces,
            cool tones, depth, and clarity.
          </p>
        </article>

        <article class="feature-card">
          <div class="feature-icon">◈</div>
          <h3>Open</h3>
          <p>
            Pacman and the Arch ecosystem at the core, with modern desktop
            software and gaming tools available.
          </p>
        </article>
      </div>
    </section>

    <section id="desktop" class="desktop-section">
      <div class="desktop-copy">
        <span>02 — DESKTOP</span>

        <h2>
          A desktop that
          <br>
          stays out of your way.
        </h2>

        <p>
          NanoOS is exploring a focused desktop experience around COSMIC,
          with carefully selected tools for everyday computing and gaming.
        </p>

        <div class="desktop-pills">
          <span>COSMIC</span>
          <span>Wayland</span>
          <span>Kitty</span>
          <span>Linux</span>
        </div>
      </div>

      <div class="desktop-preview">
        <div class="preview-bar">
          <div class="window-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div class="preview-title">NanoOS</div>

          <div class="preview-status">
            <span class="status-dot"></span>
          </div>
        </div>

        <div class="preview-content">
          <div class="preview-sidebar">
            <div class="sidebar-logo">N</div>
            <span class="sidebar-line active"></span>
            <span class="sidebar-line"></span>
            <span class="sidebar-line"></span>
            <span class="sidebar-line"></span>
          </div>

          <div class="preview-main">
            <div class="preview-terminal">
              <div class="terminal-top">
                <span>falcon@nanoos</span>
                <span>~</span>
              </div>

              <strong>NanoOS</strong>
              <small>Your Linux, Refined.</small>

              <div class="terminal-line">
                <span>$</span> fastfetch
              </div>
            </div>

            <div class="preview-mini-grid">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="editions" class="section editions-section">
      <div class="section-heading">
        <span>03</span>
        <h2>Choose your NanoOS.</h2>
      </div>

      <div class="edition-grid">

        <article class="edition-card edition-featured">
          <div class="edition-top">
            <span class="edition-icon">🎮</span>
            <span class="edition-badge">ACTIVE DEVELOPMENT</span>
          </div>

          <div>
            <span class="edition-label">NANOOS GAMING</span>
            <h3>Built to play.</h3>
            <p>
              A gaming-focused NanoOS edition with modern graphics,
              compatibility, and performance tools.
            </p>
          </div>

          <div class="edition-tags">
            <span>Steam</span>
            <span>Wine</span>
            <span>Gamescope</span>
            <span>MangoHud</span>
          </div>
        </article>

        <article class="edition-card">
          <div class="edition-top">
            <span class="edition-icon">◌</span>
            <span class="edition-badge muted-badge">EXPERIMENTAL</span>
          </div>

          <div>
            <span class="edition-label">NANOOS BASIC</span>
            <h3>Simple by design.</h3>
            <p>
              The lightweight NanoOS foundation for users who want a clean,
              straightforward desktop experience.
            </p>
          </div>

          <div class="edition-tags">
            <span>Arch</span>
            <span>COSMIC</span>
            <span>Minimal</span>
          </div>
        </article>

      </div>
    </section>

    <section id="download" class="iso-page">
      <div class="iso-hero">
        <span class="edition-label">DOWNLOAD</span>

        <h2>
          Get
          <span>NanoOS.</span>
        </h2>

        <p>
          NanoOS is actively evolving. Stable public downloads will appear
          here as releases become ready.
        </p>
      </div>

      <div class="download-panel">
        <div>
          <span class="panel-kicker">LATEST DEVELOPMENT</span>
          <h3>NanoOS Gaming</h3>
          <p>
            The gaming edition is currently being developed and tested.
          </p>
        </div>

        <div class="download-meta">
          <span>Arch Linux based</span>
          <span>x86_64</span>
          <span>Development build</span>
        </div>

        <button class="iso-button" type="button" disabled>
          Downloads coming soon
        </button>
      </div>
    </section>

    <section id="roadmap" class="section roadmap-section">
      <div class="section-heading">
        <span>04</span>
        <h2>Roadmap</h2>
      </div>

      <div class="roadmap">

        <div class="roadmap-item active">
          <span>NOW</span>
          <div>
            <h3>Gaming RC</h3>
            <p>
              Installer, COSMIC desktop, gaming stack, hardware support,
              and live-system testing.
            </p>
          </div>
        </div>

        <div class="roadmap-item">
          <span>NEXT</span>
          <div>
            <h3>Glacier</h3>
            <p>
              Expand NanoOS identity, desktop polish, themes, and visual
              consistency.
            </p>
          </div>
        </div>

        <div class="roadmap-item">
          <span>0.x</span>
          <div>
            <h3>More editions</h3>
            <p>
              Explore additional NanoOS desktop and hardware targets.
            </p>
          </div>
        </div>

        <div class="roadmap-item">
          <span>1.0</span>
          <div>
            <h3>NanoOS</h3>
            <p>
              A polished first stable release with a complete installation
              and desktop experience.
            </p>
          </div>
        </div>

      </div>
    </section>

  </main>

  <footer id="about">
    <div class="footer-brand">
      <span class="brand-mark">N</span>
      <strong>NanoOS</strong>
    </div>

    <p>Your Linux, Refined.</p>

    <span class="copyright">
      NanoOS — an Arch Linux-based project.
    </span>
  </footer>
`

const navbar = document.querySelector('.navbar')

const updateNavbar = () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20)
}

window.addEventListener('scroll', updateNavbar, { passive: true })
updateNavbar()
