'use client';

export default function Splash() {
  return (
    <div className="splash">
      <div className="splash-depth-light" />
      <div className="splash-blueprint-grid" />
      <div className="splash-blueprint-grid splash-blueprint-grid-secondary" />
      <div className="splash-vignette" />
      <span className="splash-line splash-line-horizontal" />
      <span className="splash-line splash-line-vertical" />

      <div className="splash-curtain splash-curtain-top" />
      <div className="splash-curtain splash-curtain-bottom" />

      <div className="splash-logo-stage">
        <img src="/assets/logo.png" alt="Skape" className="splash-logo" />
        <span className="splash-logo-wipe" />
        <span className="splash-logo-glint" />
        <p className="splash-tagline">Architecture | Interiors | Construction</p>
      </div>
    </div>
  );
}
