import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export const Suzanne = () => {
  const model = useLoader(GLTFLoader, "/models/suzanne.glb");

  return (
    <Suspense>
      <primitive object={model.scene} scale={[2.2, 2.2, 2.2]} />;
    </Suspense>
  );
};
