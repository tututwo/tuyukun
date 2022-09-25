/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        'projectCol': 'repeat(3, minmax(auto, 1fr))',

        // Complex site-specific column configuration
        'footer': '200px minmax(900px, 1fr) 100px',
      },
      gridTemplateRows: {
        // Simple 8 row grid
        'projectRow': 'repeat(8, minmax(auto, 1fr))',

        // Complex site-specific row configuration
        'layout': '200px minmax(900px, 1fr) 100px',
      }
    },
    fontFamily: {
      'icon': ['HanYiShouJinShuFan'],
      "Postino":["postino-std"],
      "Franklin":["Libre Franklin"]
    }
  },
  plugins: []
};