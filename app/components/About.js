'use client';

export default function About() {
    return (
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

                <div className="about-grid" data-reveal>
                    <div className="about-image-wrap">
                        <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80" alt="Studio Space" />
                        <div className="about-stats">
                            <div className="stat-item">
                                <span className="stat-num">90+</span>
                                <span className="stat-label">Projects Completed</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-num">25+</span>
                                <span className="stat-label">Years Experience</span>
                            </div>
                        </div>
                    </div>
                    <div className="about-content">
                        <h3>Our Core Principles</h3>
                        <ul className="principles-list">
                            <li>
                                <strong>Clarity of Form</strong>
                                <p>Stripping away the unnecessary to reveal the essence of the structure.</p>
                            </li>
                            <li>
                                <strong>Material Integrity</strong>
                                <p>Honest use of timber, stone, and metal to create tactile longevity.</p>
                            </li>
                            <li>
                                <strong>Sustainable Soul</strong>
                                <p>Integrating passive design and natural light for enduring efficiency.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
