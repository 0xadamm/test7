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
      className="h-screen flex justify-center items-center bg-black bg-opacity-30 backdrop-blur-sm fixed inset-0 ">
      <div
        id="CanvasContainer"
        className=" w-screen h-1/2    sm:h-5/6 sm:w-11/12">
        <Canvas
          className="rounded-xl"
          onCreated={({ gl }) => {
            gl.setClearColor("#757575");
          }}>
          <ambientLight intensity={0.1} />
          <directionalLight color="white" position={[0, 0, 2]} />
          <Suzanne />
        </Canvas>
      </div>
    </div>
  );
};
