import styled from "styled-components";

interface IStyledBioTab {
  textColor: string
  backgroundColor: string
}

export const StyledBioTab = styled.article<IStyledBioTab>`
  width: 100%;
  background: ${(p) => p.backgroundColor};
  position: relative;
  svg{
    display: block;
    width: 50%;
    height: auto;
    * {
      stroke: ${(p) => p.textColor};
    }
  }
`;