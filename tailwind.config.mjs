/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0f1117',
        surface: '#1a1d27',
        border: '#2d3149',
        'text-primary': '#f0f2f8',
        'text-muted': '#8b92b8',
        accent: '#4f7cff',
        'accent-warm': '#ff6b6b',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Consolas', 'monospace'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#f0f2f8',
          },
        },
      },
    },
  },
  plugins: [],
};
