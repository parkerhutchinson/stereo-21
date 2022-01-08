import { GlobalContext } from "@/src/context/global";
import { useContext } from "react";
import { MobileMenu, StyledMobileNavIconBg, StyledMobileWorkButton } from "./styles";
import IconWork from "@/public/icn-work.svg";
import { GlobalActions } from "@/src/context/global";

interface Props {

}


const NavigationMobile = (props: Props) => {
  const {state, dispatch} = useContext(GlobalContext);

  return (
    <MobileMenu color={state.colorScheme.highlight} opened={state.mobilePanel}>
      <StyledMobileNavIconBg opened={state.mobilePanel}>
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
      </StyledMobileNavIconBg>
    </MobileMenu>
  )
}

export default NavigationMobile;