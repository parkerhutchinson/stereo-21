import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as three from "three";
import {StyledThreeBackground} from "./styles";

const Cube = () => {
  const cube = useRef<three.Mesh>();

  useFrame(() => {
    cube.current!.rotation.x += 0.01;
    cube.current!.rotation.y += 0.01;
  });

  return (
    <mesh ref={cube}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#0391BA" />
    </mesh>
  );
};

const Scene = () => {
  return (
    <>
      {/* <gridHelper /> */}
      <pointLight intensity={0.5} position={[5, 3, 5]} />
      <Cube />
    </>
  );
};

const ThreeBackground = () => {
  return (
    <StyledThreeBackground>
      <Canvas
        camera={{
          near: 0.1,
          far: 1000,
          zoom: 1
        }}
        onCreated={({ gl }:any) => {
          gl.setClearColor(0xffffff, 0);
        }}
      >
        <Suspense fallback={false}>
          <Scene />
        </Suspense>
      </Canvas>
    </StyledThreeBackground>
  );
};

export default ThreeBackground;
