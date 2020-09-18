module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    'src/index.html'
  ],
  theme: {
    extend: {
      colors: {
        yellow: 'yellow'
      },
      fontFamily: {
        custom: 'Nunito Sans'
      },
    },
  },
  variants: {},
  plugins: [],
}
