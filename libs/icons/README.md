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
import Alert from "@pui/icons/Alert";
import { Alert } from "@pui/icons";

import SmileFilled from "@pui/icons/SmileFilled";
import SmileTwoTone from "@pui/icons/SmileTwoTone";
import { SmileFilled, SmileTwoTone } from "@pui/icons";
```

## Component Interface

```ts
interface AntdIconProps {
  className?: string;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
  style?: React.CSSProperties;
}
```

## Release

```bash
npm run generate
npm run compile
npm publish
```
