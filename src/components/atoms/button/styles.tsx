import styled, {css} from "styled-components";
const RADIUS = 5;

const buttonCorners = (type: "begin" | "end" | "symetrical") => {
  let finalStyles;
  switch(type) {
    case 'begin':
      finalStyles = css`
        border-top-left-radius: ${RADIUS}px;
        border-bottom-left-radius: ${RADIUS}px;
      `;
      break;
    case 'end':
      finalStyles = css`
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
}

export const StyledButton = styled.button<StyledProps>`
  ${(p) => buttonCorners(p.cornerType)};
  padding: 10px;
  border: 1px solid ${(p) => p.color};
  background: ${(p) => p.color};
  transition: all 1s;
`;