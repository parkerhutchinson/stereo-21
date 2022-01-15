import * as Contentful from "contentful";
import { TypeBioFields } from "./TypeBio";
import { TypeMetaFields } from "./TypeMeta";
import { TypeSlidesFields } from "./TypeSlides";

export interface TypePageFields {
    title: Contentful.EntryFields.Symbol;
    meta: Contentful.Entry<TypeMetaFields>;
    components: Contentful.Entry<TypeMetaFields | TypeBioFields | TypeSlidesFields>[];
}

export type TypePage = Contentful.Entry<TypePageFields>;
