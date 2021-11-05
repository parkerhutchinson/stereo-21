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

export const StyledLogoGroup = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;

  svg{
    position: absolute;
    &:first-child{
      top: 0;
      right: 0;
      transform: rotate(180deg);
      animation: ${verticalTicker} 60s linear infinite;
    }
    &:last-child{
      bottom: 0%;
      left: 0;
      animation: ${verticalTickerInverse} 60s linear infinite;
    }
  }
`;

