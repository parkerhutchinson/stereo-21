import React, { useRef } from "react";
import {useTransition, animated, useChain, useSpringRef} from 'react-spring';
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
  const richTextTransRef = useSpringRef();
  const slideTransRef = useSpringRef();

  const toggleTransition = useTransition(toggleSlide, {
    native: true,
    from: {opacity: 0, transform: 'translate3d(0, 100px, 0)'},
    enter: {opacity: 1, transform: 'translate3d(0, 0px, 0)'},
    leave: {opacity: 0, transform: 'translate3d(0, 20px, 0)'},
    ref: slideTransRef,
  });

  useChain(toggleSlide ? [richTextTransRef, slideTransRef] : [slideTransRef, richTextTransRef], [0, 1])

  const handleButtonCLick = (action:string) => {
    navCallback(action);
  }

  const richTextEvents = toggleSlide ? 'auto' : 'none';

  // change global colorways when slide updates
  return (
    <StyledSlide cardColor={slide.colorSchemeSeed} toggle={toggleSlide}>
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
        (stylesCopy,toggle) => !toggle ? 
        
        <SlideCard 
          brand={slide.brand}
          iconColor={slide.colorSchemeHighlight}
          buttonColor={slide.colorSchemeHighlight}
          logo={slide.logo}
          style={{...stylesCopy, ...{zIndex: 20}}}
          navCallback={(e) => handleButtonCLick(e)}
        />
        
        : 
        
        <SlideArticle {...slide} style={stylesCopy}/>

      )} 
      
    </StyledSlide>
  )
}

// im getting re-renders from the dispatch call in the parent
// this prevents unnecessary slide re-renders
export default React.memo(Slide);