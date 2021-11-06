import styled from "styled-components";

interface IStyledIconArrow {
  color?: string
  direction: "w"|"e"|"se"
}

const directionMap = {
  w: -180,
  e: 0,
  se: 45
}

export const StyledIconArrow = styled.div<IStyledIconArrow>`
  transform-origin: center;
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
      background: ${(p) => p.color ? p.color : 'black'};
      height: 1px;
      border-radius: 1px;
      transform-origin: center right;
      top: 50%;
      width: 100%;
      right: 0;
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