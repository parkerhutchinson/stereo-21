import { useTransition, animated } from 'react-spring';
import {
  StyledCardWrap,
} from "./styles";
import NavigationSlides from "@/src/components/2_molecules/navSlides";


interface Props {
  brand: string
  brandTitleColor: string
  logo: string
  iconColor: string
  buttonColor: string
  style: any
  navCallback: (action: string) => void
}

const SlideCard = (props: Props) => {
  const { brand, iconColor, buttonColor, logo, navCallback, style, brandTitleColor } = props;



  const handleButtonCLick = (action: string) => {
    navCallback(action);
  }

  return (
    <StyledCardWrap as={animated.div} style={style}>


      <NavigationSlides
        brandName={brand}
        brandNameColor={brandTitleColor}
        brandLogo={logo}
        buttonColor={buttonColor}
        iconColor={iconColor}
        navCallback={(e) => handleButtonCLick(e)}
        toggleNavAnimation={true}
        isHeaderNav={false}
      />
    </StyledCardWrap>
  );
}

export default SlideCard;