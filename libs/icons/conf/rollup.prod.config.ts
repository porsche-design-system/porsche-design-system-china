import babel from "@rollup/plugin-babel";

export default [
  {
    input: "src/index.ts",
    output: {
      file: "es/index.js",
      format: "esm"
    },
    plugins: [
      babel({
        babelHelpers: "bundled",
        exclude: "node_modules/**", // 只编译我们的源代码
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      })
    ]
  },
  {
    input: "src/index.ts",
    output: {
      file: "lib/index.js",
      format: "cjs"
    },
    plugins: [
      babel({
        babelHelpers: "bundled",
        exclude: "node_modules/**", // 只编译我们的源代码
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      })
    ]
  },
  {
    input: "src/index.ts",
    output: {
      file: "dist/index.umd.js",
      format: "umd",
      name: "@pui/icons"
    },
    plugins: [
      babel({
        babelHelpers: "bundled",
        exclude: "node_modules/**", // 只编译我们的源代码
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      })
    ]
  }
];
