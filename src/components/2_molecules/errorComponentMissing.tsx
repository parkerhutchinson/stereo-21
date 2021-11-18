import styled from "styled-components";

const StyledError = styled.h1`
  color: red;
  font-weight: bold;
  font-size: 35px;
`

const ErrorComponentMissing = (props:{id: string}) => {
  return <StyledError>Error Component: {props.id} appears to not have a template associated with it</StyledError>
}

export default ErrorComponentMissing;