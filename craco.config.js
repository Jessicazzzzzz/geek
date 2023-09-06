const path = require('path')




module.exports = {
  // ...
  webpack: {
    alias: {
      '@scss': path.resolve(__dirname, 'src/assets/styles'),
      '@': path.resolve(__dirname, 'src/'),
    },
  
   
  
  },
  
    style: {
      postcss:{
        mode:'file',
        // plugins:[require('postcss-px-to-viewport-8-plugin')({
        //   viewportWidth: 375,
        //   exclude: [/node_modules/],
        //   unitToConvert: 'px',
    
        // unitPrecision: 5,
        // propList: ['*'],
        // viewportUnit: 'vw',
        // fontViewportUnit: 'vw',
        // selectorBlackList: [],
        // minPixelValue: 1,
        // mediaQuery: false,
        // replace: true,
    
        // landscape: false,
        // landscapeUnit: 'vw',
        // landscapeWidth: 568
        // })]
       }
    
    }

 


}
