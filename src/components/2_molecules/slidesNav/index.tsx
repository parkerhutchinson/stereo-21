import Button from "@/src/components/1_atoms/button";
import ArrowIcon from "@/src/components/1_atoms/arrowIcon";
import {StyledNav} from "./styles";
import {useTransition, animated} from 'react-spring';


interface Props {
  buttonColor: string
  iconColor: string
  navCallback: (action:string) => void
  toggleNavAnimation: boolean
  style?: any
}


const SlidesNavigation = (props:Props) => {
  const {buttonColor, navCallback, toggleNavAnimation} = props;

  const navigationAnimation = useTransition(toggleNavAnimation, {
    native: true,
    delay: 200,
    from: {opacity: 0},
    enter: {opacity: 1},
    leave: {opacity: 0}
  })

  return (
    <StyledNav as={animated.nav} style={props.style}>
      {navigationAnimation((styles,item) => item && 
      <animated.div style={styles}>
        <div>
          <Button 
            borderStyle="begin" 
            color={buttonColor} 
            onClick={() => navCallback('prev')}
            label="previous slide"
          >
            <ArrowIcon direction="w" color={buttonColor}/>
          </Button>
          <Button 
            borderStyle="end" 
            color={buttonColor}
            onClick={() => navCallback('next')}
            label="next slide"
          >
            <ArrowIcon direction="e" color={buttonColor} />
          </Button>
        </div>

        <Button 
          borderStyle="symetrical" 
          color={buttonColor} 
          onClick={() => navCallback('open')}
          label="open case study"
        >
          <ArrowIcon direction="se" color={buttonColor} />
        </Button>
      </animated.div>)}
    </StyledNav>
  );
}

export default SlidesNavigation;