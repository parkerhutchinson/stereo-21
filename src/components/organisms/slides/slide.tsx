import React, { MutableRefObject, useRef, useState } from "react";
import {useTransition, animated} from 'react-spring';

import { TypeSlideFields } from "@/src/types/generated/TypeSlide";
import RichTextBody from "@/src/components/molecules/richTextBody";
import { 
  StyledSlide, 
  StyledCaseStudyCopy, 
  StyledLogo, 
  StyledCardWrap,
  StyledBrandTransitionGroup,
} from "./styles";
import { drawRectBorder } from "@/src/lib/drawing";
import useIsomorphicLayoutEffect from "@/src/hooks/useIsomorphicLayoutEffect";
import useScreenSize from "@/src/hooks/useScreenSize";
import SlidesNavigation from "../../molecules/slidesNav";

export type SlideFields = Omit<TypeSlideFields, 'logo'> & { logo: string };

export interface Slide {
  slide: SlideFields
  toggleSlide: boolean
  navCallback: (action:string) => void
}

const Slide = (props: Slide) => {
  const { slide, navCallback } = props;
  const canvasRef = useRef() as MutableRefObject<HTMLCanvasElement>;
  const [winWidth] = useScreenSize();
  const [toggle, setToggle] = useState(false);


  const transitionBrand = useTransition(slide.brand, {
    native: true,
    from: { opacity: 0, transform: 'translate3d(0, -20px, 0)'},
    enter: { opacity: 1, transform: 'translate3d(0, 0px, 0)'},
    leave: { opacity: 0, transform: 'translate3d(0, 20px, 0)'},
    key: slide.brand
  });

  const transitionSlide = useTransition(slide.logo, {
    native: true,
    from: { opacity: 0, transform: 'rotate(20deg)', filter: 'blur(20px)' },
    enter: { opacity: 1, transform: 'rotate(0deg)', filter: 'blur(0px)' },
    leave: { opacity: 0, filter: 'blur(20px)' },
    duration: 400,
    key: slide.logo
  });

  const transitionRichText = useTransition(slide.logo, {
    native: true,
    from: { opacity: 0, transform: 'translate3d(0px,50px,0)'},
    enter: { opacity: 1, transform: 'translate3d(0px,0p,0)' },
    leave: { opacity: 0 },
    duration: 400,
    key: slide.logo
  })

  const toggleTransition = useTransition(toggle, {
    native: true,
    from: {opacity: 0, transform: 'translate3d(0, 100px, 0)'},
    enter: {opacity: 1, transform: 'translate3d(0, 0px, 0)'},
    leave: {opacity: 0, transform: 'translate3d(0, 20px, 0)'}
  });

  const handleButtonCLick = (action:string) => {
    navCallback(action);
    if (action === 'open') {
      setToggle(!toggle);
    }
  }

  useIsomorphicLayoutEffect(() => {
    const canvasDom = canvasRef.current;
    const strokeWidth = 2;

    if (typeof canvasDom !== 'undefined') {
      //@ts-ignore
      const ctx = canvasDom.getContext('2d');
      const draw = (objectW: number, objectH: number) => {
        //@ts-ignore: not possible since this will be using useLayoutEffect
        const gradient = ctx.createLinearGradient(0, 0, 200, 600);

        gradient.addColorStop(0, slide.colorSchemeHighlight);
        gradient.addColorStop(1, 'rgba(255 255 255 / 35%)');

        const config = {
          x: strokeWidth / 2,
          y: strokeWidth / 2,
          w: (objectW - (strokeWidth / 2) * 2),
          h: (objectH - (strokeWidth / 2) * 2),
          radius: 10,
          width: strokeWidth,
          style: gradient,
          ctx: ctx
        }

        drawRectBorder(config);
      }

      const canvasBounds = canvasDom.getBoundingClientRect();
      const newCanvasObjectW = canvasBounds.width;
      const canvasObjectH = canvasBounds.height;

      canvasDom.width = newCanvasObjectW;
      canvasDom.height = canvasObjectH;

      draw(newCanvasObjectW, canvasObjectH);

    }
  }, [canvasRef, winWidth, slide]);

  const richTextEvents = toggle ? 'auto' : 'none';

  // change global colorways when slide updates
  return (
    <StyledSlide cardColor={slide.colorSchemeSeed} toggle={toggle}>
      <canvas ref={canvasRef}></canvas>
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

              <StyledLogo>
                {transitionSlide(
                  (styles, item) => item && 
                  <animated.div style={styles}>
                    <img src={item} />
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
              zIndex: 20, top: '150px', 

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
                  <RichTextBody body={slide.caseStudyCopy}/>
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