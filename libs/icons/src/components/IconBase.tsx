import * as React from "react";

import { useInsertStyles } from "../utils";

import { AbstractNode } from "../../plugins/svg2Definition";

export function normalizeAttrs(attrs: Attrs = {}): Attrs {
  return Object.keys(attrs).reduce((acc: Attrs, key) => {
    const val = attrs[key];
    switch (key) {
      case "class":
        acc.className = val;
        delete acc.class;
        break;
      default:
        acc[key] = val;
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

  // useInsertStyles();

  return generate(target.icon, `svg-${target.name}`, {
    "data-icon": target.name,
    width: "1rem",
    height: "1rem",
    fill: "currentColor",
    "aria-hidden": "true",
    style
  });
};

IconBase.displayName = "IconReact";

export default IconBase;
