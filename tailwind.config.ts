import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0A0A09',
        surface: {
          DEFAULT: '#121210',
          elevated: '#1A1A17',
          subtle: '#161614',
          border: '#2A2925',
        },
        gold: {
          DEFAULT: '#C8A66B',
          light: '#DFC79B',
          muted: '#8E7851',
          hover: '#D4B57E',
        },
        ivory: {
          DEFAULT: '#F1EEE7',
          muted: '#C4BFB5',
        },
        muted: '#A39D91',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Montserrat', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.2em',
        ultra: '.3em',
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;

