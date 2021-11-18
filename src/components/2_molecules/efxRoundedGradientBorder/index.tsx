import {useRef, MutableRefObject} from 'react';
import useIsomorphicLayoutEffect from '@/src/hooks/useIsomorphicLayoutEffect';
import { drawRectBorder } from '@/src/lib/drawing';
import useScreenSize from '@/src/hooks/useScreenSize';
import {StyledCanvas} from './styles';

interface Props {
  colorStopTop: string
  colorStopBottom: string
}

const EFXRoundedGradientBorder = (props:Props) => {
  const {colorStopTop, colorStopBottom} = props;
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

        gradient.addColorStop(0, colorStopTop);
        gradient.addColorStop(1, colorStopBottom);

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
  }, [canvasRef, winWidth, colorStopTop, colorStopBottom]);

  return (
    <StyledCanvas ref={canvasRef}></StyledCanvas>
  )
}


export default EFXRoundedGradientBorder;