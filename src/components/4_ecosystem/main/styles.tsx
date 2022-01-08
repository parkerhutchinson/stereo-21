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
  /* background: ${(p) => p.color}; */
  background: black;
  pointer-events: none;
`;