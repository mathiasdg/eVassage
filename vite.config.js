import { defineConfig } from 'vite';
// import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { imagetools } from 'vite-imagetools';
import injectHTML from 'vite-plugin-html-inject';

export default defineConfig(() => {
	return {
		plugins: [
			imagetools(),
			injectHTML(),
			]
		}
	});
