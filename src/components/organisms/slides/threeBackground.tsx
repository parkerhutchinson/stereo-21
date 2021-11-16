import react, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import * as three from "three";
import {StyledThreeBackground} from "./styles";
// import { useSpring } from 'react-spring'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import {useSpring} from 'react-spring';


const Model = (props:{url:string, highlight:string}) => {
  const {url, highlight} = props;
  const meshRef = useRef<three.Mesh>();
  // load the mesh using the GLTF Loader
  const gltf = useLoader(GLTFLoader, url);
  const [gltfState, setGltfState] = useState<any>(gltf);
  
  // setup animation mixer
  let mixer:three.AnimationMixer;

  useFrame((state, delta) => {
    // run animations every frame
    meshRef.current!.rotation.x += .001;
    meshRef.current!.rotation.z += .001;
    mixer?.update(delta)
  });

  if (gltfState.animations.length) {
    mixer = new three.AnimationMixer(gltf.scene);
    // loop through all animations and play them.
    gltf.animations.forEach(clip => {
      const action = mixer.clipAction(clip)
      action.play();
    });
  }

  useEffect(() => {
    const tempGltf = useLoader(GLTFLoader, url)
    
    
    setGltfState(tempGltf);
    


  }, [url])

  return (
    <>
      <ambientLight intensity={.8}/>
      <pointLight intensity={1} position={[5, 0, 10]} color={highlight} />
      <primitive 
        position={[1, 0, 0]}
        object={gltfState.scene} 
        scale={1}
        ref={meshRef}
      />
    </>
  );
};

interface Props {
  slideMeshFile: string
  highlight: string
}

const ThreeBackground = (props:Props) => {
  const {slideMeshFile, highlight} = props;
  const uuid = Date.now();
  const finalUrls = `${slideMeshFile}?${uuid}`;
  return (
    <StyledThreeBackground>
      <Canvas 
        camera={{
          near: 0.1,
          far: 1000,
          zoom: 1.9
        }}
      >
        <Suspense fallback={false}>
          <Model url={finalUrls} highlight={highlight}/>
        </Suspense>
      </Canvas>
    </StyledThreeBackground>
  );
};

export default react.memo(ThreeBackground);
