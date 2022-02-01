import React, { useContext, useEffect, useRef, useState } from "react";
import { GlobalActions, GlobalContext } from "@/src/context/global";
import { StyledSlides } from "./styles";
import useIsomorphicLayoutEffect from "@/src/hooks/useIsomorphicLayoutEffect";
import Slide from "./slide";
import useKeycode from "@/src/hooks/useKeycode";
import { SlideFields } from "./slide";
import { useSpring } from "react-spring";


const { 
  UPDATE_COLOR, 
  OPEN_CASE_STUDY, 
  UPDATE_SLIDE_DATA 
} = GlobalActions;

export interface Slides {
  slides: SlideFields[]
  slidesCB?: () => void;
}

const Slides = (props: Slides) => {
  const { slides } = props;
  const SLIDES_LEN = slides.length - 1;
  const userInteracted = useRef(false);
  const timerRef = useRef<NodeJS.Timer>();
  const { 
    state: { 
      mobilePanel, 
      caseStudyOpen, 
      slideData,
      stopSlides
    }, 
    dispatch 
  } = useContext(GlobalContext);
  const [articleReady, setArticleReady] = useState(false);
  // scroll top animation
  const [, springAPI] = useSpring(() => ({
      from: { y: window.scrollY },
      to: { y: 0 },
      duration: 500
    })
  )

  const [keyName] = useKeycode();

  const nextSlide = () => {
    return slideData.slideId < SLIDES_LEN
      ? dispatch({type: UPDATE_SLIDE_DATA, payload: {slideId: slideData.slideId + 1}})
      : dispatch({type: UPDATE_SLIDE_DATA, payload: {slideId:0}});
  }

  const prevSlide = () =>
    slideData.slideId > 0
      ? dispatch({type: UPDATE_SLIDE_DATA, payload: {slideId: slideData.slideId - 1}})
      : dispatch({type: UPDATE_SLIDE_DATA, payload: {slideId:SLIDES_LEN}});

  const stopSlideshow = () => timerRef.current ? window.clearTimeout(timerRef.current) : null;

  // slideshow interval
  useIsomorphicLayoutEffect(() => {
    if (timerRef.current)
      window.clearTimeout(timerRef.current)

    // cancel timer if user has interacted
    if (!userInteracted.current) {
      timerRef.current = setTimeout(() => {
        nextSlide();
      }, 6000);
    }

  }, [userInteracted, slideData.slideId]);

  // when dispatch updates stop slideshow if stopSlides === true
  useEffect(() => {
    if (stopSlides) timerRef.current && window.clearTimeout(timerRef.current)
  }, [stopSlides])

  // change global colorways when slide updates
  useEffect(() => {
    if (typeof dispatch !== 'undefined') {
      dispatch({
        type: UPDATE_COLOR,
        payload: {
          siteBackgroundColor: slides[slideData.slideId].colorSchemeSeed,
          bioTextColor: slides[slideData.slideId].colorSchemeBioText,
          bioBackgroundColor: slides[slideData.slideId].colorSchemeBioBG,
          highlight: slides[slideData.slideId].colorSchemeHighlight,
          slideBorderStopOne: slides[slideData.slideId].colorSchemeSlideStopOne,
          slideBorderStopTwo: slides[slideData.slideId].colorSchemeSlideStopTwo,
          eyeBrowStopOne: slides[slideData.slideId].colorSchemeEyeBrowStopOne,
          eyeBrowStopTwo: slides[slideData.slideId].colorSchemeEyeBrowStopTwo
        }
      })
      dispatch({
        type: UPDATE_SLIDE_DATA,
        payload: {
          brand: slides[slideData.slideId].brand,
          slidesLength: slides.length,
          mesh: slides[slideData.slideId].meshScene.fields.file.url,
          meshFallback: slides[slideData.slideId].meshFallback
        }
      })
    }
  }, [slideData.slideId]);

  const scrollTop = (cb: () => void) => {
    if (caseStudyOpen && window.scrollY > 0) {
      springAPI.start({
        from: { y: window.scrollY },
        to: { y: 0 },
        onChange: (props: any) => {
          window.scroll(0, props.value.y)
        },
        onRest: () => cb()
      });
    } else {
      cb()
    }
  }

  // slides state controls
  const handleSlideNavigation = (action: string) => {
    switch (action) {
      case 'next':
        scrollTop(() => {
          prevSlide();
          stopSlideshow();
        });
        break;
      case 'prev':
        scrollTop(() => {
          nextSlide();
          stopSlideshow();
        });
        break;
      case 'open':
        stopSlideshow();
        // scroll top if the study was opened
        if (caseStudyOpen && window.scrollY > 0) {
          springAPI.start({
            from: { y: window.scrollY },
            to: { y: 0 },
            onChange: (props: any) => {
              window.scroll(0, props.value.y)
            },
            onRest: () => {
              dispatch({ type: OPEN_CASE_STUDY, payload: false })
            }
          });
        } else if (caseStudyOpen && window.scrollY === 0) {
          dispatch({ type: OPEN_CASE_STUDY, payload: false })
        } else {
          dispatch({ type: OPEN_CASE_STUDY, payload: true })
        }
        break;
    }
  }

  useEffect(() => {
    switch (keyName) {
      case 'ArrowLeft':
        userInteracted.current = true;
        scrollTop(() => {
          prevSlide();
          stopSlideshow();
        });
        break;
      case 'ArrowRight':
        userInteracted.current = true;
        scrollTop(() => {
          nextSlide();
          stopSlideshow();
        });
        break;
      case 'Escape':
        // scroll top when esc key is hit
        scrollTop(() => {
          dispatch({ type: OPEN_CASE_STUDY, payload: false })
        });
        break;
      case 'Enter':
        userInteracted.current = true;
        stopSlideshow();
        dispatch({ type: OPEN_CASE_STUDY, payload: true });
        break;
      default:
        break;
    }
  }, [keyName])
  
  return (
    <StyledSlides
      backgroundColor={slides[slideData.slideId || 0].colorSchemeBioBG}
      toggle={caseStudyOpen}
      slidePosition={articleReady}
      panelOpen={mobilePanel}
    >
      <Slide
        slide={slides[slideData.slideId || 0]}
        navCallback={(e) => {
          userInteracted.current = true;
          handleSlideNavigation(e);
        }}
        toggleSlide={caseStudyOpen}
        finishedAnimation={() => caseStudyOpen ? setArticleReady(true) : setArticleReady(false)}
      />
    </StyledSlides>
  )
}

export default React.memo(Slides);