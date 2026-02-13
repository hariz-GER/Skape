'use client';

import { useEffect, useMemo, useState } from 'react';

const NAV_ITEMS = [
  { id: 'services', label: 'Services' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' }
];

const MENU_CONTENT = {
  services: {
    heading: 'Services',
    items: [
      'Architectural Design',
      'Planning Applications',
      'Interior Design',
      'Conservation & Heritage Design',
      'Create & Construct'
    ]
  },
  portfolio: {
    heading: 'Portfolio',
    items: ['Residential', 'Commercial', 'Conservation & Heritage']
  },
  about: {
    heading: 'About Studio',
    items: ['Practice Profile', 'Design Process', 'Design + Build Team']
  },
  contact: {
    heading: 'Get in Touch',
    items: [
      'skapedesign.in@gmail.com',
      '0A, Veeraragavalu Nagar, 2nd Main Road, Vinayagapuram, Kolathur, Chennai-99, INDIA',
      '7871758643',
      '9940482048'
    ]
  }
};

const SERVICES = [
  {
    title: 'Home Renovation',
    text:
      'We offer a seamless home renovation experience that transforms outdated spaces into functional, modern, and beautifully refined environments. Our process begins with understanding each client\'s needs, lifestyle, and vision, ensuring that every design decision reflects their goals. From structural improvements to aesthetic upgrades, we manage every detail with precision, transparency, and care. Our team focuses on quality craftsmanship, efficient planning, and thoughtful material selection to deliver results that feel fresh, timeless, and personalized.'
  },
  {
    title: 'Planning Application',
    text:
      'We provide thoughtful residential planning that transforms ideas into well-organized, efficient, and comfortable living spaces. By understanding each client\'s needs and lifestyle, we create layouts that maximize function, flow, and natural light. Our goal is to deliver personalized plans that make every home feel practical, beautiful, and truly livable.'
  },
  {
    title: 'Interior Design',
    text:
      'Our interior design experience is all about creating spaces that feel personal, comfortable, and genuinely connected to the way you live. We listen closely to your ideas, understand your lifestyle, and shape every detail to reflect your taste. From choosing materials and colors to planning furniture and lighting, we make the entire process simple and enjoyable. Our goal is to design interiors that are not only beautiful to look at but also practical and welcoming to use every day.'
  }
];

const PROJECTS = [
  {
    id: 'heritage-richmond',
    segment: 'residential',
    banner: 'RESIDENTIAL | HERITAGE REBUILD',
    title: 'Heritage Rebuild, Richmond',
    subtitle: 'Victorian terrace restoration with full rebuild, basement, and loft expansion.',
    cover: 'https://minaleandmann.com/wp-content/uploads/2018/01/2-8.jpg',
    gallery: [
      'https://minaleandmann.com/wp-content/uploads/2018/01/2-8.jpg',
      'https://minaleandmann.com/wp-content/uploads/2018/01/3-7.jpg',
      'https://minaleandmann.com/wp-content/uploads/2018/01/4-7.jpg',
      'https://minaleandmann.com/wp-content/uploads/2018/01/5-5.jpg',
      'https://minaleandmann.com/wp-content/uploads/2018/01/6-3.jpg'
    ],
    designBrief:
      'Victorian terrace in Richmond restored by retaining the heritage façade, adding a full subterranean basement and maximizing family living space with an open rear plan while keeping intimate rooms at the front and upper levels.',
    interiorDesign:
      'Dark wood panelling, hand-sawn French chevron flooring, reclaimed Italian marble, and a MannMade London kitchen with matt lacquer fronts and marble-topped oak island. Every floor was reconfigured for a contemporary layout and a simple landscape links the indoor and outdoor spaces.'
  },
  {
    id: 'mythiri',
    segment: 'residential',
    banner: 'RESIDENTIAL | INTERIOR DESIGN',
    title: 'Ms. Mythiri',
    subtitle:
      'For Mythiri, we designed interiors that unite style, comfort, and practicality, creating a home that feels inviting, modern, and uniquely personal.',
    cover:
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb3?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1400&q=80'
    ],
    designBrief:
      'The interior design for Mythiri in Chennai was envisioned as a harmonious blend of modern comfort and subtle elegance, tailored to the lifestyle and preferences of the client. The brief focused on creating warm, functional spaces with clean lines, natural textures, and a soothing color palette that reflects both contemporary taste and regional sensibilities. The design needed to balance openness with privacy, ensuring smooth circulation and practical use of every area. Special attention was given to lighting, storage planning, and spatial organization to enhance everyday living. The goal was to build a home that feels inviting, efficient, and uniquely personal.',
    interiorDesign:
      'The interiors combine calm materials, warm textures, and clean detailing to create a relaxed everyday atmosphere. The spatial planning supports both privacy and interaction, while layered lighting, soft finishes, and purposeful storage make each zone practical and elegant.'
  },
  {
    id: 'leisure-hall',
    segment: 'commercial',
    banner: 'COMMERCIAL | INTERIOR DESIGN',
    title: 'Leisure Hall',
    subtitle: 'Warm, socially engaging leisure environment with contemporary materials and fluid zoning.',
    cover:
      'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1578898887932-dce23a595ad4?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1400&q=80'
    ],
    designBrief:
      'This project focuses on creating a warm, contemporary leisure space that blends natural materials with modern design elements to deliver an inviting, socially engaging environment. The brief emphasizes openness, fluid circulation, and visually rich textures that enhance both comfort and aesthetics. The layout integrates multiple seating arrangements to support casual conversations, collaborative activities, and relaxed dining. Wooden elements, earthy tones, and organic forms are used to create a cohesive atmosphere that feels both grounded and vibrant.',
    interiorDesign:
      'The interior features a striking composition of wooden textures, sculptural lighting, and woven furniture that together create a warm, immersive atmosphere. Curved seating, layered pendant lights, patterned surfaces, and greenery keep the space connected, comfortable, and contemporary.'
  },
  {
    id: 'cultural-hall',
    segment: 'commercial',
    banner: 'COMMERCIAL | INTERIOR DESIGN',
    title: 'Cultural Hall',
    subtitle: 'Elegant event space that blends cultural identity with modern comfort and clarity.',
    cover:
      'https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=1400&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1464375117522-1311d6a5b81f?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1400&q=80',
      'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1400&q=80'
    ],
    designBrief:
      'To create an elegant cultural hall designed for gatherings, ceremonies, and formal events, blending traditional aesthetics with a refined spatial layout. The brief focuses on delivering a space that feels grand, welcoming, and visually expressive while supporting large audiences comfortably. Ample seating, clear sightlines, and smooth circulation were key requirements, ensuring functionality for various programs. The design emphasizes cultural identity, incorporating classical motifs, rich colors, and handcrafted detailing.',
    interiorDesign:
      'Lighting, acoustics, and proportions are carefully balanced to improve audience comfort and stage visibility. Rich material layers and precise detailing create a ceremonial yet contemporary environment that supports both heritage expression and modern operations.'
  }
];

function useRevealOnScroll() {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]');
    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('in-view'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
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
    const dot = document.getElementById('cursorDot');
    const ring = document.getElementById('cursorRing');
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

    const onEnterInteractive = () => ring.classList.add('cursor-hover');
    const onLeaveInteractive = () => ring.classList.remove('cursor-hover');

    const tick = () => {
      rx += (x - rx) * 0.16;
      ry += (y - ry) * 0.16;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
      requestAnimationFrame(tick);
    };

    document.addEventListener('mousemove', onMove);
    document.querySelectorAll('a, button, .project-card').forEach((el) => {
      el.addEventListener('mouseenter', onEnterInteractive);
      el.addEventListener('mouseleave', onLeaveInteractive);
    });
    requestAnimationFrame(tick);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.querySelectorAll('a, button, .project-card').forEach((el) => {
        el.removeEventListener('mouseenter', onEnterInteractive);
        el.removeEventListener('mouseleave', onLeaveInteractive);
      });
    };
  }, []);
}

function ProjectDetail({ project, onClose }) {
  return (
    <section className="section project-detail" id="project-view">
      <div className="project-header">
        <img src="/assets/logo.png" alt="Skape" className="project-intro-logo" />
        <p className="eyebrow">{project.banner}</p>
        <h2>{project.title}</h2>
        <p>{project.subtitle}</p>
        <button className="btn btn-ghost" onClick={onClose}>
          Back to Portfolio
        </button>
      </div>

      <div className="container detail-grid" data-reveal>
        <article className="brief-card">
          <h3>Design Brief</h3>
          <p>{project.designBrief}</p>
        </article>
        <article className="brief-card">
          <h3>Interior Design</h3>
          <p>{project.interiorDesign}</p>
        </article>
      </div>

      <div className="container photo-layout" data-reveal>
        <figure className="photo photo-main">
          <img src={project.gallery[0]} alt={`${project.title} main photo`} />
        </figure>
        {project.gallery.slice(1).map((image, index) => (
          <figure className="photo" key={image}>
            <img src={image} alt={`${project.title} interior ${index + 1}`} />
          </figure>
        ))}
      </div>
    </section>
  );
}

export default function Page() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menuFocus, setMenuFocus] = useState('');
  const [filter, setFilter] = useState('all');
  const [activeProjectId, setActiveProjectId] = useState('');
  const [showSplash, setShowSplash] = useState(true);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useRevealOnScroll();
  useCustomCursor();

  useEffect(() => {
    const timer = window.setTimeout(() => setShowSplash(false), 1600);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const onEsc = (event) => {
      if (event.key === 'Escape') setMobileOpen(false);
    };
    document.addEventListener('keydown', onEsc);
    return () => document.removeEventListener('keydown', onEsc);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen || showSplash ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen, showSplash]);

  useEffect(() => {
    if (mobileOpen) setMenuFocus('');
  }, [mobileOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredProjects = useMemo(() => {
    if (filter === 'all') return PROJECTS;
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
      document.getElementById('project-view')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [activeProject]);

  const onFieldChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const nextErrors = {};

    if (form.name.trim().length < 2) nextErrors.name = 'Please enter your full name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (form.message.trim().length < 10) nextErrors.message = 'Please provide at least 10 characters.';

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return setStatus('');

    setStatus('Thank you. Your inquiry has been submitted.');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="app-shell">
      <div id="cursorDot" className="cursor-dot" />
      <div id="cursorRing" className="cursor-ring" />

      {showSplash ? (
        <div className="splash">
          <img src="/assets/logo.png" alt="Skape" className="splash-logo" />
        </div>
      ) : null}

      <header className={`site-header ${mobileOpen ? 'menu-open' : ''} ${scrolled ? 'scrolled' : ''}`} id="top">
        <div className="container nav-wrap">
          <a className="brand" href="#top" aria-label="Skape home">
            <img src="/assets/logo.png" alt="Skape logo" className="brand-logo" />
          </a>
          <button
            className={`menu-toggle ${mobileOpen ? 'open' : ''}`}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className="menu-box" />
            <span className="menu-cross">×</span>
          </button>
        </div>
      </header>

      <div
        className={`menu-overlay ${mobileOpen ? 'open' : ''}`}
        aria-hidden={!mobileOpen}
        onClick={() => setMobileOpen(false)}
      >
        <div className="container menu-overlay-inner" onClick={(event) => event.stopPropagation()}>
          <div className="menu-col menu-nav-col">
            <nav className="menu-links">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={`menu-main-link ${menuFocus === item.id ? 'active' : ''}`}
                  onClick={() => setMenuFocus((prev) => (prev === item.id ? '' : item.id))}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
          <div className={`menu-col menu-info-col ${activeMenu ? 'open' : ''}`}>
            <p className="eyebrow">{activeMenu ? activeMenu.heading : 'Navigation'}</p>
            {activeMenu ? (
              <a className="menu-jump open" href={`#${menuFocus}`} onClick={() => setMobileOpen(false)}>
                Open {activeNav ? activeNav.label : 'Section'}
              </a>
            ) : (
              <span className="menu-jump" />
            )}
            <ul className={`menu-service-links ${activeMenu ? 'open' : ''}`}>
              {(activeMenu ? activeMenu.items : []).map((item, index) => (
                <li key={item} style={{ '--item-delay': `${index * 0.14}s` }}>
                  {item}
                </li>
              ))}
            </ul>
            <p className={`menu-placeholder ${activeMenu ? 'hide' : ''}`}>
              Click a section on the left to view its subtopics.
            </p>
          </div>
        </div>
      </div>

      <main>
        <section className="hero" id="home">
          <div className="hero-image-layer" />
          <div className="container hero-grid">
            <div className="hero-copy" data-reveal>
              <p className="eyebrow">Architecture • Interiors • Construction</p>
              <h1>Modern Spaces With Timeless Character</h1>
              <p>Minimal, professional and detail-led projects for residential and commercial clients.</p>
              <div className="hero-actions">
                <a href="#portfolio" className="btn btn-primary btn-min">
                  View Portfolio
                </a>
                <a href="#services" className="btn btn-line btn-min">
                  Explore Services
                </a>
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
              {SERVICES.map((service) => (
                <article className="service-card" data-reveal key={service.title}>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="container">
            <div className="section-head" data-reveal>
              <p className="eyebrow">About</p>
              <h2>Design-Led Architecture Studio</h2>
              <p>
                We design and deliver spaces that balance aesthetics, function, and long-term value. Our workflow
                combines concept design, technical detailing, and execution support.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="portfolio">
          <div className="container">
            <div className="section-head" data-reveal>
              <p className="eyebrow">Portfolio</p>
              <h2>Residential + Commercial</h2>
            </div>

            <div className="filters" data-reveal>
              {['all', 'residential', 'commercial'].map((type) => (
                <button
                  key={type}
                  className={`filter-btn ${filter === type ? 'active' : ''}`}
                  onClick={() => setFilter(type)}
                >
                  {type[0].toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>

            <div className="project-grid">
              {filteredProjects.map((project) => (
                <article className="project-card" data-reveal key={project.id}>
                  <img src={project.cover} alt={project.title} loading="lazy" />
                  <div className="project-overlay">
                    <p className="project-type">{project.banner}</p>
                    <h3>{project.title}</h3>
                    <p>{project.subtitle}</p>
                    <button className="inline-link" onClick={() => setActiveProjectId(project.id)}>
                      View Project
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {activeProject ? <ProjectDetail project={activeProject} onClose={() => setActiveProjectId('')} /> : null}

        <section className="section" id="contact">
          <div className="container split contact-split">
            <div data-reveal>
              <p className="eyebrow">Contact</p>
              <h2>Let's Build Your Project</h2>
              <p>Share your requirement and we will respond with next steps.</p>
              <ul className="contact-list">
                <li>Email: skapedesign.in@gmail.com</li>
                <li>Phone: 7871758643</li>
                <li>Phone: 9940482048</li>
                <li>Studio: 0A, Veeraragavalu Nagar, 2nd Main Road, Vinayagapuram, Kolathur, Chennai-99, INDIA</li>
              </ul>
            </div>

            <form className="contact-form" onSubmit={onSubmit} noValidate data-reveal>
              <label htmlFor="name">Full Name</label>
              <input id="name" name="name" type="text" value={form.name} onChange={onFieldChange} />
              <small className="error">{errors.name || ''}</small>

              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" value={form.email} onChange={onFieldChange} />
              <small className="error">{errors.email || ''}</small>

              <label htmlFor="message">Project Brief</label>
              <textarea id="message" name="message" rows="5" value={form.message} onChange={onFieldChange} />
              <small className="error">{errors.message || ''}</small>

              <button type="submit" className="btn btn-primary btn-min">
                Submit Inquiry
              </button>
              <p className="form-status" aria-live="polite">
                {status}
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Skape Architecture. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
