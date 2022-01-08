import { GlobalContext } from "@/src/context/global";
import { useContext } from "react";
import {
  MobileMenu,
  StyledMobileNavIconBg,
  StyledMobileWorkButton,
  StyledMobileArrowButtons,
  StyledMobileButtonsWrap,
  StyledMobileArrowButtonsWrap
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
      color={state.colorScheme.highlight}
      opened={state.mobilePanel}
      caseStudyOpened={state.caseStudyOpen}
    >
      <StyledMobileButtonsWrap>
        <StyledMobileArrowButtonsWrap>
          <StyledMobileArrowButtons
            buttonColor={state.colorScheme.bioBackgroundColor}
            buttonBorderColor={state.colorScheme.eyeBrowStopOne}
          >
            <ArrowIcon direction="w" color="white" />
          </StyledMobileArrowButtons>
        </StyledMobileArrowButtonsWrap>
        <StyledMobileArrowButtonsWrap>
          <StyledMobileArrowButtons
            buttonColor={state.colorScheme.bioBackgroundColor}
            buttonBorderColor={state.colorScheme.eyeBrowStopOne}
          >
            <ArrowIcon direction="e" color="white" />
          </StyledMobileArrowButtons>
        </StyledMobileArrowButtonsWrap>
      </StyledMobileButtonsWrap>

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
          {!state.mobilePanel ? <IconWork /> : <IconHome />}

        </StyledMobileWorkButton>

      </StyledMobileNavIconBg>
    </MobileMenu>
  )
}

export default NavigationMobile;