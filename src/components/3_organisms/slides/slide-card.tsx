import {useTransition, animated, useChain, useSpringRef} from 'react-spring';
import { 
  StyledLogo, 
  StyledCardWrap,
  StyledBrandTransitionGroup,
} from "./styles";
import SlidesNavigation from "@/src/components/2_molecules/slidesNav";


interface Props {
  brand: string
  logo: string
  iconColor: string
  buttonColor: string
  style: any
  navCallback: (action:string) => void
}

const SlideCard = (props:Props) => {
  const {brand, iconColor, buttonColor, logo, navCallback} = props;
  
  const transitionBrand = useTransition(brand, {
    native: true,
    from: { opacity: 0, transform: 'translate3d(0, -20px, 0)'},
    enter: { opacity: 1, transform: 'translate3d(0, 0px, 0)'},
    leave: { opacity: 0, transform: 'translate3d(0, 20px, 0)'},
    duration: 800,
    key: brand
  });

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
    <StyledCardWrap as={animated.div} style={props.style}>
    
      <StyledBrandTransitionGroup>
        {transitionBrand(
          (styles, item) => item && 
            <animated.h2 style={styles}>{item}</animated.h2>
        )}
      </StyledBrandTransitionGroup>

      <StyledLogo onClick={() => handleButtonCLick('open')}>
        {transitionSlide(
          (styles, item) => item && 
          <animated.div style={styles}>
            <img src={item} alt={`logo ${brand}`} />
          </animated.div>
        )}
      </StyledLogo>

      <SlidesNavigation 
        buttonColor={buttonColor} 
        iconColor={iconColor}
        navCallback={(e) => handleButtonCLick(e)}
        toggleNavAnimation={true}
      />
    </StyledCardWrap>
  );
}

export default SlideCard;