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

export const StyledMobileWorkButton = styled.button`
  position: absolute;
  top: 30px;
  right: 30px;
  display: flex;
  width: 50px;
  height: 50px;
  background: none;
  cursor: pointer;
  justify-content: space-around;
  align-items: center;
  transition: all .4s cubic-bezier(1,0,.25,1);
  z-index: 10;
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;