/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#060606',
        text: '#F7F6F9',
        accent: '#CF2576',
        accent2: '#8E23E2',
        muted: 'rgba(247,246,249,0.72)',
        card: 'rgba(247,246,249,0.06)'
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(247,246,249,0.10), 0 24px 80px rgba(0,0,0,0.55)',
        soft: '0 16px 50px rgba(0,0,0,0.35)'
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translate3d(0,0,0)' },
          '50%': { transform: 'translate3d(0,-10px,0)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' }
        }
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        shimmer: 'shimmer 4s ease infinite'
      }
    }
  },
  plugins: []
}
