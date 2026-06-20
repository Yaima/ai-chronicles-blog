// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Update `site` to your final production URL (custom domain or Vercel URL).
export default defineConfig({
  site: 'https://www.yaimavaldivia.com',
  integrations: [sitemap()],
});
