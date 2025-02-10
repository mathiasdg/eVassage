import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { defineConfig } from "vite";
import injectHTML from "vite-plugin-html-inject";
import {vitePluginMdToHTML} from "vite-plugin-md-to-html";

export default defineConfig(() => {
  return {
    base: "./", // Adjust this to match your deployment path
    plugins: [
      ViteImageOptimizer({
	    dir: './img/processed',
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
