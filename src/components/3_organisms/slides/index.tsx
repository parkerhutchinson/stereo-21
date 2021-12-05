import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { GlobalActions, GlobalContext } from "@/src/context/global";
import { StyledSlides } from "./styles";
import useIsomorphicLayoutEffect from "@/src/hooks/useIsomorphicLayoutEffect";
import Slide from "./slide";
import useKeycode from "@/src/hooks/useKeycode";
import { SlideFields } from "./slide";
import { useSpring } from "react-spring";


const { UPDATE_COLOR, OPEN_CASE_STUDY, ADD_SLIDE_MESH } = GlobalActions;

export interface Slides {
  slides: SlideFields[]
}

const Slides = (props: Slides) => {
  const { slides } = props;
  const SLIDES_LEN = slides.length - 1;
  const [slideOpen, toggleSlideOpen] = useState(false);
  const userInteracted = useRef(false);
  const timerRef = useRef<NodeJS.Timer>();
  const {state: {mobilePanel}, dispatch } = useContext(GlobalContext);
  const [activeSlide, setActiveSlide] = useState(0);
  const [articleReady, setArticleReady] = useState(false);
  // scroll top animation
  const [, springAPI] = useSpring(() => ({ 
      from: {y: window.scrollY},
      to: {y: 0},
      duration: 500
    })
  )

  const [keyName] = useKeycode();

  const nextSlide = () => {
    return activeSlide < SLIDES_LEN 
      ? setActiveSlide(activeSlide + 1) 
      : setActiveSlide(0);
  }
    
  const prevSlide = () => 
    activeSlide > 0 
      ? setActiveSlide(activeSlide - 1) 
      : setActiveSlide(SLIDES_LEN);

  const stopSlideshow = () => timerRef.current ? window.clearTimeout(timerRef.current) : null;

  // slideshow interval
  useIsomorphicLayoutEffect(() => {
    if (timerRef.current)
        window.clearTimeout(timerRef.current)

    // cancel timer if user has interacted
    if (!userInteracted.current) {
      timerRef.current = setTimeout(() => {
        nextSlide();
      }, 6000);
    }

  }, [userInteracted, activeSlide]);

  // change global colorways when slide updates
  useEffect(() => {
    if (typeof dispatch !== 'undefined') {
      // TODO: this sucks
      dispatch({ 
        type: UPDATE_COLOR, 
        payload: {
          siteBackgroundColor: slides[activeSlide].colorSchemeSeed ,
          bioTextColor: slides[activeSlide].colorSchemeBioText,
          bioBackgroundColor: slides[activeSlide].colorSchemeBioBG,
          highlight: slides[activeSlide].colorSchemeHighlight
        }
      })
      dispatch({
        type: ADD_SLIDE_MESH,
        payload: {
          slideId: activeSlide, 
          url: slides[activeSlide].meshScene.fields.file.url
        }
      })
    }
  }, [activeSlide]);

  // slides state controls
  const handleSlideNavigation = (action:string) => {
    switch(action) {
      case 'next':
        prevSlide();
        break;
      case 'prev':
        nextSlide();
        break;
      case 'open':
        stopSlideshow();
        // scroll top if the study was opened
        if (slideOpen && window.scrollY > 0) {
          springAPI.start({
            from: { y: window.scrollY },
            to: {y: 0},
            onChange: (props:any) => {
              window.scroll(0, props.value.y)
            },
            onRest: () => {
              toggleSlideOpen(false);       
              dispatch({type: OPEN_CASE_STUDY, payload: false})
            }
          });
        } else if (slideOpen && window.scrollY === 0){
          toggleSlideOpen(false);       
          dispatch({type: OPEN_CASE_STUDY, payload: false})
        } else {
          toggleSlideOpen(true);       
          dispatch({type: OPEN_CASE_STUDY, payload: true})
        }
        break;
    }
  }

  useEffect(() => {
    
    switch(keyName) {
      case 'ArrowLeft':
        userInteracted.current = true;
        prevSlide();
        stopSlideshow();
        break;
      case 'ArrowRight':
        userInteracted.current = true;
        nextSlide();
        stopSlideshow();
        break;
      case 'Escape':
        // scroll top when esc key is hit
        if (window.scrollY > 0) {
          springAPI.start({
            from: { y: window.scrollY },
            to: {y: 0},
            onChange: (props:any) => {
              window.scroll(0, props.value.y)
            },
            onRest: () => {
              toggleSlideOpen(false);       
              dispatch({type: OPEN_CASE_STUDY, payload: false})
            }
          });
        } else {
          toggleSlideOpen(false);       
          dispatch({type: OPEN_CASE_STUDY, payload: false})
        }
        break;
      case 'Enter':
        userInteracted.current = true;
        toggleSlideOpen(true);
        stopSlideshow();
        dispatch({type: OPEN_CASE_STUDY, payload: true});
        break;
      default:
        break;
    }
  },[keyName])
  
  return (
    <StyledSlides 
      backgroundColor={slides[activeSlide].colorSchemeBioBG}
      toggle={slideOpen}
      slidePosition={articleReady}
      panelOpen={mobilePanel}
    >
      <Slide 
        slide={slides[activeSlide]} 
        navCallback={(e) => {
          userInteracted.current = true;
          handleSlideNavigation(e);
        }} 
        toggleSlide={slideOpen}
        finishedAnimation={() => slideOpen ? setArticleReady(true) : setArticleReady(false)}
      />
      
    </StyledSlides>
  )
}

export default React.memo(Slides);