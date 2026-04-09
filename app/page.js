'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import CustomCursor from './components/CustomCursor';
import Splash from './components/Splash';
import Header from './components/Header';
import MenuOverlay from './components/MenuOverlay';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import ProjectDetail from './components/ProjectDetail';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SmoothScroll from './components/SmoothScroll';
import Marquee from './components/Marquee';
import RevealText from './components/RevealText';
import { NAV_ITEMS, MENU_CONTENT, SERVICES_DATA, PROJECTS_DATA } from './data';

const SPLASH_DURATION_MS = 6000;
const REDUCED_MOTION_SPLASH_DURATION_MS = 450;

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
  const [showSplash, setShowSplash] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);
  const lastScrollY = useRef(0);

  useRevealOnScroll();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const splashDuration = prefersReducedMotion ? REDUCED_MOTION_SPLASH_DURATION_MS : SPLASH_DURATION_MS;

    setShowSplash(true);
    const timer = window.setTimeout(() => setShowSplash(false), splashDuration);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const onEsc = (event) => {
      if (event.key !== 'Escape') return;
      setMobileOpen(false);
      setActiveProjectId('');
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
      const currentY = window.scrollY;
      setScrolled(currentY > 50);

      if (currentY < 70) {
        setHideHeader(false);
      } else if (!mobileOpen) {
        setHideHeader(currentY > lastScrollY.current);
      }

      lastScrollY.current = currentY;
    };

    lastScrollY.current = window.scrollY;
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileOpen]);

  useEffect(() => {
    if (mobileOpen) setHideHeader(false);
  }, [mobileOpen]);

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

  const createMailtoLink = ({ name, email, message }) => {
    const subject = encodeURIComponent(`New inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nProject Brief:\n${message}`
    );
    return `mailto:skapedesign.in@gmail.com?subject=${subject}&body=${body}`;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = {};

    if (form.name.trim().length < 2) nextErrors.name = 'Please enter your full name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (form.message.trim().length < 10) nextErrors.message = 'Please provide at least 10 characters.';

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setStatus('');
      return;
    }

    const cleanPayload = {
      name: form.name.trim(),
      email: form.email.trim(),
      message: form.message.trim(),
    };
    const mailtoLink = createMailtoLink(cleanPayload);
    const isGithubPagesHost =
      typeof window !== 'undefined' && /\.github\.io$/i.test(window.location.hostname);

    try {
      setIsSubmitting(true);
      setStatus('Saving your inquiry...');

      if (isGithubPagesHost) {
        window.location.href = mailtoLink;
        setStatus('GitHub Pages is live in static mode. Your email app was opened to send the inquiry.');
        setForm({ name: '', email: '', message: '' });
        return;
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cleanPayload),
      });

      const result = await response.json().catch(() => ({}));
      if (!response.ok) {
        if (response.status === 404 || response.status === 405) {
          window.location.href = mailtoLink;
          setStatus('This deployment is static. Your email app was opened to send the inquiry.');
          setForm({ name: '', email: '', message: '' });
          return;
        }
        setStatus(result.error || 'Unable to save inquiry right now. Please try again.');
        return;
      }

      setStatus('Thank you. Your inquiry has been saved successfully.');
      setForm({ name: '', email: '', message: '' });
    } catch (_error) {
      window.location.href = mailtoLink;
      setStatus('Unable to reach server endpoint here. Your email app was opened to send the inquiry.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="app-shell">
      <CustomCursor />

      {showSplash && <Splash />}

      <Header mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} scrolled={scrolled} hideHeader={hideHeader} />

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
        <Portfolio
          filter={filter}
          setFilter={setFilter}
          filteredProjects={filteredProjects}
          setActiveProjectId={setActiveProjectId}
        />
        {activeProject && <ProjectDetail project={activeProject} onClose={() => setActiveProjectId('')} />}
        <Contact
          form={form}
          onFieldChange={onFieldChange}
          onSubmit={onSubmit}
          errors={errors}
          status={status}
          isSubmitting={isSubmitting}
        />
      </main>

      <Footer />
    </div>
  );
}
