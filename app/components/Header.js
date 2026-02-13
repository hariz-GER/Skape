'use client';

export default function Header({ mobileOpen, setMobileOpen, scrolled, hideHeader }) {
    return (
        <header className={`site-header ${mobileOpen ? 'menu-open' : ''} ${scrolled ? 'scrolled' : ''} ${hideHeader ? 'nav-hidden' : ''}`} id="top">
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
                    <div className="menu-lines">
                        <span />
                        <span />
                    </div>
                </button>
            </div>
        </header>
    );
}
