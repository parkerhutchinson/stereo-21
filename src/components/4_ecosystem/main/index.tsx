import React, {ReactNode, useContext} from 'react';
import { GlobalContext } from '@/src/context/global';
import {StyledWrap, StyledThreeBGCurtain} from "./styles";
import EFXMeshBackground from "@/src/components/2_molecules/efxMeshBackground";


interface Props {
  children?: ReactNode
}

const Main = (props:Props) => {
  const {state} = useContext(GlobalContext);
  return (
    <StyledWrap>
      {props.children}
      <StyledThreeBGCurtain open={state.caseStudyOpen} color={state.colorScheme.bioBackgroundColor}>
        {state.slideMesh.url && <EFXMeshBackground
          slideId={state.slideMesh.slideId}
          mobilePanel={state.mobilePanel}
          slideMeshFile={state.slideMesh.url}
          highlight={state.colorScheme.highlight}
        />}
      </StyledThreeBGCurtain>
    </StyledWrap>
  )
}

export default React.memo(Main);
