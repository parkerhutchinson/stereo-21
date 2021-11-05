import styled from "styled-components";

interface IStyledBioTab {
  textColor: string
  backgroundColor: string
}

export const StyledBioTab = styled.article<IStyledBioTab>`
  width: 50%;
  height: 100vh;
  background: ${(p) => p.backgroundColor};
  position: fixed;
  transition: all .4s;
  color: white;
  svg{
    display: block;
    width: 50%;
    height: auto;
    * {
      transition: all .4s;
      stroke: ${(p) => p.textColor};
    }
  }
`;

export const StyledCopyWrapper = styled.div`
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