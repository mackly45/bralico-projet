import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef();

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".reveal-item", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
                y: 30,
                opacity: 0,
                duration: 1,
                stagger: 0.2
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    const values = [
        { title: "Proactivité", desc: "Anticiper les besoins pour rester leader." },
        { title: "Communication", desc: "Une transparence totale avec nos partenaires." },
        { title: "Humilité", desc: "Apprendre chaque jour pour s'améliorer." },
        { title: "Rigueur", desc: "L'excellence dans chaque goutte brassée." },
        { title: "Convivialité", desc: "Le partage au cœur de notre métier." },
        { title: "Respect", desc: "Pour nos collaborateurs et notre environnement." }
    ];

    return (
        <section id="la-brasserie" ref={sectionRef} style={{ padding: '15vh 0', background: 'var(--bg-dark)' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '5rem' }}>
                    <div>
                        <p className="premium-subtitle reveal-item">Notre Histoire</p>
                        <h2 className="premium-title reveal-item" style={{ marginBottom: '2rem' }}>Depuis 1949</h2>
                        <div className="reveal-item" style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                            <p style={{ marginBottom: '1.5rem' }}>
                                BRALICO est une filiale du **Groupe CASTEL**. Créé en 1949 à Bordeaux par neuf frères et sœurs, Castel est une entreprise familiale qui est devenue l'un des premiers acteurs mondiaux des boissons.
                            </p>
                            <p style={{ marginBottom: '1.5rem' }}>
                                Avec nos deux chaînes de production à **Pointe-Noire** et **Oyo**, et nos centres de distribution couvrant tout le pays, nous employons plus de 500 professionnels dédiés à la qualité.
                            </p>
                            <p>
                                Notre vision : être le leader local incontesté en alliant qualité brassicole et stratégie de croissance durable.
                            </p>
                        </div>
                    </div>

                    <div style={{ background: 'rgba(178, 34, 34, 0.05)', padding: '3rem', borderRadius: '1.5rem', border: '1px solid var(--glass-border)' }}>
                        <h3 className="reveal-item" style={{ color: 'var(--color-gold)', marginBottom: '2.5rem', fontFamily: 'var(--font-serif)' }}>Nos Valeurs Fondamentales</h3>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                            {values.map((v, i) => (
                                <div key={i} className="reveal-item">
                                    <h4 style={{ fontSize: '0.9rem', marginBottom: '0.5rem', color: 'white' }}>{v.title}</h4>
                                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{v.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="reveal-item" style={{ marginTop: '8rem', textAlign: 'center', padding: '4rem', background: 'var(--color-bralico-red)', borderRadius: '1rem' }}>
                    <h2 style={{ fontFamily: 'var(--font-serif)', color: 'white', fontSize: '2.5rem', marginBottom: '1rem' }}>Un Engagement Durable</h2>
                    <p style={{ maxWidth: '700px', margin: '0 auto', color: 'rgba(255,255,255,0.8)' }}>
                        Nous prioritisons la sécurité pour réduire les risques d'accidents et optimisons continuellement l'expérience de nos collaborateurs.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
