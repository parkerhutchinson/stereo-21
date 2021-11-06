import Button from "@/src/components/atoms/button";
import ArrowIcon from "@/src/components/atoms/arrowIcon";
import {StyledNav} from "./styles";

interface Props {
  buttonColor: string
  iconColor: string
}

const SlidesNavigation = (props:Props) => {
  const {buttonColor, iconColor} = props;
  return (
    <StyledNav>
      <div>
        <Button borderStyle="begin" color={buttonColor}>
          <ArrowIcon direction="w" color={iconColor}/>
        </Button>
        <Button borderStyle="end" color={buttonColor}>
          <ArrowIcon direction="e" color={iconColor} />
        </Button>
      </div>

      <Button borderStyle="symetrical" color={buttonColor}>
        <ArrowIcon direction="se" color={iconColor} />
      </Button>
    </StyledNav>
  );
}

export default SlidesNavigation;