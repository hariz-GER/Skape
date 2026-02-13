'use client';

import { useEffect, useMemo, useState } from 'react';
import CustomCursor from './components/CustomCursor';
import Splash from './components/Splash';
import Header from './components/Header';
import MenuOverlay from './components/MenuOverlay';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ProjectDetail from './components/ProjectDetail';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SmoothScroll from './components/SmoothScroll';
import Marquee from './components/Marquee';
import RevealText from './components/RevealText';
import { NAV_ITEMS, MENU_CONTENT, SERVICES_DATA, PROJECTS_DATA } from './data';

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
    if (filter === 'all') return PROJECTS_DATA;
    return PROJECTS_DATA.filter((project) => project.segment === filter);
  }, [filter]);

  const activeProject = useMemo(
    () => PROJECTS_DATA.find((project) => project.id === activeProjectId) || null,
    [activeProjectId]
  );

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
      <CustomCursor />

      {showSplash && <Splash />}

      <Header mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} scrolled={scrolled} />

      <MenuOverlay
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        menuFocus={menuFocus}
        setMenuFocus={setMenuFocus}
        NAV_ITEMS={NAV_ITEMS}
        MENU_CONTENT={MENU_CONTENT}
      />

      <main>
        <SmoothScroll />
        <Hero />
        <RevealText text="We believe architecture is more than just building space; it is about crafting an experience that resonates with the soul. Every line, every shadow, and every material is chosen with intent to create a legacy of timeless design." />
        <Services services={SERVICES_DATA} />
        <Marquee />
        <About />
        <Portfolio
          filter={filter}
          setFilter={setFilter}
          filteredProjects={filteredProjects}
          setActiveProjectId={setActiveProjectId}
        />
        {activeProject && <ProjectDetail project={activeProject} onClose={() => setActiveProjectId('')} />}
        <Contact form={form} onFieldChange={onFieldChange} onSubmit={onSubmit} errors={errors} status={status} />
      </main>

      <Footer />
    </div>
  );
}
