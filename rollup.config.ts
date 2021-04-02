import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.js",
      format: "esm",
    },
  ],
  plugins: [
    peerDepsExternal({ includeDependencies: true }),
    typescript(),
    terser(),
  ],
};
