import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const containerRef = useRef();
    const titleRef = useRef();

    useEffect(() => {
        const ctx = gsap.context(() => {
            // High-end title reveal: Split lines or words effect
            gsap.from(".reveal-char", {
                y: 100,
                opacity: 0,
                duration: 1.5,
                stagger: 0.02,
                ease: "expo.out",
                delay: 0.5
            });

            gsap.from(".reveal-text-slow", {
                y: 20,
                opacity: 0,
                duration: 2,
                ease: "power3.out",
                delay: 1
            });

            // Parallax on the background elements
            gsap.to(".hero-bg-accent", {
                y: -100,
                scrollTrigger: {
                    trigger: containerRef.current,
                    scrub: true
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    // Split title for high-end animation
    const title = "Chaque jour, ensemble.";

    return (
        <section ref={containerRef} id="hero" className="hero-section" style={{ height: '100vh', position: 'relative', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
            {/* Background Accent */}
            <div className="hero-bg-accent" style={{
                position: 'absolute',
                top: '20%',
                left: '10%',
                width: '60vw',
                height: '60vw',
                background: 'radial-gradient(circle, rgba(178,34,34,0.15) 0%, transparent 70%)',
                zIndex: 0,
                filter: 'blur(80px)',
                borderRadius: '50%'
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'left', width: '100%' }}>
                <div style={{ marginBottom: '1rem', overflow: 'hidden' }}>
                    <p className="reveal-text-slow" style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.5em', fontWeight: '900', color: 'var(--color-gold)' }}>
                        Brassage de Qualité Supérieure
                    </p>
                </div>

                <div style={{ overflow: 'hidden', marginBottom: '2rem' }}>
                    <h1 ref={titleRef} className="premium-title" style={{ fontSize: 'clamp(4rem, 12vw, 9rem)', lineHeight: '0.9', margin: 0 }}>
                        {title.split("").map((char, i) => (
                            <span key={i} className="reveal-char" style={{ display: 'inline-block', whiteSpace: char === ' ' ? 'pre' : 'normal' }}>
                                {char}
                            </span>
                        ))}
                    </h1>
                </div>

                <div style={{ maxWidth: '600px', overflow: 'hidden' }}>
                    <p className="reveal-text-slow" style={{ fontSize: '1.2rem', lineHeight: '1.6', color: 'var(--text-secondary)', fontWeight: '300' }}>
                        Découvrez l'excellence brassicole du Congo à travers une expérience immersive unique.
                    </p>
                </div>

                <div className="reveal-text-slow" style={{ marginTop: '4rem' }}>
                    <a href="#la-brasserie" className="btn-primary" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '1rem',
                        padding: '1.5rem 3rem',
                        border: '1px solid rgba(255,255,255,0.2)',
                        background: 'rgba(255,255,255,0.02)',
                        backdropFilter: 'blur(10px)',
                        color: 'white',
                        textDecoration: 'none',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        letterSpacing: '0.2em',
                        fontSize: '0.8rem',
                        transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                    }} onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'var(--color-gold)';
                        e.currentTarget.style.paddingRight = '4rem';
                        e.currentTarget.style.background = 'rgba(197, 160, 89, 0.1)';
                    }} onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                        e.currentTarget.style.paddingRight = '3rem';
                        e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                    }}>
                        Explorer l'univers
                        <span style={{ fontSize: '1.5rem' }}>→</span>
                    </a>
                </div>
            </div>

            {/* Scroll Indicator Custom */}
            <div style={{
                position: 'absolute',
                bottom: '4rem',
                right: '4rem',
                zIndex: 2,
                display: 'flex',
                alignItems: 'center',
                gap: '2rem',
                transform: 'rotate(90deg)',
                transformOrigin: 'right center'
            }}>
                <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.4em', color: 'var(--color-gold)' }}>Défiler</span>
                <div style={{ width: '60px', height: '1px', background: 'var(--color-gold)' }} />
            </div>
        </section>
    );
};

export default Hero;
