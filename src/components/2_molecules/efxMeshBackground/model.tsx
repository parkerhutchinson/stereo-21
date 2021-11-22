import react, { useEffect, useMemo, useRef, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as three from "three";

const Model = (props:{url:string, cb: () => void, slideId: number}) => {
  const {url, cb, slideId} = props;
  const [mesh,setMesh] = useState<any>({});
  const [gltf, setGltf] = useState<any>();
  const meshRef = useRef<three.Mesh>();
  // setup animation mixer
  let mixer:three.AnimationMixer;
  
  // this is to trigger the fade in for the parent element
  useEffect(() => {
    if (typeof mesh[slideId] === 'undefined' && gltf) {
      // gltf scenes get cached over time.
      const newMesh = {[slideId]: gltf};
      const newMeshObj = Object.assign({}, mesh, newMesh);
      setMesh(newMeshObj);
      cb()
    }
  }, [gltf])

  useEffect(()=>{
    if (typeof mesh[slideId] === 'undefined')
      new GLTFLoader().load(url, setGltf)

    if (typeof mesh[slideId] !== 'undefined') {
      cb()
    }
  },[slideId])

  useFrame((state, delta) => {
    // run animations every frame
    if (
      meshRef.current && 
      typeof meshRef.current !== 'undefined' && 
      typeof meshRef.current.rotation !== 'undefined'
    ) {
      meshRef.current.rotation.y += delta * 0.1;
      meshRef.current.rotation.x += delta * 0.1;
      mixer?.update(delta)
    }
  });
  
  if (typeof mesh[slideId] !== 'undefined') {
    mixer = new three.AnimationMixer(mesh.scene);
    // loop through all animations and play them.
    mesh[slideId].animations.forEach((clip:any) => {
      const action = mixer.clipAction(clip)
      action.play();
    });
  }

  return (
    <>
      {mesh[slideId] && 
        <primitive 
          position={[1, 0, 0]}
          // pull object scenes from cache
          object={mesh[slideId].scene} 
          scale={1}
          ref={meshRef}
        />
      }
    </>  
  );
};

export default react.memo(Model);