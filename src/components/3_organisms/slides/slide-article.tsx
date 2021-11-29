import {useEffect, useRef} from 'react';
import RichTextBody from "@/src/components/2_molecules/richTextBody";
import Summary from "@/src/components/2_molecules/summary";
import { StyledCaseStudyCopy } from "./styles";
import {useTransition, animated, useChain, useSpringRef} from 'react-spring';
import { useHeight } from '@/src/hooks/useHeight';


interface Props {
  logo: string
  brand: string
  caseStudyCopy: any
  summaryColor: string
  style: any
  heightCallback: (height:number) => void
  summary: {
    title: string
    image: string
    year: string
    technology?: string[]
  }
}
const SlideArticle = (props:any) => {
  const {logo, brand, caseStudyCopy, summaryColor, summary, style, heightCallback} = props;
  const richTextRef = useRef<HTMLDivElement>();
  const [heightRef, height] = useHeight();

  const transitionRichText = useTransition(logo, {
    from: { opacity: 0},
    enter: { opacity: 1},
    leave: { opacity: 0},
    duration: 2000,
    key: logo
  });

  useEffect(() => {
    heightCallback(height);
  }, [height])

  return (
    <>
      {transitionRichText((styles, item) => item &&
        //@ts-ignore 
        <StyledCaseStudyCopy as={animated.div} style={styles} ref={heightRef}>
          <h2>{brand}</h2>
          <Summary {...summary} color={summaryColor}/>
          <RichTextBody body={caseStudyCopy} propRef={richTextRef}/>
        </StyledCaseStudyCopy>
      )}
    </>
  );
}

export default SlideArticle;