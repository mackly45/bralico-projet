import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Brands = () => {
    const sectionRef = useRef();
    const [filter, setFilter] = useState('Bières');

    const brandCategories = {
        'Bières': [
            { id: 1, name: "Stärk", desc: "100% Malt, Double Médaille d'Or", color: "#c5a059", num: "01" },
            { id: 2, name: "Castel Beer", desc: "La Bière Panafricaine", color: "#b22222", num: "02" },
            { id: 3, name: "Doppel Munich", desc: "Puissance & Caractère", color: "#000000", num: "03" },
            { id: 4, name: "Beaufort Lager", desc: "Fraîcheur Supérieure", color: "#e2e2e2", num: "04" },
            { id: 5, name: "33 Export", desc: "La Soif de Gagner", color: "#b22222", num: "05" }
        ],
        'Softs': [
            { id: 6, name: "Mboka Cola", desc: "L'Authenticité Congolaise", color: "#000000", num: "06" },
            { id: 7, name: "World Cola", desc: "Le Goût Global", color: "#b22222", num: "07" },
            { id: 8, name: "Top", desc: "Explosion de Saveurs Fruits", color: "#f1d382", num: "08" },
            { id: 9, name: "Suko", desc: "Rafraîchissement Naturel", color: "#c5a059", num: "09" }
        ],
        'Mix': [
            { id: 10, name: "Booster Whisky", desc: "Mix Audacieux", color: "#000000", num: "10" },
            { id: 11, name: "Booster Cider", desc: "Plaisir Pomme", color: "#c5a059", num: "11" }
        ]
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".brand-reveal", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
                y: 30,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
                ease: "power2.out"
            });
        }, sectionRef);
        return () => ctx.revert();
    }, [filter]);

    return (
        <section id="nos-marques" ref={sectionRef} className="brands-section" style={{ minHeight: '100vh', padding: '15vh 0', background: 'var(--bg-dark)', position: 'relative' }}>
            <div className="container">
                <div style={{ marginBottom: '8rem', textAlign: 'center' }}>
                    <p className="premium-subtitle brand-reveal">Portfolio</p>
                    <h2 className="premium-title brand-reveal" style={{ fontSize: 'clamp(3rem, 10vw, 5rem)', marginBottom: '3rem' }}>Nos Marques</h2>

                    {/* Category Filter */}
                    <div className="brand-reveal" style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2rem' }}>
                        {Object.keys(brandCategories).map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                style={{
                                    background: 'none',
                                    border: 'none',
                                    color: filter === cat ? 'var(--color-bralico-red)' : 'rgba(255,255,255,0.4)',
                                    fontSize: '0.9rem',
                                    letterSpacing: '3px',
                                    textTransform: 'uppercase',
                                    cursor: 'pointer',
                                    transition: 'color 0.3s'
                                }}
                            >
                                {cat}
                                {filter === cat && <div style={{ height: '1px', background: 'var(--color-bralico-red)', marginTop: '5px' }} />}
                            </button>
                        ))}
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
                    {brandCategories[filter].map((brand) => (
                        <div key={brand.id} className="brand-reveal brand-card" style={{
                            position: 'relative',
                            height: '400px',
                            background: 'rgba(255,255,255,0.02)',
                            border: '1px solid rgba(255,255,255,0.05)',
                            padding: '3rem',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-end',
                            transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
                            cursor: 'pointer',
                            overflow: 'hidden'
                        }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-10px)';
                                e.currentTarget.style.borderColor = 'var(--color-bralico-red)';
                                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                                e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                            }}>
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
