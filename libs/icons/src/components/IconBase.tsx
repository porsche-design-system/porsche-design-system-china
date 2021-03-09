import * as React from "react";
import camelCase from "lodash.camelcase";

import { useInsertStyles } from "../utils";

export function normalizeAttrs(attrs: Attrs = {}): Attrs {
  return Object.keys(attrs).reduce((acc: Attrs, key) => {
    const val = attrs[key];
    switch (key) {
      case "class":
        acc.className = val;
        delete acc.class;
        break;
      default:
        acc[camelCase(key)] = val;
    }
    return acc;
  }, {});
}
export interface Attrs {
  [key: string]: string;
}

export interface IconProps {
  icon: IconDefinition;
  className?: string;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
  style?: React.CSSProperties;
  focusable?: string;
}
export interface AbstractNode {
  tag: string;
  attrs: {
    [key: string]: string;
  };
  children?: AbstractNode[];
}

export interface IconDefinition {
  name: string; // kebab-case-style
  icon: AbstractNode;
}

function generate(
  node: AbstractNode,
  key: string,
  rootProps?: { [key: string]: any } | false
): any {
  return React.createElement(
    node.tag,
    {
      key,
      ...normalizeAttrs(node.attrs),
      ...rootProps
    },
    (node.children || []).map((child, index) => generate(child, `${key}-${node.tag}-${index}`))
  );
}

const IconBase = (props: IconProps) => {
  const { icon, style } = props;

  const target = icon;

  useInsertStyles();

  return generate(target.icon, `svg-${target.name}`, {
    "data-icon": target.name,
    width: "24px",
    height: "24px",
    fill: "currentColor",
    "aria-hidden": "true",
    style
  });
};

IconBase.displayName = "IconReact";

export default IconBase;
