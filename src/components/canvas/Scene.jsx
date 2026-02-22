import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Preload, ContactShadows, Float } from '@react-three/drei';
import Bottle from './Bottle';

const Scene = () => {
    return (
        <Canvas
            shadows
            camera={{ position: [0, 0, 8], fov: 35 }}
            gl={{ antialias: true, alpha: true, stencil: false, depth: true }}
        >
            <color attach="background" args={['#050505']} />

            <ambientLight intensity={0.2} />
            <spotLight
                position={[10, 10, 10]}
                angle={0.15}
                penumbra={1}
                intensity={2}
                castShadow
                color="#D4AF37"
            />
            <pointLight position={[-10, -10, -10]} intensity={1} color="#FFFFFF" />

            <Suspense fallback={null}>
                <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                    <Bottle />
                </Float>

                {/* Decorative background particles/blobs could go here */}

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
