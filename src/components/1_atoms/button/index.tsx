import {ReactNode} from "react";
import {StyledButton} from "./styles";
interface Props {
  name?: string
  borderStyle: "begin"|"end"|"symetrical"
  color: string
  children?: ReactNode
  label: string
  onClick?: () => void
}


const Button = (props:Props) => {
  return (
    <StyledButton 
      cornerType={props.borderStyle} 
      color={props.color} 
      onClick={() => typeof props.onClick !== 'undefined' && props.onClick()}
      aria-label={props.label}
    >
      {props.children}
    </StyledButton>
  );
}

export default Button;