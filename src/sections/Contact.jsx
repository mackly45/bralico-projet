import React, { useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import gsap from 'gsap';

const Contact = () => {
    const sectionRef = useRef();

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".contact-reveal", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
                y: 30,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: "power2.out"
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="contacts" ref={sectionRef} className="contact-section" style={{ minHeight: '100vh', padding: '15vh 0', background: 'var(--color-bralico-red)', color: 'white', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="container">
                <p className="premium-subtitle contact-reveal" style={{ color: 'rgba(255,255,255,0.7)' }}>Contacts</p>
                <h2 className="premium-title contact-reveal" style={{ color: 'white' }}>Restons Connectés</h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '5rem', marginTop: '6rem' }}>
                    <div className="contact-reveal">
                        <h3 style={{ fontFamily: 'var(--font-serif)', marginBottom: '3rem', textTransform: 'none', fontSize: '2rem' }}>Rapprochez-vous de nous</h3>

                        <div style={{ marginBottom: '3rem' }}>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', marginBottom: '2.5rem' }}>
                                <MapPin size={24} />
                                <div>
                                    <h4 style={{ marginBottom: '0.5rem', fontSize: '1rem' }}>SIEGE SOCIAL - POINTE-NOIRE</h4>
                                    <p style={{ opacity: 0.8, fontSize: '0.9rem', lineHeight: '1.5' }}>
                                        Base industrielle, non loin de l’ancienne foire<br />
                                        BP 1201, Pointe-Noire, République du Congo
                                    </p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2.5rem' }}>
                                <Phone size={24} />
                                <div>
                                    <h4 style={{ marginBottom: '0.5rem', fontSize: '1rem' }}>CALL CENTER</h4>
                                    <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>+242 05 395 0666</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                <Mail size={24} />
                                <div>
                                    <h4 style={{ marginBottom: '0.5rem', fontSize: '1rem' }}>DEPARTEMENT COMMERCIAL</h4>
                                    <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>contact@bralico-congo.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-reveal" style={{ background: 'rgba(0,0,0,0.1)', padding: '3rem', borderRadius: '1rem', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)' }}>
                        <p style={{ marginBottom: '2rem', fontSize: '1.1rem', fontWeight: '500' }}>Inscrivez-vous à notre newsletter pour ne rien manquer de nos actualités.</p>
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <input type="email" placeholder="Votre adresse email" style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', padding: '1.2rem', borderRadius: '0.3rem', color: 'white', outline: 'none' }} />
                            <button style={{
                                background: 'white',
                                color: 'var(--color-bralico-red)',
                                fontWeight: '900',
                                padding: '1.2rem',
                                borderRadius: '0.3rem',
                                border: 'none',
                                cursor: 'pointer',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                transition: 'transform 0.2s'
                            }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                                S'inscrire Maintenant
                            </button>
                        </form>
                        <div style={{ marginTop: '3rem', display: 'flex', gap: '1.5rem', opacity: 0.6 }}>
                            <Globe size={20} />
                            <span>www.bralico-congo.com</span>
                        </div>
                    </div>
                </div>
            </div>

            <footer style={{ marginTop: '10vh', padding: '4rem 0', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
                <p style={{ fontSize: '0.8rem', opacity: 0.6 }}>© 2026 BRALICO SA - Filiale du Groupe CASTEL. Tous droits réservés.</p>
            </footer>
        </section>
    );
};

export default Contact;
