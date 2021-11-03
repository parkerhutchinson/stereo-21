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
    <Grid subGrid={12}>
      <StyledBioTab 
        textColor={bioTextColor}
        backgroundColor={bioBackgroundColor}
      >
        <StereoLogo />
        <h1>testing</h1>
      </StyledBioTab>
    </Grid>
  )
}

export default Bio;