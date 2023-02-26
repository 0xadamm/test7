import { Canvas } from "@react-three/fiber";
import { Suzanne } from "@/components/Suzanne";
import { MouseEventHandler } from "react";

type ModalProps = {
  visible: boolean;
  onClose: MouseEventHandler<HTMLElement>;
};

type ButtonProps = {
  onClick: MouseEventHandler<HTMLElement>;
  id: string;
  label: string;
};

const Button = ({ onClick, id, label }: ButtonProps) => {
  return (
    <button
      id={id}
      onClick={onClick}
      className="bg-black px-6 py-4 w-1/2 m-4 border-2 rounded-lg">
      {label}
    </button>
  );
};

export const Modal = ({ visible, onClose }: ModalProps) => {
  const handleClose = (e: React.MouseEvent<HTMLElement>) => {
    const targetId = (e.target as HTMLDivElement).id;
    if (targetId === "ModalContainer" || targetId === "CloseButton") {
      onClose(e);
    }
  };

  if (!visible) return null;

  return (
    <div
      id="ModalContainer"
      onClick={handleClose}
      className="bg-black bg-opacity-30 backdrop-blur-sm h-screen fixed inset-0 sm:flex sm:justify-center sm:items-center">
      {/* The components inside of the Modal are the Canvas & ItemDetails*/}
      <div
        id="ModalComponents"
        className="h-screen sm:h-5/6 sm:w-2/3 sm:flex sm:flex-col">
        <div
          id="CanvasContainer"
          className=" h-1/2 sm:h-3/4 bg-gray-800 sm:rounded-t-xl">
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
          id="DetailContainer"
          className="h-1/2 sm:h-1/4 sm:rounded-b-xl bg-gray-800 flex flex-col space-y-64">
          <div id="Details">
            <h5 className="text-2xl font-bold">Product Name</h5>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          <div id="ButtonContainer" className="flex">
            <Button id="CloseButton" onClick={handleClose} label="Close" />
            <Button
              id="DownloadButton"
              onClick={() => alert("Download clicked!")}
              label="Download"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
