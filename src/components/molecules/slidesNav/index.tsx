import Button from "@/src/components/atoms/button";
import ArrowIcon from "@/src/components/atoms/arrowIcon";
import {StyledNav} from "./styles";

interface Props {
  buttonColor: string
  iconColor: string
  navCallback: (action:string) => void
}

const SlidesNavigation = (props:Props) => {
  const {buttonColor, iconColor, navCallback} = props;
  return (
    <StyledNav>
      <div>
        <Button 
          borderStyle="begin" 
          color={buttonColor} 
          onClick={() => navCallback('prev')}
        >
          <ArrowIcon direction="w" color={iconColor}/>
        </Button>
        <Button 
          borderStyle="end" 
          color={buttonColor}
          onClick={() => navCallback('next')}
        >
          <ArrowIcon direction="e" color={iconColor} />
        </Button>
      </div>

      <Button 
        borderStyle="symetrical" 
        color={buttonColor} 
        onClick={() => navCallback('open')}
      >
        <ArrowIcon direction="se" color={iconColor} />
      </Button>
    </StyledNav>
  );
}

export default SlidesNavigation;