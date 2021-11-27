import React, {useContext} from "react";
import {GlobalActions} from "@/src/context/global";
import {StyledBioTab, StyledCopyWrapper, StyledCTAGroup, StyledMobileWorkButton} from "./styles";
import StereoLogo from "@/src/components/2_molecules/stereoLogo";
import {GlobalContext} from "@/src/context/global"
import {TypeBioFields} from "@/src/types/generated/TypeBio";
import RichTextBody from "@/src/components/2_molecules/richTextBody";
import ExternalCTA from "@/src/components/2_molecules/externalCta";
import IconWork from "@/public/icn-work.svg";
import useScreenSize from "@/src/hooks/useScreenSize";

const CTA_DATA = [
  {
    icon: 'code',
    link: 'https://dribbble.com/parkerhutchinson'
  },
  {
    icon: 'art',
    link: 'https://dribbble.com/parkerhutchinson'
  },
  {
    icon: 'resume',
    link: 'https://dribbble.com/parkerhutchinson'
  }
]

const Bio = (props:TypeBioFields) => {
  const [winWidth] = useScreenSize();
  const {body} = props;
  const {
    state: {
      colorScheme,
      caseStudyOpen,
      mobilePanel
    }, 
    dispatch
  } = useContext(GlobalContext);
  
  return (
    <StyledBioTab>
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