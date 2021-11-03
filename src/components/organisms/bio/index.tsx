import react, {useContext} from "react";
import Grid from "@/src/styles/grid";
import {StyledBioTab} from "./styles";
import StereoLogo from "@/src/components/molecules/stereoLogo";
import {GlobalContext} from "@/src/context/global"

const Bio = () => {
  const {
    bioBackgroundColor,
    bioTextColor
  } = useContext(GlobalContext);

  return (
    <StyledBioTab 
      textColor={bioTextColor}
      backgroundColor={bioBackgroundColor}
    >
      <Grid subGrid={12}>
        <StereoLogo />
        <h1>testing</h1>
      </Grid>
    </StyledBioTab>
  )
}

export default Bio;