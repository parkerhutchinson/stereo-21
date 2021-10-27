import * as CFRichTextTypes from "@contentful/rich-text-types";
import * as Contentful from "contentful";

export interface TypeBioFields {
    name: Contentful.EntryFields.Symbol;
    body: CFRichTextTypes.Block | CFRichTextTypes.Inline;
}

export type TypeBio = Contentful.Entry<TypeBioFields>;
