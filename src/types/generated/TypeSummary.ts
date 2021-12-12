import * as Contentful from "contentful";

export interface TypeSummaryFields {
    title: Contentful.EntryFields.Symbol;
    year: Contentful.EntryFields.Symbol;
    technology?: Contentful.EntryFields.Symbol[];
    summary_color: Contentful.EntryFields.Symbol;
    supporting_image: Contentful.Asset;
}

export type TypeSummary = Contentful.Entry<TypeSummaryFields>;
