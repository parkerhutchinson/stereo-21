import {TypeSlidesFields} from "@/src/types/generated/TypeSlides";
import {TypeSlideFields} from "@/src/types/generated/TypeSlide";
import {Slides} from "@/src/components/organisms/slides";
import * as Contentful from "contentful";


const caseStudiesTransformer = (data:TypeSlidesFields):Slides => {
  // removes fields scoping from the array to provide clean props for slides component
  const slides = data.slideRef.map((slide:Contentful.Entry<TypeSlideFields>) => ({
    ...slide.fields
  }))

  return {
    slides: slides
  }
}

export default caseStudiesTransformer;