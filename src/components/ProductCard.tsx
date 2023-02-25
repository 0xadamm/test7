import React from "react";
import { Canvas } from "@react-three/fiber";
import { ModalData } from "./data";

const ProductCard = () => {
  return (
    <div id="CardContainer" className="columns-1 space-y-8 pt-6">
      {ModalData.map((item, id) => (
        <div
          id="ProductCard"
          className="w-96 bg-gray-800 rounded-xl mx-auto"
          key={id}>
          <div id="CanvasContainer" className=" h-96 ">
            <Canvas
              className="rounded-t-xl"
              onCreated={({ gl }) => {
                gl.setClearColor("#757575");
              }}>
              <ambientLight intensity={0.1} />
              <directionalLight color="white" position={[0, 0, 1]} />
              {item.Image}
            </Canvas>
          </div>

          <div id="ProuductInfo" className="p-6">
            <h5 className="text-2xl font-bold">Product Name</h5>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
