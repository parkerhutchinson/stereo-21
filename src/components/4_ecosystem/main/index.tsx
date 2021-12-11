import React, {ReactNode, useContext} from 'react';
import { GlobalContext } from '@/src/context/global';
import {StyledWrap, StyledThreeBG} from "./styles";
import EFXMeshBackground from "@/src/components/2_molecules/efxMeshBackground";
import StereoLogo from '@/src/components/2_molecules/stereoLogo';


interface Props {
  children?: ReactNode
}

const Main = (props:Props) => {
  const {state} = useContext(GlobalContext);
  return (
    <StyledWrap>
      {props.children}
      <StyledThreeBG 
        open={state.caseStudyOpen} 
        color={state.colorScheme.bioBackgroundColor}
      >
        <StereoLogo 
          textColor={state.colorScheme.bioTextColor} 
          backgroundColor={state.colorScheme.bioBackgroundColor} 
        />
        {state.slideMesh.url && <EFXMeshBackground
          slideId={state.slideMesh.slideId}
          mobilePanel={state.mobilePanel}
          slideMeshFile={state.slideMesh.url}
          highlight={state.colorScheme.bioTextColor}
        />}
      </StyledThreeBG>
    </StyledWrap>
  )
}

export default React.memo(Main);
