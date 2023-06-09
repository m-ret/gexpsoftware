/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      dark: '#1D2144',
      // black: "#090E34", // Default black from the template
      black: '#242423',
      white: '#FFFFFF',
      linen: '#EAE3D2',
      wheat: '#F9F7F3',
      primary: '#4A6CF7',
      yellow: '#FBB040',
      green: '#28a745',
      'body-color': '#959CB1'
    },
    screens: {
      xs: '450px',
      // => @media (min-width: 450px) { ... }

      sm: '575px',
      // => @media (min-width: 576px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '992px',
      // => @media (min-width: 992px) { ... }

      xl: '1200px',
      // => @media (min-width: 1200px) { ... }

      '2xl': '1400px'
      // => @media (min-width: 1400px) { ... }
    },
    extend: {
      boxShadow: {
        signUp: '0px 5px 10px rgba(4, 10, 34, 0.2)',
        one: '0px 2px 3px rgba(7, 7, 77, 0.05)',
        sticky: 'inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)'
      }
    }
  },
  plugins: []
};
