import Button from "@/src/components/atoms/button";
import ArrowIcon from "@/src/components/atoms/arrowIcon";
import { StyledButton } from "./styles";



const ExternalCTA = () => {
  return (
    <StyledButton>
      <Button borderStyle="symetrical" color="#ff0000">
        <ArrowIcon color="#ffffff" direction="se" />
      </Button>
    </StyledButton>
  )
}

export default ExternalCTA;