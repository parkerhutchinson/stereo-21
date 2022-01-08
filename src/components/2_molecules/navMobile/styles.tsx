import styled from 'styled-components';

interface IStyledMobileNav {
  opened: boolean
}

export const MobileMenu = styled.nav`
  background: black;
  width: 400px;
  height: 400px;
  border-radius: 100000px;
  position: fixed;
  bottom: -200px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 99;
  &:before{
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 70%;
    height: 70%;
    border: 1px solid green;
    border-radius: 100000px;
    transform: translateX(-50%) translateY(-50%);
  }
`

export const StyledMobileNavIconBg = styled.div<IStyledMobileNav>`
  background: ${(p) => p.opened ? 'radial-gradient(circle at center, rgb(0 0 0 / 100%) 10%, rgb(0 0 0 / 0%) 70%, rgb(0 0 0 / 0%))' : 'radial-gradient(circle at center, rgb(0 0 0 / 100%), rgb(0 0 0 / 100%) 70%, rgb(0 0 0 / 100%))'};
  display: block;
  height: 100px;
  width: 100px;
  border-radius: 100000px;
  position: absolute;
  z-index: 100;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px;
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export const StyledMobileWorkButton = styled.button`
  position: absolute;
  top: 50%;
  right: 50%;
  display: flex;
  width: 50px;
  height: 50px;
  background: none;
  cursor: pointer;
  justify-content: space-around;
  align-items: center;
  transition: all .4s cubic-bezier(1,0,.25,1);
  transform: translateY(-50%) translateX(50%);
  z-index: 10;
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;