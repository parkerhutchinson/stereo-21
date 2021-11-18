import styled from 'styled-components';


interface IStyledBackground {
  color: string
}

export const StyledBackground = styled.div<IStyledBackground>`
  position: relative;
  width: 100%;
  height: 100%;
  background: ${(p) => p.color};
  transition: background 1s;
`;