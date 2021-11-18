import react, { Suspense, useEffect, useRef, useState, useContext } from "react";
import { GlobalActions, GlobalContext } from "@/src/context/global";
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

const Model = (props:{url:string, cb: () => void}) => {
  const {url, cb} = props;
  const meshRef = useRef<three.Mesh>();
  let gltf;
  // load the mesh using the GLTF Loader
  try {
    gltf = useLoader(GLTFLoader, url);
  } catch(err) {
    console.error(err);
  }
  
  // setup animation mixer
  let mixer:three.AnimationMixer;
  
  if (typeof gltf !== 'undefined') {
    useFrame((state, delta) => {
      // run animations every frame
      meshRef.current!.rotation.x += .001;
      meshRef.current!.rotation.z += .001;
      mixer?.update(delta)
    });
  }
  

  if (typeof gltf !== 'undefined' && gltf.animations.length) {
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
  
  return gltf ? (
    <primitive 
      position={[1, 0, 0]}
      object={gltf.scene} 
      scale={1}
      ref={meshRef}
    />
  ) : null;
};


interface Props {
  slideMeshFile: string
  highlight: string
}

const EFXMeshBackground = (props:Props) => {
  const {slideMeshFile, highlight} = props;
  const [urlState, setUrlState] = useState('');
  const [fadeOut,setFadeOut] = useState(false);
  const timerRef = useRef<NodeJS.Timer>();
  const {state: {mobilePanel, colorScheme}} = useContext(GlobalContext);

  const styles = useSpring({
    opacity: fadeOut ? 0 : 1,
    duration: 500
  });

  // transition out
  useEffect(() => {
    const uuid = Date.now();

    setFadeOut(true);

    if (timerRef.current)
        window.clearTimeout(timerRef.current)

    timerRef.current = setTimeout(() => {
      const url = `${slideMeshFile}?${uuid}`;
      setUrlState(url);
    }, 500);

    // unmount
    () => {
      if (timerRef.current)
        window.clearTimeout(timerRef.current)
    }
  }, [slideMeshFile]);

  return (
    <animated.div style={styles}>
      <StyledThreeBackground panelOpen={mobilePanel}>
        <Canvas 
          camera={{
            near: 0.1,
            far: 1000,
            zoom: 1.9
          }}
        >
          <Suspense fallback={false}>
            <Lighting highlight={highlight}/>
            {(urlState.length > 1) && 
              <Model 
                url={urlState} 
                cb={() => {setFadeOut(false)}}
              />
            }
          </Suspense>
        </Canvas>
      </StyledThreeBackground>
    </animated.div>
  );
};

export default react.memo(EFXMeshBackground);
