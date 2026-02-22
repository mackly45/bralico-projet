import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const containerRef = useRef();

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".reveal-text", {
                y: 50,
                opacity: 0,
                duration: 1.2,
                stagger: 0.2,
                ease: "power4.out"
            });

            gsap.to(".hero-overlay", {
                opacity: 0.8,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} id="hero" className="hero-section" style={{ height: '100vh', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
            <div className="hero-overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, rgba(5,5,5,0.2), rgba(5,5,5,0.7))', zIndex: 1 }} />

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div style={{ marginBottom: '1.5rem', overflow: 'hidden' }}>
                    <p className="reveal-text" style={{ fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.3em', fontWeight: '700', color: 'var(--color-gold)' }}>
                        Brassage de Qualité
                    </p>
                </div>
                <div style={{ overflow: 'hidden' }}>
                    <h1 className="reveal-text premium-title" style={{ fontSize: 'clamp(3rem, 10vw, 8rem)', marginBottom: '2rem' }}>
                        Chaque jour, ensemble.
                    </h1>
                </div>
                <div style={{ maxWidth: '800px', margin: '0 auto', overflow: 'hidden' }}>
                    <p className="reveal-text" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-secondary)' }}>
                        BRALICO, filiale du Groupe CASTEL, est une entreprise spécialisée dans la production et la commercialisation de la bière, des alcools mix et des boissons gazeuses au Congo.
                    </p>
                </div>

                <div className="reveal-text" style={{ marginTop: '3.5rem' }}>
                    <a href="#la-brasserie" className="btn-primary" style={{
                        display: 'inline-block',
                        padding: '1.2rem 2.5rem',
                        border: '1px solid var(--color-gold)',
                        color: 'var(--color-gold)',
                        textDecoration: 'none',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        transition: 'all 0.3s'
                    }} onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'var(--color-gold)';
                        e.currentTarget.style.color = 'black';
                    }} onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = 'var(--color-gold)';
                    }}>
                        Découvrir l'entreprise
                    </a>
                </div>
            </div>

            <div style={{
                position: 'absolute',
                bottom: '3rem',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 2,
                textAlign: 'center'
            }}>
                <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1rem', color: 'var(--text-secondary)' }}>Scrollez pour explorer</p>
                <div style={{ width: '1px', height: '80px', background: 'linear-gradient(to bottom, var(--color-gold), transparent)', margin: '0 auto' }} />
            </div>
        </section>
    );
};

export default Hero;
