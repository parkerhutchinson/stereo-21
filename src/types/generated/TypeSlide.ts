import * as CFRichTextTypes from "@contentful/rich-text-types";
import * as Contentful from "contentful";

export interface TypeSlideFields {
    brand: Contentful.EntryFields.Symbol;
    logo: Contentful.Asset;
    meshScene: Contentful.Asset;
    caseStudyCopy: CFRichTextTypes.Block | CFRichTextTypes.Inline;
    colorSchemeSeed: Contentful.EntryFields.Symbol;
    colorSchemeHighlight: Contentful.EntryFields.Symbol;
    colorSchemeBioBG: Contentful.EntryFields.Symbol;
    colorSchemeBioText: Contentful.EntryFields.Symbol;
}

export type TypeSlide = Contentful.Entry<TypeSlideFields>;
