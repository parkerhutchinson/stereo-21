import {useTransition, animated} from 'react-spring';
import { 
  StyledLogo, 
  StyledCardWrap,
  StyledPill,
} from "./styles";
import SlidesNavigation from "@/src/components/2_molecules/slidesNav";


interface Props {
  brand: string
  brandTitleColor: string
  logo: string
  iconColor: string
  buttonColor: string
  style: any
  navCallback: (action:string) => void
}

const SlideCard = (props:Props) => {
  const {brand, iconColor, buttonColor, logo, navCallback, style, brandTitleColor} = props;

  const transitionSlide = useTransition(logo, {
    native: true,
    from: { opacity: 0, transform: 'rotate(20deg)', filter: 'blur(20px)' },
    enter: { opacity: 1, transform: 'rotate(0deg)', filter: 'blur(0px)' },
    leave: { opacity: 0, filter: 'blur(20px)' },
    duration: 1000,
    key: logo
  });

  const handleButtonCLick = (action:string) => {
    navCallback(action);
  }

  return (
    <StyledCardWrap as={animated.div} style={style}>
      <StyledPill color={iconColor} show={true}/>
      <StyledLogo onClick={() => handleButtonCLick('open')}>
        {transitionSlide(
          (styles, item) => item && 
          <animated.div style={styles}>
            <img src={item} alt={`logo ${brand}`} />
          </animated.div>
        )}
      </StyledLogo>

      <SlidesNavigation 
        brandName={brand}
        brandNameColor={brandTitleColor}
        buttonColor={buttonColor} 
        iconColor={iconColor}
        navCallback={(e) => handleButtonCLick(e)}
        toggleNavAnimation={true}
      />
    </StyledCardWrap>
  );
}

export default SlideCard;