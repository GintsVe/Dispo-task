/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dispo-background": "#eff3f6",
        "dispo-gray": "#5c5c6c",
        "dispo-light-gray": "#edecf0",
        "dispo-dark-blue": "#231e60"
      },
      fontSize: {
        xs: '12px',
        xxs: '10px'
      },
      fontFamily: {
        'body': ['"Open Sans"'],
      },
      minHeight: {
        "body": "min-height: 100vh"
      }
    },
  },
  plugins: [],
}

