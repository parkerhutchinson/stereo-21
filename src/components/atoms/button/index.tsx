import {ReactNode} from "react";
import {StyledButton} from "./styles";
interface Props {
  name?: string
  borderStyle: "begin"|"end"|"symetrical"
  color: string
  children?: ReactNode
}

const Button = (props:Props) => {
  return (
    <StyledButton cornerType={props.borderStyle} color={props.color}>
      {props.children}
    </StyledButton>
  );
}

export default Button;