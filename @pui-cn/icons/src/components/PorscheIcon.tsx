import * as React from "react";
import classNames from "classnames";

import ReactIcon from "./IconBase";

export interface IconBaseProps extends React.HTMLProps<HTMLSpanElement> {
  spin?: boolean;
  rotate?: number;
}

export interface CustomIconComponentProps {
  width: string | number;
  height: string | number;
  fill: string;
  viewBox?: string;
  className?: string;
  style?: React.CSSProperties;
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

export interface IconComponentProps extends IconBaseProps {
  viewBox?: string;
  component?: React.ComponentType<CustomIconComponentProps | React.SVGProps<SVGSVGElement>>;
  ariaLabel?: React.AriaAttributes["aria-label"];
  icon: IconDefinition;
}

const Icon = React.forwardRef<HTMLSpanElement, IconComponentProps>((props, ref) => {
  const {
    // affect outter <span>...</span>
    className,

    // affect inner <svg>...</svg>
    icon,
    spin,
    rotate,

    onClick,
    tabIndex,

    ...restProps
  } = props;

  const classString = classNames(
    "porscheicon",
    {
      [`porscheicon-${icon.name}`]: Boolean(icon.name)
    },
    {
      "porscheicon-spin": !!spin || icon.name === "loading"
    },
    className
  );

  const svgStyle = rotate
    ? {
        msTransform: `rotate(${rotate}deg)`,
        transform: `rotate(${rotate}deg)`
      }
    : undefined;

  let iconTabIndex = tabIndex;
  if (iconTabIndex === undefined && onClick) {
    iconTabIndex = -1;
  }

  return (
    <span
      role="img"
      aria-label={icon.name}
      {...restProps}
      ref={ref}
      tabIndex={iconTabIndex}
      onClick={onClick}
      className={classString}
    >
      <ReactIcon icon={icon} style={svgStyle} />
    </span>
  );
});

Icon.displayName = "PorscheIcon";

export default Icon;
