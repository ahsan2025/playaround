/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    letterSpacing: {
      tightest: '2px',
      tightestnew : '0.04em',
      loose : '1px'
    },
    placeholderColor: {
      'lightColor' : "#596184",
    },
    extend: {
      fontFamily: {
        'Archivo': ['Archivo'],
        'IBM-Plex-Mono': ['IBM Plex Mono'],
      },
      colors: {
        'primary': '#141620',
        'primary2' : '#292E42',
        'light' : '#596184',
        'light2' : '#6E7191',
        'light3' : '#FCFCFC',
        'secondary' : '#D5FF64',
        'linearBg' : 'rgba(89, 97, 132, 0.2)',
        'linearBg2' : 'rgba(41, 46, 66, 0.4)',
        'linearBg3' : 'rgba(213, 255, 100, 0.2)',
        'lightPink' : '#B7006E',
      },
    },
  },
  plugins: [],

}
