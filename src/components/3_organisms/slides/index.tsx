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
  const SLIDES_LEN = slides.length;
  const [slideOpen, toggleSlideOpen] = useState(false);
  const userInteracted = useRef(false);
  const timerRef = useRef<NodeJS.Timer>();
  const {state: {mobilePanel}, dispatch } = useContext(GlobalContext);
  const [activeSlide, setActiveSlide] = useState(0);
  const [articleReady, setArticleReady] = useState(false);
  const [, springAPI] = useSpring(() => ({ 
      from: {y: window.scrollY},
      to: {y: 0},
      duration: 500
    })
  )

  const [keyName] = useKeycode();

  const nextSlide = () => 
    activeSlide < SLIDES_LEN - 1 
      ? setActiveSlide(activeSlide + 1) 
      : setActiveSlide(0);

  const prevSlide = () => 
    activeSlide > 0 
      ? setActiveSlide(activeSlide - 1) 
      : setActiveSlide(SLIDES_LEN - 1);

  const stopSlideshow = () => timerRef.current ? window.clearTimeout(timerRef.current) : null;

  // slideshow interval
  useIsomorphicLayoutEffect(() => {

    if (timerRef.current)
        window.clearTimeout(timerRef.current)

    // cancel timer if user has interacted
    if (!userInteracted.current) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 6000);
    }
    
    // unmount
    () => {
      if (timerRef.current)
        window.clearTimeout(timerRef.current)
    }
  }, [userInteracted]);

  // const 

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
    stopSlideshow();
    switch(action) {
      case 'next':
        prevSlide();
        break;
      case 'prev':
        nextSlide();
        break;
      case 'open':
        // scroll top if the study was opened
        if (slideOpen) {
          springAPI.start({
            from: { y: window.scrollY },
            to: {y: 0},
            onChange: (props:any) => {
              console.log(props.value.y);
              window.scroll(0, props.value.y)
            },
            onRest: () => {
              toggleSlideOpen(!slideOpen);       
              dispatch({type: OPEN_CASE_STUDY, payload: !slideOpen})
            }
          });
        } else {
          toggleSlideOpen(!slideOpen);       
          dispatch({type: OPEN_CASE_STUDY, payload: !slideOpen})
        }
        break;
    }
  }

  useEffect(() => {
    switch(keyName) {
      case 'ArrowLeft':
        prevSlide();
        stopSlideshow();
        break;
      case 'ArrowRight':
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
              console.log(props.value.y);
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
        navCallback={(e) => handleSlideNavigation(e)} 
        toggleSlide={slideOpen}
        finishedAnimation={() => slideOpen ? setArticleReady(true) : setArticleReady(false)}
      />
      
    </StyledSlides>
  )
}

export default Slides;