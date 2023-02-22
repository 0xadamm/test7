import React, { Suspense, useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export const Suzanne1 = () => {
  const model = useLoader(GLTFLoader, "/models/suzanne.glb");
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <Suspense>
      <primitive object={model.scene} scale={[2.2, 2.2, 2.2]} ref={meshRef} />;
    </Suspense>
  );
};