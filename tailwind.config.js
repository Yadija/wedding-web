/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sacramento: ['Sacramento', 'cursive'],
        nunito: ['Nunito', 'sans-serif'],
      },
      textColor: {
        'light-pink': '#FFD0EC',
        'ebony-clay': '#1F2544',
      },
      backgroundColor: {
        'light-pink': '#FFD0EC',
        'ebony-clay': '#1F2544',
      },
    },
  },
  plugins: [],
};
