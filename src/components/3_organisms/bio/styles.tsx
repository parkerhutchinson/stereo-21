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
  will-change: opacity;
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
  margin: 0 auto 30px;
  @media screen and (min-width: 900px) {
    margin: unset;
    margin-bottom: 60px;
  }
`

export const StyledBioRichText = styled(RichText)`
  h1{
    font-weight: 200;
    margin-bottom: -10px;
    font-size: 42px;
    position: relative;
    font-family: 'Bebas Neue', sans-serif;
    letter-spacing: 1px;
    text-align: center;
    @media screen and (min-width: 900px) {
      text-align: left;
      font-size: 48px;
    }
    @media screen and (min-width: 1800px) {
      font-size: 80px;
    }
  }
  h2{
    margin-bottom: 40px;
    font-size: 20px;
    text-align: center;
    text-transform: none;
    letter-spacing: -.2px;
    font-weight: 'light';
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
    @media screen and (min-width: 900px) {
      text-align: left;
      margin-bottom: 50px;
    }
  }
  h4{
    font-size: 23px;
    margin-bottom: 20px;
    letter-spacing: 1px;
    font-weight: 300;
    text-transform: uppercase;
  }
  p{
    line-height: 30px;
    letter-spacing: -.2px;
    margin-bottom: 30px;
    color: #d7d7d7;
    font-size: 16px;
    @media screen and (min-width: 1200px) {
      font-size: 22px;
      line-height: 36px;
      margin-bottom: 50px;
    }
  }
`

export const StyledCTAGroup = styled.div`
  padding-top: 70px;
  max-width: 400px;
  display: flex;
  justify-content: space-between;
`;