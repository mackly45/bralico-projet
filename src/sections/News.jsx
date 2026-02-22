import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const News = () => {
    const containerRef = useRef();
    const news = [
        {
            date: '05 fév 2026',
            title: 'BRALICO COMMUNIQUE DE PRESSE',
            desc: 'Beaufort Lager annonce un partenariat panafricain d’exception avec Fally Ipupa Une alliance iconique placée sous le signe de la modernité, du prestige et de la fraîcheur.',
            tag: 'PRESSE'
        },
        {
            date: '05 sept 2025',
            title: 'Nomination – Direction Générale',
            desc: 'Nous avons le plaisir d’annoncer la nomination de Monsieur Mario RUSSO au poste de Directeur Général de BRALICO. Fort de plus de vingt années d’expérience...',
            tag: 'GROUPE'
        },
        {
            date: 'août 2025',
            title: 'LE MICRO-PATRIOTE BY STARK',
            desc: 'À l’occasion du 65ᵉ anniversaire de l’indépendance de la république du Congo, Bralico, à travers sa marque STARK, a lancé une initiative originale et citoyenne.',
            tag: 'MARQUE'
        }
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".news-reveal", {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                },
                y: 40,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power2.out"
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="actualités" ref={containerRef} className="news-section" style={{ minHeight: '100vh', padding: '20vh 0', background: 'white', color: 'black' }}>
            <div className="container">
                <p className="premium-subtitle news-reveal" style={{ color: 'var(--color-bralico-red)' }}>Actualités</p>
                <h2 className="premium-title news-reveal" style={{ color: 'black', marginBottom: '5rem', fontSize: '3.5rem' }}>Vivre BRALICO</h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
                    {news.map((item, i) => (
                        <div key={i} className="news-card news-reveal" style={{
                            background: '#f8f8f8',
                            padding: '3rem 2.5rem',
                            borderRadius: '0.2rem',
                            borderLeft: '4px solid var(--color-bralico-red)',
                            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                            cursor: 'pointer'
                        }} onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-10px)';
                            e.currentTarget.style.background = 'white';
                            e.currentTarget.style.boxShadow = '0 30px 60px rgba(0,0,0,0.05)';
                        }} onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.background = '#f8f8f8';
                            e.currentTarget.style.boxShadow = 'none';
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                                <span style={{ color: 'var(--color-bralico-red)', fontSize: '0.8rem', fontWeight: '900', letterSpacing: '0.1em' }}>{item.date}</span>
                                <span style={{ fontSize: '0.6rem', border: '1px solid #ddd', padding: '0.3rem 0.8rem', borderRadius: '2px', fontWeight: '900' }}>{item.tag}</span>
                            </div>
                            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.4rem', fontFamily: 'var(--font-serif)', lineHeight: '1.3' }}>{item.title}</h3>
                            <p style={{ color: '#555', lineHeight: '1.8', fontSize: '0.95rem' }}>{item.desc}</p>
                            <div style={{ marginTop: '2.5rem' }}>
                                <a href="#" style={{ color: 'var(--color-bralico-red)', textDecoration: 'none', fontWeight: '900', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.2em' }}>Découvrir l'article →</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default News;
