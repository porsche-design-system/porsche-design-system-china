import { src, dest } from "gulp";
import concat from "gulp-concat";
import { useTemplate } from "../plugins";

import { UseTemplatePluginOptions } from "../plugins/useTemplate";

export interface GenerateExport extends UseTemplatePluginOptions {
  from: string[];
  toDir: string;
  entryName: string;
}

export const generateExport = ({
  from,
  toDir,
  entryName,
  template,
  mapToInterpolate
}: GenerateExport) =>
  function GenerateExport() {
    return src(from)
      .pipe(
        useTemplate({
          template,
          mapToInterpolate
        })
      )
      .pipe(concat(entryName))
      .pipe(dest(toDir));
  };
