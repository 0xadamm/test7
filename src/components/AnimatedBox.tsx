import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

const AnimatedBox = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    console.log("Frames");
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial />
    </mesh>
  );
};

export default AnimatedBox;
