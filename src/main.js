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

    <div class="nav-actions">
      <button
        class="theme-toggle"
        id="theme-toggle"
        type="button"
        aria-label="Change color theme"
        title="Change color theme"
      >
        ◐
      </button>

      <button
        class="mobile-menu-toggle"
        id="mobile-menu-toggle"
        type="button"
        aria-label="Open navigation"
        aria-expanded="false"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <a class="nav-button" href="#download">
        Get NanoOS
      </a>
    </div>
  </nav>

  <div class="mobile-menu" id="mobile-menu">
    <a href="#features">Features</a>
    <a href="#showcase">Showcase</a>
    <a href="#full-features">Full Features</a>
    <a href="#download">Downloads</a>
    <a href="#requirements">Requirements</a>
    <a href="#guide">Installation Guide</a>
    <a href="#changelog">Development Log</a>
    <a href="#faq">FAQ</a>
    <a href="#roadmap">Roadmap</a>
  </div>

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
            <strong>KDE Plasma</strong>
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

      <div class="hero-download-cta" aria-label="NanoOS download">
        <div class="hero-download-copy">
          <span class="panel-kicker">READY TO EXPLORE</span>
          <strong>Get NanoOS.</strong>
          <span>x86_64 • NanoOS Gaming • 2.8 GB ISO</span>
        </div>

        <a
          class="hero-download-button"
          href="https://download.nanoosproject.org/nanoos-gaming-2026.11.17-x86_64.iso"
        >
          <span>Download NanoOS Gaming</span>
          <span aria-hidden="true">↓</span>
        </a>
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
          NanoOS Gaming ships KDE Plasma on Wayland with the Glacier look:
          six system-wide themes that recolour the desktop, apps, terminal,
          boot menu and boot splash together.
        </p>

        <div class="desktop-pills">
          <span>KDE Plasma</span>
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
            <span class="edition-badge">RELEASED</span>
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
            <span>KDE Plasma</span>
            <span>Minimal</span>
          </div>
        </article>

      </div>
    </section>

    <section id="screenshots" class="section screenshots-section">
      <div class="section-heading">
        <span>04</span>
        <h2>After installation.</h2>
      </div>

      <div class="screenshots-intro">
        <p>
          A first look at the NanoOS experience once everything is installed,
          configured, and ready to go.
        </p>
      </div>

      <div class="screenshot-showcase">
        <article class="screenshot-card screenshot-large">
          <div class="screenshot-placeholder">
            <div class="placeholder-window">
              <div class="placeholder-topbar">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div class="placeholder-desktop">
                <div class="placeholder-sidebar"></div>
                <div class="placeholder-content">
                  <div class="placeholder-terminal"></div>
                  <div class="placeholder-panels">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>

            <span class="placeholder-label">Desktop screenshot</span>
          </div>

          <div class="screenshot-caption">
            <span>01</span>
            <div>
              <h3>The NanoOS desktop</h3>
              <p>A clean, focused workspace from the moment you log in.</p>
            </div>
          </div>
        </article>

        <div class="screenshot-side">
          <article class="screenshot-card">
            <div class="screenshot-placeholder screenshot-small">
              <div class="mini-placeholder">
                <div class="mini-terminal-line"></div>
                <div class="mini-terminal-line short"></div>
                <div class="mini-terminal-line"></div>
                <div class="mini-terminal-line shorter"></div>
              </div>

              <span class="placeholder-label">Terminal</span>
            </div>

            <div class="screenshot-caption">
              <span>02</span>
              <div>
                <h3>Terminal</h3>
                <p>Powerful tools, right where you need them.</p>
              </div>
            </div>
          </article>

          <article class="screenshot-card">
            <div class="screenshot-placeholder screenshot-small">
              <div class="mini-settings">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>

              <span class="placeholder-label">Gaming</span>
            </div>

            <div class="screenshot-caption">
              <span>03</span>
              <div>
                <h3>System settings</h3>
                <p>Customize your desktop around the way you work.</p>
              </div>
            </div>
          </article>
        </div>
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
          NanoOS Gaming is out. Back up your data before installing it next
          to another operating system.
        </p>
      </div>

      <div class="download-panel">
        <div>
          <span class="panel-kicker">LATEST RELEASE</span>
          <h3>NanoOS Gaming</h3>
          <p>
            One ISO file (2.8 GB). After downloading, you can check that it
            arrived intact: the command must print this SHA-256 checksum.
          </p>
          <div class="download-help">
            <code>sha256sum nanoos-gaming-2026.11.17-x86_64.iso</code>
            <code class="checksum">27dce4f26b9ee2b0dd951639bccdc2b91c0090cb7924b31124cd6c8aa433d0ca</code>
          </div>
        </div>

        <div class="download-meta">
          <span>Arch Linux based</span>
          <span>x86_64</span>
          <span>KDE Plasma</span>
        </div>

        <a
          class="download-center-button download-panel-button"
          href="https://download.nanoosproject.org/nanoos-gaming-2026.11.17-x86_64.iso"
        >
          Download NanoOS Gaming
          <span aria-hidden="true">↓</span>
        </a>

        <p class="download-mirror">
          Mirror:
          <a href="https://github.com/falconediz911-stack/NanoRepo/releases/tag/iso-release" target="_blank" rel="noreferrer">GitHub</a>
          (in parts with signed checksums)
        </p>
      </div>
    </section>

    <section id="full-features" class="section full-features-section">
      <div class="section-heading">
        <span>04</span>
        <h2>Full feature set.</h2>
      </div>

      <div class="full-features-intro">
        <p>
          NanoOS is more than a desktop skin. These are some of the real
          technologies, tuning work, tools, and system features built into
          NanoOS.
        </p>
      </div>

      <div class="full-feature-grid">

        <article class="full-feature-card featured-feature">
          <span class="full-feature-number">01</span>
          <span class="full-feature-kicker">KERNEL</span>
          <h3>Fine-tuned Zen-based kernel.</h3>
          <p>
            NanoOS Gaming uses a custom Zen-based kernel with performance and
            responsiveness tuning aimed at modern gaming hardware and desktop
            workloads.
          </p>
          <div class="full-feature-tags">
            <span>Zen</span>
            <span>PREEMPT</span>
            <span>1000 Hz</span>
          </div>
        </article>

        <article class="full-feature-card">
          <span class="full-feature-number">02</span>
          <span class="full-feature-kicker">CPU</span>
          <h3>AMD P-State EPP tuning.</h3>
          <p>
            NanoOS uses AMD P-State EPP policy control rather than simply
            hard-coding CPU clocks, allowing different power and performance
            behaviors.
          </p>
          <div class="full-feature-tags">
            <span>AMD P-State</span>
            <span>EPP</span>
          </div>
        </article>

        <article class="full-feature-card">
          <span class="full-feature-number">03</span>
          <span class="full-feature-kicker">BOOST</span>
          <h3>CPU Boost Controller.</h3>
          <p>
            NanoOS Control Center switches between power profiles ranging from
            Ultra Power Saving and Balanced to Performance and Gaming.
          </p>
          <div class="full-feature-tags">
            <span>Power Saving</span>
            <span>Balanced</span>
            <span>Performance</span>
            <span>Gaming</span>
          </div>
        </article>

        <article class="full-feature-card">
          <span class="full-feature-number">04</span>
          <span class="full-feature-kicker">STORAGE</span>
          <h3>NVMe and storage optimization.</h3>
          <p>
            Kernel and system tuning is focused on responsive NVMe storage,
            improved I/O behavior, and performance-sensitive SSD and HDD
            workloads.
          </p>
          <div class="full-feature-tags">
            <span>NVMe</span>
            <span>I/O</span>
            <span>SSD</span>
          </div>
        </article>

        <article class="full-feature-card">
          <span class="full-feature-number">05</span>
          <span class="full-feature-kicker">AUDIO</span>
          <h3>Ultra-low-latency audio tuning.</h3>
          <p>
            NanoOS Gaming includes low-latency audio tuning for
            systems where responsive sound matters during gaming and other
            real-time workloads.
          </p>
          <div class="full-feature-tags">
            <span>Low latency</span>
            <span>Audio</span>
          </div>
        </article>

        <article class="full-feature-card">
          <span class="full-feature-number">06</span>
          <span class="full-feature-kicker">GPU</span>
          <h3>Gaming GPU latency tuning.</h3>
          <p>
            The gaming stack and kernel are tuned for responsive graphics
            workloads on NVIDIA, AMD and Intel GPUs.
          </p>
          <div class="full-feature-tags">
            <span>NVIDIA</span>
            <span>AMD GPU</span>
            <span>Latency</span>
          </div>
        </article>

        <article class="full-feature-card">
          <span class="full-feature-number">07</span>
          <span class="full-feature-kicker">GAMING</span>
          <h3>Complete gaming stack.</h3>
          <p>
            NanoOS Gaming brings together Steam, Gamescope, MangoHud, GameMode,
            compatibility software, and other tools for a dedicated Linux
            gaming environment.
          </p>
          <div class="full-feature-tags">
            <span>Steam</span>
            <span>Gamescope</span>
            <span>MangoHud</span>
            <span>GameMode</span>
          </div>
        </article>

        <article class="full-feature-card">
          <span class="full-feature-number">08</span>
          <span class="full-feature-kicker">INSTALLER</span>
          <h3>Custom graphical installer.</h3>
          <p>
            The NanoOS installer is a guided graphical installer with disk
            selection, installation methods, partition assignment, filesystems,
            desktop choices, kernels, themes, and system configuration.
          </p>
          <div class="full-feature-tags">
            <span>GUI</span>
            <span>Partitioning</span>
            <span>Btrfs</span>
            <span>Ext4</span>
          </div>
        </article>

        <article class="full-feature-card">
          <span class="full-feature-number">09</span>
          <span class="full-feature-kicker">DESKTOP</span>
          <h3>Multiple desktop environments.</h3>
          <p>
            The installer sets up KDE Plasma (the default), GNOME, Hyprland,
            XFCE and Cinnamon, on their own or side by side.
          </p>
          <div class="full-feature-tags">
            <span>KDE Plasma</span>
            <span>GNOME</span>
            <span>XFCE</span>
            <span>Hyprland</span>
          </div>
        </article>

        <article class="full-feature-card">
          <span class="full-feature-number">10</span>
          <span class="full-feature-kicker">GLACIER</span>
          <h3>Glacier visual system.</h3>
          <p>
            NanoOS has its own visual direction built around cool tones,
            layered surfaces, subtle lighting, depth, and a consistent system
            identity.
          </p>
          <div class="full-feature-tags">
            <span>Glacier</span>
            <span>Theming</span>
            <span>UI</span>
          </div>
        </article>

        <article class="full-feature-card">
          <span class="full-feature-number">11</span>
          <span class="full-feature-kicker">SYSTEM</span>
          <h3>Arch Linux foundation.</h3>
          <p>
            NanoOS keeps the Arch Linux ecosystem underneath the project,
            including Pacman and the flexibility that comes with an Arch-based
            system.
          </p>
          <div class="full-feature-tags">
            <span>Arch Linux</span>
            <span>Pacman</span>
            <span>Linux</span>
          </div>
        </article>

        <article class="full-feature-card">
          <span class="full-feature-number">12</span>
          <span class="full-feature-kicker">TOOLING</span>
          <h3>NanoOS system tooling.</h3>
          <p>
            NanoOS ships its own tools: the graphical installer, NanoOS Welcome,
            Control Center and GameMode apps, the NanoOS kernels and the nan
            package helper.
          </p>
          <div class="full-feature-tags">
            <span>NanoOS tools</span>
            <span>Installer</span>
            <span>Kernel</span>
          </div>
        </article>

        <article class="full-feature-card">
          <span class="full-feature-number">13</span>
          <span class="full-feature-kicker">LATENCY</span>
          <h3>PREEMPT + 1000 Hz scheduling.</h3>
          <p>
            The NanoOS Gaming kernel is tuned around PREEMPT and a 1000 Hz
            timer configuration for responsive desktop and gaming workloads.
          </p>
          <div class="full-feature-tags">
            <span>PREEMPT</span>
            <span>1000 Hz</span>
            <span>Low latency</span>
          </div>
        </article>

        <article class="full-feature-card">
          <span class="full-feature-number">14</span>
          <span class="full-feature-kicker">INSTALLATION</span>
          <h3>Flexible disk installation.</h3>
          <p>
            The installer supports whole-disk installation, free-space
            installation, and manual partitioning for different setups.
          </p>
          <div class="full-feature-tags">
            <span>Whole disk</span>
            <span>Free space</span>
            <span>Manual</span>
          </div>
        </article>

        <article class="full-feature-card">
          <span class="full-feature-number">15</span>
          <span class="full-feature-kicker">FILESYSTEM</span>
          <h3>Choose your /home layout.</h3>
          <p>
            NanoOS installation can use a separate /home filesystem or keep
            /home inside the root filesystem, depending on the selected setup.
          </p>
          <div class="full-feature-tags">
            <span>Separate /home</span>
            <span>Merged /home</span>
          </div>
        </article>

        <article class="full-feature-card">
          <span class="full-feature-number">16</span>
          <span class="full-feature-kicker">FILESYSTEMS</span>
          <h3>Multiple filesystem choices.</h3>
          <p>
            The installer supports several Linux filesystem options so the
            installation can be matched to different storage preferences.
          </p>
          <div class="full-feature-tags">
            <span>Btrfs</span>
            <span>Ext4</span>
            <span>XFS</span>
            <span>F2FS</span>
          </div>
        </article>

        <article class="full-feature-card">
          <span class="full-feature-number">17</span>
          <span class="full-feature-kicker">LOGIN</span>
          <h3>SDDM desktop login.</h3>
          <p>
            NanoOS desktop installations can use SDDM as the graphical
            display manager, with automatic login support for the configured
            user experience.
          </p>
          <div class="full-feature-tags">
            <span>SDDM</span>
            <span>Autologin</span>
            <span>Desktop</span>
          </div>
        </article>

        <article class="full-feature-card">
          <span class="full-feature-number">18</span>
          <span class="full-feature-kicker">NVIDIA</span>
          <h3>NVIDIA kernel module support.</h3>
          <p>
            The NanoOS Gaming kernel configuration includes support for NVIDIA
            kernel modules; the installer detects RTX 20-series and newer GPUs
            and builds the NVIDIA open driver for every installed kernel.
          </p>
          <div class="full-feature-tags">
            <span>NVIDIA</span>
            <span>Kernel modules</span>
            <span>RTX</span>
          </div>
        </article>

        <article class="full-feature-card">
          <span class="full-feature-number">19</span>
          <span class="full-feature-kicker">AMD GRAPHICS</span>
          <h3>Modern AMD GPU support.</h3>
          <p>
            NanoOS Gaming includes AMD GPU detection and a
            performance-oriented graphics configuration for supported hardware.
          </p>
          <div class="full-feature-tags">
            <span>AMD GPU</span>
            <span>Detection</span>
            <span>Graphics</span>
          </div>
        </article>

        <article class="full-feature-card">
          <span class="full-feature-number">20</span>
          <span class="full-feature-kicker">CREATOR</span>
          <h3>Streaming and capture tools.</h3>
          <p>
            The gaming software stack includes OBS Studio alongside gaming
            tools, giving NanoOS Gaming a ready foundation for recording and
            streaming workflows.
          </p>
          <div class="full-feature-tags">
            <span>OBS Studio</span>
            <span>Recording</span>
            <span>Streaming</span>
          </div>
        </article>

      </div>
    </section>

    <section id="showcase" class="section showcase-section">
      <div class="section-heading">
        <span>SHOWCASE</span>
        <h2>See NanoOS in action.</h2>
      </div>

      <div class="showcase-intro">
        <p>
          Explore the visual direction of NanoOS through desktop, installer,
          and gaming-focused previews.
        </p>
      </div>

      <div class="showcase-grid">
        <article class="showcase-card showcase-large">
          <div class="showcase-window">
            <div class="showcase-window-bar">
              <span></span><span></span><span></span>
              <strong>NanoOS Desktop</strong>
            </div>

            <div class="showcase-desktop">
              <aside>
                <div class="showcase-logo">N</div>
                <i></i><i></i><i></i><i></i>
              </aside>

              <div class="showcase-workspace">
                <div class="showcase-glow"></div>

                <div class="showcase-terminal">
                  <small>falcon@nanoos ~</small>
                  <strong>NanoOS</strong>
                  <span>Your Linux, Refined.</span>
                  <code>$ fastfetch</code>
                </div>

                <div class="showcase-panels">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>

          <div class="showcase-caption">
            <span>01</span>
            <div>
              <h3>Desktop experience</h3>
              <p>
                Glacier-inspired surfaces, modern desktop workflows, and
                carefully layered UI.
              </p>
            </div>
          </div>
        </article>

        <article class="showcase-card">
          <div class="mini-showcase installer-showcase">
            <div class="mini-header">NanoOS Installer</div>
            <div class="mini-progress"><span></span></div>
            <div class="mini-row active"></div>
            <div class="mini-row"></div>
            <div class="mini-row"></div>
            <div class="mini-row short"></div>
          </div>

          <div class="showcase-caption">
            <span>02</span>
            <div>
              <h3>Graphical installer</h3>
              <p>Guided installation with disk and system configuration.</p>
            </div>
          </div>
        </article>

        <article class="showcase-card">
          <div class="mini-showcase gaming-showcase">
            <div class="gaming-orb"></div>
            <strong>NANOOS GAMING</strong>
            <span>Performance • Graphics • Gaming</span>
          </div>

          <div class="showcase-caption">
            <span>03</span>
            <div>
              <h3>Gaming edition</h3>
              <p>Gaming-first tooling built around a tuned Linux stack.</p>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section id="inside" class="section inside-section">
      <div class="section-heading">
        <span>INSIDE</span>
        <h2>Inside NanoOS.</h2>
      </div>

      <div class="inside-tabs" role="tablist" aria-label="NanoOS areas">
        <button class="inside-tab active" type="button" data-tab="kernel" role="tab">
          Kernel
        </button>
        <button class="inside-tab" type="button" data-tab="installer" role="tab">
          Installer
        </button>
        <button class="inside-tab" type="button" data-tab="gaming" role="tab">
          Gaming
        </button>
        <button class="inside-tab" type="button" data-tab="desktop" role="tab">
          Desktop
        </button>
        <button class="inside-tab" type="button" data-tab="performance" role="tab">
          Performance
        </button>
      </div>

      <div class="inside-panels">
        <article class="inside-panel active" data-panel="kernel">
          <span>KERNEL</span>
          <h3>A kernel shaped around responsiveness.</h3>
          <p>
            NanoOS Gaming ships a custom Zen-based kernel
            configuration with low-latency and gaming-oriented tuning.
          </p>
          <div class="inside-metrics">
            <strong>PREEMPT</strong>
            <strong>1000 Hz</strong>
            <strong>AMD P-State</strong>
          </div>
        </article>

        <article class="inside-panel" data-panel="installer">
          <span>INSTALLER</span>
          <h3>A guided graphical installation flow.</h3>
          <p>
            Choose a disk, select an installation method, configure
            partitions and filesystems, and build the rest of the system from
            the same guided interface.
          </p>
          <div class="inside-metrics">
            <strong>Whole disk</strong>
            <strong>Free space</strong>
            <strong>Manual</strong>
          </div>
        </article>

        <article class="inside-panel" data-panel="gaming">
          <span>GAMING</span>
          <h3>A dedicated gaming software stack.</h3>
          <p>
            NanoOS Gaming brings together Steam, Gamescope, MangoHud,
            GameMode, OBS Studio, and compatibility tooling.
          </p>
          <div class="inside-metrics">
            <strong>Steam</strong>
            <strong>Gamescope</strong>
            <strong>MangoHud</strong>
          </div>
        </article>

        <article class="inside-panel" data-panel="desktop">
          <span>DESKTOP</span>
          <h3>Choose the desktop that fits your workflow.</h3>
          <p>
            KDE Plasma by default, or GNOME, Hyprland, XFCE and Cinnamon, all with
            the same NanoOS identity.
          </p>
          <div class="inside-metrics">
            <strong>KDE Plasma</strong>
            <strong>GNOME</strong>
            <strong>Hyprland</strong>
          </div>
        </article>

        <article class="inside-panel" data-panel="performance">
          <span>PERFORMANCE</span>
          <h3>System tuning beyond the desktop.</h3>
          <p>
            Performance work extends into CPU policy, storage I/O, audio
            responsiveness, and graphics latency.
          </p>
          <div class="inside-metrics">
            <strong>CPU</strong>
            <strong>NVMe</strong>
            <strong>GPU</strong>
          </div>
        </article>
      </div>
    </section>

    <section id="download-center" class="section download-center-section">
      <div class="section-heading">
        <span>DOWNLOADS</span>
        <h2>Get the right edition.</h2>
      </div>

      <div class="download-center-grid">
        <article class="download-center-card featured-download">
          <div>
            <span class="panel-kicker">LATEST RELEASE</span>
            <h3>NanoOS Gaming</h3>
            <p>
              The NanoOS Gaming ISO for x86_64 systems.
            </p>
          </div>

          <div class="download-center-meta">
            <span>x86_64</span>
            <span>KDE Plasma</span>
            <span>UEFI + BIOS</span>
          </div>

          <a
            class="download-center-button"
            href="https://download.nanoosproject.org/nanoos-gaming-2026.11.17-x86_64.iso"
          >
            Download ISO
            <span>↓</span>
          </a>
        </article>

        <article class="download-center-card muted-download">
          <span class="panel-kicker">COMING LATER</span>
          <h3>NanoOS Basic</h3>
          <p>
            A lightweight NanoOS edition is planned for a future release.
          </p>
          <span class="download-disabled">ISO not available yet</span>
        </article>
      </div>
    </section>

    <section id="requirements" class="section requirements-section">
      <div class="section-heading">
        <span>REQUIREMENTS</span>
        <h2>Know what you need.</h2>
      </div>

      <div class="requirements-grid">
        <div class="requirement-item">
          <span>ARCHITECTURE</span>
          <strong>x86_64</strong>
          <p>NanoOS Gaming runs on 64-bit x86 systems.</p>
        </div>

        <div class="requirement-item">
          <span>FIRMWARE</span>
          <strong>UEFI or BIOS</strong>
          <p>Installs on UEFI (64- and 32-bit firmware) and legacy BIOS systems.</p>
        </div>

        <div class="requirement-item">
          <span>STORAGE</span>
          <strong>40 GB+</strong>
          <p>At least 40 GB for NanoOS (48 GB with a separate /home), plus room for your games.</p>
        </div>

        <div class="requirement-item">
          <span>GRAPHICS</span>
          <strong>Linux-supported GPU</strong>
          <p>NVIDIA (RTX 20-series and newer), AMD and Intel graphics are supported.</p>
        </div>
      </div>
    </section>

    <section id="guide" class="section guide-section">
      <div class="section-heading">
        <span>INSTALL</span>
        <h2>From ISO to NanoOS.</h2>
      </div>

      <div class="guide-steps">
        <article class="guide-step">
          <span>01</span>
          <h3>Download</h3>
          <p>Download the NanoOS Gaming ISO (one 2.8 GB file) from this page.</p>
        </article>

        <article class="guide-step">
          <span>02</span>
          <h3>Flash</h3>
          <p>Copy the ISO to a Ventoy stick, or write it with Rufus (ISO or DD image mode), balenaEtcher, Fedora Media Writer or dd.</p>
        </article>

        <article class="guide-step">
          <span>03</span>
          <h3>Boot</h3>
          <p>Boot the NanoOS installer from the USB on your target machine.</p>
        </article>

        <article class="guide-step">
          <span>04</span>
          <h3>Install</h3>
          <p>Choose your disk, installation method, filesystem, desktop, and system options.</p>
        </article>

        <article class="guide-step">
          <span>05</span>
          <h3>Restart</h3>
          <p>Finish the installation and boot into your new NanoOS system.</p>
        </article>
      </div>
    </section>

    <section id="status" class="section status-section">
      <div class="section-heading">
        <span>STATUS</span>
        <h2>Where NanoOS stands.</h2>
      </div>

      <div class="status-grid">
        <div class="status-item">
          <span class="live-dot"></span>
          <strong>Kernel</strong>
          <small>Released</small>
        </div>

        <div class="status-item">
          <span class="live-dot"></span>
          <strong>Installer</strong>
          <small>Released</small>
        </div>

        <div class="status-item">
          <span class="live-dot"></span>
          <strong>Gaming stack</strong>
          <small>Released</small>
        </div>

        <div class="status-item">
          <span class="live-dot"></span>
          <strong>Website</strong>
          <small>Live</small>
        </div>
      </div>
    </section>

    <section id="changelog" class="section changelog-section">
      <div class="section-heading">
        <span>DEV LOG</span>
        <h2>Recent NanoOS work.</h2>
      </div>

      <div class="changelog-list">
        <article class="changelog-entry">
          <span>2026.11.17</span>
          <div>
            <h3>NanoOS Gaming 1.1</h3>
            <p>
              A 2.8 GB ISO, a faster installer that picks the fastest mirrors and detects your timezone, a new "NanoOS is installed" page, preconfigured zsh, a richer fastfetch, a GRUB menu sized for your monitor (including 4K), the correct clock when you also use Windows, and Welcome, Control Center and Game Mode as real apps. Existing installs get it with sudo pacman -Syu.
            </p>
          </div>
        </article>

        <article class="changelog-entry">
          <span>2026.11.16</span>
          <div>
            <h3>Boot fix, Ventoy and Rufus support</h3>
            <p>
              Fixes installs that finished without a boot loader when the default Glacier theme was kept. The ISO is now 4.0 GB and is tested with Ventoy (normal and GRUB2 mode), Rufus in ISO and DD image mode, balenaEtcher and dd on UEFI.
            </p>
          </div>
        </article>

        <article class="changelog-entry">
          <span>2026.11.15</span>
          <div>
            <h3>NanoOS Gaming released</h3>
            <p>
              First release installed on real hardware: NVIDIA and Vulkan drivers in the live system, early boot splash on NVIDIA, and an installer that verifies the driver for every kernel.
            </p>
          </div>
        </article>

        <article class="changelog-entry">
          <span>2026.11.14</span>
          <div>
            <h3>Signed update repositories</h3>
            <p>
              NanoOS kernels and system packages are published as signed pacman repositories on GitHub (NanoRepo), so installed systems update with pacman -Syu.
            </p>
          </div>
        </article>

        <article class="changelog-entry">
          <span>2026.11.14</span>
          <div>
            <h3>Six system-wide themes</h3>
            <p>
              Glacier, Frost, Aurora, Ocean, Ember and Obsidian now recolour everything: desktop, NanoOS apps, terminal, window borders, GRUB and the boot splash.
            </p>
          </div>
        </article>

        <article class="changelog-entry">
          <span>2026.11.13</span>
          <div>
            <h3>NanoSched kernel</h3>
            <p>
              The NanoOS Gaming kernel 7.2.9 with the NanoSched burst scheduler patch, ThinLTO and AutoFDO profiling support.
            </p>
          </div>
        </article>
      </div>
    </section>

    <section id="hardware" class="section hardware-section">
      <div class="section-heading">
        <span>HARDWARE</span>
        <h2>Built for modern hardware.</h2>
      </div>

      <div class="hardware-grid">
        <div class="hardware-card">
          <span>CPU</span>
          <strong>AMD</strong>
          <p>P-State-aware performance tuning and modern processor support.</p>
        </div>

        <div class="hardware-card">
          <span>GPU</span>
          <strong>NVIDIA + AMD</strong>
          <p>Gaming-oriented graphics support across both major GPU stacks.</p>
        </div>

        <div class="hardware-card">
          <span>STORAGE</span>
          <strong>NVMe</strong>
          <p>Storage and I/O tuning focused on responsive systems.</p>
        </div>

        <div class="hardware-card">
          <span>AUDIO</span>
          <strong>Low latency</strong>
          <p>Audio responsiveness is part of the NanoOS Gaming performance work.</p>
        </div>
      </div>
    </section>

    <section id="faq" class="section faq-section">
      <div class="section-heading">
        <span>FAQ</span>
        <h2>Questions, answered.</h2>
      </div>

      <div class="faq-list">
        <details>
          <summary>Is NanoOS based on Arch Linux?</summary>
          <p>Yes. NanoOS is an Arch Linux-based project.</p>
        </details>

        <details>
          <summary>What is NanoOS Gaming?</summary>
          <p>
            NanoOS Gaming is the gaming-focused edition of NanoOS: KDE Plasma,
            Steam, Gamescope, MangoHud, GameMode and the NanoSched kernel,
            ready to play after installation.
          </p>
        </details>

        <details>
          <summary>Which desktops can NanoOS use?</summary>
          <p>
            The installer offers KDE Plasma (the default), GNOME, Hyprland, XFCE
            and Cinnamon. You can install more than one.
          </p>
        </details>

        <details>
          <summary>Is NanoOS ready to use?</summary>
          <p>
            Yes. NanoOS Gaming is released and has been installed on real
            hardware. As with any operating system, back up your data before
            installing it.
          </p>
        </details>

        <details>
          <summary>Which version is the current release?</summary>
          <p>
            NanoOS Gaming 1.1, released in November 2026. The ISO file is
            named after its build date (2026.11.17). Installed systems get
            1.1 with a normal system update.
          </p>
        </details>

        <details>
          <summary>How do I put NanoOS on a USB stick?</summary>
          <p>
            Copy the ISO onto a Ventoy stick (normal or GRUB2 mode both work),
            or write it with Rufus in ISO image or DD image mode, balenaEtcher,
            Fedora Media Writer or dd. Then boot the stick in UEFI mode.
          </p>
        </details>

        <details>
          <summary>My NanoOS install from the first ISO does not boot. What now?</summary>
          <p>
            The first ISO (2026.11.15) could finish installing without a boot
            loader when the default Glacier theme was kept. Download the current
            ISO and run the installer again on the same disk; your new install
            will boot normally.
          </p>
        </details>

        <details>
          <summary>Can I install NanoOS alongside another operating system?</summary>
          <p>
            Yes. Use "Use free space" or manual partitioning, never "Use entire
            disk". The installer shows exactly which disk and partitions it
            will change and asks twice before writing anything.
          </p>
        </details>

        <details>
          <summary>How does NanoOS update?</summary>
          <p>
            With pacman, like Arch. NanoOS adds signed repositories (nanoos and
            nanoos-gaming) for its kernels and system packages; run
            sudo pacman -Syu to update everything.
          </p>
        </details>

        <details>
          <summary>Does NanoOS support NVIDIA graphics cards?</summary>
          <p>
            Yes. RTX 20-series and newer get the NVIDIA open driver, built
            automatically for every installed kernel. AMD and Intel GPUs use
            the open drivers built into Linux and Mesa.
          </p>
        </details>
      </div>
    </section>

    <section id="project-links" class="section project-links-section">
      <div class="section-heading">
        <span>PROJECT</span>
        <h2>NanoOS, out in the open.</h2>
      </div>

      <div class="project-links-grid">
        <a class="project-link-card" href="https://github.com/falconediz911-stack/nanoos-website" target="_blank" rel="noreferrer">
          <span>CODE</span>
          <strong>Website GitHub</strong>
          <small>Source and development</small>
          <span class="project-arrow">↗</span>
        </a>

        <a class="project-link-card" href="https://nanoosproject.org/" target="_blank" rel="noreferrer">
          <span>WEB</span>
          <strong>nanoosproject.org</strong>
          <small>The NanoOS project website</small>
          <span class="project-arrow">↗</span>
        </a>

        <a class="project-link-card" href="https://github.com/falconediz911-stack/NanoRepo" target="_blank" rel="noreferrer">
          <span>PACKAGES</span>
          <strong>NanoRepo</strong>
          <small>Signed repositories, kernels and ISO releases</small>
          <span class="project-arrow">↗</span>
        </a>
      </div>
    </section>

    <section id="roadmap" class="section roadmap-section">
      <div class="section-heading">
        <span>05</span>
        <h2>Roadmap</h2>
      </div>

      <div class="roadmap">

        <div class="roadmap-item active">
          <span>NOW</span>
          <div>
            <h3>NanoOS Gaming</h3>
            <p>
              Released: installer, KDE Plasma desktop, six themes, gaming stack,
              NVIDIA and AMD drivers, and signed update repositories.
            </p>
          </div>
        </div>

        <div class="roadmap-item">
          <span>NEXT</span>
          <div>
            <h3>App updates &amp; snapshots</h3>
            <p>
              NanoOS apps delivered and updated through pacman, and Btrfs
              snapshots with rollback.
            </p>
          </div>
        </div>

        <div class="roadmap-item">
          <span>LATER</span>
          <div>
            <h3>More editions</h3>
            <p>
              Explore additional NanoOS desktop and hardware targets.
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

const themeToggle = document.querySelector('#theme-toggle')
const mobileMenuToggle = document.querySelector('#mobile-menu-toggle')
const mobileMenu = document.querySelector('#mobile-menu')

const systemLight = window.matchMedia('(prefers-color-scheme: light)')

const applyTheme = (theme) => {
  const resolved =
    theme === 'system' ? (systemLight.matches ? 'light' : 'dark') : theme

  document.documentElement.setAttribute('data-theme', resolved)

  try { localStorage.setItem('nanoos-theme', theme) } catch {}

  if (themeToggle) {
    themeToggle.textContent =
      theme === 'light' ? '☀' :
      theme === 'dark' ? '☾' :
      '◐'

    themeToggle.title =
      theme === 'light' ? 'Light theme' :
      theme === 'dark' ? 'Dark theme' :
      'System theme'
  }
}

const readTheme = () => {
  try { return localStorage.getItem('nanoos-theme') || 'system' } catch { return 'system' }
}
let currentTheme = readTheme()
applyTheme(currentTheme)

systemLight.addEventListener('change', () => {
  if (currentTheme === 'system') applyTheme('system')
})

themeToggle?.addEventListener('click', () => {
  currentTheme =
    currentTheme === 'system' ? 'light' :
    currentTheme === 'light' ? 'dark' :
    'system'

  applyTheme(currentTheme)
})

mobileMenuToggle?.addEventListener('click', () => {
  const open = document.body.classList.toggle('mobile-nav-open')

  mobileMenuToggle.setAttribute(
    'aria-expanded',
    String(open)
  )
})

const closeMobileMenu = () => {
  document.body.classList.remove('mobile-nav-open')
  mobileMenuToggle?.setAttribute('aria-expanded', 'false')
}

mobileMenu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeMobileMenu)
})

// Close the phone menu with Escape, a tap outside it, or when the window
// becomes wide enough for the normal top bar.
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && document.body.classList.contains('mobile-nav-open')) {
    closeMobileMenu()
    mobileMenuToggle?.focus()
  }
})

document.addEventListener('click', (event) => {
  if (
    document.body.classList.contains('mobile-nav-open') &&
    !mobileMenu?.contains(event.target) &&
    !mobileMenuToggle?.contains(event.target)
  ) {
    closeMobileMenu()
  }
})

window.matchMedia('(min-width: 951px)').addEventListener('change', (event) => {
  if (event.matches) closeMobileMenu()
})

const insideTabs = [...document.querySelectorAll('.inside-tab')]
const insidePanels = [...document.querySelectorAll('.inside-panel')]

// Wire tabs and panels together for screen readers.
insideTabs.forEach((tab) => {
  const panel = insidePanels.find((item) => item.dataset.panel === tab.dataset.tab)
  tab.id = `inside-tab-${tab.dataset.tab}`
  tab.setAttribute('aria-selected', String(tab.classList.contains('active')))
  tab.tabIndex = tab.classList.contains('active') ? 0 : -1
  if (panel) {
    panel.id = `inside-panel-${tab.dataset.tab}`
    panel.setAttribute('role', 'tabpanel')
    panel.setAttribute('aria-labelledby', tab.id)
    tab.setAttribute('aria-controls', panel.id)
  }
})

const selectInsideTab = (tab, focus = false) => {
  insideTabs.forEach((item) => {
    const active = item === tab
    item.classList.toggle('active', active)
    item.setAttribute('aria-selected', String(active))
    item.tabIndex = active ? 0 : -1
  })

  insidePanels.forEach((panel) => {
    panel.classList.toggle('active', panel.dataset.panel === tab.dataset.tab)
  })

  if (focus) tab.focus()
}

insideTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectInsideTab(tab))

  // Arrow keys, Home and End move between tabs (standard tab behaviour).
  tab.addEventListener('keydown', (event) => {
    const last = insideTabs.length - 1
    const next =
      event.key === 'ArrowRight' ? (index === last ? 0 : index + 1) :
      event.key === 'ArrowLeft' ? (index === 0 ? last : index - 1) :
      event.key === 'Home' ? 0 :
      event.key === 'End' ? last :
      null
    if (next === null) return
    event.preventDefault()
    selectInsideTab(insideTabs[next], true)
  })
})

const updateNavbar = () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20)
}

window.addEventListener('scroll', updateNavbar, { passive: true })
updateNavbar()
