import react, { ReactNode, Suspense, useEffect, useRef, useState } from "react";
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing';

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import {StyledThreeBackground} from "./styles";

import { useSpring, animated } from 'react-spring';
import Model from "./model";
import Lighting from "./lighting";
import * as THREE from "three";

interface Props {
  slideMeshFile: string
  slideId:number
  highlight: string
  mobilePanel: boolean
  children?: ReactNode
}

const EFXMeshBackground = (props:Props) => {
  const {slideMeshFile, highlight, mobilePanel, slideId} = props;
  const [urlState, setUrlState] = useState('');
  const [idState, setIdState] = useState(-1);
  const [fadeOut,setFadeOut] = useState(false);
  const timerRef = useRef<NodeJS.Timer>();
  const styles = useSpring({
    opacity: fadeOut ? 0 : 1,
    duration: 1000
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
      setIdState(slideId);
    }, 500);

    // unmount
    () => {
      if (timerRef.current)
        window.clearTimeout(timerRef.current)
    }
  }, [slideMeshFile]);

  return (
    <StyledThreeBackground panelopen={`${mobilePanel}`} as={animated.div} style={styles}>
      {props.children}
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
              slideId={idState}
              cb={() => {setFadeOut(false)}}
            />
          }
        </Suspense>
        <EffectComposer frameBufferType={THREE.HalfFloatType}>
          {/* <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} /> */}
          {/* <Vignette eskil={false} offset={0.1} darkness={1.1} opacity={.8} /> */}
        </EffectComposer>
      </Canvas>
    </StyledThreeBackground>
  );
};

export default react.memo(EFXMeshBackground);
