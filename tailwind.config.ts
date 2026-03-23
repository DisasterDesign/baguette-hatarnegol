import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#2B331F',
          card: '#1E2516',
          elevated: '#353D27',
        },
        accent: {
          DEFAULT: '#D4A574',
          hover: '#E8C49A',
          dark: '#B8925E',
          glow: 'rgba(212, 165, 116, 0.3)',
        },
        text: {
          DEFAULT: '#FFFFFF',
          muted: '#C8C8C0',
          subtle: '#8A8A7A',
        },
        border: {
          DEFAULT: '#4A5A3A',
          hover: '#4E5A36',
          glow: 'rgba(212, 165, 116, 0.5)',
        },
      },
      fontFamily: {
        frank: ['var(--font-frank)', 'serif'],
        playfair: ['var(--font-playfair)', 'serif'],
        heebo: ['var(--font-heebo)', 'sans-serif'],
      },
      keyframes: {
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-up': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
        'slide-up': 'slide-up 0.6s ease-out',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};

export default config;
