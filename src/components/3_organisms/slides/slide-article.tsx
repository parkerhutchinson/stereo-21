import react, {useEffect, useRef, useState} from 'react';
import Summary from "@/src/components/2_molecules/summary";
import { StyledCaseStudyText, StyledCaseStudyCopy } from "./styles";
import {useTransition, animated, useChain, useSpringRef, useSpring} from 'react-spring';
import { useHeight } from '@/src/hooks/useHeight';
import React from 'react';


interface Props {
  logo: string
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
  logo: string
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
  const {logo, brand,summary,caseStudyCopy, colorSchemeBG, heightCallback} = props;
  const [heightRef, height] = useHeight();

  useEffect(() => {
    mountedAnimationAPI.start();
  },[])

  useEffect(() => {
    heightCallback(height);
  }, [height])

  const [mountedAnimation, mountedAnimationAPI] = useSpring(() => ({
    from: {marginTop: 200, opacity: 0},
    to: {marginTop: 0, opacity: 1},
    delay: 800
  }))
  return (
    <>
    {/* @ts-ignore */}
    <StyledCaseStudyCopy ref={heightRef}>
      <animated.h2 style={mountedAnimation}>{brand}</animated.h2>
      <animated.div style={mountedAnimation}>
        <Summary {...summary} color={colorSchemeBG}/>
      </animated.div>
      <animated.div style={mountedAnimation}>
        <StyledCaseStudyText body={caseStudyCopy} />
      </animated.div>
    </StyledCaseStudyCopy>
    </>
  )
}

const SlideArticle = (props:Props) => {
  const {
    heightCallback
  } = props;

  const newProps = useTransition(props, {
    from: { position: 'absolute', opacity: 0},
    enter: { opacity: 1, filter: 'blur(0px)' },
    leave: { opacity: 0, filter: 'blur(20px)'},
    duration: 500,
    order: ["leave", "enter", "update"],
    key: props.logo,
  });

  return (
    <>
      {newProps((styles, props) => props &&
        // @ts-ignore
        <animated.div style={styles} key={props.logo}>
          <CaseStudy {...props} heightCallback={(height:number) => heightCallback(height)}/>
        </animated.div>
      )}
    </>
  );
}

export default SlideArticle;