import { src, dest } from "gulp";
import { useTemplate } from "../plugins";

import { UseTemplatePluginOptions } from "../plugins/useTemplate";

export interface GenerateTemplateOptions extends UseTemplatePluginOptions {
  from: string[];
  toDir: string;
}

export const generateTemplate = ({
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
      .pipe(dest(toDir));
  };
