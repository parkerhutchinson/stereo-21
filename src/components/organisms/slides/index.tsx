import { MutableRefObject, useContext, useEffect, useRef } from "react";

import { TypeSlideFields } from "@/src/types/generated/TypeSlide";
import RichTextBody from "@/src/components/molecules/richTextBody";
import { ColorActions, GlobalContext } from "@/src/context/global";
import { StyledSlide } from "./styles";
import { drawRectBorder } from "@/src/lib/drawing";
import useIsomorphicLayoutEffect from "@/src/hooks/useIsomorphicLayoutEffect";

export interface Slides {
  slides: TypeSlideFields[]
}

const Slides = (props: Slides) => {
  const { state, dispatch } = useContext(GlobalContext);
  const { UPDATE_BIO_BACKGROUND_COLOR } = ColorActions;
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

        gradient.addColorStop(0, '#F73737');
        gradient.addColorStop(1, '#FBC1C1');

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

      window.addEventListener('resize', () => {
        canvasBounds = canvasDom.getBoundingClientRect();
        newCanvasObjectW = canvasBounds.width;
        canvasObjectH = canvasBounds.height;

        // perf: only run this if value has changed 
        if (oldCanvasObjectW !== newCanvasObjectW) {
          oldCanvasObjectW = newCanvasObjectW;
          canvasDom.width = newCanvasObjectW;
          canvasDom.height = canvasObjectH;
          draw(newCanvasObjectW, canvasObjectH);
        }
      });
    }
  }, [canvasRef]);

  useEffect(() => {
    if (typeof dispatch !== 'undefined') {
      dispatch({ type: UPDATE_BIO_BACKGROUND_COLOR, payload: '#071618' })
    }
  }, [])

  const { slides } = props;
  return (
    <>
      {slides.map((slide: TypeSlideFields, index: number) => (
        <StyledSlide key={index} cardColor={slide.colorSchemeSeed}>
          <canvas ref={canvasRef}></canvas>
          <h2>{slide.brand}</h2>
          <RichTextBody body={slide.caseStudyCopy} />
        </StyledSlide>
      )).filter((_: any, index: number) => index === 0)[0]}
    </>
  )
}

export default Slides;