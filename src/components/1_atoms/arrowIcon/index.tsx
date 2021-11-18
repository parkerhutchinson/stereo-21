import {StyledIconArrow} from "./styles";

interface Props {
  color?: string
  direction: "w" | "e" | "se"
}

const ArrowIcon = (props:Props) => {
  return (
    <StyledIconArrow color={props.color} direction={props.direction}>
      <span><span></span></span>
    </StyledIconArrow>
  )
}

export default ArrowIcon;