/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'login-background': "url('/public/login-background.svg')",
       }},
  },
  plugins: [],
  corePlugins: {
    preflight: false
  }
};
