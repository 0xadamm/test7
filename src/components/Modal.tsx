import { Canvas } from "@react-three/fiber";
import { Suzanne } from "@/components/Suzanne";
import { MouseEventHandler } from "react";

type ModalProps = {
  visible: boolean;
  onClose: MouseEventHandler<HTMLDivElement>;
};

export const Modal = ({ visible, onClose }: ModalProps) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Check if the target element is the ModalConatiner
    if ((e.target as HTMLDivElement).id === "ModalContainer") onClose(e);
  };

  if (!visible) return null;

  return (
    <div
      id="ModalContainer"
      onClick={handleClick}
      className="bg-black bg-opacity-30 backdrop-blur-sm h-screen fixed inset-0 sm:flex sm:justify-center sm:items-center">
      {/* The components inside of the Modal are the Canvas & ItemDetails*/}
      <div
        id="ModalComponents"
        className="h-screen sm:h-5/6 sm:w-5/6 sm:flex  sm:flex-col">
        <div
          id="CanvasContainer"
          className=" h-1/2 sm:h-2/3 bg-gray-800 sm:rounded-t-xl">
          <Canvas
            className="rounded-b-xl sm:rounded-xl"
            onCreated={({ gl }) => {
              gl.setClearColor("#757575");
            }}>
            <ambientLight intensity={0.1} />
            <directionalLight color="white" position={[0, 0, 2]} />
            <Suzanne />
          </Canvas>
        </div>
        <div
          id="ItemDetails"
          className="h-1/2 sm:h-1/3 sm:rounded-b-xl bg-gray-800">
          <h5 className="text-2xl font-bold">Product Name</h5>
          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  );
};
