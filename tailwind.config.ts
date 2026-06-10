import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'halo-black': '#161616',
        'halo-dark': '#1F1F1E',
        'halo-ivory': '#F7F4ED',
        'halo-navy': '#1B2A4A',
        'halo-gold': '#C9A961',
        'halo-gold-light': '#DCC68C',
        'halo-gold-dim': '#9C8147',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      animation: {
        'halo-pulse': 'haloPulse 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'waveform': 'waveform 1.5s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        haloPulse: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        waveform: {
          '0%, 100%': { scaleY: '1' },
          '50%': { scaleY: '1.8' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(201,169,97,0.25)' },
          '100%': { boxShadow: '0 0 50px rgba(201,169,97,0.55)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C9A961, #9C8147, #C9A961)',
        'dark-gradient': 'linear-gradient(180deg, #161616 0%, #1F1F1E 50%, #161616 100%)',
        'radial-gold': 'radial-gradient(ellipse at center, rgba(201,169,97,0.12) 0%, transparent 70%)',
      },
    },
  },
  plugins: [],
};

export default config;
