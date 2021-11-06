import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { TypeSlideFields } from "@/src/types/generated/TypeSlide";
import { ColorActions, GlobalContext } from "@/src/context/global";
import { StyledSlides } from "./styles";
import useIsomorphicLayoutEffect from "@/src/hooks/useIsomorphicLayoutEffect";
import Slide from "./slide";

const { 
  UPDATE_BIO_BACKGROUND_COLOR, 
  UPDATE_TEXT_COLOR, 
  UPDATE_SITE_BACKGROUND_COLOR 
} = ColorActions;

export type SlideFields = Omit<TypeSlideFields, 'logo'> & { logo: string };

export interface Slides {
  slides: SlideFields[]
}

const Slides = (props: Slides) => {
  const { slides } = props;
  const userInteracted = useRef(false);
  const timerRef = useRef<NodeJS.Timer>();
  const { dispatch } = useContext(GlobalContext);
  const [activeSlide, setActiveSlide] = useState(0);

  // slideshow interval
  useIsomorphicLayoutEffect(() => {
    let slideIndex = 0;

    if (timerRef.current)
        window.clearTimeout(timerRef.current)

    // cancel timer if user has interacted
    if (!userInteracted.current) {
      timerRef.current = setInterval(() => {
        slideIndex = slideIndex < slides.length - 1 ? slideIndex+=1 : 0;
        setActiveSlide(slideIndex);
      }, 6000);
    }
    
    // unmount
    () => {
      if (timerRef.current)
        window.clearTimeout(timerRef.current)
    }
  }, [userInteracted]);

  // change global colorways when slide updates
  useEffect(() => {
    if (typeof dispatch !== 'undefined') {
      dispatch({ 
        type: UPDATE_BIO_BACKGROUND_COLOR, 
        payload: slides[activeSlide].colorSchemeBioBG 
      })
      dispatch({ 
        type: UPDATE_TEXT_COLOR, 
        payload: slides[activeSlide].colorSchemeBioText 
      })
      dispatch({ 
        type: UPDATE_SITE_BACKGROUND_COLOR, 
        payload: slides[activeSlide].colorSchemeSeed 
      })
    }
  }, [activeSlide]);
  
  return (
    <StyledSlides backgroundColor={slides[activeSlide].colorSchemeSeed}>
      <Slide slide={slides[activeSlide]} />
    </StyledSlides>
  )
}

export default Slides;