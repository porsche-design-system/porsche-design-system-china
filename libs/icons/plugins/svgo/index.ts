import SVGO from "svgo";
import { mergeRight } from "ramda";
import { base } from "./base";
import { createTrasformStreamAsync } from "../creator";

const config: SVGO.Options = mergeRight(base, {
  plugins: [
    ...(base.plugins || []),
    {
      removeAttrs: {
        attrs: ["class"]
      }
    }
  ]
});

export const svgo = () => {
  const optimizer = new SVGO(config);
  return createTrasformStreamAsync(async (before) => {
    const { data } = await optimizer.optimize(before);
    return data;
  });
};
