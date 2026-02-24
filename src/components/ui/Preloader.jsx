import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Preloader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const containerRef = useRef();
    const counterRef = useRef();
    const logoRef = useRef();
    const lineRef = useRef();

    useEffect(() => {
        // Safety timeout to ensure app becomes visible even if assets hang
        const safetyTimeout = setTimeout(() => {
            setProgress(100);
        }, 5000);

        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 1;
            });
        }, 30);

        return () => {
            clearInterval(interval);
            clearTimeout(safetyTimeout);
        };
    }, []);

    useEffect(() => {
        if (progress === 100) {
            // Diagnostic: briefly flash red to see if preloader is at 100%
            if (containerRef.current) {
                containerRef.current.style.borderTop = "5px solid var(--color-bralico-red)";
            }

            const tl = gsap.timeline({
                onComplete: () => {
                    console.log("Preloader complete, calling onComplete");
                    if (onComplete) onComplete();
                }
            });

            if (counterRef.current) {
                tl.to(counterRef.current, { y: -50, opacity: 0, duration: 0.5 });
            }
            if (logoRef.current) {
                tl.to(logoRef.current, { scale: 0.9, opacity: 0, duration: 0.5 }, "-=0.3");
            }
            if (containerRef.current) {
                tl.to(containerRef.current, {
                    y: "-100%",
                    duration: 1.0,
                    ease: "power4.inOut"
                }, "-=0.2");
            } else {
                // Fallback if ref is missing
                if (onComplete) onComplete();
            }
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
                    color: '#ffffff', // Full white for visibility
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
