import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef();

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Elegant reveal for headers
            gsap.from(".about-reveal", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                },
                y: 50,
                opacity: 0,
                duration: 1.2,
                stagger: 0.15,
                ease: "power3.out"
            });

            // Parallax effect on the cards
            gsap.to(".value-card", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    scrub: 1
                },
                y: (i, target) => -50 * (i % 2 === 0 ? 1 : -1)
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
        <section id="la-brasserie" ref={sectionRef} style={{ padding: '20vh 0', background: 'var(--bg-dark)', position: 'relative' }}>
            {/* Background Texture/glow */}
            <div style={{ position: 'absolute', top: '10%', right: '5%', width: '30vw', height: '30vw', background: 'rgba(178, 34, 34, 0.05)', borderRadius: '50%', filter: 'blur(100px)', zIndex: 0 }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '8rem', alignItems: 'center' }}>
                    <div>
                        <p className="premium-subtitle about-reveal">Notre Héritage</p>
                        <h2 className="premium-title about-reveal" style={{ fontSize: '4rem', marginBottom: '3rem' }}>Depuis 1949, <br /><span style={{ color: 'var(--color-gold)' }}>L'Excellence.</span></h2>
                        <div className="about-reveal" style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '2' }}>
                            <p style={{ marginBottom: '2rem' }}>
                                BRALICO, fierté de la brasserie congolaise et filiale du prestigieux **Groupe CASTEL**, perpétue une tradition d'excellence entamée il y a plus de 70 ans.
                            </p>
                            <p style={{ marginBottom: '2rem' }}>
                                Avec nos sites de production à la pointe de la technologie à **Pointe-Noire** et **Oyo**, nous transformons la passion en produits de classe mondiale.
                            </p>
                            <p>
                                Plus qu'une brasserie, nous sommes un moteur de croissance durable, employant 500 talents dévoués à l'innovation et à la qualité.
                            </p>
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                        {values.map((v, i) => (
                            <div key={i} className="value-card about-reveal" style={{
                                background: 'rgba(255,255,255,0.03)',
                                padding: '2rem',
                                borderRadius: '1rem',
                                border: '1px solid rgba(255,255,255,0.05)',
                                backdropFilter: 'blur(10px)',
                                transition: 'all 0.3s'
                            }}>
                                <h4 style={{ fontSize: '1rem', marginBottom: '0.75rem', color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{v.title}</h4>
                                <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', lineHeight: '1.5' }}>{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
