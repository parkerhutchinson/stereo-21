import styled from 'styled-components';

export const StyledButton = styled.a`
  display: flex;
  position:relative;
  background: rgba(255, 0, 0, .18);
  border: 1px solid red;
  border-radius: 5px;
  width: 120px;
  height: 120px;
  backdrop-filter: blur(5px);
  cursor: pointer;
  justify-content: space-around;
  align-items: center;
  svg * {
    stroke: white;
  }
  & > button{
    position: absolute;
    bottom: -15px;
    right: -15px;
    &:hover{
      background: rgba(255, 0, 0, 1);
    }
  }
`;