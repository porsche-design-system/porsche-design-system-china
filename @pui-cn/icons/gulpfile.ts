import { series, parallel } from "gulp";
import { readFileSync } from "fs";
import { resolve } from "path";
import {
  clean,
  generateIconfont,
  generateIcons,
  generateTemplate,
  generateExport,
  generatePostCompile
} from "./tasks";

import { assignAttrsAtTag } from "./plugins";

const iconTemplate = readFileSync(resolve(__dirname, "./templates/icon.ts.ejs"), "utf8");

const template = readFileSync(resolve(__dirname, "./templates/template.ts.ejs"), "utf8");

const exportTemplate = readFileSync(resolve(__dirname, "./templates/export.ts.ejs"), "utf8");

const postCompileTemplate = readFileSync(
  resolve(__dirname, "./templates/postCompile.ts.ejs"),
  "utf8"
);

export default series(
  clean(["font", "src/asn", "src/icons"]),
  parallel(
    series(
      generateIconfont(),
      generateIcons({
        from: ["font/*.svg"],
        toDir: "src/asn/font",
        extraNodeTransformFactories: [
          assignAttrsAtTag("svg", {
            focusable: "false"
          })
        ],
        template: iconTemplate,
        mapToInterpolate: ({ content, name }) => ({
          identifier: name,
          content
        })
      }),
      generateTemplate({
        from: ["src/asn/font/*"],
        toDir: "src/icons",
        template: template,
        mapToInterpolate: ({ name }) => ({
          identifier: name,
          path: `font/${name}`
        })
      })
    ),
    series(
      generateIcons({
        from: ["svg/*.svg"],
        toDir: "src/asn/svg",
        extraNodeTransformFactories: [
          assignAttrsAtTag("svg", {
            focusable: "false"
          })
        ],
        template: iconTemplate,
        mapToInterpolate: ({ content, name }) => ({
          identifier: name,
          content
        })
      }),
      generateTemplate({
        from: ["src/asn/svg/*"],
        toDir: "src/icons",
        template: template,
        mapToInterpolate: ({ name }) => ({
          identifier: name,
          path: `svg/${name}`
        })
      })
    )
  ),
  generateExport({
    from: ["src/icons/*"],
    toDir: "src/icons",
    entryName: "index.tsx",
    template: exportTemplate,
    mapToInterpolate: ({ name }) => ({
      identifier: name,
      path: `./${name}`
    })
  })
);

export const entry = series(
  generatePostCompile({
    from: ["src/asn/font/*"],
    toDir: resolve(__dirname, "../icons"),
    template: postCompileTemplate,
    mapToInterpolate: ({ name }) => ({
      identifier: name
    })
  }),
  generatePostCompile({
    from: ["src/asn/svg/*"],
    toDir: resolve(__dirname, "../icons"),
    template: postCompileTemplate,
    mapToInterpolate: ({ name }) => ({
      identifier: name
    })
  })
);
