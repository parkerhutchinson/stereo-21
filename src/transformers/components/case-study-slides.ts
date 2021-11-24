import {TypeSlidesFields} from "@/src/types/generated/TypeSlides";
import {TypeSlideFields} from "@/src/types/generated/TypeSlide";
import {TypeSummaryFields} from "@/src/types/generated/TypeSummary";
import {Slides} from "@/src/components/3_organisms/slides";
import * as Contentful from "contentful";
import transformImage from "@/src/transformers/helpers/image";


const summaryTransformer = (data:TypeSummaryFields) => {
  const {supporting_image} = data;
  return {
    ...data,
    supportingImage: transformImage(supporting_image);
  };
}

const caseStudiesTransformer = (data:TypeSlidesFields):Slides => {
  // removes fields scoping from the array to provide clean props for slides component
  const slides = data.slideRef.map((slide:Contentful.Entry<TypeSlideFields>) => ({
    ...slide.fields,
    logo: transformImage(slide.fields.logo),
    summary: summaryTransformer(slide.fields.summaryRef.fields)
  }))

  return {
    slides: slides
  }
}

export default caseStudiesTransformer;