import styled from 'styled-components';

interface IMobileMenu {
  color: string
  opened: boolean
}

export const MobileMenu = styled.nav<IMobileMenu>`
  background: transparent;
  width: 400px;
  height: 400px;
  
  position: fixed;
  bottom: -200px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 99;
  &:before{
    content: '';
    display: block;
    background: black;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    border-radius: 100000px;
    transform: ${(p) => p.opened ? 'translateX(-50%) translateY(-50%) scale(1)' : 'translateX(-50%) translateY(-50%) scale(0)'};
    transition: border 1s, transform .6s var(--animation-curve);
    transition-delay: 0s, .3s;
  }
  &:after{
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 70%;
    height: 70%;
    border: ${(p) => `1px solid ${p.color}`};
    border-radius: 100000px;
    transform: ${(p) => p.opened ? 'translateX(-50%) translateY(-50%) scale(1)' : 'translateX(-50%) translateY(-50%) scale(0)'};
    transition: border 1s, transform .6s var(--animation-curve);
    transition-delay: 0s, .3s;
  }
`

interface IStyledMobileNav {
  opened: boolean
}

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