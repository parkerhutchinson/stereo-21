import react, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import * as three from "three";
import {StyledThreeBackground} from "./styles";
// import { useSpring } from 'react-spring'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useSpring, animated } from 'react-spring'


const Lighting = (props:{highlight:string}) => {
  const {highlight} = props;

  return (
    <>
      <ambientLight intensity={.8} />
      <pointLight intensity={1.2} position={[5, 0, 10]} color={highlight} />
    </>
  )
}

const Model = (props:{url:string, cb: (e:string) => void}) => {
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

  useEffect(() => {
    cb()
  }, [gltf])

  return (
    <>
      <primitive 
        position={[1, 0, 0]}
        object={gltf.scene} 
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
  const [urlState, setUrlState] = useState('');
  const [fadeOut,setFadeOut] = useState(false);
  
  const styles = useSpring({
    opacity: fadeOut ? 0 : 1,
    duration: 500
  });

  useEffect(() => {
    const uuid = Date.now();
    const finalUrls = `${slideMeshFile}?${uuid}`;

    setFadeOut(true);
    setTimeout(() => {
      setUrlState(finalUrls);
    }, 500)
  }, [slideMeshFile])

  return (
    <animated.div style={styles}>
      <StyledThreeBackground>
        <Canvas 
          camera={{
            near: 0.1,
            far: 1000,
            zoom: 1.9
          }}
        >
          <Suspense fallback={false}>
            <Lighting highlight={highlight}/>
            {(urlState.length > 1) && <Model url={urlState} cb={(e) => {setFadeOut(false)}}/>}
          </Suspense>
        </Canvas>
      </StyledThreeBackground>
    </animated.div>
  );
};

export default react.memo(ThreeBackground);
