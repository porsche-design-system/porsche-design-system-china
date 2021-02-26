import upperFirst from "lodash.upperfirst";
import camelCase from "lodash.camelcase";
import { pipe } from "ramda";

export interface IdentifierMeta {
  name: string;
}

export interface GetIdentifierType {
  (meta: IdentifierMeta): string;
}

export const getIdentifier: GetIdentifierType = pipe(
  ({ name }: IdentifierMeta) => name,
  camelCase,
  upperFirst
);
