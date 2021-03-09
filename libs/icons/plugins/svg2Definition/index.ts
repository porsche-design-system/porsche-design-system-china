import {
  pipe,
  clone,
  map,
  where,
  equals,
  gt,
  both,
  unless,
  length,
  dissoc,
  reduce,
  path,
  __,
  applyTo,
  defaultTo,
  objOf,
  assoc,
  evolve,
  mergeLeft,
  when
} from "ramda";

import parseXML, { Element } from "@rgrove/parse-xml";

import { createTrasformStream } from "../creator";

type Dictionary = Record<string, string>;
export interface SVG2DefinitionOptions {
  extraNodeTransformFactories: TransformFactory[];
}
export interface TransformFactory {
  (asn: AbstractNode): AbstractNode;
}
export interface AbstractNode {
  tag: string;
  attrs: {
    [key: string]: string;
  };
  children?: AbstractNode[];
}

// SVG => IconDefinition
export const svg2Definition = ({ extraNodeTransformFactories }: SVG2DefinitionOptions) =>
  createTrasformStream((SVGString, { stem: name }) =>
    applyTo(SVGString)(
      pipe(
        // 0. The SVG string is like that:
        // <svg viewBox="0 0 1024 1024"><path d="..."/></svg>

        parseXML,

        // 1. The parsed XML root node is with the JSON shape:
        // {
        //   "type": "document",
        //   "children": [
        //     {
        //       "type": "element",
        //       "name": "svg",
        //       "attributes": { "viewBox": "0 0 1024 1024" },
        //       "children": [
        //         {
        //           "type": "element",
        //           "name": "path",
        //           "attributes": {
        //             "d": "..."
        //           },
        //           "children": []
        //         }
        //       ]
        //     }
        //   ]
        // }

        path(["children", 0]),

        // 2. The element node is with the JSON shape:
        // {
        //   "type": "element",
        //   "name": "svg",
        //   "attributes": { "viewBox": "0 0 1024 1024" },
        //   "children": [
        //     {
        //       "type": "element",
        //       "name": "path",
        //       "attributes": {
        //         "d": "..."
        //       },
        //       "children": []
        //     }
        //   ]
        // }

        element2AbstractNode({
          extraNodeTransformFactories
        }),

        // 3. The abstract node is with the JSON shape:
        // {
        //   "tag": "svg",
        //   "attrs": { "viewBox": "0 0 1024 1024", "focusable": "false" },
        //   "children": [
        //     {
        //       "tag": "path",
        //       "attrs": {
        //         "d": "..."
        //       }
        //     }
        //   ]
        // }

        pipe(objOf("icon"), assoc("name", name)),
        defaultTo(JSON.stringify)(JSON.stringify)
      )
    )
  );

export function assignAttrsAtTag(tag: string, extraProps: Dictionary) {
  return (asn: AbstractNode) =>
    when(
      where({
        tag: equals(tag)
      }),
      evolve({
        attrs: pipe(clone, mergeLeft(extraProps))
      })
    )(asn);
}

function element2AbstractNode({ extraNodeTransformFactories }: SVG2DefinitionOptions) {
  return ({ name: tag, attributes, children }: Element): AbstractNode =>
    applyTo(extraNodeTransformFactories)(
      pipe(
        reduce(
          (transformedNode: Element, extraTransformFn: TransformFactory) =>
            extraTransformFn(transformedNode),
          applyTo({
            tag,
            attrs: clone(attributes),
            children: applyTo(children)(
              pipe(
                map(
                  element2AbstractNode({
                    extraNodeTransformFactories
                  })
                )
              )
            )
          })(
            unless(
              where({
                children: both(Array.isArray, pipe(length, gt(__, 0)))
              }),
              dissoc("children")
            )
          )
        )
      )
    );
}
