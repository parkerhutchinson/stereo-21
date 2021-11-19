import React, {ReactNode, useContext} from 'react';
import { GlobalContext } from '@/src/context/global';
import {StyledBackground, StyledThreeBGCurtain} from "./styles";
import EFXMeshBackground from "@/src/components/2_molecules/efxMeshBackground";


interface Props {
  children?: ReactNode
}

const Main = (props:Props) => {
  const {state} = useContext(GlobalContext);
  return (
    <StyledBackground color={state.colorScheme.bioBackgroundColor}>
      {props.children}
      <StyledThreeBGCurtain open={state.caseStudyOpen}>
        {state.slideMesh.url && <EFXMeshBackground
          slideId={state.slideMesh.slideId}
          mobilePanel={state.mobilePanel}
          slideMeshFile={state.slideMesh.url}
          highlight={state.colorScheme.highlight}
        />}
      </StyledThreeBGCurtain>
    </StyledBackground>
  )
}

export default React.memo(Main);
