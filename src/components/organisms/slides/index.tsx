import { MutableRefObject, useContext, useEffect, useRef, useState } from "react";

import { TypeSlideFields } from "@/src/types/generated/TypeSlide";
import RichTextBody from "@/src/components/molecules/richTextBody";
import { ColorActions, GlobalContext } from "@/src/context/global";
import { StyledSlide } from "./styles";
import { drawRectBorder } from "@/src/lib/drawing";
import useIsomorphicLayoutEffect from "@/src/hooks/useIsomorphicLayoutEffect";
import useScreenSize from "@/src/hooks/useScreenSize";

const { 
  UPDATE_BIO_BACKGROUND_COLOR, 
  UPDATE_TEXT_COLOR, 
  UPDATE_SITE_BACKGROUND_COLOR 
} = ColorActions;

export interface Slides {
  slides: TypeSlideFields[]
}

const Slides = (props: Slides) => {
  const { state, dispatch } = useContext(GlobalContext);
  const [winWidth] = useScreenSize();
  const [activeSlide, setActiveSlide] = useState(0);
  const { slides } = props;
  
  const canvasRef = useRef() as MutableRefObject<HTMLCanvasElement>;

  useIsomorphicLayoutEffect(() => {
    const canvasDom = canvasRef.current;

    if (typeof canvasDom !== 'undefined') {

      //@ts-ignore
      const ctx = canvasDom.getContext('2d');
      const draw = (objectW: number, objectH: number) => {
        const strokeWidth = 2;

        //@ts-ignore: not possible since this will be using useLayoutEffect
        let gradient = ctx.createLinearGradient(0, 0, 200, 600);

        gradient.addColorStop(0, '#6CF194');
        gradient.addColorStop(1, '#94C0A0');

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

      let canvasBounds = canvasDom.getBoundingClientRect();
      let oldCanvasObjectW = 0;
      let newCanvasObjectW = canvasBounds.width;
      let canvasObjectH = canvasBounds.height;

      canvasDom.width = newCanvasObjectW;
      canvasDom.height = canvasObjectH;
      draw(newCanvasObjectW, canvasObjectH);

      if (oldCanvasObjectW !== newCanvasObjectW) {
        oldCanvasObjectW = newCanvasObjectW;
        canvasDom.width = newCanvasObjectW;
        canvasDom.height = canvasObjectH;
        draw(newCanvasObjectW, canvasObjectH);
      }

    }
  }, [canvasRef, winWidth]);

  useEffect(() => {
    if (typeof dispatch !== 'undefined') {
      dispatch({ type: UPDATE_BIO_BACKGROUND_COLOR, payload: slides[activeSlide].colorSchemeBioBG })
      dispatch({ type: UPDATE_TEXT_COLOR, payload: slides[activeSlide].colorSchemeBioText })
      dispatch({ type: UPDATE_SITE_BACKGROUND_COLOR, payload: slides[activeSlide].colorSchemeSeed })
    }
  }, [activeSlide])

  return (
    <>
      {slides.map((slide: TypeSlideFields, index: number) => (
        <StyledSlide key={index} cardColor={slide.colorSchemeSeed}>
          <canvas ref={canvasRef}></canvas>
          <h2>{slide.brand}</h2>
          <RichTextBody body={slide.caseStudyCopy} />
        </StyledSlide>
      ))[activeSlide]}
    </>
  )
}

export default Slides;