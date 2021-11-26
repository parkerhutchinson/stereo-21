import styled from "styled-components";
import hexRgb from 'hex-rgb';

interface IStyledBioTab {
  backgroundColor: string
  caseStudyOpen: boolean
}

const getRGBABackground = (color:string) => {
  const {red,green,blue} = hexRgb(color);
  return `${red}, ${green}, ${blue}`
} 

export const StyledBioTab = styled.article<IStyledBioTab>`
  width: 100%;
  transition: all 1s var(--animation-curve);
  color: white;
  z-index: 1;
  position: relative;
  &:after{
    content: '';
    display: none;
    position: fixed;
    pointer-events: none;
    top: 0;
    left: 0;
    width: 45%;
    height: 100%;
    display: block;
    z-index: 2;
    background: ${(p) => p.caseStudyOpen ? `rgba(${getRGBABackground(p.backgroundColor)}, .7)` : `rgba(${getRGBABackground(p.backgroundColor)}, 0)`};
    backdrop-filter: ${(p) => p.caseStudyOpen ? 'blur(25px)' : 'blur(0px)'};
    transition: all 1s;
  }
  @media screen and (min-width: 1024px) {
    width: 45%;
  }
`;

export const StyledCopyWrapper = styled.div<Omit<IStyledBioTab, 'caseStudyOpen'>>`
  max-width: 90%;
  margin: 0 auto;
  padding: 80px 0;
  position: relative;
  z-index: 2;
  @media screen and (min-width: 800px) {
    max-width: 70%;
  }
  @media screen and (min-width: 1024px) {
    max-width: 70%;
    padding: 150px 0;
  }
  @media screen and (min-width: 1800px) {
    max-width: 60%;
  }
  @media screen and (min-width: 2200px) {
    max-width: 50%;
  }
  h1{
    font-weight: 200;
    margin-bottom: 15px;
    font-size: 48px;
    position: relative;
    font-family: 'Bebas Neue', sans-serif;
    letter-spacing: 1px;
    &:before{
      content: '';
      width: 50px;
      height: 2px;
      position: relative;
      display: block;
      margin-bottom: 60px;
      background: ${(p) => p.backgroundColor};
      transition: all 1s;
    }
  }
  h2{
    margin-bottom: 80px;
    font-size: 18px;
  }
  p{
    line-height: 38px;
    letter-spacing: -.16;
    margin-bottom: 50px;
    font-size: 19px;
    color: #bbbbbb;
  }
`;

export const StyledCTAGroup = styled.div`
  padding-top: 70px;
  max-width: 400px;
  display: flex;
  justify-content: space-between;
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