<h1 align="center">
Porsche Design Icons for React
</h1>

## Install

```bash
yarn add @pui-cn/icons
```

## Basic Usage

You can import it directly or destructure from `@pui-cn/icons` when tree-shaking enabled.

```ts
import { Icon360, IconAdd } from "@pui-cn/icons";
import Icon360 from "@pui-cn/icons/Icon360";
import IconAdd from "@pui-cn/icons/IconAdd";
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
