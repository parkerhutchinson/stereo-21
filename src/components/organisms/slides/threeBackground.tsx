import { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as three from "three";
import {StyledThreeBackground} from "./styles";
import { useSpring } from 'react-spring'
import { OrbitControls } from "@react-three/drei";

const Asana = (props:any) => {
  const geometry = useRef<three.Mesh>();

  useFrame(() => {
    geometry.current!.rotation.x += 0.01;
    geometry.current!.rotation.y += 0.01;
  });

  return (
    <mesh ref={geometry} {...props}>
      <sphereGeometry args={[.4, 100, 100]} />
      <meshStandardMaterial color="#971A2E" />
    </mesh>
  );
};

const Scene = () => {
  return (
    <>
      <pointLight intensity={0.8} position={[2, 2, 10]} />
      <pointLight intensity={0.3} position={[-8, -2, 0]} />
      <Asana position={[-.45, -.3, 0]}/>
      <Asana position={[0, .5, 0]}/>
      <Asana position={[.45, -.3, 0]}/>
    </>
  );
};

const ThreeBackground = () => {
  return (
    <StyledThreeBackground>
      <Canvas
        camera={{zoom: 4.5}}
        onCreated={({ gl }:any) => {
          gl.setClearColor(0xffffff, 0);
        }}
      >
        <ambientLight intensity={.1}/>
        <OrbitControls autoRotate={true} />
        <Suspense fallback={false}>
          <Scene />
        </Suspense>
      </Canvas>
    </StyledThreeBackground>
  );
};

export default ThreeBackground;
