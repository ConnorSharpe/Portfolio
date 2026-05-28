import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Update to your live domain, then re-add @astrojs/sitemap integration
  site: 'https://connorsharpe.dev',
  integrations: [
    tailwind({ applyBaseStyles: false }),
  ],
});
