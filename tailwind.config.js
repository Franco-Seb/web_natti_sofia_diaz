/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        olive: '#2F4F2F',
        natural: '#6B8E23',
        beige: '#F5F1E8',
        warmwhite: '#FFFFFF',
        walnut: '#8B5E3C'
      },
      boxShadow: {
        soft: '0 12px 30px -14px rgba(47, 79, 47, 0.35)'
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', '"Noto Sans"', 'sans-serif'],
        body: ['"Work Sans"', '"Noto Sans"', 'sans-serif']
      },
      animation: {
        fadeup: 'fadeup 500ms ease-out both'
      },
      keyframes: {
        fadeup: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      }
    }
  },
  plugins: []
};

