/** @type {import('tailwindcss').Config} */
export default {
  content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  darkMode: 'media',
  theme: {
    extend: {
      screens: {
        mdh: {
          raw: '(max-height: 850px)',
        },
        smh: {
          raw: '(max-height: 730px)',
        },
      },
    },
  },
  plugins: [],
}
