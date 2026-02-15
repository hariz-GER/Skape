import React, { useEffect, useMemo, useState } from "https://esm.sh/react@18";
import { createRoot } from "https://esm.sh/react-dom@18/client";
import htm from "https://esm.sh/htm@3.1.1";

const html = htm.bind(React.createElement);

const NAV_ITEMS = [
  { id: "services", label: "Services" },
  { id: "portfolio", label: "Portfolio" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" }
];

const MENU_CONTENT = {
  services: {
    heading: "Services",
    items: [
      "Architectural Design",
      "Planning Applications",
      "Interior Design",
      "Conservation & Heritage Design",
      "Create & Construct"
    ]
  },
  portfolio: {
    heading: "Portfolio",
    items: ["Residential", "Commercial", "Conservation & Heritage"]
  },
  about: {
    heading: "About",
    items: ["Read More", "Interior Design Philosophy", "Core Values", "About My Studio"]
  },
  contact: {
    heading: "Get in Touch",
    items: [
      "skapedesign.in@gmail.com",
      "Kolathur, Chennai-600099, TAMIL NADU, INDIA",
      "+91 9940482048",
      "+91 9940340216"
    ]
  }
};

const SERVICES = [
  {
    title: "Home Renovation",
    text:
      "We offer a seamless home renovation experience that transforms outdated spaces into functional, modern, and beautifully refined environments. Our process begins with understanding each client's needs, lifestyle, and vision, ensuring that every design decision reflects their goals. From structural improvements to aesthetic upgrades, we manage every detail with precision, transparency, and care. Our team focuses on quality craftsmanship, efficient planning, and thoughtful material selection to deliver results that feel fresh, timeless, and personalized."
  },
  {
    title: "Planning Application",
    text:
      "We provide thoughtful residential planning that transforms ideas into well-organized, efficient, and comfortable living spaces. By understanding each client's needs and lifestyle, we create layouts that maximize function, flow, and natural light. Our goal is to deliver personalized plans that make every home feel practical, beautiful, and truly livable."
  },
  {
    title: "Interior Design",
    text:
      "Our interior design experience is all about creating spaces that feel personal, comfortable, and genuinely connected to the way you live. We listen closely to your ideas, understand your lifestyle, and shape every detail to reflect your taste. From choosing materials and colors to planning furniture and lighting, we make the entire process simple and enjoyable. Our goal is to design interiors that are not only beautiful to look at but also practical and welcoming to use every day."
  }
];

const ABOUT_DETAILS = {
  intro: [
    "I am a creator driven by the belief that every structure tells a story. With a career spanning over 30 years in the construction industry, I have dedicated my life to mastering the technical complexities of the built environment. My journey began with a focus on the structural integrity and skeletal precision of buildings, the bones that allow a space to exist.",
    "However, my vision evolved. For the past four years, I have expanded my practice into interior design to bridge the gap between architectural strength and aesthetic soul. As the founder of Shape of Design, I view myself as an architect of form and function. I do not just build walls; I curate the experiences that happen within them. By combining three decades of engineering logic with a fresh, modern approach to interiors, I provide a holistic perspective that ensures every project is as enduring as it is beautiful."
  ],
  philosophy: [
    "At Shape of Design, our philosophy is rooted in the Science of Space. We believe that interior design is not merely an aesthetic layer applied to a room; it is the final, most intimate stage of architecture. Our approach is defined by the seamless integration of structural history and modern living. We believe that a space must perform before it can please.",
    "Because of our 30-year foundation in construction, our design process is uniquely informed by what is possible, not just what is fashionable. We prioritize honest materials, intentional light, and ergonomic flow. We strip away the unnecessary to reveal the inherent shape of a design. To us, luxury is found in the perfect alignment of a client's lifestyle with the physical environment. We do not follow trends; we create environments that feel inevitable, timeless, and deeply personal."
  ],
  coreValues: [
    {
      title: "Structural Integrity",
      text:
        "With three decades in the construction industry, good enough is never an option. We believe that beauty is meaningless if it is not built to last. Our designs are grounded in technical excellence and a deep respect for engineering."
    },
    {
      title: "Visionary Precision",
      text:
        "We look at the big picture without ever losing sight of the smallest detail. Whether we are pouring a foundation or selecting a textile, we execute with a level of precision that only comes from a lifetime of experience."
    },
    {
      title: "Authentic Collaboration",
      text:
        "We view our clients as partners in the creative process. We listen to the unspoken needs of a space and the explicit dreams of the owner, ensuring the final result is a true reflection of their identity."
    },
    {
      title: "Elegance Through Simplicity",
      text:
        "We believe that the most sophisticated designs are often the simplest. We strive to create shapes that are clean, uncluttered, and functional, allowing the quality of craftsmanship to speak for itself."
    },
    {
      title: "Adaptive Innovation",
      text:
        "While we value traditional techniques learned over 30 years, we embrace modern technology and sustainable practices. We are constantly evolving our methods to provide cutting-edge solutions for the 21st-century home."
    },
    {
      title: "End-to-End Accountability",
      text:
        "By managing both the construction and the interior design, we offer a rare, unified accountability. We take full responsibility for the project's journey from the first blueprint to the final decor."
    }
  ],
  studio:
    "Shape of Design is a multidisciplinary firm where 30 years of construction expertise meets a new era of interior innovation. Founded on the principle that architecture and interiors are inseparable, our studio offers a full-circle design experience. We handle the heavy lifting of construction and the delicate art of interior styling under one roof. Our legacy is built on thousands of square feet of realized dreams, and our future is dedicated to shaping spaces that inspire, comfort, and endure."
};

const PROJECTS = [
  {
    id: "mythiri",
    segment: "residential",
    banner: "RESIDENTIAL ! INTERIOR DESIGN",
    title: "Ms. Mythiri",
    subtitle:
      "For Mythiri, we designed interiors that unite style, comfort, and practicality, creating a home that feels inviting, modern, and uniquely personal.",
    cover:
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb3?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1400&q=80"
    ],
    designBrief:
      "The interior design for Mythiri in Chennai was envisioned as a harmonious blend of modern comfort and subtle elegance, tailored to the lifestyle and preferences of the client. The brief focused on creating warm, functional spaces with clean lines, natural textures, and a soothing color palette that reflects both contemporary taste and regional sensibilities. The design needed to balance openness with privacy, ensuring smooth circulation and practical use of every area. Special attention was given to lighting, storage planning, and spatial organization to enhance everyday living. The goal was to build a home that feels inviting, efficient, and uniquely personal.",
    interiorDesign:
      "The interiors combine calm materials, warm textures, and clean detailing to create a relaxed everyday atmosphere. The spatial planning supports both privacy and interaction, while layered lighting, soft finishes, and purposeful storage make each zone practical and elegant."
  },
  {
    id: "leisure-hall",
    segment: "commercial",
    banner: "COMMERCIAL ! INTERIOR DESIGN",
    title: "Leisure Hall",
    subtitle: "Warm, socially engaging leisure environment with contemporary materials and fluid zoning.",
    cover:
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1578898887932-dce23a595ad4?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1400&q=80"
    ],
    designBrief:
      "This project focuses on creating a warm, contemporary leisure space that blends natural materials with modern design elements to deliver an inviting, socially engaging environment. The brief emphasizes openness, fluid circulation, and visually rich textures that enhance both comfort and aesthetics. The layout integrates multiple seating arrangements to support casual conversations, collaborative activities, and relaxed dining. Wooden elements, earthy tones, and organic forms are used to create a cohesive atmosphere that feels both grounded and vibrant.",
    interiorDesign:
      "The interior features a striking composition of wooden textures, sculptural lighting, and woven furniture that together create a warm, immersive atmosphere. Curved seating, layered pendant lights, patterned surfaces, and greenery keep the space connected, comfortable, and contemporary."
  },
  {
    id: "cultural-hall",
    segment: "commercial",
    banner: "COMMERCIAL ! INTERIOR DESIGN",
    title: "Cultural Hall",
    subtitle: "Elegant event space that blends cultural identity with modern comfort and clarity.",
    cover:
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1400&q=80"
    ],
    designBrief:
      "To create an elegant cultural hall designed for gatherings, ceremonies, and formal events, blending traditional aesthetics with a refined spatial layout. The brief focuses on delivering a space that feels grand, welcoming, and visually expressive while supporting large audiences comfortably. Ample seating, clear sightlines, and smooth circulation were key requirements, ensuring functionality for various programs. The design emphasizes cultural identity, incorporating classical motifs, rich colors, and handcrafted detailing.",
    interiorDesign:
      "Lighting, acoustics, and proportions are carefully balanced to improve audience comfort and stage visibility. Rich material layers and precise detailing create a ceremonial yet contemporary environment that supports both heritage expression and modern operations."
  }
];

function useRevealOnScroll() {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("in-view"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function useCustomCursor() {
  useEffect(() => {
    const dot = document.getElementById("cursorDot");
    const ring = document.getElementById("cursorRing");
    if (!dot || !ring) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let rx = x;
    let ry = y;

    const onMove = (event) => {
      x = event.clientX;
      y = event.clientY;
      dot.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    const onEnterInteractive = () => ring.classList.add("cursor-hover");
    const onLeaveInteractive = () => ring.classList.remove("cursor-hover");

    const tick = () => {
      rx += (x - rx) * 0.16;
      ry += (y - ry) * 0.16;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      requestAnimationFrame(tick);
    };

    document.addEventListener("mousemove", onMove);
    document.querySelectorAll("a, button, .project-card").forEach((el) => {
      el.addEventListener("mouseenter", onEnterInteractive);
      el.addEventListener("mouseleave", onLeaveInteractive);
    });
    requestAnimationFrame(tick);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.querySelectorAll("a, button, .project-card").forEach((el) => {
        el.removeEventListener("mouseenter", onEnterInteractive);
        el.removeEventListener("mouseleave", onLeaveInteractive);
      });
    };
  }, []);
}

function ProjectDetail({ project, onClose }) {
  return html`
    <section className="section project-detail" id="project-view">
      <div className="project-header">
        <img src="assets/logo.png" alt="Skape" className="project-intro-logo" />
        <p className="eyebrow">${project.banner}</p>
        <h2>${project.title}</h2>
        <p>${project.subtitle}</p>
        <button className="btn btn-ghost" onClick=${onClose}>Back to Portfolio</button>
      </div>

      <div className="container detail-grid" data-reveal>
        <article className="brief-card">
          <h3>Design Brief</h3>
          <p>${project.designBrief}</p>
        </article>
        <article className="brief-card">
          <h3>Interior Design</h3>
          <p>${project.interiorDesign}</p>
        </article>
      </div>

      <div className="container photo-layout" data-reveal>
        <figure className="photo photo-main"><img src=${project.gallery[0]} alt=${project.title + " main photo"} /></figure>
        <figure className="photo"><img src=${project.gallery[1]} alt=${project.title + " interior 1"} /></figure>
        <figure className="photo"><img src=${project.gallery[2]} alt=${project.title + " interior 2"} /></figure>
        <figure className="photo"><img src=${project.gallery[3]} alt=${project.title + " detail 1"} /></figure>
        <figure className="photo"><img src=${project.gallery[4]} alt=${project.title + " detail 2"} /></figure>
      </div>
    </section>
  `;
}

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menuFocus, setMenuFocus] = useState("");
  const [filter, setFilter] = useState("all");
  const [activeProjectId, setActiveProjectId] = useState("");
  const [showSplash, setShowSplash] = useState(true);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [aboutExpanded, setAboutExpanded] = useState(false);

  useRevealOnScroll();
  useCustomCursor();

  useEffect(() => {
    const timer = window.setTimeout(() => setShowSplash(false), 1600);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const onEsc = (event) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen || showSplash ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen, showSplash]);

  useEffect(() => {
    if (mobileOpen) setMenuFocus("");
  }, [mobileOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredProjects = useMemo(() => {
    if (filter === "all") return PROJECTS;
    return PROJECTS.filter((project) => project.segment === filter);
  }, [filter]);

  const activeProject = useMemo(
    () => PROJECTS.find((project) => project.id === activeProjectId) || null,
    [activeProjectId]
  );
  const activeMenu = menuFocus ? MENU_CONTENT[menuFocus] : null;
  const activeNav = menuFocus ? NAV_ITEMS.find((item) => item.id === menuFocus) : null;

  useEffect(() => {
    if (activeProject) {
      document.getElementById("project-view")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [activeProject]);

  const onFieldChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const nextErrors = {};

    if (form.name.trim().length < 2) nextErrors.name = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (form.message.trim().length < 10) nextErrors.message = "Please provide at least 10 characters.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return setStatus("");

    setStatus("Thank you. Your inquiry has been submitted.");
    setForm({ name: "", email: "", message: "" });
  };

  const onMenuJump = (sectionId) => {
    if (sectionId === "about") setAboutExpanded(true);
    setMobileOpen(false);
  };

  const onPrimaryNavClick = (sectionId) => {
    if (sectionId === "about") {
      setAboutExpanded(true);
      setMenuFocus("");
      setMobileOpen(false);
      window.requestAnimationFrame(() => {
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
      return;
    }

    setMenuFocus((prev) => (prev === sectionId ? "" : sectionId));
  };

  return html`
    <div className="app-shell">
      <div id="cursorDot" className="cursor-dot"></div>
      <div id="cursorRing" className="cursor-ring"></div>

      ${showSplash
      ? html`
            <div className="splash">
              <img src="assets/logo.png" alt="Skape" className="splash-logo" />
            </div>
          `
      : null}

      <header className=${`site-header ${mobileOpen ? "menu-open" : ""} ${scrolled ? "scrolled" : ""}`} id="top">
        <div className="container nav-wrap">
          <a className="brand" href="#top" aria-label="Skape home">
            <img src="assets/logo.png" alt="Skape logo" className="brand-logo" />
          </a>
          <button
            className=${`menu-toggle ${mobileOpen ? "open" : ""}`}
            aria-expanded=${mobileOpen}
            aria-label=${mobileOpen ? "Close menu" : "Open menu"}
            onClick=${() => setMobileOpen((v) => !v)}
          >
            <span className="menu-box"></span>
            <div className="menu-lines">
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </header>

      <div
        className=${`menu-overlay ${mobileOpen ? "open" : ""}`}
        aria-hidden=${!mobileOpen}
        onClick=${() => setMobileOpen(false)}
      >
        <div className="container menu-overlay-inner" onClick=${(event) => event.stopPropagation()}>
          <div className="menu-col menu-nav-col">
            <nav className="menu-links">
              ${NAV_ITEMS.map(
        (item) =>
          html`<button
                    type="button"
                    className=${`menu-main-link ${menuFocus === item.id ? "active" : ""}`}
                    onClick=${() => onPrimaryNavClick(item.id)}
                  >${item.label}</button>`
      )}
            </nav>
          </div>
          <div className=${`menu-col menu-info-col ${activeMenu ? "open" : ""}`}>
            <p className="eyebrow">${activeMenu ? activeMenu.heading : "Navigation"}</p>
            ${activeMenu
      ? html`
                  <a className="menu-jump open" href=${`#${menuFocus}`} onClick=${() => onMenuJump(menuFocus)}>
                    Open ${activeNav ? activeNav.label : "Section"}
                  </a>
                `
      : html`<span className="menu-jump"></span>`}
            <ul className=${`menu-service-links ${activeMenu ? "open" : ""}`}>
              ${(activeMenu ? activeMenu.items : []).map(
        (item, index) =>
          html`<li style=${{ "--item-delay": `${index * 0.14}s` }}>${item}</li>`
      )}
            </ul>
            <p className=${`menu-placeholder ${activeMenu ? "hide" : ""}`}>
              Click a section on the left to view its subtopics.
            </p>
          </div>
        </div>
      </div>

      <main>
        <section className="hero" id="home">
          <div className="hero-image-layer"></div>
          <div className="container hero-grid">
            <div className="hero-copy" data-reveal>
              <p className="eyebrow">Architecture • Interiors • Construction</p>
              <h1>Modern Spaces With Timeless Character</h1>
              <p>Minimal, professional and detail-led projects for residential and commercial clients.</p>
              <div className="hero-actions">
                <a href="#portfolio" className="btn btn-primary btn-min">View Portfolio</a>
                <a href="#services" className="btn btn-line btn-min">Explore Services</a>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="services">
          <div className="container">
            <div className="section-head" data-reveal>
              <p className="eyebrow">Services</p>
              <h2>What We Offer</h2>
            </div>
            <div className="service-grid">
              ${SERVICES.map(
        (service) => html`
                  <article className="service-card" data-reveal>
                    <h3>${service.title}</h3>
                    <p>${service.text}</p>
                  </article>
                `
      )}
            </div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="container">
            <div className="about-hero" data-reveal>
              <div className="about-hero-overlay">
                <p className="about-kicker">ABOUT <span>|</span> ARCHITECTURE AND INTERIOR DESIGN STUDIO</p>
                <h2>Skape</h2>
                <p>
                  Every structure tells a story. We shape spaces where construction precision meets interior soul.
                </p>
                <button
                  type="button"
                  className="btn btn-line btn-min about-read-more"
                  onClick=${() => setAboutExpanded((prev) => !prev)}
                >
                  ${aboutExpanded ? "Show Less" : "Read More"}
                </button>
              </div>
            </div>

            ${aboutExpanded
      ? html`
                  <div className="about-details-grid">
                    <article className="about-card" data-reveal>
                      ${ABOUT_DETAILS.intro.map((paragraph) => html`<p>${paragraph}</p>`)}
                    </article>

                    <article className="about-card" data-reveal>
                      <h3>Interior Design Philosophy</h3>
                      ${ABOUT_DETAILS.philosophy.map((paragraph) => html`<p>${paragraph}</p>`)}
                    </article>

                    <article className="about-card" data-reveal>
                      <h3>Core Values</h3>
                      <ul className="about-values-list">
                        ${ABOUT_DETAILS.coreValues.map(
        (value) =>
          html`<li>
                            <strong>${value.title}:</strong>
                            <p>${value.text}</p>
                          </li>`
      )}
                      </ul>
                    </article>

                    <article className="about-card" data-reveal>
                      <h3>About My Studio</h3>
                      <p>${ABOUT_DETAILS.studio}</p>
                      <div className="about-actions">
                        <a href="#contact" className="btn btn-primary btn-min">Contact Us</a>
                        <a href="#contact" className="btn btn-line btn-min">Forms</a>
                      </div>
                    </article>
                  </div>
                `
      : null}
          </div>
        </section>

        <section className="section" id="portfolio">
          <div className="container">
            <div className="section-head" data-reveal>
              <p className="eyebrow">Portfolio</p>
              <h2>Residential + Commercial</h2>
            </div>

            <div className="filters" data-reveal>
              ${["all", "residential", "commercial"].map(
        (type) => html`
                  <button className=${`filter-btn ${filter === type ? "active" : ""}`} onClick=${() => setFilter(type)}>
                    ${type[0].toUpperCase() + type.slice(1)}
                  </button>
                `
      )}
            </div>

            <div className="project-grid">
              ${filteredProjects.map(
        (project) => html`
                  <article className="project-card" data-reveal>
                    <img src=${project.cover} alt=${project.title} loading="lazy" />
                    <div className="project-overlay">
                      <p className="project-type">${project.banner}</p>
                      <h3>${project.title}</h3>
                      <p>${project.subtitle}</p>
                      <button className="inline-link" onClick=${() => setActiveProjectId(project.id)}>View Project</button>
                    </div>
                  </article>
                `
      )}
            </div>
          </div>
        </section>

        ${activeProject
      ? html`<${ProjectDetail} project=${activeProject} onClose=${() => setActiveProjectId("")} />`
      : null}

        <section className="section" id="contact">
          <div className="container split contact-split">
            <div data-reveal>
              <p className="eyebrow">Contact</p>
              <h2>Let's Build Your Project</h2>
              <p>Share your requirement and we will respond with next steps.</p>
              <ul className="contact-list">
                <li>Email: skapedesign.in@gmail.com</li>
                <li>Phone: +91 9940482048</li>
                <li>Phone: +91 9940340216</li>
                <li>Studio: Kolathur, Chennai-600099, TAMIL NADU, INDIA</li>
              </ul>
            </div>

            <form className="contact-form" onSubmit=${onSubmit} noValidate data-reveal>
              <label htmlFor="name">Full Name</label>
              <input id="name" name="name" type="text" value=${form.name} onInput=${onFieldChange} />
              <small className="error">${errors.name || ""}</small>

              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" value=${form.email} onInput=${onFieldChange} />
              <small className="error">${errors.email || ""}</small>

              <label htmlFor="message">Project Brief</label>
              <textarea id="message" name="message" rows="5" value=${form.message} onInput=${onFieldChange}></textarea>
              <small className="error">${errors.message || ""}</small>

              <button type="submit" className="btn btn-primary btn-min">Submit Inquiry</button>
              <p className="form-status" aria-live="polite">${status}</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container"><p>© ${new Date().getFullYear()} Skape Architecture. All rights reserved.</p></div>
      </footer>
    </div>
  `;
}

createRoot(document.getElementById("root")).render(html`<${App} />`);
