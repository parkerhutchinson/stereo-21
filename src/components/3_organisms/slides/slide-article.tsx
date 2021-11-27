import {useRef} from 'react';
import RichTextBody from "@/src/components/2_molecules/richTextBody";
import Summary from "@/src/components/2_molecules/summary";
import { StyledCaseStudyCopy } from "./styles";
import {useTransition, animated, useChain, useSpringRef} from 'react-spring';


interface Props {
  logo: string
  brand: string
  caseStudy: any
  summaryColor: string
  summary: {
    title: string
    image: string
    year: string
    technology?: string[]
  }
}
const SlideArticle = (props:any) => {
  const {logo, brand, caseStudy, summaryColor, summary} = props;
  const richTextRef = useRef<HTMLDivElement>();

  const transitionRichText = useTransition(logo, {
    from: { opacity: 0, height: 200},
    enter: { opacity: 1, height: height},
    leave: { opacity: 0, height: 200},
    duration: 2000,
    ref: richTextTransRef,
    key: logo
  });

  return (
    <animated.div style={{...stylesCopy, ...{
      zIndex: 20, top: '120px', 
      pointerEvents: richTextEvents
    }
    }}>
      {transitionRichText((styles, item) => item && 
        <animated.div style={
          {...styles, ...{
            width:'100%',
            top: 0
          }
        }}>
        <StyledCaseStudyCopy>
          <h2>{brand}</h2>
          <Summary {...summary} color={summaryColor}/>
          <RichTextBody body={caseStudy} propRef={richTextRef}/>
        </StyledCaseStudyCopy>
        </animated.div>
      )}
    </animated.div>
  );
}

export default SlideArticle;