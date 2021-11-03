import Grid from "../../../styles/grid";
import {BioTab} from "./styles";
import StereoLogo from "../../molecules/stereoLogo";

const Bio = (props:any) => {
  return (
    <Grid subGrid={12}>
      <BioTab>
        <StereoLogo />
        <h1>testing</h1>
      </BioTab>
    </Grid>
  )
}

export default Bio;