import React, { MutableRefObject, useContext, useEffect, useRef, useState } from "react";

import { TypeSlideFields } from "@/src/types/generated/TypeSlide";
import RichTextBody from "@/src/components/molecules/richTextBody";
import { ColorActions, GlobalContext } from "@/src/context/global";
import { StyledSlide, StyledCaseStudyCopy, StyledLogo, StyledSlideCardContent, StyledSlides, StyledCardWrap } from "./styles";
import { drawRectBorder } from "@/src/lib/drawing";
import useIsomorphicLayoutEffect from "@/src/hooks/useIsomorphicLayoutEffect";
import useScreenSize from "@/src/hooks/useScreenSize";
import Button from "@/src/components/atoms/button";
import SlidesNavigation from "../../molecules/slidesNav";

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
  const canvasRef = useRef() as MutableRefObject<HTMLCanvasElement>;
  const { dispatch } = useContext(GlobalContext);
  const [winWidth] = useScreenSize();
  const [activeSlide, setActiveSlide] = useState(0);

  useIsomorphicLayoutEffect(() => {
    const canvasDom = canvasRef.current;
    const strokeWidth = 2;

    if (typeof canvasDom !== 'undefined') {
      //@ts-ignore
      const ctx = canvasDom.getContext('2d');
      const draw = (objectW: number, objectH: number) => {
        //@ts-ignore: not possible since this will be using useLayoutEffect
        const gradient = ctx.createLinearGradient(0, 0, 200, 600);

        gradient.addColorStop(0, slides[activeSlide].colorSchemeSeed);
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
  }, [canvasRef, winWidth, activeSlide]);

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
    <StyledSlide cardColor={slides[activeSlide].colorSchemeSeed}>
      <canvas ref={canvasRef}></canvas>
      <StyledCardWrap>
        {slides.map((slide: SlideFields, index: number) => (

          <React.Fragment key={index}>
            
            <StyledSlideCardContent>
              <h2>{slide.brand}</h2>
              <StyledLogo>
                <img src={slide.logo} />
              </StyledLogo>
            </StyledSlideCardContent>

            <StyledCaseStudyCopy>
              <RichTextBody body={slide.caseStudyCopy}/>
            </StyledCaseStudyCopy>

          </React.Fragment>

        ))[activeSlide]}
        <SlidesNavigation color={slides[activeSlide].colorSchemeHighlight}/>
      </StyledCardWrap>
    </StyledSlide>
  </StyledSlides>
    
  )
}

export default Slides;