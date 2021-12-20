import react, {useEffect} from 'react';
import Summary from "@/src/components/2_molecules/summary";
import { StyledCaseStudyCopy, StyledLogoSmall } from "./styles";
import RichText from "@/src/components/2_molecules/richText";
import {useTransition, animated, useSpring} from 'react-spring';
import { useHeight } from '@/src/hooks/useHeight';
import React from 'react';


interface Props {
  logo: string
  logoSmall: string
  brand: string
  caseStudyCopy: any
  colorSchemeBG: string
  heightCallback: (height:any) => void
  summary: {
    title: string
    image: string
    year: string
    technology?: string[]
  }
}

interface ICaseStudy {
  brand: string
  caseStudyCopy: any
  colorSchemeBG: string
  heightCallback: (height:any) => void
  summary: {
    title: string
    image: string
    year: string
    technology?: string[]
  }
}

const CaseStudy = (props: ICaseStudy) => {
  const {brand,summary,caseStudyCopy, colorSchemeBG, heightCallback} = props;
  const [heightRef, height] = useHeight();

  useEffect(() => {
    mountedAnimationAPI.start();
  },[])

  useEffect(() => {
    heightCallback(height);
  }, [height]);

  

  const [mountedAnimation, mountedAnimationAPI] = useSpring(() => ({
    from: {marginTop: 200, opacity: 0},
    to: {marginTop: 0, opacity: 1},
    delay: 800
  }));

  return (
    <>
    
    {/* @ts-ignore */}
    <StyledCaseStudyCopy ref={heightRef}>
      
      <animated.h2 style={mountedAnimation}>{brand}</animated.h2>
      <animated.div style={mountedAnimation}>
        <Summary {...summary} color={colorSchemeBG}/>
      </animated.div>
      <animated.div style={mountedAnimation}>
        <RichText body={caseStudyCopy} isNotBio={true}/>
      </animated.div>
    </StyledCaseStudyCopy>
    </>
  )
}

const SlideArticle = (props:Props) => {
  const {
    heightCallback,
    brand,
    logoSmall
  } = props;

  const newProps = useTransition(props, {
    from: { position: 'absolute', opacity: 0},
    enter: { opacity: 1, filter: 'blur(0px)' },
    leave: { opacity: 0, filter: 'blur(20px)'},
    duration: 500,
    order: ["leave", "enter", "update"],
    key: props.logo,
  });
  const transitionSlide = useTransition(logoSmall, {
    native: true,
    from: { opacity: 0, transform: 'rotate(40deg)' },
    enter: { opacity: 1, transform: 'rotate(0deg)' },
    leave: { opacity: 0 },
    duration: 1000,
    key: logoSmall
  });

  return (
    <>
      {newProps((styles, props) => props &&
        // @ts-ignore
        <animated.div style={styles} key={props.logo}>
          <StyledLogoSmall>
            {transitionSlide(
              (styles, item) => item && 
              <animated.div style={styles}>
                <img src={item} alt={`logo ${brand}`} />
              </animated.div>
            )}
          </StyledLogoSmall>
          <CaseStudy {...props} heightCallback={(height:number) => heightCallback(height)}/>
        </animated.div>
      )}
    </>
  );
}

export default SlideArticle;