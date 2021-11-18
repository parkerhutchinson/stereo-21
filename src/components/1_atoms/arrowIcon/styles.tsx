import styled from "styled-components";

interface IStyledIconArrow {
  color?: string
  direction: "ne"|"e"|"se"|"w"
}

const directionMap = {
  ne: -45,
  e: 0,
  se: 45,
  w: -180  
}

export const StyledIconArrow = styled.span<IStyledIconArrow>`
  transform-origin: center;
  display: block;
  transform: ${(p) => `rotate(${directionMap[p.direction]}deg)`};
  span{
    position: relative;
    display: block;
    width: 15px;
    height: 12px;
    &:before,&:after{
      content: "";
      display: block;
      position: absolute;
      background: ${(p) => p.color};
      height: 1px;
      border-radius: 1px;
      transform-origin: center right;
      top: 50%;
      width: 100%;
      right: 0;
      transition: background 1s;
    }
    &:after{display: none;}
    span{
      &:after{
        width: 60%;
        display: block;
        transform: rotate(-45deg);
      }
      &:before{
        width: 60%;
        transform: rotate(45deg);
      }
    }
  }
`