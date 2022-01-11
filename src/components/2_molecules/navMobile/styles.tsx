import styled from 'styled-components';
import { BooleanLiteral } from 'typescript';

interface IMobileMenu {
  color: string
  background: string
  opened: boolean
  caseStudyOpened: Boolean;
}

export const MobileMenu = styled.nav<IMobileMenu>`
  background: transparent;
  width: 450px;
  height: 450px;
  position: fixed;
  bottom: ${(p) => p.caseStudyOpened ? '-370px': '-250px'};
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
    background: rgba(0 0 0 / 100%);
    backdrop-filter: blur(20px);
    width: 100%;
    height: 100%;
    border-radius: 100000px;
    transform: ${(p) => p.opened ? 'translateX(-50%) translateY(-50%) scale(1)' : 'translateX(-50%) translateY(-50%) scale(0)'};
    transition: transform .6s var(--animation-curve);
    transition-delay: .3s;
  }
  &:after{
    width: 80%;
    height: 80%;
    border: ${(p) => `1px solid ${p.color}`};
    border-radius: 100000px;
    transform: ${(p) => p.opened ? 'translateX(-50%) translateY(-50%) scale(1)' : 'translateX(-50%) translateY(-50%) scale(0)'};
    transition: border 1s, transform .6s var(--animation-curve);
    transition-delay: 0s, .3s;
  }
  @media screen and (min-width: 1024px) {
    display: none;
    pointer-events: none;
  }
`;

interface IStyledMobileNav {
  opened: boolean
  color: string
}

export const StyledMobileNavIconBg = styled.div<IStyledMobileNav>`
  display: block;
  height: 70px;
  width: 70px;
  border-radius: 100000px;
  position: absolute;
  z-index: 100;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: ${(p) => p.opened ? '0 0 10px 0px rgb(0 0 0)' : '0 0 0px rgb(0 0 0)'};
  background: black;
  transition: box-shadow .4s;
  &:before{
    content: '';
    display: block;
    top: 50%;
    left: 50%;
    width: 80%;
    height: 80%;
    transform: ${(p) => p.opened ? 'translateX(-50%) translateY(-50%) scale(0)' : 'translateX(-50%) translateY(-50%) scale(1)'};
    position: absolute;
    border-radius: 10000px;
    border: ${(p) => `1px solid ${p.color}`};
    transition: all 1s;
  }
  @media screen and (min-width: 1024px) {
    display: none;
    pointer-events: none;
  }
  svg{
    display: block;
    transform: scale(1);
    width: ${(p) => p.opened ? '20px' : '25px'};
    height: auto;
    position: relative;
    margin-top: 0px;
    transition: width .4s;
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

interface IStyledMobileButtonsWrap {
  opened: boolean
}

export const StyledMobileButtonsWrap = styled.div<IStyledMobileButtonsWrap>`
  position: absolute;
  width: ${(p) => p.opened ? '87%' : '70%'};
  opacity: ${(p) => p.opened ? '1' : '0'};
  left: 50%;
  top: 80px;
  height: 100px; 
  z-index: 99;
  display: flex;
  justify-content: space-between;
  transform: translateX(-50%);
  transition: all .6s;
`;

export const StyledMobileArrowButtonWrap = styled.div`
  background: radial-gradient(circle at center, rgb(0 0 0 / 100%) 20%, rgb(0 0 0 / 0%) 70%, rgb(0 0 0 / 0%));
  border-radius: 100000px;
  padding: 25px;
`;

interface IStyledMobileArrowButtons {
  buttonColor: string
  buttonBorderColor: string
}

export const StyledMobileArrowButtons = styled.button<IStyledMobileArrowButtons>`
  background: ${(p) => p.buttonColor};
  border: ${(p) => `1px solid ${p.buttonBorderColor}`};
  border-radius: 11px;
  height: 47px;
  width: 47px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  transition: background .4s;
`;

export const StyledActiveBrand = styled.h2`
  font-family: 'Bebas Neue', sans-serif;
  font-size: 50px;
  color: white;
  position: absolute;
  top: 20px;
  left: 50%;
  font-weight: 300;
  transform: translateX(-50%);
`