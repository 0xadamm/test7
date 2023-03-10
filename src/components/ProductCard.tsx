import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Modal } from "./Modal";
import { ModalData } from "./data";

const ProductCard = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);

  return (
    <div
      id="CardContainer"
      className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 pt-[7vh] ">
      {ModalData.map((item, id) => (
        <div
          id="ProductCard"
          onClick={() => setShowModal(true)}
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
      <Modal onClose={handleClose} visible={showModal} />
    </div>
  );
};

export default ProductCard;
