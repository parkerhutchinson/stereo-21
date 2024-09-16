import styled from "styled-components";
import hexRgb from 'hex-rgb';
import RichText from "@/src/components/2_molecules/richText";

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
  overflow: scroll;
  mask-image: linear-gradient(to top, rgba(0, 0, 0, 0) 10%,rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 1) 100%);
  height: 100vh;
  padding-bottom: 10%;
  -ms-overflow-style: none;
  scrollbar-width: none;  
  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (min-width: 1024px) {
    width: 50%;
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
    font-size: 6.0rem;
    position: relative;
    font-family: 'Bebas Neue', sans-serif;
    letter-spacing: 1px;
    text-align: center;
    color: #ffffff;
    @media screen and (min-width: 900px) {
      text-align: left;
      font-size: 6.0rem;
    }
    @media screen and (min-width: 1800px) {
      font-size: 8.0rem;
    }
  }
  h2{
    margin-bottom: 40px;
    font-size: 2.3rem;
    text-transform: none;
    letter-spacing: -.2px;
    font-weight: 'light';
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
    color: rgb(0 0 0 / 0);
    position: relative;
    background-image: linear-gradient(45deg, #F1BD6C, #6534A6);
    background-clip: text;
    display: block;
    width: max-content;
    margin: 0 auto;
    @media screen and (min-width: 900px) {
      text-align: left;
      margin: 0;
      margin-bottom: 30px;
    }
  }
  h4{
    font-size: 4.0rem;
    margin-bottom: 20px;
    letter-spacing: 1px;
    font-weight: 300;
    text-transform: uppercase;
    font-family: 'Bebas Neue', sans-serif;
  }
  p{
    line-height: 3.8rem;
    letter-spacing: -.2px;
    margin-bottom: 30px;
    color: #ECECEC;
    font-size: 2.2rem;
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