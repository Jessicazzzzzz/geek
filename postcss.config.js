

module.exports={
  plugins: [
    require('postcss-px-to-viewport-8-plugin')({
      unitToConvert: 'px',
      viewportWidth: 320,
      unitPrecision: 5,
      propList: ['*'],
      viewportUnit: 'vw',
      fontViewportUnit: 'vw',
      selectorBlackList: [],
      minPixelValue: 1,
      mediaQuery: false,
      replace: true,
      exclude: [],
      landscape: false,
      landscapeUnit: 'vw',
      landscapeWidth: 568
    }),
  ],
}