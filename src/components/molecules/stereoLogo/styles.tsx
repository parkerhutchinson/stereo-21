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
  backgroundColor:string
}
export const StyledLogoGroup = styled.div<IStyledLogo>`
  position: fixed;
  width: 45%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
  opacity: 1;
  padding-right: 30px;
  background: ${(p) => p.backgroundColor};
  svg{
    display: block;
    width: 50%;
    height: auto;
    position: absolute;
    opacity: .7;
    z-index: 1;
    * {stroke: ${(p) => p.textColor};}
    &:first-child{
      top: 0;
      right: 0;
      transform: rotate(0deg);
      animation: ${verticalTicker} 60s linear infinite;
    }
    &:last-child{
      bottom: 0%;
      left: 0;
      transform: rotate(-180deg);
      animation: ${verticalTickerInverse} 60s linear infinite;
    }
    * {
      transition: all 1s;
    }
  }
`;

