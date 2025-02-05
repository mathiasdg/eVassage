// import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { defineConfig } from "vite";
import injectHTML from "vite-plugin-html-inject";

export default defineConfig(() => {
  return {
    base: "./", // Adjust this to match your deployment path
    plugins: [
      // ViteImageOptimizer({
      //   options: {
      //     webp: {
      //       quality: 80,
      //       progressive: true,
      //     },
      //   },
      // }),
      injectHTML(),
    ],
  };
});
