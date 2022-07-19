module.exports = {
  content: [
    './app/views/**/*.html.erb',
    './app/helpers/**/*.rb',
    './app/assets/stylesheets/**/*.css',
    './app/javascript/**/*.js'
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '786px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        grayGreen: '#7F867B',
        lightGreen: '#C7C7BB',
        superLightGreen: '#E3E4E0',
        brown: '#AF9F8C',
        lightPink: '#D4C8BE'
      },
    },
  },
}
