import styled, { keyframes } from "styled-components";


const verticalTicker = keyframes`
  0% {
    top: 0%;
  }
  50%{
    top: -50%;
  }
  100%{
    top: 0%
  }
`;

const verticalTickerInverse = keyframes`
  0% {
    bottom: 0%;
  }
  50%{
    bottom: -50%;
  }
  100%{
    bottom: 0%
  }
`;

interface IStyledLogo {
  textColor: string
  backgroundColor: string
}

export const StyledLogoGroup = styled.div<IStyledLogo>`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
  opacity: 1;
  padding-right: 30px;
  /* background: ${(p) => p.backgroundColor}; */
  transition: all 1s;
  @media screen and (min-width: 1024px) {
    width: 45%;
  }
  svg{
    display: block;
    width: 50%;
    height: auto;
    position: absolute;
    z-index: 1;
    opacity: 1;
    path {
      stroke: ${(p) => p.textColor};
      transition: all 1s;
      /* filter: contrast(1) saturate(1); */
    }
    &:first-child{
      top: 0;
      right: 0;
      will-change: top;
      transform: rotate(0deg);
      animation: ${verticalTicker} 60s linear infinite;
    }
    &:last-child{
      bottom: 0%;
      left: 0;
      will-change: bottom;
      transform: rotate(-180deg);
      animation: ${verticalTickerInverse} 60s linear infinite;
    }
    * {
      transition: all 1s;
    }
  }
`;

