import * as Contentful from "contentful";

export interface TypeMetaFields {
    title: Contentful.EntryFields.Symbol;
    description: Contentful.EntryFields.Symbol;
    keywords?: Contentful.EntryFields.Symbol[];
    image?: Contentful.Asset;
}

export type TypeMeta = Contentful.Entry<TypeMetaFields>;
