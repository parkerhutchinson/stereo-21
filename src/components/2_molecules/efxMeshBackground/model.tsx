import react, { useEffect, useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as three from "three";

const Model = (props:{url:string, cb: () => void}) => {
  const {url, cb} = props;
  const meshRef = useRef<three.Mesh>();
  // load the mesh using the GLTF Loader
  const gltf = useLoader(GLTFLoader, url);
  
  // setup animation mixer
  let mixer:three.AnimationMixer;

  useFrame((state, delta) => {
    // run animations every frame
    meshRef.current!.rotation.x += .001;
    meshRef.current!.rotation.z += .001;
    mixer?.update(delta)
  });

  if (gltf.animations.length) {
    mixer = new three.AnimationMixer(gltf.scene);
    // loop through all animations and play them.
    gltf.animations.forEach(clip => {
      const action = mixer.clipAction(clip)
      action.play();
    });
  }

  // this is to trigger the fade in for the parent element
  useEffect(() => {
    cb()
  }, [gltf])

  return (
    <primitive 
      position={[1, 0, 0]}
      object={gltf.scene} 
      scale={1}
      ref={meshRef}
    />
  );
};

export default Model;