import * as Contentful from "contentful";

export interface TypeMigrationFields {
    state: Contentful.EntryFields.Object;
    contentTypeId: Contentful.EntryFields.Symbol;
}

export type TypeMigration = Contentful.Entry<TypeMigrationFields>;
