import React, {ReactNode, useContext} from 'react';
import { GlobalContext } from '@/src/context/global';
import {StyledWrap, StyledThreeBG} from "./styles";
import EFXMeshBackground from "@/src/components/2_molecules/efxMeshBackground";
import StereoLogo from '@/src/components/2_molecules/stereoLogo';
import NavigationMobile from "@/src/components/2_molecules/navMobile";

interface Props {
  children?: ReactNode
}

const Main = (props:Props) => {
  const {state, dispatch} = useContext(GlobalContext);
  return (
    <StyledWrap>
      {props.children}
      <NavigationMobile />
      
      <StyledThreeBG 
        open={state.caseStudyOpen} 
        color={state.colorScheme.bioBackgroundColor}
      >
        <StereoLogo 
          textColor={state.colorScheme.bioTextColor} 
          backgroundColor={state.colorScheme.bioBackgroundColor} 
        />
        {state.slideData.url && <EFXMeshBackground
          slideId={state.slideData.slideId}
          mobilePanel={state.mobilePanel}
          slideMeshFile={state.slideData.url}
          highlight={state.colorScheme.bioTextColor}
        />}
      </StyledThreeBG>
    </StyledWrap>
  )
}

export default React.memo(Main);
