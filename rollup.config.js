//import dts from "rollup-plugin-dts"
import json from '@rollup/plugin-json';

export default [
  {
    input: "./dist/index.js",
    plugins: [
      json(),
    ],
    output: [
      { file: "dist/index.umd.js", format: "umd", name: "svelte-contracts" },
    ]
  },
  // {
  //   input: "./src/index.d.ts",
  //   output: [{ file: "dist/index.d.ts", format: "es" }],
  //   plugins: [dts()],
  // },
]
