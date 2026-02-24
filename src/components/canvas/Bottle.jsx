import React, { useRef, forwardRef, useImperativeHandle, useState, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const Bottle = forwardRef(({ image = "/products/world-cola.png", ...props }, ref) => {
    const groupRef = useRef();
    const meshRef = useRef();
    const { mouse } = useThree();
    const [texture, setTexture] = useState(null);
    const [error, setError] = useState(false);

    // Manual texture loading with error handling to prevent infinite suspension
    useEffect(() => {
        const loader = new THREE.TextureLoader();
        loader.load(
            image,
            (tex) => {
                tex.anisotropy = 16;
                setTexture(tex);
            },
            undefined,
            () => {
                console.error("Failed to load texture:", image);
                setError(true);
                // Fallback to logo if product image is missing
                loader.load("/logo-bralico.png", (tex) => setTexture(tex));
            }
        );
    }, [image]);

    // Expose for GSAP
    useImperativeHandle(ref, () => ({
        group: groupRef.current,
        mesh: meshRef.current
    }));

    useFrame((state) => {
        const { clock } = state;
        if (groupRef.current) {
            // Subtle persistent float
            groupRef.current.position.y += Math.sin(clock.getElapsedTime() * 0.5) * 0.001;

            // Mouse follow
            const targetRotY = mouse.x * 0.15;
            groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotY, 0.05);
        }
    });

    return (
        <group ref={groupRef} {...props}>
            {texture && (
                <mesh ref={meshRef} position={[0, 0.5, 0]}>
                    <planeGeometry args={[1.5, 4]} />
                    <meshBasicMaterial
                        map={texture}
                        transparent={true}
                        side={THREE.DoubleSide}
                        depthWrite={true}
                    />
                </mesh>
            )}

            {/* Fallback shadow / glow */}
            <mesh position={[0, 0.4, -0.05]} scale={[1.2, 1.2, 1]}>
                <planeGeometry args={[1.5, 4]} />
                <meshBasicMaterial
                    color={error ? "#b22222" : "black"}
                    transparent={true}
                    opacity={0.1}
                />
            </mesh>
        </group>
    );
});

export default Bottle;
