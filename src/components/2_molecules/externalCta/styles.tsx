import styled from 'styled-components';


interface IStyledButton {
  highlight: string
  bioBg: string
}
export const StyledButton = styled.a<IStyledButton>`
  display: flex;
  position:relative;
  background: ${(p) => p.bioBg};
  border: 1px solid ${(p) => p.highlight};
  border-radius: 5px;
  width: 90px;
  height: 90px;
  backdrop-filter: blur(5px);
  cursor: pointer;
  justify-content: space-around;
  align-items: center;
  @media screen and (min-width: 1024px) {
    transition: all .4s cubic-bezier(1,0,.25,1);
    &:hover{
      button{
        transform: scale(1.2);
        opacity: 1;
      }
    }
  }
  
  svg {
    width: 70%;
    height: auto;
    display: block;
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
    opacity: 0;
    svg * {
      stroke: black;
    }
    &:hover{
      background: ${(p) => p.highlight};
      transform: scale(1.2);
    }
  }
`;