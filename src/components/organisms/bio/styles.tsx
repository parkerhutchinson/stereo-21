import styled from "styled-components";

interface IStyledBioTab {
  textColor: string
  backgroundColor: string
}

export const StyledBioTab = styled.article<IStyledBioTab>`
  width: 45%;
  height: 100vh;
  background: ${(p) => p.backgroundColor};
  position: fixed;
  transition: all 1s;
  color: white;
  svg{
    display: block;
    width: 50%;
    height: auto;
    position: relative;
    z-index: 1;
    * {
      transition: all 1s;
      stroke: ${(p) => p.textColor};
    }
  }
`;

export const StyledCopyWrapper = styled.div`
  max-width: 70%;
  margin: 0 auto;
  padding-top: 100px;
  position: relative;
  z-index: 2;
  h2{
    font-weight: 200;
    margin-bottom: 40px;
    font-size: 36px;
  }
  p{
    line-height: 38px;
    letter-spacing: -.16;
    margin-bottom: 50px;
    font-size: 19px;
    color: #DADADA;
  }
`