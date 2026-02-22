import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Preloader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const containerRef = useRef();
    const counterRef = useRef();
    const logoRef = useRef();
    const lineRef = useRef();

    useEffect(() => {
        // Simple progress simulation (replace with real load listener if needed)
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 1;
            });
        }, 20);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (progress === 100) {
            const tl = gsap.timeline({
                onComplete: onComplete
            });

            tl.to(counterRef.current, {
                y: -100,
                opacity: 0,
                duration: 0.8,
                ease: "power4.inOut"
            })
                .to(logoRef.current, {
                    scale: 1.1,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power4.inOut"
                }, "-=0.4")
                .to(lineRef.current, {
                    scaleX: 0,
                    transformOrigin: "right",
                    duration: 0.8,
                    ease: "power4.inOut"
                }, "-=0.6")
                .to(containerRef.current, {
                    y: "-100%",
                    duration: 1.2,
                    ease: "expo.inOut"
                }, "-=0.4");
        }
    }, [progress, onComplete]);

    return (
        <div ref={containerRef} style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: 'var(--bg-dark)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
        }}>
            <div style={{ position: 'relative', width: '300px', height: '150px' }}>
                <div ref={logoRef} style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginBottom: '2rem'
                }}>
                    <img
                        src="/logo-white.png"
                        alt="Bralico Logo"
                        style={{ height: '40px', objectFit: 'contain' }}
                    />
                </div>

                <div ref={lineRef} style={{
                    width: '100%',
                    height: '1px',
                    background: 'rgba(255,255,255,0.2)',
                    position: 'relative'
                }}>
                    <div style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        height: '100%',
                        width: `${progress}%`,
                        background: 'var(--color-bralico-red)',
                        transition: 'width 0.1s linear'
                    }} />
                </div>

                <div ref={counterRef} style={{
                    position: 'absolute',
                    right: 0,
                    bottom: '-40px',
                    fontSize: '4rem',
                    fontFamily: 'var(--font-main)',
                    fontWeight: '100',
                    color: 'rgba(255,255,255,0.1)',
                    lineHeight: 1
                }}>
                    {progress.toString().padStart(3, '0')}
                </div>
            </div>

            <div style={{
                position: 'absolute',
                bottom: '5vh',
                left: '50%',
                transform: 'translateX(-50%)',
                fontSize: '0.7rem',
                letterSpacing: '0.2em',
                color: 'rgba(255,255,255,0.3)',
                textTransform: 'uppercase'
            }}>
                Vivre le Congo • Qualité & Excellence
            </div>
        </div>
    );
};

export default Preloader;
