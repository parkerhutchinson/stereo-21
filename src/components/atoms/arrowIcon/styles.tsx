import styled from "styled-components";

interface IStyledIconArrow {
  color?: string
}

export const StyledIconArrow = styled.span<IStyledIconArrow>`
  position: relative;
  display: block;
  width: 20px;
  height: 20px;
  &:before{
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
`

export const StyledIconArrowArms = styled.span<IStyledIconArrow>`
  position: relative;
  display: block;
  width: 20px;
  height: 20px;
  &:before,&:after{
    content: "";
    display: block;
    position: absolute;
    background: ${(p) => p.color ? p.color : 'black'};
    height: 1px;
    border-radius: 1px;
    transform-origin: center right;
    top: 50%;
    width: 70%;
    right: 0;
  }
  &:after{
    transform: rotate(-45deg);
  }
  &:before{
    transform: rotate(45deg);
  }
`;