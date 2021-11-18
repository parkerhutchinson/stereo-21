import {TypeSlidesFields} from "@/src/types/generated/TypeSlides";
import {TypeSlideFields} from "@/src/types/generated/TypeSlide";
import {Slides} from "@/src/components/3_organisms/slides";
import * as Contentful from "contentful";
import transformImage from "@/src/transformers/helpers/image";


const caseStudiesTransformer = (data:TypeSlidesFields):Slides => {
  // removes fields scoping from the array to provide clean props for slides component
  const slides = data.slideRef.map((slide:Contentful.Entry<TypeSlideFields>) => ({
    ...slide.fields,
    logo: transformImage(slide.fields.logo)
  }))

  return {
    slides: slides
  }
}

export default caseStudiesTransformer;