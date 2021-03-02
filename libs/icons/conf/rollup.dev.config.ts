import babel from "@rollup/plugin-babel";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";

export default [
  {
    input: "src/index.ts",
    output: {
      file: "lib/index.js",
      format: "umd",
      exports: "named",
      sourcemap: true,
      name: "@pui/icons",
      globals: {
        react: "React",
        "react-dom": "ReactDOM",
        classnames: "classnames"
      }
    },
    external: ["react", "react-dom", "classnames", "insert-css"],
    plugins: [
      nodeResolve({
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        modulesOnly: true
      }),
      babel({
        babelHelpers: "runtime",
        skipPreflightCheck: true,
        exclude: "node_modules/**",
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      }),
      commonjs({
        include: "node_modules/**"
      })
    ]
  }
];
