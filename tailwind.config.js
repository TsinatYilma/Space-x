/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    
    "./space-tourism-website-main/starter-code/*.html"],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['Barlow'],
        bellefair: ['Bellefair'],
      },
      borderWidth: {
        '10': '10px',
        '12': '12px',
        '14': '80px',
      },
      screens: {
        'ts': '480px',
        'sm': '640px',
        'sd': '700px',
        'md': '938px',
        'ms': '938px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        // Custom breakpoint
        '3xl': '1600px',
        // Custom media query
        'custom': { 'raw': '(max-height: 500px)' },
      
    },
    colors: {
      Color1: '#8D8F93',
      color2: '#474951',
    },
  },
  plugins: []
}
}
