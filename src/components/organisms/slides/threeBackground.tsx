import { Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import * as three from "three";
import {StyledThreeBackground} from "./styles";
// import { useSpring } from 'react-spring'
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Model = (props:{url:string}) => {
  const gltf = useLoader(GLTFLoader, props.url)
  let mixer:three.AnimationMixer;
  if (gltf.animations.length) {
    mixer = new three.AnimationMixer(gltf.scene);
    gltf.animations.forEach(clip => {
      const action = mixer.clipAction(clip)
      action.play();
    });
  }

  useFrame((state, delta) => {
      mixer?.update(delta)
  });

  return (
    <>
      <pointLight intensity={0.5} position={[5, 3, 5]} />
      <primitive  position={[0, 0, 0]} object={gltf.scene} scale={1} />
    </>
  );
};

interface Props {
  slideMeshFile: string
}

const ThreeBackground = (props:Props) => {
  const {slideMeshFile} = props;
  const uuid = Date.now();
  const finalUrls = `${slideMeshFile}?${uuid}`;
  return (
    <StyledThreeBackground>
      <Canvas 
        camera={{
          near: 0.1,
          far: 1000,
          zoom: 1.5
        }}
      >
        <OrbitControls autoRotate={true}/>
        <ambientLight />
        <Suspense fallback={false}>
          <Model url={finalUrls}/>
        </Suspense>
      </Canvas>
    </StyledThreeBackground>
  );
};

export default ThreeBackground;
