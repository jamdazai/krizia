import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  base: '/krizia/',
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'dist/index.html',
          dest: '404.html',
        },
      ],
    }),
  ],
});
