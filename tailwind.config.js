/* eslint-disable quotes */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    screens: {
      sm: '640px',
      md: '1000px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    fontSize: {
      8: 8,
      10: 10,
      12: 12,
      14: 14,
      16: 16,
      18: 18,
      20: 20,
      24: 24,
      28: 28,
      32: 32,
      36: 36,
      48: 48,
      52: 52,
      56: 56,
      64: 64,
    },
    fontFamily: {
      nunito: ['Nunito', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
      caveat: ['Caveat', 'cursive'],
    },
    extend: {
      colors: {
        tan: '#DDB67B',
        red: '#C67155',
        lightgrey: '#F6F6F8',
        green: {
          DEFAULT: '#438B7C',
          500: '#1E3E3A',
        },
        yellow: '#F1C87B',
      },
      transitionProperty: {
        height: 'height',
        width: 'width',
        spacing: 'margin, padding',
      },
      backgroundImage: {
        paper: "url('/src/shared/components/assets/img/bg.jpeg')",
      },
      boxShadow: {},
      keyframes: {},
      animation: {},
      zIndex: {},
      spacing: {},
    },
  },
  safelist: [],
  plugins: [
    require('flowbite/plugin'),
    require('tailwindcss-animated'),
    require('daisyui'),
    require('@tailwindcss/typography'),
  ],
};
