import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Suzanne } from "./Suzanne";
import { Modal } from "./Modal";

const ProductCard = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);

  return (
    <div>
      <div id="CardContainer" className="columns-1 space-y-8 pt-6">
        <div
          id="ProductCard"
          onClick={() => setShowModal(true)}
          className="w-96 bg-gray-800 rounded-xl mx-auto">
          <div id="CanvasContainer" className="h-96">
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

          <div id="ProuductInfo" className="p-6">
            <h5 className="text-2xl font-bold">Product Name</h5>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
      <Modal onClose={handleClose} visible={showModal} />
    </div>
  );
};

export default ProductCard;
