import styled from 'styled-components';

interface IStyledThreeBackground {
  panelopen: string
  style: any
}

export const StyledThreeBackground = styled.div<IStyledThreeBackground>`
  position: fixed;
  top: 0;
  right: ${(p) => p.panelopen === 'true' ? '0%' : '-100%'};
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
  /* transition: right 1s var(--animation-curve); */
  @media screen and (min-width: 1024px) {
    right: 0;
  }
`;