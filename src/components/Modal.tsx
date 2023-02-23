import { Canvas } from "@react-three/fiber";
import { Suzanne } from "@/components/Suzanne";

export const Modal = () => {
  return (
    <div className="">
      <div className="p-6 h-screen">
        <Canvas
          className="rounded-xl "
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
