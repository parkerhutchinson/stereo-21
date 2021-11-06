import React, { MutableRefObject, useRef } from "react";

import { TypeSlideFields } from "@/src/types/generated/TypeSlide";
import RichTextBody from "@/src/components/molecules/richTextBody";
import { 
  StyledSlide, 
  StyledCaseStudyCopy, 
  StyledLogo, 
  StyledSlideCardContent, 
  StyledCardWrap 
} from "./styles";
import { drawRectBorder } from "@/src/lib/drawing";
import useIsomorphicLayoutEffect from "@/src/hooks/useIsomorphicLayoutEffect";
import useScreenSize from "@/src/hooks/useScreenSize";
import SlidesNavigation from "../../molecules/slidesNav";

export type SlideFields = Omit<TypeSlideFields, 'logo'> & { logo: string };

export interface Slides {
  slide: SlideFields
}

const Slide = (props: Slides) => {
  const { slide } = props;
  const canvasRef = useRef() as MutableRefObject<HTMLCanvasElement>;
  const [winWidth] = useScreenSize();

  useIsomorphicLayoutEffect(() => {
    const canvasDom = canvasRef.current;
    const strokeWidth = 2;

    if (typeof canvasDom !== 'undefined') {
      //@ts-ignore
      const ctx = canvasDom.getContext('2d');
      const draw = (objectW: number, objectH: number) => {
        //@ts-ignore: not possible since this will be using useLayoutEffect
        const gradient = ctx.createLinearGradient(0, 0, 200, 600);

        gradient.addColorStop(0, slide.colorSchemeSeed);
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
  }, [canvasRef, winWidth]);

  // change global colorways when slide updates
  
  return (
    <StyledSlide cardColor={slide.colorSchemeSeed}>
      <canvas ref={canvasRef}></canvas>
      <StyledCardWrap>
            
        <StyledSlideCardContent>
          <h2>{slide.brand}</h2>
          <StyledLogo>
            <img src={slide.logo} />
          </StyledLogo>
        </StyledSlideCardContent>

        <StyledCaseStudyCopy>
          <RichTextBody body={slide.caseStudyCopy}/>
        </StyledCaseStudyCopy>

          
        <SlidesNavigation 
          buttonColor={slide.colorSchemeHighlight} 
          iconColor={slide.colorSchemeBioBG}
        />
        
      </StyledCardWrap>
    </StyledSlide>
    
  )
}

export default Slide;