import styled from "styled-components";

interface IStyledIconArrow {
  color?: string
  direction: "n" | "ne" | "e" | "se" | "w"
}


export const StyledIconArrow = styled.span<IStyledIconArrow>`
  transform-origin: center;
  display: block;
  svg *{
    stroke: ${(p) => p.color};
    transition: stroke .4s;
  }
`;