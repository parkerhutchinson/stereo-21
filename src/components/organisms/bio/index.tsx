import React, {useContext} from "react";
import Grid from "@/src/styles/grid";
import {StyledBioTab, StyledCopyWrapper, StyledCTAGroup} from "./styles";
import StereoLogo from "@/src/components/molecules/stereoLogo";
import {GlobalContext} from "@/src/context/global"
import {TypeBioFields} from "@/src/types/generated/TypeBio";
import RichTextBody from "@/src/components/molecules/richTextBody";
import ExternalCTA from "@/src/components/molecules/externalCta";



const Bio = (props:TypeBioFields) => {
  const {body} = props;
  const {state} = useContext(GlobalContext);
  
  return (
    <StyledBioTab 
      backgroundColor={state.bioBackgroundColor}
    >
      <Grid subGrid={12}>
        <StereoLogo textColor={state.bioTextColor} />
        <StyledCopyWrapper>
          <RichTextBody body={body} />
          <StyledCTAGroup>
            <ExternalCTA icon="art" link="https://dribbble.com/parkerhutchinson"/>
            <ExternalCTA icon="code" link="https://dribbble.com/parkerhutchinson"/>
            <ExternalCTA icon="resume" link="https://dribbble.com/parkerhutchinson"/>
          </StyledCTAGroup>
        </StyledCopyWrapper>
      </Grid>
    </StyledBioTab>
  )
}

export default Bio;