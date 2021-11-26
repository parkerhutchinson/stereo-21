import React, { useState, useRef } from "react";
import {useTransition, animated, useChain, useSpringRef} from 'react-spring';
import { TypeSlideFields } from "@/src/types/generated/TypeSlide";
import { TypeSummaryFields } from "@/src/types/generated/TypeSummary";
import RichTextBody from "@/src/components/2_molecules/richTextBody";
import Summary from "@/src/components/2_molecules/summary";
import { Scrollbars } from 'react-custom-scrollbars-2';
import { 
  StyledSlide, 
  StyledCaseStudyCopy, 
  StyledLogo, 
  StyledCardWrap,
  StyledBrandTransitionGroup,
} from "./styles";
import SlidesNavigation from "@/src/components/2_molecules/slidesNav";
import EFXRoundedGradientBorder from "@/src/components/2_molecules/efxRoundedGradientBorder";

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
  const richTextRef = useRef<HTMLDivElement>();
  const [scrollHeight, setScrollHeight] = useState(200);

  const transitionBrand = useTransition(slide.brand, {
    native: true,
    from: { opacity: 0, transform: 'translate3d(0, -20px, 0)'},
    enter: { opacity: 1, transform: 'translate3d(0, 0px, 0)'},
    leave: { opacity: 0, transform: 'translate3d(0, 20px, 0)'},
    duration: 800,
    key: slide.brand
  });

  const toggleTransition = useTransition(toggleSlide, {
    native: true,
    from: {opacity: 0, transform: 'translate3d(0, 100px, 0)'},
    enter: {opacity: 1, transform: 'translate3d(0, 0px, 0)'},
    leave: {opacity: 0, transform: 'translate3d(0, 20px, 0)'},
    ref: slideTransRef,
  });

  const transitionSlide = useTransition(slide.logo, {
    native: true,
    from: { opacity: 0, transform: 'rotate(20deg)', filter: 'blur(20px)' },
    enter: { opacity: 1, transform: 'rotate(0deg)', filter: 'blur(0px)' },
    leave: { opacity: 0, filter: 'blur(20px)' },
    duration: 1000,
    key: slide.logo
  });

  const transitionRichText = useTransition(slide.logo, {
    native: true,
    from: { opacity: 0, transform: 'translate3d(0px,50px,0)'},
    enter: { opacity: 1, transform: 'translate3d(0px,0p,0)' },
    leave: { opacity: 0 },
    duration: 800,
    ref:richTextTransRef,
    key: slide.logo
  });

  useChain(toggleSlide ? [richTextTransRef, slideTransRef] : [slideTransRef, richTextTransRef], [0, 1])

  const handleButtonCLick = (action:string) => {
    navCallback(action);
  }

  const richTextEvents = toggleSlide ? 'auto' : 'none';


  // useIsomorphicLayoutEffect(() => {
  //   if (typeof richTextRef.current !== 'undefined' && richTextRef) {
  //     const {height} = richTextRef.current.getBoundingClientRect();
  //     setScrollHeight(height);
  //   }
  // }, [richTextRef.current])

  // change global colorways when slide updates
  return (
    <StyledSlide cardColor={slide.colorSchemeSeed} toggle={toggleSlide}>
      <EFXRoundedGradientBorder 
        colorStopTop={slide.colorSchemeHighlight} 
        colorStopBottom="rgba(255 255 255 / 35%)"
      />
      <StyledCardWrap>
        
        {/* toggle nav richtext transition */}
        {toggleTransition((stylesCopy, toggle) => toggle && 
        <animated.div style={{...stylesCopy, ...{zIndex: 1, pointerEvents: richTextEvents}}}>
          <SlidesNavigation 
            buttonColor={slide.colorSchemeHighlight} 
            iconColor={slide.colorSchemeBioBG}
            navCallback={(e) => handleButtonCLick(e)}
            toggleNavAnimation={toggle}
          />
        </animated.div>
        )}

        {/* toggle brand card transition into richtext */}
        {toggleTransition(
          (stylesCopy,toggle) => 
            !toggle ?
            <animated.div style={stylesCopy}>
              <StyledBrandTransitionGroup>
                {transitionBrand(
                  (styles, item) => item && 
                    <animated.h2 style={styles}>{item}</animated.h2>
                )}
              </StyledBrandTransitionGroup>

              <StyledLogo onClick={() => handleButtonCLick('open')}>
                {transitionSlide(
                  (styles, item) => item && 
                  <animated.div style={styles}>
                    <img src={item} alt={`logo ${slide.brand}`} />
                  </animated.div>
                )}
              </StyledLogo>

              <SlidesNavigation 
                buttonColor={slide.colorSchemeHighlight} 
                iconColor={slide.colorSchemeBioBG}
                navCallback={(e) => handleButtonCLick(e)}
                toggleNavAnimation={true}
              />
            </animated.div> : 

            <animated.div style={{...stylesCopy, ...{
              zIndex: 20, top: '120px', 
              pointerEvents: richTextEvents}
            }}>
              {transitionRichText((styles, item) => item && 
                <animated.div style={
                  {...styles, ...{
                    height:'100%',
                    width:'100%',
                    position:'absolute'
                  }
                }}>
                <StyledCaseStudyCopy>
                <Scrollbars
                  universal
                  autoHeight
                  autoHeightMin={800}
                >
                  <h2>{slide.brand}</h2>
                  <Summary {...slide.summary} color={slide.colorSchemeHighlight}/>
                  <RichTextBody body={slide.caseStudyCopy} propRef={richTextRef}/>
                </Scrollbars>
                </StyledCaseStudyCopy>
                </animated.div>
              )}
            </animated.div>
        )}  
      </StyledCardWrap>
    </StyledSlide>
  )
}

// im getting re-renders from the dispatch call in the parent
// this prevents unnecessary slide re-renders
export default React.memo(Slide);