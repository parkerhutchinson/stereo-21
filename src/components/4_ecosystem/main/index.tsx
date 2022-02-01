import React, { ReactNode, useContext } from 'react';
import { GlobalContext } from '@/src/context/global';
import { StyledWrap, StyledThreeBG, StyledThreeBackgroundFallback } from "./styles";
import EFXMeshBackground from "@/src/components/2_molecules/efxMeshBackground";
import StereoLogo from '@/src/components/2_molecules/stereoLogo';
import NavigationMobile from "@/src/components/2_molecules/navMobile";
import useScreenSize from '@/src/hooks/useScreenSize';
import UIDebugger from '@/src/lib/debugger';

interface Props {
  children?: ReactNode
}

const Main = (props: Props) => {
  const { state, dispatch } = useContext(GlobalContext);
  const [winWidth] = useScreenSize();
  return (
    <>
      <UIDebugger />
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
          {winWidth > 960 ?
            state.slideData.mesh && <EFXMeshBackground
              slideId={state.slideData.slideId}
              mobilePanel={state.mobilePanel}
              slideMeshFile={state.slideData.mesh}
              highlight={state.colorScheme.highlight}
            /> :
            <StyledThreeBackgroundFallback
              image={state.slideData.meshFallback}
              panelopen={state.mobilePanel}
            />
          }
        </StyledThreeBG>
      </StyledWrap>
    </>
  )
}

export default React.memo(Main);
