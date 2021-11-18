import styled, {css} from "styled-components";
import hexRgb from 'hex-rgb';
const RADIUS = 5;

const buttonCorners = (type: "begin" | "end" | "symetrical") => {
  let finalStyles;
  switch(type) {
    case 'begin':
      finalStyles = css`
        border-top-left-radius: ${RADIUS}px;
        border-bottom-left-radius: ${RADIUS}px;
        border-right: none;
      `;
      break;
    case 'end':
      finalStyles = css`
        border-left: none;
        border-top-right-radius: ${RADIUS}px;
        border-bottom-right-radius: ${RADIUS}px;
      `;
      break;
    case 'symetrical':
      finalStyles = css`
        border-radius: ${RADIUS}px;
      `;
      break;
    default:
      finalStyles = css`
        border-radius: ${RADIUS}px;
      `;
      break;
  }
  return finalStyles;
}

interface StyledProps {
  color: string
  cornerType: "begin" | "end" | "symetrical"
  fill?: boolean
}



export const StyledButton = styled.button<StyledProps>`
  padding: 15px 13px;
  /* border: 1px solid ${(p) => p.color}; */
  ${(p) => buttonCorners(p.cornerType)};
  background: ${(p) => `rgba(${hexRgb(p.color).red},${hexRgb(p.color).green},${hexRgb(p.color).blue}, 0)`};
  transition: all 1s;
  cursor: pointer;
  position: relative;
  &:hover{
    background: ${(p) => `rgba(${hexRgb(p.color).red},${hexRgb(p.color).green},${hexRgb(p.color).blue}, .5)`};
  }
`;