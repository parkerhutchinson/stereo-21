import { GlobalContext } from "@/src/context/global";
import { useContext } from "react";
import {
  MobileMenu,
  StyledMobileNavIconBg,
  StyledMobileWorkButton,
  StyledMobileArrowButtons,
  StyledMobileButtonsWrap,
  StyledMobileArrowButtonWrap,
  StyledActiveBrand
} from "./styles";
import ArrowIcon from "@/src/components/1_atoms/arrowIcon";
import IconWork from "@/public/icn-work.svg";
import IconHome from "@/public/icn-home.svg";
import { GlobalActions } from "@/src/context/global";

interface Props {

}

const NavigationMobile = (props: Props) => {
  const { state, dispatch } = useContext(GlobalContext);

  return (
    <MobileMenu
      background={state.colorScheme.bioBackgroundColor}
      color={state.colorScheme.bioBackgroundColor}
      opened={state.mobilePanel}
      caseStudyOpened={state.caseStudyOpen}
    >
      
      <StyledMobileButtonsWrap>
        
        <StyledMobileArrowButtonWrap>
          <StyledMobileArrowButtons
            buttonColor={state.colorScheme.bioBackgroundColor}
            buttonBorderColor={state.colorScheme.eyeBrowStopOne}
          >
            <ArrowIcon direction="w" color="white" />
          </StyledMobileArrowButtons>
        </StyledMobileArrowButtonWrap>
        <StyledActiveBrand>ASANA.COM</StyledActiveBrand>
        <StyledMobileArrowButtonWrap>
          <StyledMobileArrowButtons
            buttonColor={state.colorScheme.bioBackgroundColor}
            buttonBorderColor={state.colorScheme.eyeBrowStopOne}
          >
            <ArrowIcon direction="e" color="white" />
          </StyledMobileArrowButtons>
        </StyledMobileArrowButtonWrap>

      </StyledMobileButtonsWrap>

      <StyledMobileNavIconBg opened={state.mobilePanel} color={state.colorScheme.bioBackgroundColor}>
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
          {!state.mobilePanel ? <IconWork /> : <IconHome />}

        </StyledMobileWorkButton>

      </StyledMobileNavIconBg>
    </MobileMenu>
  )
}

export default NavigationMobile;