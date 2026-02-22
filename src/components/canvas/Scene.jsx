import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Preload, ContactShadows, Float } from '@react-three/drei';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Bottle from './Bottle';

gsap.registerPlugin(ScrollTrigger);

const Scene = () => {
    const bottleRef = useRef();

    useEffect(() => {
        if (!bottleRef.current) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "main",
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
            }
        });

        // 1. Initial State (Hero)
        // Positioned slightly off-center or zoomed in
        tl.set(bottleRef.current.group.position, { x: 0, y: 0, z: 0 });
        tl.set(bottleRef.current.group.rotation, { x: 0, y: 0, z: 0 });

        // 2. Transition to About Section (la-brasserie)
        tl.to(bottleRef.current.group.position, {
            x: -2,
            z: -1,
            scrollTrigger: {
                trigger: "#la-brasserie",
                start: "top bottom",
                end: "top center",
                scrub: 1
            }
        });

        tl.to(bottleRef.current.group.rotation, {
            y: Math.PI * 2,
            scrollTrigger: {
                trigger: "#la-brasserie",
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            }
        });

        // 3. Transition to Brands Section (les-marques)
        tl.to(bottleRef.current.group.position, {
            x: 2,
            y: 0.5,
            z: 2,
            scrollTrigger: {
                trigger: "#les-marques",
                start: "top bottom",
                end: "top center",
                scrub: 1
            }
        });

        // 4. Transition to News Section
        tl.to(bottleRef.current.group.scale, {
            x: 1.5,
            y: 1.5,
            z: 1.5,
            scrollTrigger: {
                trigger: "#actualités",
                start: "top bottom",
                end: "top top",
                scrub: 1
            }
        });

        tl.to(bottleRef.current.group.position, {
            x: 0,
            y: -10, // Exit down
            scrollTrigger: {
                trigger: "#contacts",
                start: "top bottom",
                end: "top top",
                scrub: 1
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <Canvas
            shadows
            camera={{ position: [0, 0, 8], fov: 35 }}
            gl={{ antialias: true, alpha: true, stencil: false, depth: true }}
            style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1, pointerEvents: 'none' }}
        >
            <color attach="background" args={['#050505']} />

            <ambientLight intensity={0.4} />
            <spotLight
                position={[10, 10, 10]}
                angle={0.15}
                penumbra={1}
                intensity={3}
                castShadow
                color="#FFFFFF"
            />
            <pointLight position={[-10, -10, -10]} intensity={1} color="#FFFFFF" />

            <Suspense fallback={null}>
                <Bottle ref={bottleRef} />

                <Environment preset="studio" />
                <ContactShadows
                    position={[0, -2.5, 0]}
                    opacity={0.5}
                    scale={10}
                    blur={2}
                    far={10}
                    resolution={256}
                    color="#000000"
                />
            </Suspense>

            <Preload all />
        </Canvas>
    );
};

export default Scene;
