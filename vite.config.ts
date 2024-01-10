import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { htmlPrerender } from 'vite-plugin-html-prerender';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    htmlPrerender({
      staticDir: import.meta.url.slice(7, -14) + 'dist',
      routes: ['/'],
    })
  ],
})
