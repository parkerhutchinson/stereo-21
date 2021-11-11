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
  width: 45%;
  height: 100vh;
  background: ${(p) => p.backgroundColor};
  position: fixed;
  transition: all 1s;
  color: white;
  z-index: 0;
  &:after{
    content: '';
    position: absolute;
    pointer-events: none;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    z-index: 99;
    background: ${(p) => p.caseStudyOpen ? `rgba(${getRGBABackground(p.backgroundColor)}, .7)` : `rgba(${getRGBABackground(p.backgroundColor)}, 0)`};
    backdrop-filter: ${(p) => p.caseStudyOpen ? 'blur(25px)' : 'blur(0px)'};
    transition: all .4s;
  }
`;




export const StyledCopyWrapper = styled.div<Omit<IStyledBioTab, 'caseStudyOpen'>>`
  @media screen and (min-width: 1600px) {
    max-width: 55%;
  }
  max-width: 70%;
  margin: 0 auto;
  padding-top: 250px;
  position: relative;
  z-index: 2;
  h1{
    font-weight: 200;
    margin-bottom: 15px;
    font-size: 36px;
    position: relative;
    &:before{
      content: '';
      width: 50px;
      height: 2px;
      position: relative;
      display: block;
      margin-bottom: 60px;
      background: ${(p) => p.backgroundColor};
    }
  }
  h4{
    margin-bottom: 80px;
    font-size: 18px;
  }
  p{
    line-height: 38px;
    letter-spacing: -.16;
    margin-bottom: 50px;
    font-size: 19px;
    color: #DADADA;
  }
`;

export const StyledCTAGroup = styled.div`
  padding-top: 100px;
  width: 90%;
  display: flex;
  justify-content: space-between;
`;