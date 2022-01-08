import styled from 'styled-components';

export const StyledMobileNav = styled.nav`
  background: black;
  display: block;
  height: 50px;
  width: 100%;
  position: fixed;
  z-index: 100;
  bottom: 0;
  left: 0;
  outline: 2px dashed red;
  padding: 10px;
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export const StyledMobileWorkButton = styled.button`
  position: absolute;
  top: 0;
  right: 50%;
  display: flex;
  width: 50px;
  height: 50px;
  margin-right: -25px;
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