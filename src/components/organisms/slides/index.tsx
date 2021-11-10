import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import { TypeSlideFields } from "@/src/types/generated/TypeSlide";
import { ColorActions, GlobalContext } from "@/src/context/global";
import { StyledSlides } from "./styles";
import useIsomorphicLayoutEffect from "@/src/hooks/useIsomorphicLayoutEffect";
import Slide from "./slide";

const { UPDATE_COLOR } = ColorActions;

// recycle type slide fields. logo needs to be converted to string though.
export type SlideFields = Omit<TypeSlideFields, 'logo'> & { logo: string };

export interface Slides {
  slides: SlideFields[]
}

const Slides = (props: Slides) => {
  const { slides } = props;
  const [slideOpen, toggleSlideOpen] = useState(false);
  const userInteracted = useRef(false);
  const timerRef = useRef<NodeJS.Timer>();
  const { dispatch } = useContext(GlobalContext);
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    if(activeSlide < slides.length - 1) {
      setActiveSlide(activeSlide + 1)
    } else {
      setActiveSlide(0)
    };
  }

  const prevSlide = () => {
    if(activeSlide > 0) {
      setActiveSlide(activeSlide - 1)
    } else {
      setActiveSlide(slides.length - 1)
    };
  }
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
      // TODO: this sucks
      dispatch({ 
        type: UPDATE_COLOR, 
        payload: {
          siteBackgroundColor: slides[activeSlide].colorSchemeSeed ,
          bioTextColor: slides[activeSlide].colorSchemeBioText,
          bioBackgroundColor: slides[activeSlide].colorSchemeBioBG
        }
      })
    }
  }, [activeSlide]);

  // slides state controls
  const handleSlideNavigation = (action:string) => {
    if (timerRef.current) window.clearTimeout(timerRef.current);
    switch(action) {
      case 'next':
        nextSlide();
        break;
      case 'prev':
        prevSlide();
        break;
      case 'open':
        toggleSlideOpen(!slideOpen);
        break;
    }
    
  }
  
  return (
    <StyledSlides 
      backgroundColor={slides[activeSlide].colorSchemeSeed}
      toggle={slideOpen}
    >
      <Slide 
        slide={slides[activeSlide]} 
        navCallback={(e) => handleSlideNavigation(e)} 
        toggleSlide={slideOpen}
      />
    </StyledSlides>
  )
}

export default Slides;