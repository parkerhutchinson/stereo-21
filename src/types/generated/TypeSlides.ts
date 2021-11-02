import * as Contentful from "contentful";
import { TypeSlideFields } from "./TypeSlide";

export interface TypeSlidesFields {
    slidesTitle: Contentful.EntryFields.Symbol;
    slideRef: Contentful.Entry<TypeSlideFields>[];
}

export type TypeSlides = Contentful.Entry<TypeSlidesFields>;
