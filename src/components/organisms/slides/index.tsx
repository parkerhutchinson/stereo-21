import { TypeSlideFields } from "../../../types/generated/TypeSlide";
import RichTextBody from "../../molecules/richTextBody";
export interface Slides {
  componentId: string,
  slides: TypeSlideFields[]
}

const Slides = (props:Slides) => {
  const {slides} = props;
  return (
    <>
    {slides.map((slide:TypeSlideFields, index:number) => (
      <div key={index}>
        <h2>{slide.brand}</h2>
        <RichTextBody body={slide.caseStudyCopy}/>
      </div>
    ))}
    </>
  )
}

export default Slides;