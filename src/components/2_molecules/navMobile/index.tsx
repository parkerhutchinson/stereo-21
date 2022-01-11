import react from "react";
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
import { useSpring } from "react-spring";


const NavigationMobile = () => {
  const { state: {slideData, colorScheme, mobilePanel, caseStudyOpen}, dispatch } = useContext(GlobalContext);

  const [, springAPI] = useSpring(() => ({
      from: { y: typeof window !== 'undefined' && window.scrollY },
      to: { y: 0 },
      duration: 500
    })
  )

  const nextSlide = () => {
    return slideData.slideId < slideData.slidesLength - 1
      ? dispatch({type: GlobalActions.UPDATE_SLIDE_DATA, payload: {slideId: slideData.slideId + 1}})
      : dispatch({type: GlobalActions.UPDATE_SLIDE_DATA, payload: {slideId:0}});
  }

  const prevSlide = () =>
    slideData.slideId > 0
      ? dispatch({type: GlobalActions.UPDATE_SLIDE_DATA, payload: {slideId: slideData.slideId - 1}})
      : dispatch({type: GlobalActions.UPDATE_SLIDE_DATA, payload: {slideId: slideData.slidesLength - 1}});


  const scrollTop = (cb: () => void) => {
    if (caseStudyOpen && window.scrollY > 0) {
      springAPI.start({
        from: { y: window.scrollY },
        to: { y: 0 },
        onChange: (props: any) => {
          window.scroll(0, props.value.y)
        },
        onRest: () => cb()
      });
    } else {
      cb()
    }
  }
    
  return (
    <MobileMenu
      background={colorScheme.bioBackgroundColor}
      color={colorScheme.bioBackgroundColor}
      opened={mobilePanel}
      caseStudyOpened={caseStudyOpen}
    >
      
      <StyledMobileButtonsWrap opened={mobilePanel}>
        
        <StyledMobileArrowButtonWrap>
          <StyledMobileArrowButtons
            buttonColor={colorScheme.bioBackgroundColor}
            buttonBorderColor={colorScheme.eyeBrowStopOne}
            onClick={() => {
              dispatch({type: GlobalActions.STOP_SLIDESHOW,payload: true})
              prevSlide()
            }}
          >
            <ArrowIcon direction="w" color="white" />
          </StyledMobileArrowButtons>
        </StyledMobileArrowButtonWrap>

        <StyledActiveBrand>{slideData.brand}</StyledActiveBrand>
        
        <StyledMobileArrowButtonWrap>
          <StyledMobileArrowButtons
            buttonColor={colorScheme.bioBackgroundColor}
            buttonBorderColor={colorScheme.eyeBrowStopOne}
            onClick={() => {
              dispatch({type: GlobalActions.STOP_SLIDESHOW,payload: true})
              nextSlide()
            }}
          >
            <ArrowIcon direction="e" color="white" />
          </StyledMobileArrowButtons>
        </StyledMobileArrowButtonWrap>

      </StyledMobileButtonsWrap>

      <StyledMobileNavIconBg opened={mobilePanel} color={colorScheme.bioBackgroundColor}>
        <StyledMobileWorkButton
          onClick={
            () => {
              if (!caseStudyOpen) {
                dispatch({type: GlobalActions.TOGGLE_MOBILE_PANEL,payload: !mobilePanel})
              } else {
                scrollTop(() => {
                  dispatch({type: GlobalActions.OPEN_CASE_STUDY,payload: false})
                })
              } 
            }
          }
          aria-label="button show case study slides"
        >
          {!mobilePanel ? <IconWork /> : <IconHome />}
        </StyledMobileWorkButton>

      </StyledMobileNavIconBg>
    </MobileMenu>
  )
}

export default react.memo(NavigationMobile);