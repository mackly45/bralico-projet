import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef(null);
    const timelineRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // General reveal
            gsap.from(".about-reveal", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                },
                y: 50,
                opacity: 0,
                duration: 1.2,
                stagger: 0.2,
                ease: "expo.out"
            });

            // Timeline line growth
            gsap.from(".timeline-line", {
                scrollTrigger: {
                    trigger: timelineRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    scrub: true
                },
                scaleY: 0,
                transformOrigin: "top"
            });

            // Timeline items
            gsap.utils.toArray(".timeline-item").forEach((item) => {
                gsap.from(item, {
                    scrollTrigger: {
                        trigger: item,
                        start: "top 85%",
                    },
                    x: -20,
                    opacity: 0,
                    duration: 1,
                    ease: "power2.out"
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const timelineData = [
        { year: "1949", text: "Création du Groupe Castel, pionnier de l'industrie africaine." },
        { year: "2013", text: "Fondation de BRALICO. Première bière servie le 16 décembre." },
        { year: "2015", text: "Intégration officielle au sein du Groupe Castel Afrique." },
        { year: "2018", text: "Leader de l'industrie brassicole en République du Congo." },
        { year: "2024", text: "Excellence ESG : +300 000h de formation et station d'épuration aux normes mondiales." }
    ];

    return (
        <section id="la-brasserie" ref={sectionRef} className="about-section" style={{ minHeight: '150vh', padding: '20vh 0', background: 'var(--bg-dark)', position: 'relative', overflow: 'hidden' }}>
            <div className="container">
                <div style={{ maxWidth: '800px', marginBottom: '15vh' }}>
                    <p className="premium-subtitle about-reveal">Notre Héritage</p>
                    <h2 className="premium-title about-reveal" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: 'white', marginBottom: '3rem' }}>
                        Une Histoire de Passion <br /> & de Terroir
                    </h2>
                    <p className="about-reveal" style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.7)', fontWeight: '300' }}>
                        Depuis notre intégration au Groupe Castel, nous allions savoir-faire ancestral et innovation technologique. Avec nos sites de <strong>Pointe-Noire</strong> et d'<strong>Oyo</strong>, nous assurons une production d'excellence au cœur du Congo.
                    </p>
                </div>

                {/* Timeline Section */}
                <div ref={timelineRef} style={{ position: 'relative', paddingLeft: '3rem', margin: '10vh 0' }}>
                    <div className="timeline-line" style={{ position: 'absolute', left: '0', top: '0', bottom: '0', width: '2px', background: 'var(--color-bralico-red)' }} />
                    {timelineData.map((item, index) => (
                        <div key={index} className="timeline-item" style={{ marginBottom: '4rem', position: 'relative' }}>
                            <div style={{ position: 'absolute', left: '-3.4rem', top: '0.4rem', width: '12px', height: '12px', borderRadius: '50%', background: 'white', border: '2px solid var(--color-bralico-red)' }} />
                            <h4 style={{ color: 'var(--color-bralico-red)', fontSize: '1.5rem', marginBottom: '0.5rem', fontFamily: 'var(--font-main)' }}>{item.year}</h4>
                            <p style={{ color: 'white', fontSize: '1.1rem', opacity: 0.8 }}>{item.text}</p>
                        </div>
                    ))}
                </div>

                {/* RSE Stats */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem', marginTop: '15vh' }}>
                    <div className="about-reveal" style={{ borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '2rem' }}>
                        <h3 style={{ fontSize: '3rem', color: 'var(--color-gold)', marginBottom: '1rem' }}>+300K</h3>
                        <p style={{ fontSize: '0.9rem', opacity: 0.6, textTransform: 'uppercase', letterSpacing: '2px' }}>Heures de Formation / an</p>
                    </div>
                    <div className="about-reveal" style={{ borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '2rem' }}>
                        <h3 style={{ fontSize: '3rem', color: 'var(--color-gold)', marginBottom: '1rem' }}>100%</h3>
                        <p style={{ fontSize: '0.9rem', opacity: 0.6, textTransform: 'uppercase', letterSpacing: '2px' }}>Traitement des Eaux (PN)</p>
                    </div>
                    <div className="about-reveal" style={{ borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '2rem' }}>
                        <h3 style={{ fontSize: '3rem', color: 'var(--color-gold)', marginBottom: '1rem' }}>PET</h3>
                        <p style={{ fontSize: '0.9rem', opacity: 0.6, textTransform: 'uppercase', letterSpacing: '2px' }}>Collecte & Recyclage Actif</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
