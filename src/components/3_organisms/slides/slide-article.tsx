import react, {useEffect, useRef, useState} from 'react';
import RichTextBody from "@/src/components/2_molecules/richTextBody";
import Summary from "@/src/components/2_molecules/summary";
import { StyledCaseStudyCopy } from "./styles";
import {useTransition, animated, useChain, useSpringRef, useSpring} from 'react-spring';
import { useHeight } from '@/src/hooks/useHeight';


interface Props {
  logo: string
  brand: string
  caseStudyCopy: any
  summaryColor: string
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
  summaryColor: string
  heightCallback: (height:any) => void
  summary: {
    title: string
    image: string
    year: string
    technology?: string[]
  }
}

const CaseStudy = (props: ICaseStudy) => {
  const {logo, brand,summary,caseStudyCopy, summaryColor, heightCallback} = props;
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
    delay: 1000
  }))
  return (
    <>
    {/* @ts-ignore */}
    <StyledCaseStudyCopy ref={heightRef}>
      <animated.h2 style={mountedAnimation}>{brand}</animated.h2>
      <animated.div style={mountedAnimation}><Summary {...summary} color={summaryColor}/></animated.div>
      <RichTextBody body={caseStudyCopy} />
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
    enter: { opacity: 1, y: 0 },
    leave: { opacity: 0 },
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