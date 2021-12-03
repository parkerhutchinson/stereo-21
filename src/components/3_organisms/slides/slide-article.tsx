import {useEffect, useRef, useState} from 'react';
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
const SlideArticle = (props:Props) => {
  const {
    logo, 
    brand, 
    caseStudyCopy, 
    summaryColor, 
    summary, 
    heightCallback
  } = props;
  const richTextRef = useRef<HTMLDivElement>();
  const [heightRef, height] = useHeight();

  const transitionRichText = useTransition(caseStudyCopy, {
    from: { opacity: 0, position: 'absolute'},
    enter: { opacity: 1, position: 'relative'},
    leave: { opacity: 0, position: 'absolute'},
    duration: 1000,
    key: caseStudyCopy
  });

  const [mountedAnimation, mountedAnimationAPI] = useSpring(() => ({
    from: {marginTop: 200, opacity: 0},
    to: {marginTop: 0, opacity: 1},
    delay: 1000
  }))

  useEffect(() => {
    mountedAnimationAPI.start();
  },[])

  useEffect(() => {
    heightCallback(height);
  }, [height])

  return (
    <>
      {transitionRichText((styles, item) => item &&
        // @ts-ignore
        <animated.div style={{...styles,...{overflow:'hidden', top:0}}}>
          {/* @ts-ignore */}
          <StyledCaseStudyCopy ref={heightRef}>
            <animated.h2 style={mountedAnimation}>{brand}</animated.h2>
            <animated.div style={mountedAnimation}><Summary {...summary} color={summaryColor}/></animated.div>
            <RichTextBody body={caseStudyCopy} propRef={richTextRef}/>
          </StyledCaseStudyCopy>
        </animated.div>
      )}
    </>
  );
}

export default SlideArticle;