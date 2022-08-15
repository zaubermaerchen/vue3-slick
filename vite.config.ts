import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/lib.ts'),
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
        },
      },
    },
  },
  plugins: [vue()]
})
