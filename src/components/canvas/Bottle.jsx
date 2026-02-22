import React, { useRef, useMemo, forwardRef, useImperativeHandle } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { productShader } from '../../shaders/productShader';

const Bottle = forwardRef(({ color = "#D4AF37", fresnelColor = "#F1D382" }, ref) => {
    const groupRef = useRef();
    const meshRef = useRef();
    const { mouse } = useThree();

    // Expose the groupRef and meshRef to the parent for GSAP orchestration
    useImperativeHandle(ref, () => ({
        group: groupRef.current,
        mesh: meshRef.current,
        material: meshRef.current.material
    }));

    const uniforms = useMemo(() => ({
        uTime: { value: 0 },
        uColor: { value: new THREE.Color(color) },
        uFresnelColor: { value: new THREE.Color(fresnelColor) },
        uOpacity: { value: 1.0 },
    }), [color, fresnelColor]);

    useFrame((state) => {
        const { clock } = state;
        if (meshRef.current) {
            meshRef.current.material.uniforms.uTime.value = clock.getElapsedTime();
        }

        if (groupRef.current) {
            // Subtle persistent float
            groupRef.current.position.y += Math.sin(clock.getElapsedTime() * 0.5) * 0.001;

            // Mouse follow (subtle)
            const targetRotX = mouse.y * 0.2;
            const targetRotY = mouse.x * 0.2;
            groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, 0.05);
            groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotY, 0.05);
        }
    });

    return (
        <group ref={groupRef}>
            <mesh ref={meshRef} castShadow receiveShadow scale={[0.8, 2.2, 0.8]}>
                <cylinderGeometry args={[0.3, 0.4, 1, 64]} />
                <shaderMaterial
                    vertexShader={productShader.vertexShader}
                    fragmentShader={productShader.fragmentShader}
                    uniforms={uniforms}
                    transparent={true}
                />
            </mesh>
        </group>
    );
});

export default Bottle;
