import styled from 'styled-components';

interface IStyledThreeBackground {
  panelopen: string
  style: any
}

export const StyledThreeBackground = styled.div<IStyledThreeBackground>`
  position: fixed;
  top: ${(p) => p.panelopen === 'true' ? '0vh' : '100vh'};
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
  will-change: top;
  transition: top 1s var(--animation-curve);
  pointer-events: none;
  @media screen and (min-width: 1024px) {
    right: 0;
    top: 0;
  }
`;