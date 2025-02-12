import react from 'react';
import Button from "@/src/components/1_atoms/button";
import ArrowIcon from "@/src/components/1_atoms/arrowIcon";
import { StyledNav, StyledBrandTransitionGroup, StyledButtonGroup, StyledLogoSmall } from "./styles";
import { useTransition, animated } from 'react-spring';


interface Props {
  brandName?: string
  brandLogo?: string
  brandNameColor?: string
  buttonColor: string
  iconColor: string
  isHeaderNav?: boolean
  navCallback: (action: string) => void
  toggleNavAnimation: boolean
  style?: any
}

const NavigationSlides = (props: Props) => {
  const { buttonColor, navCallback, toggleNavAnimation, brandName, brandNameColor, brandLogo, isHeaderNav } = props;

  const navigationAnimation = useTransition(toggleNavAnimation, {
    native: true,
    delay: 200,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  });

  const transitionSlide = useTransition(brandLogo, {
    native: true,
    from: { opacity: 0, transform: 'rotate(40deg)' },
    enter: { opacity: 1, transform: 'rotate(0deg)' },
    leave: { opacity: 0 },
    config: { duration: 300 },
    key: brandLogo
  });

  const transitionBrand = useTransition(brandName, {
    native: true,
    from: { opacity: 0, transform: 'translate3d(0, -20px, 0)' },
    enter: { opacity: 1, transform: 'translate3d(0, 0px, 0)' },
    leave: { opacity: 0, transform: 'translate3d(0, 20px, 0)' },
    duration: 800,
    key: brandName
  });

  const handleCallback = (dir: string) => {
    navCallback(dir)
  }

  return (
    <StyledNav as={animated.nav} style={props.style}>
      {navigationAnimation((styles, item) => item &&
        <animated.div style={styles}>
          <StyledButtonGroup>
            <Button
              borderStyle="begin"
              color={buttonColor}
              onClick={() => handleCallback('prev')}
              label="previous slide"
            >
              <ArrowIcon direction="w" color={buttonColor} />
            </Button>
            <Button
              borderStyle="end"
              color={buttonColor}
              onClick={() => handleCallback('next')}
              label="next slide"
            >
              <ArrowIcon direction="e" color={buttonColor} />
            </Button>
          </StyledButtonGroup>
          {isHeaderNav && <StyledLogoSmall className="logo">
            {transitionSlide(
              (styles, item) => item &&
                <animated.div style={styles}>
                  <img src={item} alt={`logo ${brandName}`} />
                </animated.div>
            )}
          </StyledLogoSmall>}
          {(!isHeaderNav && brandName) && <StyledBrandTransitionGroup color={brandNameColor ? brandNameColor : ''}>
            {transitionBrand(
              (styles, item) => item &&
                <animated.h2 style={styles}>{item}</animated.h2>
            )}
          </StyledBrandTransitionGroup>}
          <StyledButtonGroup>
            <Button
              borderStyle="symetrical"
              color={buttonColor}
              onClick={() => handleCallback('open')}
              label="open case study"
            >
              <ArrowIcon direction="se" color={buttonColor} />
            </Button>
          </StyledButtonGroup>
        </animated.div>)}
    </StyledNav>
  );
}

export default react.memo(NavigationSlides);