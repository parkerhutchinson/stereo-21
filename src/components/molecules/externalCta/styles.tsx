import styled from 'styled-components';


interface IStyledButton {
  highlight: string
  seed: string
}
export const StyledButton = styled.a<IStyledButton>`
  display: flex;
  position:relative;
  background: ${(p) => p.seed};
  border: 1px solid ${(p) => p.highlight};
  border-radius: 5px;
  width: 100px;
  height: 100px;
  backdrop-filter: blur(5px);
  cursor: pointer;
  justify-content: space-around;
  align-items: center;
  transition: all .4s;
  &:hover{
    button{
      transform: scale(1.2);
    }
  }
  svg * {
    stroke: white;
  }
  & > button{
    position: absolute;
    bottom: -15px;
    right: -15px;
    background: ${(p) => p.highlight};
    border: none;
    transform: scale(1);
    svg * {
      stroke: black;
    }
    &:hover{
      background: ${(p) => p.highlight};
      transform: scale(1.2);
    }
  }
`;