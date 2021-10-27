import * as Contentful from "contentful";
import { TypeBioFields } from "./TypeBio";
import { TypeMetaFields } from "./TypeMeta";

export interface TypePageFields {
    meta: Contentful.Entry<TypeMetaFields>;
    components: Contentful.Entry<TypeBioFields>[];
}

export type TypePage = Contentful.Entry<TypePageFields>;
