// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://DiegoNatanael.github.io',
  base: '/QR-Code-Component',
  output: 'static', // Forzado a estático para GitHub Pages
  vite: {
    plugins: [tailwindcss()]
  }
});