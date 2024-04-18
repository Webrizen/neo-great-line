"use client";
import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, OrbitControls, Sphere } from '@react-three/drei';
import Ship from "../../../../public/Ship";

function Stars() {
  const starsRef = useRef();
  const stars = Array.from({ length: 1000 }, () => [
    Math.random() * 1000 - 500,
    Math.random() * 1000 - 500,
    Math.random() * 1000 - 500
  ]);

  useFrame(() => {
    starsRef.current.rotation.x += 0.01;
    starsRef.current.rotation.y += 0.01;
  });

  return (
    <group ref={starsRef}>
      {stars.map((star, index) => (
        <Sphere key={index} position={star} args={[1, 8, 8]} castShadow receiveShadow>
          <meshBasicMaterial color="white" />
        </Sphere>
      ))}
    </group>
  );
}

function Meteors() {
  const meteors = Array.from({ length: 10 }, () => [
    Math.random() * 1000 - 500,
    Math.random() * 1000 - 500,
    -1000
  ]);

  return (
    <>
      {meteors.map((meteor, index) => (
        <Sphere key={index} position={meteor} args={[5, 8, 8]} castShadow receiveShadow>
          <meshBasicMaterial color="red" />
        </Sphere>
      ))}
    </>
  );
}

export default function Hero() {
  return (
    <section className='w-full h-[90vh] overflow-hidden'>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
        <Suspense fallback={null}>
          <Ship />
        </Suspense>
        <Stars />
        <Meteors />
        <Environment preset='city' />
      </Canvas>
    </section>
  )
}