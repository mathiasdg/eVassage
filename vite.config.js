import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { defineConfig } from "vite";
import { vitePluginMdToHTML } from "vite-plugin-md-to-html";
import injectHTML from "vite-plugin-html-inject";

export default defineConfig(() => {
  return {
    base: "./",
    plugins: [
      ViteImageOptimizer({
        dir: "./img/processed",
        webp: {
          quality: 80,
          progressive: true,
        },
      }),
      injectHTML(),
      vitePluginMdToHTML(),
    ],
  };
});
