import styled from 'styled-components';

export const StyledButton = styled.a`
  display: block;
  position:relative;
  background: rgba(255, 0, 0, .18);
  border: 1px solid red;
  border-radius: 5px;
  width: 200px;
  height: 200px;
  backdrop-filter: blur(5px);
  cursor: pointer;
  & > button{
    position: absolute;
    bottom: -10px;
    right: -10px;
    &:hover{
      background: rgba(255, 0, 0, 1);
    }
  }
`;