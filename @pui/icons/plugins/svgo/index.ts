import { optimize, Config } from "svgo";
import { createTrasformStreamAsync } from "../creator";

const config: Config = {
  floatPrecision: 2,
  plugins: [
    // set of built-in plugins enabled by default
    {
      name: "preset-default",
      params: {
        overrides: {
          removeViewBox: false
        }
      }
    },
    {
      name: "removeAttrs",
      params: {
        attrs: "class"
      }
    }
  ]
};

export const svgo = () => {
  return createTrasformStreamAsync(async (before) => {
    const { data } = optimize(before, config as any);
    return data;
  });
};
