import { defineConfig } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";
import { visualizer } from "rollup-plugin-visualizer";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    createVuePlugin(),
    ...(process.env.ANALYZE === "true"
      ? [
          visualizer({
            open: true,
            title: "phosphor-vue bundle visualizer",
          }),
        ]
      : []),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/phosphor-vue.ts"),
      name: "PhosphorVue",
      // fileName: "phosphor-vue",

      formats: ["es", "umd", "iife", "cjs"],
    },
    target: "esnext",
    // ssr: resolve(__dirname, "src/phosphor-vue.ts"),
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["vue"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
