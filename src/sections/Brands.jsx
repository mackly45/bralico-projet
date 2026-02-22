import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const Brands = () => {
    const containerRef = useRef();

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".brand-reveal", {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%",
                },
                y: 60,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
                ease: "power2.out"
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    const brandList = [
        { name: '33 Export', category: 'Bière Blonde', desc: 'La bière de tous les supporters.' },
        { name: 'Beaufort Lager', category: 'Lager Premium', desc: 'Prestige et fraîcheur panafricaine.' },
        { name: 'Castel Beer', category: 'Bière Heritage', desc: 'Le savoir-faire historique Castel.' },
        { name: 'Doppel Munich', category: 'Bière Brune', desc: 'Toute la force du malt munichois.' },
        { name: 'Mutzig', category: 'Classique', desc: 'Le goût vrai et authentique.' },
        { name: 'Ngok', category: 'Locale', desc: 'Fièrement brassée au pays.' },
        { name: 'Stark', category: 'Citoyenne', desc: 'L\'esprit patriote et innovant.' },
        { name: 'Vimto', category: 'Soft Drink', desc: 'Le goût unique des fruits rouges.' }
    ];

    return (
        <section id="les-marques" ref={containerRef} style={{ padding: '20vh 0', background: 'var(--bg-dark)', overflow: 'hidden' }}>
            <div className="container">
                <div style={{ maxWidth: '600px', marginBottom: '6rem' }}>
                    <p className="premium-subtitle brand-reveal">Notre Portefeuille</p>
                    <h2 className="premium-title brand-reveal" style={{ fontSize: '4rem' }}>Les Grandes <span style={{ color: 'var(--color-bralico-red)' }}>Marques.</span></h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                    {brandList.map((brand, i) => (
                        <div key={i} className="brand-card brand-reveal" style={{
                            background: 'rgba(255,255,255,0.02)',
                            padding: '3rem 2rem',
                            borderRadius: '0.5rem',
                            border: '1px solid rgba(255,255,255,0.05)',
                            transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                            cursor: 'pointer',
                            position: 'relative',
                            overflow: 'hidden'
                        }} onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-20px) scale(1.02)';
                            e.currentTarget.style.borderColor = 'rgba(178, 34, 34, 0.3)';
                            e.currentTarget.style.background = 'rgba(178, 34, 34, 0.05)';
                        }} onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0) scale(1)';
                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                            e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                        }}>
                            {/* Decorative background number/letter */}
                            <span style={{
                                position: 'absolute',
                                top: '1rem',
                                right: '1rem',
                                fontSize: '4rem',
                                fontWeight: '900',
                                opacity: 0.03,
                                color: 'white',
                                pointerEvents: 'none'
                            }}>{i + 1}</span>

                            <p style={{ fontSize: '0.7rem', color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1rem', fontWeight: '800' }}>{brand.category}</p>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', fontFamily: 'var(--font-serif)', color: 'white' }}>{brand.name}</h3>
                            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)', lineHeight: '1.6' }}>{brand.desc}</p>

                            <div style={{ marginTop: '2rem', height: '1px', width: '30px', background: 'var(--color-gold)', transition: 'width 0.4s' }} className="card-line" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Brands;
