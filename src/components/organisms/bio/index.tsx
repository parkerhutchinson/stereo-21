import React, {useContext} from "react";
import Grid from "@/src/styles/grid";
import {StyledBioTab, StyledCopyWrapper, StyledCTAGroup} from "./styles";
import StereoLogo from "@/src/components/molecules/stereoLogo";
import {GlobalContext} from "@/src/context/global"
import {TypeBioFields} from "@/src/types/generated/TypeBio";
import RichTextBody from "@/src/components/molecules/richTextBody";
import ExternalCTA from "@/src/components/molecules/externalCta";


const CTA_DATA = [
  {
    icon: 'art',
    link: 'https://dribbble.com/parkerhutchinson'
  },
  {
    icon: 'code',
    link: 'https://dribbble.com/parkerhutchinson'
  },
  {
    icon: 'resume',
    link: 'https://dribbble.com/parkerhutchinson'
  }
]

const Bio = (props:TypeBioFields) => {
  const {body} = props;
  const {state: {colorScheme, caseStudyOpen}} = useContext(GlobalContext);
  
  return (
    <StyledBioTab 
      backgroundColor={colorScheme?.bioBackgroundColor}
      caseStudyOpen={caseStudyOpen}
    >
      <Grid subGrid={12}>
        <StereoLogo textColor={colorScheme.bioTextColor} />
        <StyledCopyWrapper backgroundColor={colorScheme.highlight}>
          <RichTextBody body={body} />
          <StyledCTAGroup>
            {
              CTA_DATA.map((cta:any, index:number) => 
                  <ExternalCTA 
                    icon={cta.icon} 
                    link={cta.link} 
                    highlight={colorScheme.highlight}
                    seed={colorScheme.siteBackgroundColor}
                    key={index}
                  />
                )
            }
          </StyledCTAGroup>
        </StyledCopyWrapper>
      </Grid>
    </StyledBioTab>
  )
}

export default Bio;