'use client';

export default function MenuOverlay({ mobileOpen, setMobileOpen, menuFocus, setMenuFocus, NAV_ITEMS, MENU_CONTENT }) {
    const activeMenu = menuFocus ? MENU_CONTENT[menuFocus] : null;
    const activeNav = menuFocus ? NAV_ITEMS.find((item) => item.id === menuFocus) : null;

    return (
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
    );
}
