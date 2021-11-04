import react, {useContext, useEffect} from "react";
import Grid from "@/src/styles/grid";
import {StyledBioTab} from "./styles";
import StereoLogo from "@/src/components/molecules/stereoLogo";
import {GlobalContext} from "@/src/context/global"

const Bio = () => {
  const {state, dispatch} = useContext(GlobalContext);

  useEffect(() => {
    if (typeof dispatch !== 'undefined') {
      dispatch({type: 'UPDATE_BIO_BACKGROUND_COLOR', payload: 'red'})
    }
  }, [])
  
  return (
    <StyledBioTab 
      textColor={state.bioTextColor}
      backgroundColor={state.bioBackgroundColor}
    >
      <Grid subGrid={12}>
        <StereoLogo />
        <h1>testing</h1>
      </Grid>
    </StyledBioTab>
  )
}

export default Bio;