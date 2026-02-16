'use client';

export default function Splash() {
  return (
    <div className="splash">
      <div className="splash-curtain splash-curtain-top" />
      <div className="splash-curtain splash-curtain-bottom" />

      <div className="splash-logo-stage">
        <img src="/assets/logo.png" alt="Skape" className="splash-logo" />
        <span className="splash-logo-wipe" />
      </div>
    </div>
  );
}
