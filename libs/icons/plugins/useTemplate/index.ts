import template from "lodash.template";

import { createTrasformStream } from "../creator";

export interface UseTemplatePluginOptions {
  template: string;
  mapToInterpolate: MapToInterpolate;
}

export interface MapToInterpolate {
  (meta: { name: string; content: string; path: string }): Record<string, string>;
}

export const useTemplate = ({
  template: tplContent,
  mapToInterpolate
}: UseTemplatePluginOptions) => {
  const executor = template(tplContent);
  return createTrasformStream((content, { stem: name, path }) =>
    executor(
      mapToInterpolate({
        name,
        content,
        path
      })
    )
  );
};
