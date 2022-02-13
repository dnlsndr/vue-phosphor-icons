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
          title: "vue-phosphor-icons bundle visualizer",
        }),
      ]
      : []),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/vue-phosphor-icons.ts"),
      name: "PhosphorVue",
      // fileName: "vue-phosphor-icons",

      formats: ["es", "umd", "iife", "cjs"],
    },
    target: "esnext",
    // ssr: resolve(__dirname, "src/vue-phosphor-icons.ts"),
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
