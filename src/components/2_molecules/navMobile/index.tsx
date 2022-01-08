import { GlobalContext } from "@/src/context/global";
import { useContext } from "react";
import { StyledMobileNav, StyledMobileWorkButton } from "./styles";
import IconWork from "@/public/icn-work.svg";
import { GlobalActions } from "@/src/context/global";

interface Props {

}


const NavigationMobile = (props: Props) => {
  const {state, dispatch} = useContext(GlobalContext);

  return (
    <StyledMobileNav>
      <StyledMobileWorkButton
        onClick={
          () => {
            dispatch(
              {
                type: GlobalActions.TOGGLE_MOBILE_PANEL,
                payload: !state.mobilePanel
              }
            )
          }
        }
        aria-label="button show case study slides"
      >
        <IconWork />
      </StyledMobileWorkButton>
    </StyledMobileNav>
  )
}

export default NavigationMobile;