import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Live Vercel domain; used for canonical, og:url, og:image, and JSON-LD URLs
  site: 'https://connor-sharpe-portfolio.vercel.app',
  integrations: [
    tailwind({ applyBaseStyles: false }),
  ],
});
