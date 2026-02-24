import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Brands = () => {
    const sectionRef = useRef();
    const [filter, setFilter] = useState('Bières');

    const brandCategories = {
        'Bières': [
            { id: 1, name: "Stärk", desc: "100% Malt, Double Médaille d'Or", color: "#c5a059", num: "01", image: "/products/stark.png" },
            { id: 2, name: "Castel Beer", desc: "La Bière Panafricaine", color: "#b22222", num: "02", image: "/products/castel.png" },
            { id: 3, name: "Doppel Munich", desc: "Puissance & Caractère", color: "#000000", num: "03", image: "/products/doppel.png" },
            { id: 4, name: "Beaufort Lager", desc: "Fraîcheur Supérieure", color: "#e2e2e2", num: "04", image: "/products/beaufort.png" },
            { id: 5, name: "33 Export", desc: "La Soif de Gagner", color: "#b22222", num: "05", image: "/products/33export.png" }
        ],
        'Softs': [
            { id: 6, name: "Mboka Cola", desc: "L'Authenticité Congolaise", color: "#000000", num: "06", image: "/products/mboka.png" },
            { id: 7, name: "World Cola", desc: "Le Goût Global", color: "#b22222", num: "07", image: "/products/world-cola.png" },
            { id: 8, name: "Top Passion", desc: "Explosion de Saveurs Fruits", color: "#f1d382", num: "08", image: "/products/top-passion.png" },
            { id: 9, name: "Top Bitter Lemon", desc: "Fraîcheur Citronnée", color: "#c5a059", num: "09", image: "/products/top-bitter-lemon.png" },
            { id: 10, name: "Top Coco Pina", desc: "Exotisme Tropical", color: "#f1d382", num: "10", image: "/products/top-coco-pina.png" }
        ],
        'Mix': [
            { id: 11, name: "Booster Whisky", desc: "Mix Audacieux", color: "#000000", num: "11", image: "/products/booster-whisky.png" },
            { id: 12, name: "Booster Cider", desc: "Plaisir Pomme", color: "#c5a059", num: "12", image: "/products/booster-cider.png" }
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
                            height: '450px', // Slightly taller
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
                                const img = e.currentTarget.querySelector('.product-img');
                                if (img) img.style.transform = 'scale(1.15) translateY(-20px) rotate(5deg)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                                e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                                const img = e.currentTarget.querySelector('.product-img');
                                if (img) img.style.transform = 'scale(1) translateY(0) rotate(0deg)';
                            }}>

                            {/* Product Image Float */}
                            {brand.image && (
                                <div style={{
                                    position: 'absolute',
                                    top: '10%',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    width: '80%',
                                    height: '50%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    pointerEvents: 'none'
                                }}>
                                    <img
                                        src={brand.image}
                                        alt={brand.name}
                                        className="product-img"
                                        style={{
                                            height: '100%',
                                            objectFit: 'contain',
                                            transition: 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
                                            filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.5))'
                                        }}
                                        onError={(e) => e.target.style.display = 'none'}
                                    />
                                </div>
                            )}

                            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', fontFamily: 'var(--font-serif)', color: 'white' }}>{brand.name}</h3>
                            <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', lineHeight: '1.5', maxWidth: '80%' }}>{brand.desc}</p>

                            <div style={{ marginTop: '1.5rem', height: '1px', width: '30px', background: 'var(--color-bralico-red)', transition: 'width 0.4s' }} className="card-line" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Brands;
