/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: {
          dark: '#050505',
          darker: '#030303',
          navy: '#080b1a',
        },
        primary: {
          50: '#e6f8ff',
          100: '#b3ecff',
          200: '#80e0ff',
          300: '#4dd4ff',
          400: '#1ac8ff',
          500: '#00bcff',
          600: '#009fff',
          700: '#0082cc',
          800: '#006699',
          900: '#004a66',
        },
        accent: {
          50: '#e6f7ff',
          100: '#b3eeff',
          200: '#80e5ff',
          300: '#4ddcff',
          400: '#1ad3ff',
          500: '#00caff',
          600: '#00a3ff',
          700: '#007ccc',
          800: '#005599',
          900: '#003e66',
          glow: '#00f7ff',
        },
        success: {
          500: '#10b981',
          600: '#059669',
        },
        warning: {
          500: '#f59e0b',
          600: '#d97706',
        },
        error: {
          500: '#ef4444',
          600: '#dc2626',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 15px 2px rgba(0, 247, 255, 0.3)',
        'glow-sm': '0 0 10px 1px rgba(0, 247, 255, 0.2)',
        'glow-lg': '0 0 25px 5px rgba(0, 247, 255, 0.35)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': 'linear-gradient(to bottom right, rgba(13, 13, 13, 0.8), rgba(8, 11, 26, 0.8))',
      },
    },
  },
  plugins: [],
};