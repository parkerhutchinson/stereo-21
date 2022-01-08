import styled from 'styled-components';
import { BooleanLiteral } from 'typescript';

interface IMobileMenu {
  color: string
  opened: boolean
  caseStudyOpened: Boolean;
}

export const MobileMenu = styled.nav<IMobileMenu>`
  background: transparent;
  width: 400px;
  height: 400px;
  position: fixed;
  bottom: ${(p) => p.caseStudyOpened ? '-300px': '-200px'};
  left: 50%;
  transform: translateX(-50%);
  z-index: 99;
  transition: bottom .4s var(--animation-curve);
  &:before, &:after{
    content: '';
    display: block;
    top: 50%;
    left: 50%;
    position: absolute;
  }
  &:before{
    background: black;
    width: 100%;
    height: 100%;
    border-radius: 100000px;
    transform: ${(p) => p.opened ? 'translateX(-50%) translateY(-50%) scale(1)' : 'translateX(-50%) translateY(-50%) scale(0)'};
    transition: transform .6s var(--animation-curve);
    transition-delay: .3s;
  }
  &:after{
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
  &:before, &:after{
    content: '';
    display: block;
    top: 50%;
    left: 50%;
    position: absolute;
  }
  &:before{
    background: black;
    width: 100%;
    height: 100%;
    border-radius: 100000px;
    transform: ${(p) => p.opened ? 'translateX(-50%) translateY(-50%) scale(0)' : 'translateX(-50%) translateY(-50%) scale(1)'};
    transition: transform .6s var(--animation-curve);
    transition-delay: .3s;
  }
  &:after{
    background: radial-gradient(circle at center, rgb(0 0 0 / 100%) 10%, rgb(0 0 0 / 0%) 70%, rgb(0 0 0 / 0%));
    width: 100%;
    height: 100%;
    border-radius: 100000px;
    transform: ${(p) => p.opened ? 'translateX(-50%) translateY(-50%) scale(1)' : 'translateX(-50%) translateY(-50%) scale(0)'};
    transition: transform .6s var(--animation-curve);
    transition-delay: .3s;
  }
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

interface IStyledMobileArrowButtons {
  buttonColor: string
  buttonBorderColor: string
}

export const StyledMobileArrowButtons = styled.button<IStyledMobileArrowButtons>`
  background: ${(p) => p.buttonColor};
  border: ${(p) => `1px solid ${p.buttonBorderColor}`};
  border-radius: 15px;
`