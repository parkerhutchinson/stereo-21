import useScreenSize from "../hooks/useScreenSize";
import styled from "styled-components";


const UIDebugger = () => {
  const [winWidth] = useScreenSize();
  return (
    <>
    {(process.env.NODE_ENV !== 'production') && 
    <StyledUIDebugger>
      {winWidth}
    </StyledUIDebugger>}
    </>
  )
}

const StyledUIDebugger = styled.div`
  position: fixed;
  top:0;
  left:0;
  background: red;
  color: white;
  z-index: 999;
`;



export default UIDebugger;