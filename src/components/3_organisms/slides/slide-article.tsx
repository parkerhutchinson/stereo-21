import {useRef} from 'react';
import RichTextBody from "@/src/components/2_molecules/richTextBody";
import Summary from "@/src/components/2_molecules/summary";
import { StyledCaseStudyCopy } from "./styles";
import {useTransition, animated, useChain, useSpringRef} from 'react-spring';
import { useHeight } from '@/src/hooks/useHeight';


interface Props {
  logo: string
  brand: string
  caseStudy: any
  summaryColor: string
  style: any
  summary: {
    title: string
    image: string
    year: string
    technology?: string[]
  }
}
const SlideArticle = (props:any) => {
  const {logo, brand, caseStudy, summaryColor, summary, style} = props;
  const richTextRef = useRef<HTMLDivElement>();
  const [heightRef, height] = useHeight();


  const transitionRichText = useTransition(logo, {
    from: { opacity: 0},
    enter: { opacity: 1},
    leave: { opacity: 0},
    duration: 2000,
    key: logo
  });

  return (
    <>
      {transitionRichText((styles, item) => item && 
        <StyledCaseStudyCopy as={animated.div} style={styles}>
          <h2>{brand}</h2>
          <Summary {...summary} color={summaryColor}/>
          <RichTextBody body={caseStudy} propRef={richTextRef}/>
        </StyledCaseStudyCopy>
      )}
    </>
  );
}

export default SlideArticle;