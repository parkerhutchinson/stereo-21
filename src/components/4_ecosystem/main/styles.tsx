import styled from 'styled-components';


export const StyledWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;


interface IStyledThreeBg {
  open: boolean
  color: string
}

export const StyledThreeBG = styled.div<IStyledThreeBg>`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  transition: background 1s;  
  background: #19162F;
  pointer-events: none;
`;

interface IStyledThreeBackgroundFallback {
  panelopen: boolean
  image: string
}

export const StyledThreeBackgroundFallback = styled.div<IStyledThreeBackgroundFallback>`
  position: fixed;
  top: ${(p) => p.panelopen ? '0vh' : '100vh'};
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
  will-change: top;
  transition: top 1s var(--animation-curve);
  pointer-events: none;
  background: ${(p) => `url(${p.image})`} center no-repeat;
  background-size: cover;

  @media screen and (min-width: 1024px) {
    right: 0;
    top: 0;
  }
`;
