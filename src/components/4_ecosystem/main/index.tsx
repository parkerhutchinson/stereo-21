import React, {ReactNode, useContext} from 'react';
import { GlobalContext } from '@/src/context/global';
import {StyledWrap, StyledThreeBG, StyledMobileWorkButton} from "./styles";
import EFXMeshBackground from "@/src/components/2_molecules/efxMeshBackground";
import StereoLogo from '@/src/components/2_molecules/stereoLogo';
import IconWork from "@/public/icn-work.svg";
import { GlobalActions } from "@/src/context/global";


interface Props {
  children?: ReactNode
}

const Main = (props:Props) => {
  const {state, dispatch} = useContext(GlobalContext);
  return (
    <StyledWrap>
      {props.children}
      <StyledMobileWorkButton
        onClick={
          () => {
            dispatch(
              {
                type: GlobalActions.TOGGLE_MOBILE_PANEL,
                payload: !state.mobilePanel
              }
            )
          }
        }
        aria-label="button show case study slides"
      >
        <IconWork />
      </StyledMobileWorkButton>
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
