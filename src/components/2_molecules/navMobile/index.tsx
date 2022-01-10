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

const NavigationMobile = () => {
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
        <StyledActiveBrand>{state.slideData.brand}</StyledActiveBrand>
        <StyledMobileArrowButtonWrap>
          <StyledMobileArrowButtons
            buttonColor={state.colorScheme.bioBackgroundColor}
            buttonBorderColor={state.colorScheme.eyeBrowStopOne}
            onClick={() => {
              dispatch({
                type: GlobalActions.UPDATE_SLIDE_DATA,
                payload: {
                  slideId: 1,
                }
              })
            }}
          >
            <ArrowIcon direction="e" color="white" />
          </StyledMobileArrowButtons>
        </StyledMobileArrowButtonWrap>

      </StyledMobileButtonsWrap>

      <StyledMobileNavIconBg opened={state.mobilePanel} color={state.colorScheme.bioBackgroundColor}>
        <StyledMobileWorkButton
          onClick={
            () => {
              if (!state.caseStudyOpen) {
                dispatch(
                  {
                    type: GlobalActions.TOGGLE_MOBILE_PANEL,
                    payload: !state.mobilePanel
                  }
                )
              } else {
                dispatch(
                  {
                    type: GlobalActions.OPEN_CASE_STUDY,
                    payload: false
                  }
                )
              } 
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