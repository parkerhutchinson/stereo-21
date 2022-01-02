import styled from "styled-components";
import hexRgb from 'hex-rgb';
import RichText from "../../2_molecules/richText";



const getRGBABackground = (color: string) => {
  const { red, green, blue } = hexRgb(color);
  return `${red}, ${green}, ${blue}`
}

interface IStyledBioTab {
  caseStudyOpen: boolean
}

export const StyledBioTab = styled.article<IStyledBioTab>`
  width: 100%;
  color: white;
  z-index: 1;
  position: ${(p) => p.caseStudyOpen ? 'fixed' : 'relative'};
  overflow: hidden;
  @media screen and (min-width: 1024px) {
    width: 45%;
  }
`;

interface IStyledCopyWrapper {
  caseStudyOpen: boolean
  backgroundColor: string
  subHeadingColor: string
}

export const StyledCopyWrapper = styled.div<IStyledCopyWrapper>`
  max-width: 90%;
  margin: 0 auto;
  padding: 80px 0;
  position: relative;
  z-index: 2;
  opacity: ${(p) => p.caseStudyOpen ? '0' : '1'};
  transition: all 1s;
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

  h2{
    transition: all 1s;
    color: ${(p) => p.subHeadingColor};
  }
`;

export const StyledEyeBrow = styled.span`
  width: 50px;
  height: 4px;
  position: relative;
  display: block;
  margin-bottom: 60px;
`

export const StyledBioRichText = styled(RichText)`
  h1{
    font-weight: 200;
    margin-bottom: 15px;
    font-size: 48px;
    position: relative;
    font-family: 'Bebas Neue', sans-serif;
    letter-spacing: 1px;
    @media screen and (min-width: 1800px) {
      font-size: 62px;
    }
  }
  h2{
    margin-bottom: 80px;
    font-size: 22px;
    text-align: left;
    text-transform: none;
    letter-spacing: -.2px;
    font-weight: 'light';
    font-family: 'Roboto', sans-serif;
  }
  p{
    line-height: 38px;
    letter-spacing: -.16px;
    margin-bottom: 50px;
    font-size: 19px;
    color: #d7d7d7;
  }
`

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