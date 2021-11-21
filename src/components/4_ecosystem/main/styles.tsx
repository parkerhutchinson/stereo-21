import styled from 'styled-components';


interface IStyledBackground {
  color: string
}

export const StyledBackground = styled.div<IStyledBackground>`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: ${(p) => p.color};
  transition: background 1s;
`;


interface IStyledThreeBg {
  open: boolean
}

export const StyledThreeBGCurtain = styled.div<IStyledThreeBg>`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  transition: clip-path 1s var(--animation-curve);  
  pointer-events: none;
  @media screen and (min-width: 1024px) {
    width: 100%;
    /* clip-path: ${(p) => !p.open ? 'polygon(100% 0%, 100% 100%, 26.5% 100%, 26.5% 0%)' : 'polygon(100% 0%, 100% 100%, 0% 100%, 0% 0%)'}; */
  }
`