<h1 align="center">
Porsche Design Icons for React
</h1>

## Install

```bash
yarn add @pui/icons
```

## Basic Usage

You can import it directly or destructure from `@pui/icons` when tree-shaking enabled.

```ts
import { Icon360, Add } from "@pui/icons";
```

## Component Interface

```ts
interface PorscheIconProps {
  className?: string;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
  style?: React.CSSProperties;
}
```

## Release

```bash
npm run generate
npm run build
npm publish
```
