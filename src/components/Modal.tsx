import { Canvas } from "@react-three/fiber";
import { Suzanne } from "@/components/Suzanne";
import { MouseEventHandler, useRef } from "react";

type ModalProps = {
  visible: boolean;
  onClose: MouseEventHandler<HTMLDivElement>;
};

export const Modal = ({ visible, onClose }: ModalProps) => {
  const canvasRef = useRef<HTMLDivElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Check if the target element is the ModalConatiner
    if ((e.target as HTMLDivElement).id === "ModalContainer") onClose(e);
  };

  if (!visible) return null;

  return (
    <div
      id="ModalContainer"
      onClick={handleClick}
      className="h-screen flex justify-center items-center bg-black bg-opacity-30 backdrop-blur-sm p-6 fixed inset-0 ">
      <div className="h-5/6 w-4/5" ref={canvasRef}>
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
