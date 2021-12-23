import react, {useEffect, useState} from 'react';
import Summary from "@/src/components/2_molecules/summary";
import { StyledCaseStudyCopy, StyledHeadingLetter, StyledLogoSmall } from "./styles";
import RichText from "@/src/components/2_molecules/richText";
import {useTransition, animated, useSpring, useTrail} from 'react-spring';
import { useHeight } from '@/src/hooks/useHeight';
import React from 'react';
import { useDebouncedCallback } from 'use-debounce';

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
  const letters = props.brand.split('');
  const [ready, setReady] = useState(false);

  useEffect(() => {
    mountedAnimationAPI.start();
    setTimeout(() => {
      setReady(true)
    }, 500)
    return () => setReady(false);
  },[]);
  const debouncedHeight = useDebouncedCallback(
    // function
    (value) => {
      heightCallback(value);
    },
    // delay in ms
    800
  );
  // TODO: debounce this like crazy
  useEffect(() => {
    debouncedHeight(height);
  }, [height]);

  const [mountedAnimation, mountedAnimationAPI] = useSpring(() => ({
    from: {opacity: 0},
    to: {opacity: 1},
    delay: 1100,
    config: {duration: 600}
  }));
  
  return (
    <>
    {/* @ts-ignore: this hook returns a number*/}
    <StyledCaseStudyCopy ref={heightRef}>
      <h2>{
        letters.map(
          (letter:string, index:number) => 
            <StyledHeadingLetter 
              index={index} 
              ready={ready}
              key={index}
            >
              {letter}
            </StyledHeadingLetter>
          )
        }
      </h2>
      <Summary {...summary} color={colorSchemeBG}/>
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
    config: {duration: 300},
    key: logoSmall
  });

  return (
    <>
      {newProps((styles, props) => props &&
        // @ts-ignore
        <animated.div style={{...styles, ...{transform: 'translate3d(0px, 0px, 0px)'}}} key={props.logo}>
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