'use client';

export default function Services({ services }) {
    return (
        <section className="section" id="services">
            <div className="container">
                <div className="section-head" data-reveal>
                    <p className="eyebrow">Services</p>
                    <h2>What We Offer</h2>
                </div>
                <div className="service-grid">
                    {services.map((service) => (
                        <article className="service-card" data-reveal key={service.title}>
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.text}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
