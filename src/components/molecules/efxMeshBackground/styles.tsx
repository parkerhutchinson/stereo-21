import styled from 'styled-components';

export const StyledThreeBackground = styled.div<any>`
  position: absolute;
  top: 0;
  right: -100%;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden; 
  @media screen and (min-width: 1024px) {
    right: 0;
  }
`;