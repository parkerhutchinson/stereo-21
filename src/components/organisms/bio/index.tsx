import {useContext} from "react";
import Grid from "@/src/styles/grid";
import {StyledBioTab, StyledCopyWrapper} from "./styles";
import StereoLogo from "@/src/components/molecules/stereoLogo";
import {GlobalContext} from "@/src/context/global"
import {TypeBioFields} from "@/src/types/generated/TypeBio";
import RichTextBody from "@/src/components/molecules/richTextBody";


const Bio = (props:TypeBioFields) => {
  const {body} = props;
  const {state} = useContext(GlobalContext);
  
  return (
    <StyledBioTab 
      textColor={state.bioTextColor}
      backgroundColor={state.bioBackgroundColor}
    >
      <Grid subGrid={12}>
        <StyledCopyWrapper>
          <StereoLogo />
          <RichTextBody body={body} />
        </StyledCopyWrapper>
      </Grid>
    </StyledBioTab>
  )
}

export default Bio;