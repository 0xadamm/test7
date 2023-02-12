import React from "react";
import { Canvas } from "@react-three/fiber";
import { Suzanne } from "./Suzanne";

const ProductCard = () => {
  return (
    <div className="flex justify-center p-40">
      <div className="product_card bg-gray-800  rounded-xl">
        <div className="model_container h-96 ">
          <Canvas
            className="rounded-t-xl"
            onCreated={({ gl }) => {
              gl.setClearColor("#757575");
            }}>
            <ambientLight intensity={0.1} />
            <directionalLight color="white" position={[0, 0, 2]} />
            <Suzanne />
          </Canvas>
        </div>

        <div className="product_info p-6">
          <h5 className="text-2xl font-bold">Product Name</h5>
          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
