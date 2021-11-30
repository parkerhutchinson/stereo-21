import React, { useRef, useState } from "react";
import {useTransition, animated, useChain, useSpringRef, useSpring} from 'react-spring';
import { TypeSlideFields } from "@/src/types/generated/TypeSlide";
import { 
  StyledSlide, 
} from "./styles";
import SlideArticle from "@/src/components/3_organisms/slides/slide-article";
import SlidesNavigation from "@/src/components/2_molecules/slidesNav";
import EFXRoundedGradientBorder from "@/src/components/2_molecules/efxRoundedGradientBorder";
import SlideCard from "./slide-card";

type TSummary = {
  title: string,
  image: string,
  year: string,
  technology?: string[]
}
export type SlideFields = Omit<TypeSlideFields, 'logo' | 'summaryRef'> & { logo: string, summary:  TSummary};

export interface Slide {
  slide: SlideFields
  toggleSlide: boolean
  navCallback: (action:string) => void
}

const Slide = (props: Slide) => {
  const { slide, navCallback, toggleSlide } = props;
  const [heightState,setHeightState] = useState(0)

  const toggleTransition = useTransition(toggleSlide, {
    from: {opacity: 0},
    enter: {opacity: 1},
    leave: {opacity: 0},
    duration: 1000,
  });

  
  const handleButtonCLick = (action:string) => {
    navCallback(action);
  }

  const richTextEvents = toggleSlide ? 'auto' : 'none';

  // change global colorways when slide updates
  return (
    <StyledSlide 
      cardcolor={slide.colorSchemeSeed} 
      toggle={toggleSlide}
      style={{height: toggleSlide ? `${heightState + 200}px` : '75vh'}}
    >
      <EFXRoundedGradientBorder 
        colorStopTop={slide.colorSchemeHighlight} 
        colorStopBottom="rgba(255 255 255 / 35%)"
      />
      
      {/* toggle nav */}
      {toggleTransition((stylesCopy, toggle) => toggle && 
      <SlidesNavigation 
        buttonColor={slide.colorSchemeHighlight} 
        iconColor={slide.colorSchemeBioBG}
        navCallback={(e) => handleButtonCLick(e)}
        toggleNavAnimation={toggle}
        style={{...stylesCopy, ...{zIndex: 1, pointerEvents: richTextEvents}}}
      />
      )}
      
      {/* toggle card transition into article */}
      {toggleTransition(
        (styles,toggle) => !toggle ?
        <SlideCard 
          brand={slide.brand}
          iconColor={slide.colorSchemeHighlight}
          buttonColor={slide.colorSchemeHighlight}
          logo={slide.logo}
          style={{...styles, ...{zIndex: 20}}}
          navCallback={(e) => handleButtonCLick(e)}
        /> : 
        <animated.div style={styles}>
          <SlideArticle 
            {...slide}
            summaryColor={slide.colorSchemeHighlight}
            heightCallback={
              (height:number) => setHeightState(height)
            } 
          />
        </animated.div>
      )}      
      
    </StyledSlide>
  )
}

// im getting re-renders from the dispatch call in the parent
// this prevents unnecessary slide re-renders
export default React.memo(Slide);