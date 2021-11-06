import {StyledIconArrow, StyledIconArrowArms} from "./styles";

interface Props {
  color?: string
}

const ArrowIcon = (props:Props) => {
  return (
    <StyledIconArrow color={props.color}>
      <StyledIconArrowArms color={props.color}/>
    </StyledIconArrow>
  )
}

export default ArrowIcon;