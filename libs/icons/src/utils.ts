import { insertCss } from "insert-css";

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

// These props make sure that the SVG behaviours like general text.
// Reference: https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
export const svgBaseProps = {
  width: "1em",
  height: "1em",
  fill: "currentColor",
  "aria-hidden": "true",
  focusable: "false"
};

export const iconStyles = `
.porscheicon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  font-size: 24px;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.porscheicon > * {
  line-height: 1;
}

.porscheicon svg {
  display: inline-block;
}

.porscheicon::before {
  display: none;
}

.porscheicon .porscheicon-icon {
  display: block;
}

.porscheicon[tabindex] {
  cursor: pointer;
}

.porscheicon-spin::before,
.porscheicon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`;

let cssInjectedFlag = false;

export const useInsertStyles = (styleStr: string = iconStyles) => {
  if (!cssInjectedFlag) {
    insertCss(styleStr, {
      prepend: true
    });
    cssInjectedFlag = true;
  }
};
