import { TypeSlideFields } from "../../../types/generated/TypeSlide";

export interface Slides {
  componentId: string,
  slides: TypeSlideFields[]
}

const Slides = (props:Slides) => {
  const {slides} = props;
  return (
    <>{slides.map((slide:TypeSlideFields, index:number) => (
      <div key={index}>
        <h2>{slide.brand}</h2>
      </div>
    ))}</>
  )
}

export default Slides;