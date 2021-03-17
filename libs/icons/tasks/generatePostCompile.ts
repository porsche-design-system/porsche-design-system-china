import { src, dest } from "gulp";
import rename from "gulp-rename";
import { useTemplate, getIdentifier } from "../plugins";

import { UseTemplatePluginOptions } from "../plugins/useTemplate";

export interface GenerateTemplateOptions extends UseTemplatePluginOptions {
  from: string[];
  toDir: string;
}

export interface RenameFile {
  //{ dirname: '.', basename: 'icon-zuoxuan2', extname: '.svg' }
  basename: string;
  extname: string;
  dirname: string;
}

export const generatePostCompile = ({
  from,
  toDir,
  template,
  mapToInterpolate
}: GenerateTemplateOptions) =>
  function GenerateTemplate() {
    return src(from)
      .pipe(
        useTemplate({
          template,
          mapToInterpolate
        })
      )
      .pipe(
        rename((file: RenameFile) => {
          if (file.basename) {
            file.basename = getIdentifier({
              name: file.basename
            });
            file.extname = ".js";
          }
        })
      )
      .pipe(dest(toDir));
  };
