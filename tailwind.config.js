/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#050308',
          900: '#090611',
          850: '#0d091a',
          800: '#120c24',
          750: '#17102e',
          700: '#1e153b',
        },
        violet: {
          glow: '#9333ea',
          neon: '#a855f7',
          light: '#c084fc',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Outfit', 'system-ui', 'sans-serif'],
        heading: ['Outfit', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'glow-sm': '0 0 15px -3px rgba(168, 85, 247, 0.3)',
        'glow-md': '0 0 25px -4px rgba(168, 85, 247, 0.4)',
        'glow-lg': '0 0 45px -5px rgba(168, 85, 247, 0.35)',
        'glow-neon': '0 0 30px rgba(192, 132, 252, 0.5), 0 0 60px rgba(147, 51, 234, 0.25)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}
