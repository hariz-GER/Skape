'use client';

const MARQUEE_IMAGES = [
    'https://images.unsplash.com/photo-1600585154340-be6199f74709?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1600210492486-724fe5c67fb3?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=800&q=80',
];

export default function Marquee() {
    return (
        <section className="marquee-section">
            <div className="marquee-container">
                <div className="marquee-track">
                    {/* First set */}
                    {MARQUEE_IMAGES.map((src, idx) => (
                        <div key={`m1-${idx}`} className="marquee-item">
                            <img src={src} alt={`Arch ${idx}`} />
                        </div>
                    ))}
                    {/* Duplicate set for seamless loop */}
                    {MARQUEE_IMAGES.map((src, idx) => (
                        <div key={`m2-${idx}`} className="marquee-item">
                            <img src={src} alt={`Arch duplicate ${idx}`} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="marquee-container" data-direction="right">
                <div className="marquee-track track-reverse">
                    {/* First set */}
                    {MARQUEE_IMAGES.slice().reverse().map((src, idx) => (
                        <div key={`mr1-${idx}`} className="marquee-item">
                            <img src={src} alt={`Arch rev ${idx}`} />
                        </div>
                    ))}
                    {/* Duplicate set */}
                    {MARQUEE_IMAGES.slice().reverse().map((src, idx) => (
                        <div key={`mr2-${idx}`} className="marquee-item">
                            <img src={src} alt={`Arch rev duplicate ${idx}`} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
