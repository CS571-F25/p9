/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,html}'],
  theme: {
    extend: {
      borderColor: {
        DEFAULT: '#000000',
      },
    },
  },
  plugins: [],
};
