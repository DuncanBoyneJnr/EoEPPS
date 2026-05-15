// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://eoepps.co.uk',
  integrations: [
    sitemap({
      filter: (page) => !page.endsWith('/HP2/'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
