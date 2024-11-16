/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: [require('daisyui'), 'prettier-plugin-tailwindcss'],
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['[data-theme=light]'],
          primary: 'hsl(203 83% 60% / 1)',
          'primary-content': 'hsl(207 32% 14% / 1)'
        }
      },
      'dark'
    ]
  }
}
