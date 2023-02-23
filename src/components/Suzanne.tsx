import React, { Suspense, useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Clone } from "@react-three/drei";

export const Suzanne = () => {
  const model = useLoader(GLTFLoader, "/models/suzanne.glb");
  const meshRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <Suspense>
      <Clone object={model.scene} scale={[1.5, 1.5, 1.5]} ref={meshRef} />;
    </Suspense>
  );
};
