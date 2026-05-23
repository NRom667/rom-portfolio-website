import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://hirameki-tech.com',
  devToolbar: {
    enabled: false,
  },
  integrations: [sitemap()],
});
