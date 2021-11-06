import {StyledButton} from "./styles";
interface Props {
  name?: string
  borderStyle: "begin"|"end"|"symetrical"
  color: string
}

const Button = (props:Props) => {
  return (
    <StyledButton cornerType={props.borderStyle} color={props.color}>
      {props.name}
    </StyledButton>
  );
}

export default Button;