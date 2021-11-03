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
  svg{
    display: block;
    width: 50%;
    height: auto;
    * {
      stroke: ${(p) => p.textColor};
    }
  }
`;