import styled from "styled-components";

export const StyledLogoGroup = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;

  svg{
    position: absolute;
    &:first-child{
      top: 0;
      right: 0;
    }
    &:last-child{
      bottom: 0;
      left: 0;
    }
  }
`;