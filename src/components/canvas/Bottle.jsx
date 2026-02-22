import React, { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { productShader } from '../../shaders/productShader';

const Bottle = ({ color = "#D4AF37", fresnelColor = "#F1D382" }) => {
    const meshRef = useRef();
    const { mouse } = useThree();

    const uniforms = useMemo(() => ({
        uTime: { value: 0 },
        uColor: { value: new THREE.Color(color) },
        uFresnelColor: { value: new THREE.Color(fresnelColor) },
    }), [color, fresnelColor]);

    useFrame((state) => {
        const { clock } = state;
        meshRef.current.material.uniforms.uTime.value = clock.getElapsedTime();

        // Mouse follow rotation
        const targetRotationX = mouse.y * 0.5;
        const targetRotationY = mouse.x * 0.5;

        meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetRotationX, 0.1);
        meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetRotationY, 0.1);

        // Floating animation
        meshRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.2;
    });

    return (
        <mesh ref={meshRef} castShadow receiveShadow scale={[0.8, 2.2, 0.8]}>
            <cylinderGeometry args={[0.3, 0.4, 1, 32]} />
            <shaderMaterial
                vertexShader={productShader.vertexShader}
                fragmentShader={productShader.fragmentShader}
                uniforms={uniforms}
            />
        </mesh>
    );
};

export default Bottle;
