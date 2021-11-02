import {TypeSlidesFields} from "../../types/generated/TypeSlides";
import {TypeSlideFields} from "../../types/generated/TypeSlide";
import * as Contentful from "contentful";

interface Slides {
  componentId: string,
  slides: TypeSlideFields[]
}

const caseStudiesTransformer = (data:TypeSlidesFields):Slides => {
  // removes fields scoping from the array to provide clean props for slides component
  const slides = data.slideRef.map((slide:Contentful.Entry<TypeSlideFields>) => ({
    ...slide.fields
  }))

  return {
    componentId: 'slides',
    slides: slides
  }
}

export default caseStudiesTransformer;