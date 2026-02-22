import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, PerspectiveCamera, AdaptiveEvents, AdaptiveDpr } from '@react-three/drei';
import Bottle from './Bottle';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SceneContent = () => {
    const bottleRef = useRef();
    const groupRef = useRef();

    useFrame((state) => {
        if (groupRef.current) {
            // Subtle floating motion base
            groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
        }
    });

    useEffect(() => {
        if (!bottleRef.current || !bottleRef.current.group) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "main",
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1.5,
                }
            });

            tl.to(bottleRef.current.group.position, {
                x: -2.5,
                y: -0.5,
                z: 0,
                duration: 1
            }, "about")
                .to(bottleRef.current.group.rotation, {
                    y: Math.PI * 2,
                    duration: 1
                }, "about")

                .to(bottleRef.current.group.position, {
                    x: 2.5,
                    y: -1,
                    z: 1,
                    duration: 1
                }, "brands")
                .to(bottleRef.current.group.rotation, {
                    y: -Math.PI * 1.5,
                    z: 0.2,
                    duration: 1
                }, "brands")

                .to(bottleRef.current.group.position, {
                    x: 0,
                    y: -3,
                    z: 5,
                    duration: 1
                }, "news")
                .to(bottleRef.current.group.scale, {
                    x: 1.5,
                    y: 1.5,
                    z: 1.5,
                    duration: 1
                }, "news");
        });

        return () => ctx.revert();
    }, []);

    return (
        <group ref={groupRef}>
            <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
                <Bottle ref={bottleRef} position={[0, -1, 0]} scale={[1.2, 1.2, 1.2]} />
            </Float>
            <Environment preset="studio" intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
            <pointLight position={[-10, -10, -10]} intensity={0.5} />
        </group>
    );
};

const Scene = () => {
    return (
        <div className="canvas-container" style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
            <Canvas
                shadows
                dpr={[1, 2]}
                gl={{
                    antialias: true,
                    powerPreference: "high-performance",
                    alpha: true,
                    stencil: false,
                    depth: true
                }}
            >
                <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={45} />
                <AdaptiveDpr pixelated />
                <AdaptiveEvents />
                <SceneContent />
            </Canvas>
        </div>
    );
};

export default Scene;
