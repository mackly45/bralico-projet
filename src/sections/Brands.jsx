import React, { useRef } from 'react';

const Brands = () => {
    const containerRef = useRef();

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
        <section id="les-marques" ref={containerRef} style={{ padding: '15vh 0', background: 'var(--bg-dark)' }}>
            <div className="container">
                <p className="premium-subtitle">Notre Portefeuille</p>
                <h2 className="premium-title">Les Grandes Marques</h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginTop: '5rem' }}>
                    {brandList.map((brand, i) => (
                        <div key={i} className="brand-card" style={{
                            background: 'var(--glass-bg)',
                            padding: '2rem',
                            borderRadius: '1rem',
                            border: '1px solid var(--glass-border)',
                            transition: 'all 0.4s ease',
                            cursor: 'pointer',
                            overflow: 'hidden',
                            position: 'relative'
                        }} onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-10px)';
                            e.currentTarget.style.borderColor = 'var(--color-bralico-red)';
                            e.currentTarget.style.background = 'rgba(178, 34, 34, 0.05)';
                        }} onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.borderColor = 'var(--glass-border)';
                            e.currentTarget.style.background = 'var(--glass-bg)';
                        }}>
                            <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '100px', height: '100px', borderRadius: '50%', background: 'var(--color-bralico-red)', opacity: 0.1, filter: 'blur(30px)' }} />
                            <p style={{ fontSize: '0.75rem', color: 'var(--color-gold)', textTransform: 'uppercase', marginBottom: '0.5rem', fontWeight: '900' }}>{brand.category}</p>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)' }}>{brand.name}</h3>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>{brand.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Brands;
