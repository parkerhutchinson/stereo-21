import styled, {css} from "styled-components";


const buttonCorners = (type: "begin" | "end" | "symetrical") => {
  let finalStyles;
  switch(type) {
    case 'begin':
      finalStyles = css`
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
      `;
      break;
    case 'end':
      finalStyles = css`
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
      `;
      break;
    case 'symetrical':
      finalStyles = css`
        border-radius: 10px;
      `;
      break;
    default:
      finalStyles = css`
        border-radius: 10px;
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
  ${(p) => buttonCorners(p.cornerType)}
  padding: 20px;
  border: 1px solid ${(p) => p.color};
  background: ${(p) => p.color};
  transition: all 1s;
`;