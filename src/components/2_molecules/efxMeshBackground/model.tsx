import react, { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as three from "three";

const Model = (props:{url:string, cb: () => void, slideId: number}) => {
  const {url, cb, slideId} = props;
  const [mesh,setMesh] = useState<any>({});
  const [gltf, setGltf] = useState<any>();
  const meshRef = useRef<three.Mesh>();
  // setup animation mixer
  let mixer:three.AnimationMixer;
  
  // if the loader runs cache the gltf
  useEffect(() => {
    if (typeof mesh[slideId] === 'undefined' && gltf) {
      // gltf scenes get cached over time.
      const newMesh = {[slideId]: gltf};
      const newMeshObj = Object.assign({}, mesh, newMesh);
      setMesh(newMeshObj);
      // animation callback trigger
      cb()
    }
  }, [gltf])

  useEffect(()=>{
    // use loader if cache is empty
    if (typeof mesh[slideId] === 'undefined')
      new GLTFLoader().load(url, setGltf)      
    
    if (typeof mesh[slideId] !== 'undefined') {
      // might need a ref pointer to store this 
      mixer = new three.AnimationMixer(mesh.scene);

      // loop through all animations and play them.
      mesh[slideId].animations.forEach((clip:any) => {
        const action = mixer.clipAction(clip)
        action.play();
      });

      // animation callback trigger
      cb()
    }

  },[slideId])

  useFrame((state, delta) => {
    // rotation animation loop
    if (meshRef.current) {
      meshRef.current.rotation.z += delta * 0.1;
      meshRef.current.rotation.y += delta * 0.1;

      meshRef.current.rotation.x += delta * 0.1;
      mixer?.update(delta)
    }
  });
  
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