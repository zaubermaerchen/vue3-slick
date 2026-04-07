import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    lib: {
      entry: path.join(__dirname, 'src/lib.ts'),
      name: 'vue3-slick',
      fileName: (format) => `slickCompornent.${format}.js`,
    },
    rollupOptions: {
      external: ['vue', 'jquery', 'slick-carousel'],
      output: {
        // Provide global variables to use in the UMD build
        // Add external deps here
        globals: {
          vue: 'Vue',
          jquery: '$',
          'slick-carousel': 'slick_carousel',
        },
      },
    },
  },
  plugins: [vue()]
})
