import { optimize, loadConfig } from "svgo";
import { createTrasformStreamAsync } from "../creator";


export const svgo = () => {
  return createTrasformStreamAsync(async (before) => {
    await loadConfig();
    const { data } = optimize(before);
    return data;
  });
};
