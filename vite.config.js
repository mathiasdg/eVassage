import { defineConfig } from "vite";
import fs from "node:fs";
import markdownIt from "markdown-it";
import injectHTML from "vite-plugin-html-inject";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

const md = new markdownIt({
  html: true,
});

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
      {
        name: "inject-markdown",
        transformIndexHtml(html) {
          // Read and convert Markdown files
          const quote1 = md.render(
            fs.readFileSync("content/quote1.md", "utf-8")
          );
          const quote2 = md.render(
            fs.readFileSync("content/quote2.md", "utf-8")
          );
          const info = md.render(fs.readFileSync("content/info.md", "utf-8"));

          // Replace placeholders in index.html
          return html
            .replace("{{QUOTE1}}", quote1)
            .replace("{{QUOTE2}}", quote2)
            .replace("{{INFO}}", info);
        },
      },
      // vitePluginMdToHTML(),
    ],
  };
});
