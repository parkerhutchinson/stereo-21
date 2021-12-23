import React, { useEffect, useRef, useState } from "react";
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
  colorSchemeBG: string,
  technology?: string[]
}
export type SlideFields = Omit<TypeSlideFields, 'logo' | 'summaryRef' | 'logo_small'> & { logo: string, summary:  TSummary, logoSmall: string};

export interface Slide {
  slide: SlideFields
  toggleSlide: boolean
  navCallback: (action:string) => void
  finishedAnimation: () => void
}

const Slide = (props: Slide) => {
  const { slide, navCallback, toggleSlide, finishedAnimation } = props;
  const [heightState,setHeightState] = useState(0);

  const toggleTransition = useTransition(toggleSlide, {
    from: {opacity: 0},
    enter: {opacity: 1},
    leave: {opacity: 0},
    duration: 500,
    order: ["leave", "enter", "update"],
    onRest: () => finishedAnimation()
  });

  const handleButtonCLick = (action:string) => {
    navCallback(action);
  }

  const setHeightStyles = () => {
    let heightValue = '0';
    if (toggleSlide) {
      if (heightState === 0) {
        heightValue = '1000px';
      } else {
        heightValue = `${heightState + 200}px`;
      }
    } else {
      heightValue = '75vh'
    }
    return heightValue;
  } 

  return (
    <StyledSlide 
      cardcolor={slide.colorSchemeSeed} 
      toggle={toggleSlide}
      style={{height: setHeightStyles()}}
    >
      <EFXRoundedGradientBorder 
        colorStopTop={slide.colorSchemeSlideStopOne} 
        colorStopBottom={slide.colorSchemeSlideStopTwo}
      />
      
      {/* toggle nav */}
      {toggleTransition((stylesCopy, toggle) => toggle && 
      <SlidesNavigation
        buttonColor={slide.colorSchemeSlideStopTwo} 
        iconColor={slide.colorSchemeBioBG}
        navCallback={(e) => handleButtonCLick(e)}
        toggleNavAnimation={toggle}
        style={
          {
            ...stylesCopy, 
            ...{
              zIndex: 10, 
              position: '-webkit-sticky',
              pointerEvents: toggleSlide ? 'auto' : 'none'}
            }
        }
      />
      )}
      
      {/* toggle card transition into article */}
      {toggleTransition(
        (styles,toggle) => !toggle ?
        <SlideCard 
          brand={slide.brand}
          brandTitleColor={slide.colorSchemeEyeBrowStopTwo}
          iconColor={slide.colorSchemeHighlight}
          buttonColor={slide.colorSchemeHighlight}
          logo={slide.logo}
          style={{...styles, ...{zIndex: 20}}}
          navCallback={(e) => handleButtonCLick(e)}
        /> : 
        <animated.div style={{...styles,...{position: 'relative', zIndex: 3}}}>
          <SlideArticle 
            {...slide}
            colorSchemeBG={slide.summary.colorSchemeBG}
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