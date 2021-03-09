import { src, dest } from "gulp";
import rename from "gulp-rename";

import { svgo, svg2Definition, useTemplate, getIdentifier } from "../plugins";

import { SVG2DefinitionOptions } from "../plugins/svg2Definition";
import { UseTemplatePluginOptions } from "../plugins/useTemplate";

export interface GenerateIcons extends SVG2DefinitionOptions, UseTemplatePluginOptions {
  from: string[];
  toDir: string;
}

export interface RenameFile {
  //{ dirname: '.', basename: 'icon-zuoxuan2', extname: '.svg' }
  basename: string;
  extname: string;
  dirname: string;
}

export const generateIcons = ({
  from,
  toDir,
  extraNodeTransformFactories,
  template,
  mapToInterpolate
}: GenerateIcons) =>
  function GenerateIcons() {
    return src(from)
      .pipe(svgo())
      .pipe(
        svg2Definition({
          extraNodeTransformFactories
        })
      )
      .pipe(
        rename((file: RenameFile) => {
          if (file.basename) {
            file.basename = getIdentifier({
              name: file.basename
            });
            file.extname = ".tsx";
          }
        })
      )
      .pipe(
        useTemplate({
          template,
          mapToInterpolate
        })
      )
      .pipe(dest(toDir));
  };
