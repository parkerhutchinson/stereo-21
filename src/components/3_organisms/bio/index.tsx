import React, {useContext, useRef, useState} from "react";
import {GlobalActions} from "@/src/context/global";
import {StyledBioTab, StyledCopyWrapper, StyledMobileWorkButton} from "./styles";
import StereoLogo from "@/src/components/2_molecules/stereoLogo";
import {GlobalContext} from "@/src/context/global"
import {TypeBioFields} from "@/src/types/generated/TypeBio";
import RichTextBody from "@/src/components/2_molecules/richTextBody";
import IconWork from "@/public/icn-work.svg";
import useScreenSize from "@/src/hooks/useScreenSize";
import useIsomorphicLayoutEffect from "@/src/hooks/useIsomorphicLayoutEffect";

const Bio = (props:TypeBioFields) => {
  const [winWidth] = useScreenSize();
  const bioRef = useRef(null);
  const [scrollPos, setScrollPos] = useState(0)
  const {body} = props;
  const {
    state: {
      colorScheme,
      caseStudyOpen,
      mobilePanel
    }, 
    dispatch
  } = useContext(GlobalContext);

  useIsomorphicLayoutEffect(() => {
    document.addEventListener('scroll', (e) => {
      if(!caseStudyOpen && window.pageYOffset > 0) {
        setScrollPos(window.pageYOffset)
      }
     
    })
  }, [caseStudyOpen])

  return (
    <StyledBioTab 
      caseStudyOpen={caseStudyOpen}
      ref={bioRef}
      style={caseStudyOpen ? {top: `-${scrollPos}px`} : {}}
    >
      <StyledMobileWorkButton 
        onClick={
          () => {
            dispatch(
              {
                type: GlobalActions.TOGGLE_MOBILE_PANEL, 
                payload: !mobilePanel
              }
            )
          }
        }
        aria-label="button show case study slides"
      >
        <IconWork />
      </StyledMobileWorkButton>
      
      <StereoLogo 
        textColor={colorScheme.bioTextColor} 
        backgroundColor={colorScheme.bioBackgroundColor} 
      />
      <StyledCopyWrapper 
        backgroundColor={colorScheme.highlight} 
        caseStudyOpen={winWidth < 1024 ? mobilePanel : caseStudyOpen}
      >
        <RichTextBody body={body} />
      </StyledCopyWrapper>
    </StyledBioTab>
  )
}

export default Bio;