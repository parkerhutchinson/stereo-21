import {TypeSlidesFields} from "@/src/types/generated/TypeSlides";
import {TypeSlideFields} from "@/src/types/generated/TypeSlide";
import {TypeSummaryFields} from "@/src/types/generated/TypeSummary";
import {Slides} from "@/src/components/3_organisms/slides";
import * as Contentful from "contentful";
import transformImage from "@/src/transformers/helpers/image";


const summaryTransformer = (data:TypeSummaryFields) => {
  const {supporting_image} = data;
  return {
    title: data.title,
    year: data.year,
    technology: data.technology,
    colorSchemeBG: data.summary_color,
    image: transformImage(supporting_image)
  };
}

const caseStudiesTransformer = (data:TypeSlidesFields):Slides => {
  // removes fields scoping from the array to provide clean props for slides component
  const slides = data.slideRef.map((slide:Contentful.Entry<TypeSlideFields>) => {
    return {
      brand: slide.fields.brand,
      meshScene: slide.fields.meshScene,
      colorSchemeBioBG: slide.fields.colorSchemeBioBG,
      colorSchemeSeed: slide.fields.colorSchemeSeed,
      colorSchemeHighlight: slide.fields.colorSchemeHighlight,
      colorSchemeBioText: slide.fields.colorSchemeBioText,
      colorSchemeSlideStopOne: slide.fields.colorSchemeSlideStopOne,
      colorSchemeSlideStopTwo: slide.fields.colorSchemeSlideStopTwo,
      colorSchemeEyeBrowStopOne: slide.fields.colorSchemeEyeBrowStopOne,
      colorSchemeEyeBrowStopTwo: slide.fields.colorSchemeEyeBrowStopTwo,
      logo: transformImage(slide.fields.logo),
      summary: summaryTransformer(slide.fields.summaryRef.fields),
      caseStudyCopy: slide.fields.caseStudyCopy
    }
  })

  return {
    slides: slides
  }
}

export default caseStudiesTransformer;