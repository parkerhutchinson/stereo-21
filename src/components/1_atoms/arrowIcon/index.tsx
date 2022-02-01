import { StyledIconArrow } from "./styles";
import IconArrowN from "@/public/arrow-n.svg";
import IconArrowNE from "@/public/arrow-ne.svg";
import IconArrowE from "@/public/arrow-e.svg";
import IconArrowSE from "@/public/arrow-se.svg";
import IconArrowW from "@/public/arrow-w.svg";


interface Props {
  color?: string
  direction: "n" | "ne" | "e" | "se" | "w"
}

const Arrow = {
  n: <IconArrowN />,
  ne: <IconArrowNE />,
  e: <IconArrowE />,
  se: <IconArrowSE />,
  w: <IconArrowW />
}

const ArrowIcon = (props: Props) => {
  return (
    <StyledIconArrow color={props.color} direction={props.direction}>
      {Arrow[props.direction]}
    </StyledIconArrow>
  )
}

export default ArrowIcon;