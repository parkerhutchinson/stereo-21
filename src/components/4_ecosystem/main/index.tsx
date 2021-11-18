import React, {ReactNode, useContext} from 'react';
import { GlobalContext } from '@/src/context/global';
import {StyledBackground, StyledThreeBGCurtain} from "./styles";
import EFXMeshBackground from "@/src/components/2_molecules/efxMeshBackground";


interface Props {
  children?: ReactNode
}

const Main = (props:Props) => {
  const {state: {colorScheme: {bioBackgroundColor, highlight}, caseStudyOpen}} = useContext(GlobalContext);
  return (
    <StyledBackground color={bioBackgroundColor}>
      {props.children}
      <StyledThreeBGCurtain open={caseStudyOpen}>
        <EFXMeshBackground 
          slideMeshFile={''} 
          highlight={highlight}
        />
      </StyledThreeBGCurtain>
    </StyledBackground>
  )
}

export default Main;
